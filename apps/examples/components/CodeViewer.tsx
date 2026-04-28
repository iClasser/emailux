'use client';

import React from 'react';
import { Highlight, themes, type Language, type RenderProps } from 'prism-react-renderer';

type Supported = 'tsx' | 'html' | 'text';

export type CodeBlockProps = Readonly<{
  code: string;
  language?: Supported;     // 'tsx' | 'html' | 'text'
  title?: string;           // optional header label (e.g., filename)
  maxHeightClassName?: string; // override height (default h-64)
  className?: string;       // extra container classes
  wrapLines?: boolean;      // soft-wrap long lines (default false)
}>;

function mapLanguage(lang: Supported | undefined): Language | undefined {
  if (!lang) return 'tsx';
  if (lang === 'html') return 'markup';
  if (lang === 'tsx') return 'tsx';
  // For plain text, let Prism render without highlighting
  return undefined;
}

export default function CodeViewer({
  code,
  language = 'tsx',
  title,
  maxHeightClassName = 'h-[calc(100vh-240px)]', // ~16rem; adjust as you like
  className = '',
  wrapLines = false,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);
  const safeLang = mapLanguage(language);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (error) {
      // Log and fallback for older browsers
      console.warn('Clipboard write failed, trying fallback.', error);
      // Fallback for older browsers
      try {
        const textarea = document.createElement('textarea');
        textarea.value = code;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      } catch {
        console.error('Copy failed');
      }
    }
  };

  return (
    <div className={`w-full rounded-2xl overflow-hidden shadow-lg border border-neutral-800 bg-neutral-900 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-neutral-800/70 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          {/* traffic-lights dots */}
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          {title ? (
            <span className="ml-3 text-xs text-neutral-300 font-medium">{title}</span>
          ) : null}
        </div>

        <button
          onClick={onCopy}
          className="text-xs px-2 py-1 text-background bg-foreground rounded-md border border-neutral-700  hover:bg-neutral-700 active:scale-[0.98] transition"
          aria-label="Copy code"
          title="Copy code"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      {/* Code area */}
      <div className={`relative ${maxHeightClassName} overflow-auto`}>
        {safeLang ? (
          <Highlight
            theme={themes.nightOwl}
            code={code}
            language={safeLang}
          >
            {({ className: cls, style, tokens, getLineProps, getTokenProps }: RenderProps) => (
              <pre
                className={`${cls} m-0 p-4 text-sm leading-relaxed font-mono ${
                  wrapLines ? 'whitespace-pre-wrap break-words' : 'whitespace-pre'
                }`}
                style={style}
              >
                {tokens.map((line, lineIndex) => (
                  <div
                    key={`ln-${lineIndex}`}
                    {...getLineProps({ line })}
                    className="table w-full table-fixed"
                  >
                    {/* Line number gutter */}
                    <span
                      className="table-cell select-none pr-4 text-right text-neutral-500"
                      style={{ width: '3.5ch' }}
                    >
                      {lineIndex + 1}
                    </span>

                    {/* Code line */}
                    <span className="table-cell">
                      {line.map((token, tokenIndex) => (
                        <span key={`t-${lineIndex}-${tokenIndex}`} {...getTokenProps({ token })} />
                      ))}
                    </span>
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        ) : (
          // Plain text fallback if language='text' (no highlighting)
          <pre className={`m-0 p-4 text-sm leading-relaxed font-mono ${wrapLines ? 'whitespace-pre-wrap break-words' : 'whitespace-pre'} text-neutral-200`}>
            {code
              .split('\n')
              .map((ln, i) => `${String(i + 1).padStart(2, ' ')}  ${ln}`)
              .join('\n')}
          </pre>
        )}
      </div>
    </div>
  );
}
