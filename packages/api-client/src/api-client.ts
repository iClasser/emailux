export type DeliveryProvider = 'gmail' | 'smtp' | 'sendgrid';

/**
 * With `provider: 'sendgrid'`, `sendgrid_domain` is required. With Gmail/SMTP or no provider, `sendgrid_domain` is optional.
 */
export type EmailUxApiClientOptions = {
  baseUrl?: string;
  apiKey: string;
  defaultLocale?: string;
  fetchImplementation?: typeof fetch;
  timeoutMs?: number;
} & (
  | { provider: 'sendgrid'; sendgridDomain: string }
  | { provider?: Exclude<DeliveryProvider, 'sendgrid'>; sendgridDomain?: string }
);

export interface RenderParams {
  experienceId: string;
  version?: number;
  locale?: string;
  data?: Record<string, unknown>;
}

export interface RenderResult {
  ok: boolean;
  status: number;
  html?: string;
  subject?: string;
  error?: {
    message: string;
    body?: unknown;
  };
}

export interface DeliverParams {
  experienceId: string;
  version?: number;
  /**
   * Preferred locale for delivery (e.g. "en-US").
   */
  locale?: string;
  /**
   * Optional provider override for this call (e.g. "gmail").
   */
  provider?: DeliveryProvider;
  /**
   * Optional sendgrid_domain override for this call. Useful when a client is
   * constructed in provider mode but still needs sendgrid_domain-based delivery.
   */
  sendgridDomain?: string;
  channelData: {
    toEmail: string;
    fromEmail: string;
    toEmailName?: string;
    fromEmailName?: string;
  };
  data?: Record<string, unknown>;
}

export interface DeliverResult {
  ok: boolean;
  status: number;
  message?: string;
  error?: {
    message: string;
    body?: unknown;
  };
}

export class EmailUxApiClient {
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly sendgridDomain: string | undefined;
  private readonly provider: DeliveryProvider | undefined;
  private readonly defaultLocale: string;
  private readonly fetchImpl: typeof fetch;
  private readonly timeoutMs: number | undefined;

  constructor(options: EmailUxApiClientOptions) {
    if (!options.apiKey) throw new Error("EmailUxApiClient: 'apiKey' is required");

    this.baseUrl = (options.baseUrl ?? 'https://render.emailux.com').replace(/\/$/, '');
    this.apiKey = options.apiKey;
    this.sendgridDomain = options.sendgridDomain;
    /** User is not required send "sendgrid" as provider */
    if((!options.provider || options.provider === 'sendgrid') && !this.sendgridDomain) {
      throw new Error("EmailUxApiClient: 'sendgrid_domain' is required when provider is 'sendgrid'");
    }
    if(options.provider !== 'sendgrid') {
      // Set provider if its not "sendgrid", for sendgrid no need to send
      this.provider = options.provider;
    }
    this.defaultLocale = options.defaultLocale ?? 'en-US';
    this.fetchImpl = options.fetchImplementation ?? fetch;
    this.timeoutMs = options.timeoutMs;
  }

  private static normalizeProvider(provider: DeliveryProvider): string {
    return String(provider).trim().toLowerCase();
  }

  private static toProviderHeader(providerRaw: DeliveryProvider | undefined): string | undefined {
    if (!providerRaw) return undefined;
    const normalized = EmailUxApiClient.normalizeProvider(providerRaw);
    // Currently supported provider(s). Keep this conservative until expanded.
    if (normalized === 'gmail') return 'gmail';
    if (normalized === 'smtp') return 'smtp';
    // sendgrid provider not needed since its called by sendgrid_domain header
    return undefined;
  }

  private buildHeaders(extraHeaders?: Record<string, string | undefined>): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'x-api-key': this.apiKey,
    };
    if (!extraHeaders) return headers;
    for (const [key, value] of Object.entries(extraHeaders)) {
      if (value !== undefined) headers[key] = value;
    }
    return headers;
  }

  private async parseResponseBody(response: Response): Promise<unknown> {
    const text = await response.text();
    if (!text) return null;
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  }

  private resolveDeliverLocale(params: DeliverParams): string {
    return params.locale ?? this.defaultLocale;
  }

  private resolveDeliverHeaders(params: DeliverParams): Record<string, string | undefined> {
    const providerRaw = params.provider ?? this.provider;
    const providerHeader = EmailUxApiClient.toProviderHeader(providerRaw);
    const sendgrid_domainHeader = params.sendgridDomain ?? this.sendgridDomain;

    if (!providerHeader && !sendgrid_domainHeader) {
      throw new Error(
        "EmailUxApiClient: either 'sendgrid_domain' for 'sendgrid' provider, or provider 'gmail'/'smtp' is required to call deliver()"
      );
    }

    return {
      'x-sendgrid-domain': sendgrid_domainHeader,
      'x-provider': providerHeader,
    };
  }

  private async request<T = unknown>(
    path: string,
    body: unknown,
    extraHeaders?: Record<string, string | undefined>
  ): Promise<{
    ok: boolean;
    status: number;
    data: T | null;
    error?: { message: string; body?: unknown };
  }> {
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (this.timeoutMs && controller) {
      timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);
    }

    try {
      const response = await this.fetchImpl(`${this.baseUrl}${path}`, {
        method: 'POST',
        headers: this.buildHeaders(extraHeaders),
        body: JSON.stringify(body ?? {}),
        signal: controller?.signal,
      });

      const parsed = await this.parseResponseBody(response);

      if (!response.ok) {
        return {
          ok: false,
          status: response.status,
          data: null,
          error: { message: `${response.status} ${response.statusText}`, body: parsed },
        };
      }

      return { ok: true, status: response.status, data: parsed as T };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      return { ok: false, status: 0, data: null, error: { message } };
    } finally {
      if (timeoutId) clearTimeout(timeoutId);
    }
  }

  async render(params: RenderParams): Promise<RenderResult> {
    if (!this.sendgridDomain) {
      throw new Error("EmailUxApiClient: 'sendgridDomain' is required to call render()");
    }


    const body = {
      experience_id: params.experienceId,
      version: params.version,
      locale: params.locale ?? this.defaultLocale,
      data: params.data ?? {},
    };

    const res = await this.request<{ ok: boolean; html?: string; subject?: string }>(
      '/v1/render',
      body,
      { 'x-sendgrid-domain': this.sendgridDomain }
    );

    if (!res.ok) {
      return { ok: false, status: res.status, error: res.error };
    }

    const payload = res.data ?? {};
    return {
      ok: true,
      status: res.status,
      html: (payload as any).html,
      subject: (payload as any).subject,
    };
  }

  async deliver(params: DeliverParams): Promise<DeliverResult> {
    const locale = this.resolveDeliverLocale(params);

    const body = {
      experience_id: params.experienceId,
      version: params.version,
      locale,
      channel_data: {
        toEmail: params.channelData.toEmail,
        toEmailName: params.channelData.toEmailName,
        fromEmail: params.channelData.fromEmail,
        fromEmailName: params.channelData.fromEmailName,
      },
      data: params.data ?? {},
    };

    const res = await this.request<{ ok: boolean; message?: string }>(
      '/v1/deliver',
      body,
      this.resolveDeliverHeaders(params)
    );

    if (!res.ok) {
      return { ok: false, status: res.status, error: res.error };
    }

    return { ok: true, status: res.status, message: (res.data as any)?.message };
  }
}
