"use client"

import * as React from "react"
import type { EmailExample } from "@/lib/email-examples"
import type { ViewportSize } from "@/components/preview-controls"
import { cn } from "@/lib/utils"

interface EmailPreviewProps {
  example: EmailExample | null
  viewportSize: ViewportSize
}

export function EmailPreview({ example, viewportSize }: EmailPreviewProps) {
  const iframeRef = React.useRef<HTMLIFrameElement>(null)

  React.useEffect(() => {
    if (iframeRef.current && example) {
      const iframe = iframeRef.current
      const doc = iframe.contentDocument || iframe.contentWindow?.document
      if (doc) {
        doc.open()
        doc.write(example.htmlContent)
        doc.close()
      }
    }
  }, [example])

  const getWidth = () => {
    switch (viewportSize) {
      case "mobile":
        return "400px"
      case "tablet":
        return "768px"
      case "desktop":
        return "100%"
    }
  }

  if (!example) {
    return (
      <div className="flex-1 flex items-center justify-center bg-muted/30">
        <div className="text-center">
          <p className="text-lg font-medium text-muted-foreground mb-2">No email selected</p>
          <p className="text-sm text-muted-foreground">Select an email example from the sidebar to preview</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex items-start justify-center bg-muted/30 p-8 overflow-auto">
      <div
        className={cn(
          "transition-all duration-300 ease-in-out bg-background shadow-lg",
          viewportSize === "desktop" ? "w-full max-w-5xl" : "",
        )}
        style={{
          width: viewportSize !== "desktop" ? getWidth() : undefined,
        }}
      >
        <iframe
          ref={iframeRef}
          title={`${example.brand} - ${example.name}`}
          className="w-full border-0"
          style={{
            height: "calc(100vh - 12rem)",
            minHeight: "600px",
          }}
          sandbox="allow-same-origin"
        />
      </div>
    </div>
  )
}
