"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
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
  const router = useRouter()

  // دالة ذكية لاختيار الصورة بناءً على الكلمات المفتاحية في الـ ID
  const getCategoryImage = (id: string) => {
    const lowerId = id.toLowerCase();
    
    if (lowerId.includes("tinnitus")) return "/images/tinnitus-hero.png";
    
    if (lowerId.includes("accessories") || lowerId.includes("battery")) 
      return "/images/Silk-IXqqq_bouldering_charger-in-hands_1920x400.webp";
    
    if (lowerId.includes("connect")) return "/images/banner2.webp"; // الصورة اللي إنت عايزها هنا
    
    if (lowerId.includes("aid-category")) 
      return "/images/Rexton_Reach_iX-CIC-Li_woman-side-view-close-up_mirrored_1600x540.webp";
      
    if (lowerId.includes("brand")) return "/images/signia-styletto-ix.jpg";
    if (lowerId.includes("tech")) return "/images/Insio-IX_IIC_black_pair_side_1920x1080.webp";

    return "/images/product-showcase-1.jpg"; // الـ Fallback
  }

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
              
              <div className="md:col-span-2 space-y-2">
                <div className="mb-4">
                  <h3 className="text-xs font-semibold uppercase text-muted-foreground tracking-wider mb-3">
                    Categories
                  </h3>
                </div>
                {productsMenuStructure.categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      if (category.href) {
                        router.push(category.href);
                        setIsOpen(false);
                      }
                    }}
                    onMouseEnter={() => setActiveSubmenu(category.id)}
                    className={cn(
                      "w-full group flex items-start gap-3 px-4 py-3 rounded-xl transition-all duration-300 border border-transparent cursor-pointer",
                      "hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:border-primary/20",
                      activeSubmenu === category.id &&
                        "bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 shadow-sm",
                    )}
                  >
                    <div className={cn("mt-0.5 text-muted-foreground transition-colors", activeSubmenu === category.id && "text-primary")}>
                      {iconMap[category.icon as string]}
                    </div>
                    <div className="flex-1 text-left">
                      <p className={cn("text-sm font-medium transition-colors", activeSubmenu === category.id && "text-primary font-semibold")}>
                        {category.label}
                      </p>
                    </div>
                    <ChevronRight className={cn("h-4 w-4 text-muted-foreground transition-transform duration-300", activeSubmenu === category.id && "text-primary translate-x-1")} />
                  </button>
                ))}
              </div>

              <div className="md:col-span-3 bg-gradient-to-br from-accent/5 via-background to-secondary/5 rounded-xl p-6 border border-border/50 min-h-96 relative overflow-hidden">
                {activeSubmenu && (
                  (() => {
                    const activeCategory = productsMenuStructure.categories.find((c) => c.id === activeSubmenu)
                    if (!activeCategory) return null

                    if (activeCategory.submenu) {
                      return (
                        <div className="space-y-6 relative z-10">
                          <h4 className="text-sm font-semibold uppercase text-muted-foreground tracking-wider">{activeCategory.label}</h4>
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
                                    <Link key={item.id} href={item.href} className="group text-sm text-muted-foreground hover:text-primary transition-all duration-300 py-2 px-3 rounded-md hover:bg-primary/5 flex items-center gap-2">
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

                    if (activeCategory.items && activeCategory.items.length > 0) {
                      return (
                        <div className="space-y-4 relative z-10">
                          <h4 className="text-sm font-semibold uppercase text-muted-foreground tracking-wider">{activeCategory.label}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {activeCategory.items.map((item) => (
                              <Link key={item.id} href={item.href} className="group block p-4 rounded-lg border border-transparent bg-gradient-to-br from-primary/5 to-secondary/5 hover:from-primary/15 hover:to-secondary/15 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                                <div className="flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
                                  <div className="h-3 w-3 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300" />
                                  <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">{item.label}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )
                    }

                    return (
                      <div className="relative h-full w-full flex items-center justify-center rounded-lg overflow-hidden group">
                        <div className="absolute inset-0 z-0">
                          <img 
                            // استخدام الدالة الجديدة لضمان اختيار الصورة الصح
                            src={getCategoryImage(activeCategory.id)} 
                            alt={activeCategory.label}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40 z-10" />
                        </div>
                        <div className="relative z-20 flex flex-col items-center gap-4 p-6 text-center">
                          <h4 className="text-lg font-bold uppercase text-white tracking-widest drop-shadow-md">{activeCategory.label}</h4>
                          <Link href={activeCategory.href || "/products"} className="group px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 shadow-xl transition-all duration-300 hover:scale-105">
                            Explore {activeCategory.label}
                          </Link>
                        </div>
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