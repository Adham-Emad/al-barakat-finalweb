"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/hearing-data"

const signiaModels = [
  { id: "pure-ric", name: "Pure RIC", description: "Natural sound quality with advanced features" },
  { id: "styletto-slim", name: "Styletto Slim RIC", description: "Award-winning ultra-slim design" },
  { id: "motion", name: "Motion", description: "Motion sensors for enhanced hearing" },
  { id: "intuis-4", name: "Intuis 4", description: "Simple and easy to use" },
  { id: "insio-custom", name: "Insio Custom", description: "Custom-molded for perfect fit" },
  { id: "silk", name: "Silk", description: "Nearly invisible instant-fit solution" },
]

export default function SigniaPage() {
  const signiaProducts = products.filter((p) => p.brand === "signia")

  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-r from-primary/10 to-secondary/10 py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Signia Hearing Aids</h1>
            <p className="text-lg text-muted-foreground">
              Premium hearing solutions with innovative technology from Signia.
            </p>
          </div>
        </div>
      </section>

      {/* Models Overview */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-bold">Our Signia Models</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {signiaModels.map((model) => (
              <Card
                key={model.id}
                className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              >
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
                    {model.name}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">{model.description}</p>
                  <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80 group/btn">
                    <Link href={`/products?brand=signia&model=${model.id}`}>
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="border-t bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-bold">Featured Signia Products</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {signiaProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">
                    Signia
                  </Badge>
                  <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                    {product.name}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                  <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80">
                    <Link href={`/products/${product.id}`}>View Details</Link>
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
