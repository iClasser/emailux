# @emailux/api-client

TypeScript client for the EmailUX HTTP API: **render** (HTML by template) and **deliver** (render + send via a provider).

## Installation

```bash
npm install @emailux/api-client
# or
pnpm add @emailux/api-client
```

## Default base URL

All requests use:

`https://render.emailux.com`

Override with `baseUrl` in the client options if you use a custom deployment.

**OpenAPI (Swagger):** The live spec for your deployment is always at **`{baseUrl}/swagger.json`** (for example `https://render.emailux.com/swagger.json` with the default base URL). Use that file for the latest paths, headers, request bodies, and response codes.

## Client options

| Option | Description |
|--------|-------------|
| `apiKey` | Required. Sent as `x-api-key`. |
| `baseUrl` | Optional. Defaults to `https://render.emailux.com` (trailing slash is stripped). |
| `defaultLocale` | Optional. Default `en-US`; used when `locale` is omitted on `deliver` / `render`. |
| `fetchImplementation` | Optional. Custom `fetch` (e.g. for tests or edge runtimes). |
| `timeoutMs` | Optional. Request timeout via `AbortSignal`. |
| `provider` | `'sendgrid'` \| `'gmail'` \| `'smtp'`. Affects **deliver** defaults (see below). |
| `sendgridDomain` | Required when using SendGrid (default provider). Your SendGrid-authenticated domain identifier. |

**Render** in this package is only supported with a **SendGrid domain** configured (`sendgridDomain` is required for `render()`). Delivery can use **SendGrid**, **Gmail**, or **SMTP** via `provider` and optional per-call overrides.

**HTTP mapping:** The client sends your domain as the `x-sendgrid-domain` header on render/deliver. The public API may also document this as `x-sendgrid-domain`; behavior depends on your EmailUX API version.

---

## `render()` — HTML only

Resolves `POST /v1/render` with JSON body:

- `experience_id` (required)
- `version` (optional)
- `locale` (optional; falls back to `defaultLocale`)
- `data` (object; defaults to `{}`)

**Swagger-aligned responses**

| Status | Meaning |
|--------|---------|
| `200` | Success. JSON includes `ok`, `html`, `subject`. |
| `400` | Validation error |
| `401` | Unauthorized |
| `404` | Not found |

On success, the client returns `{ ok: true, status, html?, subject? }`. On failure, `{ ok: false, status, error }` with `error.message` and optional `error.body`.

### Example (SendGrid domain — required for render)

```ts
import { EmailUxApiClient } from '@emailux/api-client';

const client = new EmailUxApiClient({
  apiKey: process.env.EMAILUX_API_KEY!,
  sendgridDomain: 'mail.yourdomain.com', // your EmailUX / SendGrid domain
});

const result = await client.render({
  experienceId: 'welcome-email',
  version: 1,
  locale: 'en-US',
  data: { firstName: 'Ada' },
});

if (result.ok) {
  console.log(result.subject, result.html?.slice(0, 200));
} else {
  console.error(result.status, result.error);
}
```

---

## `deliver()` — render and queue send

Resolves `POST /v1/deliver` with JSON body:

- `experience_id` (required)
- `tenant` — not set by this client; use API keys + headers if your backend requires it when `x-sendgrid-domain` is omitted (see API docs).
- `version`, `locale` (optional)
- `channel_data` (required): `toEmail`, `fromEmail`, optional `toEmailName`, `fromEmailName`
- `data` (object; defaults to `{}`)

Optional headers the client may send:

- `x-provider`: `gmail` or `smtp` when using those providers (SendGrid is the default path via domain, so `x-provider` is omitted for SendGrid).

**Swagger-aligned responses**

| Status | Meaning |
|--------|---------|
| `200` | Success. JSON includes `ok`, `message`. |
| `400` | Validation error |
| `401` | Unauthorized |
| `404` | Not found |
| `502` | Provider error |

### 1. SendGrid example

Default provider is SendGrid; `sendgridDomain` is required on the client.

```ts
import { EmailUxApiClient } from '@emailux/api-client';

const client = new EmailUxApiClient({
  apiKey: process.env.EMAILUX_API_KEY!,
  provider: 'sendgrid',
  sendgridDomain: 'mail.yourdomain.com',
});

const result = await client.deliver({
  experienceId: 'order-confirmation',
  channelData: {
    toEmail: 'customer@example.com',
    toEmailName: 'Customer',
    fromEmail: 'orders@yourdomain.com',
    fromEmailName: 'Your Store',
  },
  data: { orderId: '12345' },
});

if (result.ok) {
  console.log(result.message);
} else {
  console.error(result.status, result.error);
}
```

You can omit `provider: 'sendgrid'`; the client still requires `sendgridDomain` for that configuration.

### 2. Gmail example

```ts
import { EmailUxApiClient } from '@emailux/api-client';

const client = new EmailUxApiClient({
  apiKey: process.env.EMAILUX_API_KEY!,
  provider: 'gmail',
});

const result = await client.deliver({
  experienceId: 'order-confirmation',
  channelData: {
    toEmail: 'customer@example.com',
    fromEmail: 'noreply@yourdomain.com',
  },
  data: { orderId: '12345' },
});
```

Per-call override:

```ts
await client.deliver({
  ...params,
  provider: 'gmail',
});
```

### 3. SMTP example

```ts
import { EmailUxApiClient } from '@emailux/api-client';

const client = new EmailUxApiClient({
  apiKey: process.env.EMAILUX_API_KEY!,
  provider: 'smtp',
});

const result = await client.deliver({
  experienceId: 'order-confirmation',
  channelData: {
    toEmail: 'customer@example.com',
    fromEmail: 'noreply@yourdomain.com',
  },
  data: { orderId: '12345' },
});
```

---

## Errors and non-HTTP failures

- HTTP `4xx` / `5xx` responses set `ok: false` and include `status` and `error` (with parsed body when JSON).
- Network timeouts, aborts, or other thrown errors surface as `ok: false`, `status: 0`, and `error.message` from the thrown error.

## Requirements

Node.js **>= 18** (native `fetch`).

## License

MIT
