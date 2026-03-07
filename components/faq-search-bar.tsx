"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function FAQSearchBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClear = () => {
    setSearchQuery("")
    setIsExpanded(false)
  }

  return (
    <div className="relative mx-auto max-w-md">
      <div className="relative flex items-center">
        <Search className="absolute left-3 h-5 w-5 text-muted-foreground pointer-events-none" />
        <Input
          type="text"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setIsExpanded(true)
          }}
          onFocus={() => setIsExpanded(true)}
          className="pl-10 pr-10 py-2 rounded-lg border-2 border-primary/20 focus:border-primary transition-colors"
        />
        {searchQuery && (
          <button onClick={handleClear} className="absolute right-3 text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
      {isExpanded && searchQuery && (
        <p className="mt-2 text-sm text-muted-foreground">
          Search results will be highlighted as you scroll through the FAQs below.
        </p>
      )}
    </div>
  )
}
