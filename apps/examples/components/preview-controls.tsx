"use client"
import { Monitor, Smartphone, Tablet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type ViewportSize = "mobile" | "tablet" | "desktop"

interface PreviewControlsProps {
  viewportSize: ViewportSize
  onViewportChange: (size: ViewportSize) => void
}

export function PreviewControls({ viewportSize, onViewportChange }: PreviewControlsProps) {
  return (
    <div className="flex items-center gap-2 p-4 border-b border-border bg-card">
      <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onViewportChange("mobile")}
          className={cn("h-8 px-3", viewportSize === "mobile" && "bg-background shadow-sm")}
        >
          <Smartphone className="h-4 w-4 mr-2" />
          Mobile
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onViewportChange("tablet")}
          className={cn("h-8 px-3", viewportSize === "tablet" && "bg-background shadow-sm")}
        >
          <Tablet className="h-4 w-4 mr-2" />
          Tablet
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onViewportChange("desktop")}
          className={cn("h-8 px-3", viewportSize === "desktop" && "bg-background shadow-sm")}
        >
          <Monitor className="h-4 w-4 mr-2" />
          Desktop
        </Button>
      </div>
      <div className="ml-auto text-sm text-muted-foreground">
        {viewportSize === "mobile" && "400px"}
        {viewportSize === "tablet" && "768px"}
        {viewportSize === "desktop" && "100%"}
      </div>
    </div>
  )
}
