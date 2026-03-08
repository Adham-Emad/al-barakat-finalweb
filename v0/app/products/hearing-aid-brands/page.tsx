"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { brands } from "@/lib/hearing-data"

export default function HearingAidBrandsPage() {
  const brandDetails = [
    {
      ...brands[0],
      models: ["Pure RIC", "Styletto Slim RIC", "Motion", "Intuis 4", "Insio Custom", "Silk", "Other Hearing Aids"],
      href: "/products/hearing-aid-brands/signia",
    },
    {
      ...brands[1],
      models: ["Bi-Core B", "Bi-Core RIC R /R Li", "Bi-Core Rugged", "Other Hearing Aids"],
      href: "/products/hearing-aid-brands/rexton",
    },
  ]

  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-r from-primary/10 to-secondary/10 py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Hearing Aid Brands</h1>
            <p className="text-lg text-muted-foreground">
              Choose from world-leading brands delivering innovative hearing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {brandDetails.map((brand, index) => (
              <Card
                key={brand.id}
                className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="mb-2 text-3xl font-bold transition-colors duration-300 group-hover:text-primary">
                      {brand.name}
                    </h3>
                    <p className="text-muted-foreground">{brand.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="mb-3 font-semibold text-muted-foreground text-sm uppercase">Product Lines</h4>
                    <div className="flex flex-wrap gap-2">
                      {brand.models.map((model) => (
                        <Badge
                          key={model}
                          variant="outline"
                          className="transition-all duration-300 group-hover:scale-105"
                        >
                          {model}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 hover:shadow-lg group/btn"
                  >
                    <Link href={brand.href}>
                      Explore {brand.name}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
