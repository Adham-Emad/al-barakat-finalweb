"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface DropdownItem {
  label: string
  href: string
  description?: string
}

interface NavDropdownProps {
  label: string
  items: DropdownItem[]
}

export function NavDropdown({ label, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
      >
        {label}
        <ChevronDown className={cn(
          "h-4 w-4 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>

      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute left-0 top-full mt-0 w-56 bg-background border border-border rounded-md shadow-lg z-50 py-2"
        >
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex flex-col px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors duration-150 border-b border-border/50 last:border-0"
            >
              <span className="text-sm font-medium">{item.label}</span>
              {item.description && (
                <span className="text-xs text-muted-foreground mt-1">{item.description}</span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
