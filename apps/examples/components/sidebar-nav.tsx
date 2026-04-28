"use client"

import * as React from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { emailExamples } from "@/lib/email-examples"
import type { EmailExample } from "@/lib/types"

interface SidebarNavProps {
  selectedExample: EmailExample | null
  onSelectExample: (example: EmailExample) => void
  isMobile?: boolean
}

export function SidebarNav({ selectedExample, onSelectExample, isMobile = false }: SidebarNavProps) {
  const [expandedBrands, setExpandedBrands] = React.useState<Set<string>>(new Set(["stripe"]))

  const toggleBrand = (brandId: string) => {
    const newExpanded = new Set(expandedBrands)
    if (newExpanded.has(brandId)) {
      newExpanded.delete(brandId)
    } else {
      newExpanded.add(brandId)
    }
    setExpandedBrands(newExpanded)
  }

  return (
    <nav className={cn(
      "w-64 border-r border-border bg-sidebar h-[calc(100vh-4rem)] overflow-y-auto",
      isMobile ? "block md:hidden" : "hidden md:block",
    )}>
      <div className="p-4">
        <h2 className="text-sm font-semibold text-sidebar-foreground mb-4">Email Examples</h2>
        <div className="space-y-1">
          {emailExamples.map((brand) => (
            <div key={brand.id}>
              <button
                onClick={() => toggleBrand(brand.id)}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors"
              >
                <span>{brand.name}</span>
                <ChevronRight
                  className={cn("h-4 w-4 transition-transform", expandedBrands.has(brand.id) && "rotate-90")}
                />
              </button>
              {expandedBrands.has(brand.id) && (
                <div className="ml-3 mt-1 space-y-1">
                  {brand.examples.map((example) => (
                    <button
                      key={example.id}
                      onClick={() => onSelectExample(example)}
                      className={cn(
                        "flex items-center w-full px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors text-left",
                        selectedExample?.id === example.id && "bg-sidebar-accent font-medium",
                      )}
                    >
                      <span className="truncate">{example.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
