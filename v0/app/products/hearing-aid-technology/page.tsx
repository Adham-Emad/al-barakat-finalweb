"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"

const technologies = [
  {
    id: "integrated-xp",
    name: "Integrated Xperience",
    description: "Seamlessly integrated audio experience with natural sound processing.",
    features: ["Natural sound quality", "Adaptive processing", "Seamless transitions"],
  },
  {
    id: "augment-xp",
    name: "Augment Xperience",
    description: "Augmented hearing experience with advanced spatial awareness.",
    features: ["Spatial awareness", "Enhanced clarity", "Speech focus"],
  },
  {
    id: "reach",
    name: "REACH Technology",
    description: "Far-field wireless connectivity and advanced streaming capabilities.",
    features: ["Extended range", "Multi-device sync", "Low latency"],
  },
  {
    id: "bicore",
    name: "BI-CORE Technology",
    description: "Dual-core processing for superior sound quality and performance.",
    features: ["Dual processors", "Real-time analysis", "Optimized performance"],
  },
]

export default function HearingAidTechnologyPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-r from-primary/10 to-secondary/10 py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Hearing Aid Technology</h1>
            <p className="text-lg text-muted-foreground">
              Discover the latest hearing aid technologies powering our advanced solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {technologies.map((tech, index) => (
              <Card
                key={tech.id}
                className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
                    {tech.name}
                  </h3>
                  <p className="mb-6 text-muted-foreground">{tech.description}</p>

                  <div className="mb-6">
                    <h4 className="mb-3 font-semibold text-sm text-muted-foreground uppercase">Key Features</h4>
                    <ul className="space-y-2">
                      {tech.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 hover:shadow-lg"
                  >
                    <Link href={`/products?technology=${tech.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
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
