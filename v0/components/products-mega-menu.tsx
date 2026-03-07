"use client"

import { NavigationMenuItem } from "@/components/ui/navigation-menu"
import { NavigationMenuContent } from "@/components/ui/navigation-menu"
import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Grid3x3, Tag, Zap, Volume2, Battery, ChevronRight, Ear, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { productsMenuStructure } from "@/lib/products-menu-structure"

const iconMap: Record<string, React.ReactNode> = {
  Grid3x3: <Grid3x3 className="h-5 w-5" />,
  Tag: <Tag className="h-5 w-5" />,
  Zap: <Zap className="h-5 w-5" />,
  Volume2: <Volume2 className="h-5 w-5" />,
  Battery: <Battery className="h-5 w-5" />,
}

export function ProductsMegaMenu() {
  const [activeSubmenu, setActiveSubmenu] = useState<string>(productsMenuStructure.categories[0]?.id || "")
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-accent/50"
      >
        <Ear className="h-4 w-4" />
        <span>Products & Accessories</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute left-0 top-full mt-0 z-50 bg-background border border-border rounded-lg shadow-lg"
        >
          <div className="w-screen max-w-4xl p-6 lg:p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
              {/* Main Categories Sidebar */}
              <div className="md:col-span-2 space-y-2">
                <div className="mb-4">
                  <h3 className="text-xs font-semibold uppercase text-muted-foreground tracking-wider mb-3">
                    Categories
                  </h3>
                </div>
                {productsMenuStructure.categories.map((category) => (
                  <button
                    key={category.id}
                    onMouseEnter={() => setActiveSubmenu(category.id)}
                    onClick={() => setActiveSubmenu(category.id)}
                    className={cn(
                      "w-full group flex items-start gap-3 px-4 py-3 rounded-xl transition-all duration-300 border border-transparent",
                      "hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:border-primary/20",
                      activeSubmenu === category.id &&
                        "bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 shadow-sm",
                    )}
                  >
                    <div
                      className={cn(
                        "mt-0.5 text-muted-foreground transition-colors duration-300",
                        activeSubmenu === category.id && "text-primary",
                      )}
                    >
                      {iconMap[category.icon as string]}
                    </div>
                    <div className="flex-1 text-left">
                      <p
                        className={cn(
                          "text-sm font-medium transition-colors duration-300",
                          activeSubmenu === category.id && "text-primary font-semibold",
                        )}
                      >
                        {category.label}
                      </p>
                    </div>
                    {(category.submenu || category.items) && (
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1",
                          activeSubmenu === category.id && "text-primary translate-x-1",
                        )}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Content Area */}
              <div className="md:col-span-3 bg-gradient-to-br from-accent/5 via-background to-secondary/5 rounded-xl p-6 border border-border/50 min-h-96">
                {activeSubmenu && (
                  (() => {
                    const activeCategory = productsMenuStructure.categories.find((c) => c.id === activeSubmenu)
                    if (!activeCategory) return null

                    // Brand submenu (Hearing Aid Brands)
                    if (activeCategory.submenu) {
                      return (
                        <div className="space-y-6">
                          <h4 className="text-sm font-semibold uppercase text-muted-foreground tracking-wider">
                            {activeCategory.label}
                          </h4>
                          <div className="grid grid-cols-1 gap-6">
                            {activeCategory.submenu.map((brand) => (
                              <div key={brand.id} className="space-y-3">
                                <h5 className="font-semibold text-base text-foreground flex items-center gap-2">
                                  <div className="h-2 w-2 rounded-full bg-primary" />
                                  {brand.label}
                                </h5>
                                <p className="text-sm text-muted-foreground mb-3 ml-4">{brand.description}</p>
                                <div className="grid grid-cols-2 gap-2 ml-4">
                                  {brand.items?.map((item) => (
                                    <Link
                                      key={item.id}
                                      href={item.href}
                                      className="group text-sm text-muted-foreground hover:text-primary transition-all duration-300 py-2 px-3 rounded-md hover:bg-primary/5 flex items-center gap-2"
                                    >
                                      <span className="h-1 w-1 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    }

                    // Technology items (only if has items with length > 0)
                    if (activeCategory.items && activeCategory.items.length > 0) {
                      return (
                        <div className="space-y-4">
                          <h4 className="text-sm font-semibold uppercase text-muted-foreground tracking-wider">
                            {activeCategory.label}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {activeCategory.items.map((item) => (
                              <Link
                                key={item.id}
                                href={item.href}
                                className="group block p-4 rounded-lg border border-transparent bg-gradient-to-br from-primary/5 to-secondary/5 hover:from-primary/15 hover:to-secondary/15 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                              >
                                <div className="flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
                                  <div className="h-3 w-3 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300" />
                                  <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
                                    {item.label}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )
                    }

                    // Simple link category
                    return (
                      <div className="flex flex-col items-center justify-center h-full gap-4">
                        <h4 className="text-sm font-semibold uppercase text-muted-foreground tracking-wider">
                          {activeCategory.label}
                        </h4>
                        <Link
                          href={activeCategory.href || "/products"}
                          className="group px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                          Explore {activeCategory.label}
                        </Link>
                      </div>
                    )
                  })()
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
