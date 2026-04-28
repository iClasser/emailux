"use client"

import Link from "next/link"
import { Github, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header({ onOpenSidebar }: { onOpenSidebar?: () => void }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9 md:hidden" onClick={onOpenSidebar}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
          <div className="flex items-center gap-2">
            <div className="rounded-lg flex items-center justify-center">
              {/* svg public */}
              <Image src='/light.svg' alt='EmailUX Logo' width={200} height={40} />
            </div>
            <span className="font-semibold text-lg sr-only">EmailUX Examples</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild className="h-9 w-9">
            <Link href="https://github.com/iClasser/emailux" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
