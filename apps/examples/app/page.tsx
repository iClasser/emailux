"use client"

import * as React from "react"
import { Header } from "@/components/header"
import { SidebarNav } from "@/components/sidebar-nav"
import { PreviewControls, type ViewportSize } from "@/components/preview-controls"
import { EmailPreview } from "@/components/email-preview"
import type { EmailExample, TabId } from "@/lib/types"
import { emailExamples } from "@/lib/email-examples"
import { Button } from "@/components/ui/button"
import CodeViewer from "@/components/CodeViewer"
import { useRouter, useSearchParams } from "next/navigation"

export default function HomePage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [selectedExample, setSelectedExample] = React.useState<EmailExample | null>(
    null,
  )
  const [viewportSize, setViewportSize] = React.useState<ViewportSize>("desktop")
  const [activeTab, setActiveTab] = React.useState<TabId>("preview")
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false)

  const findExampleById = React.useCallback((id: string | null) => {
    if (!id) return null
    for (const brand of emailExamples) {
      const found = brand.examples.find((e) => e.id === id)
      if (found) return found
    }
    return null
  }, [])

  const findFirstExampleOfBrand = React.useCallback((brandId: string | null) => {
    if (!brandId) return null
    const brand = emailExamples.find((b) => b.id === brandId)
    return brand?.examples?.[0] || null
  }, [])

  // Read from URL on mount and whenever query changes (e.g., back/forward)
  React.useEffect(() => {
    const brandId = searchParams.get("brand")
    const exampleId = searchParams.get("example")
    const tabParam = searchParams.get("tab") as TabId | null

    let nextExample: EmailExample | null = null
    if (exampleId) {
      nextExample = findExampleById(exampleId)
    }
    if (!nextExample && brandId) {
      nextExample = findFirstExampleOfBrand(brandId)
    }
    if (!nextExample) {
      nextExample = emailExamples[0]?.examples[0] || null
    }

    if (nextExample && nextExample.id !== selectedExample?.id) {
      setSelectedExample(nextExample)
    }

    if (tabParam && tabParam !== activeTab && (tabParam === "jsx" || tabParam === "preview" || tabParam === "html" || tabParam === "text")) {
      setActiveTab(tabParam)
    }
  }, [searchParams, findExampleById, findFirstExampleOfBrand])

  const updateUrl = React.useCallback((params: { brand?: string; example?: string; tab?: TabId }) => {
    const url = new URL(window.location.href)
    const sp = url.searchParams
    if (params.brand !== undefined) sp.set("brand", params.brand)
    if (params.example !== undefined) sp.set("example", params.example)
    if (params.tab !== undefined) sp.set("tab", params.tab)
    router.replace(`${url.pathname}?${sp.toString()}`, { scroll: false })
  }, [router])

  const handleSelectExample = React.useCallback((example: EmailExample) => {
    setSelectedExample(example)
    // infer brand id from catalog
    const brand = emailExamples.find((b) => b.examples.some((e) => e.id === example.id))
    updateUrl({ brand: brand?.id || "", example: example.id })
  }, [updateUrl])

  const handleSetActiveTab = React.useCallback((tab: TabId) => {
    setActiveTab(tab)
    updateUrl({ tab })
  }, [updateUrl])

  return (
    <div className="flex flex-col h-screen">
      <Header onOpenSidebar={() => setIsMobileSidebarOpen(true)} />
      <div className="flex flex-1 overflow-hidden">
        <SidebarNav selectedExample={selectedExample} onSelectExample={(e) => { handleSelectExample(e); setIsMobileSidebarOpen(false) }} />
        <div className="flex-1 flex flex-col">
        <div className="border-b border-border bg-card px-4 py-2 flex gap-2">
            <Button
              variant={activeTab === "jsx" ? "default" : "ghost"}
              size="sm"
              onClick={() => handleSetActiveTab("jsx")}
            >
              JSX Code
            </Button>
            <Button
              variant={activeTab === "preview" ? "default" : "ghost"}
              size="sm"
              onClick={() => handleSetActiveTab("preview")}
            >
              Preview
            </Button>
            <Button
              variant={activeTab === "html" ? "default" : "ghost"}
              size="sm"
              onClick={() => handleSetActiveTab("html")}
            >
              HTML
            </Button>
            <Button
              variant={activeTab === "text" ? "default" : "ghost"}
              size="sm"
              onClick={() => handleSetActiveTab("text")}
            >
              Text
            </Button>
          </div>
          {activeTab === "preview" && <PreviewControls viewportSize={viewportSize} onViewportChange={setViewportSize} />}
          
          {activeTab === "preview" && (
            <EmailPreview example={selectedExample} viewportSize={viewportSize} />
          )}
          {activeTab !== "preview" && (
            <div className="flex-1 overflow-auto p-6 bg-muted/30">
              <div className="max-w-5xl mx-auto w-full">
                {activeTab === "jsx" && (
                  <CodeViewer
                    language="tsx"
                    key={'jsx'}
                    code={selectedExample?.jsxCode || "// JSX code not available"}
                  />
                )}
                {activeTab === "html" && (<CodeViewer key={'html'} language="html" code={selectedExample?.htmlContent || ""} />)}
                {activeTab === "text" && (<CodeViewer key={'text'} language="text" code={selectedExample?.textContent || ""} />)}
              </div>
            </div>
          )}
        </div>
      </div>
      {isMobileSidebarOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 z-50 w-64 shadow-lg animate-in slide-in-from-left duration-200">
            <SidebarNav isMobile selectedExample={selectedExample} onSelectExample={(e) => { handleSelectExample(e); setIsMobileSidebarOpen(false) }} />
          </div>
        </div>
      )}
    </div>
  )
}
