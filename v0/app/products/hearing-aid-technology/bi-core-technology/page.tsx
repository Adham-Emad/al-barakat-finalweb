import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "BI-CORE Technology | Al-Barakat",
  description: "Dual-core processing technology for superior hearing performance and power.",
}

export default function BiCoreTechnologyPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      <section className="border-b bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">BI-CORE Technology</h1>
            <p className="text-lg text-muted-foreground">
              Revolutionary dual-core processing for unprecedented hearing performance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-bold">Dual-Core Power</h2>
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4 text-xl font-semibold">Dual Processing Cores</h3>
                <p className="text-muted-foreground mb-4">
                  Two independent processors work in harmony to deliver superior hearing performance.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Parallel processing capability</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Redundant safety systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Optimized power consumption</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-4 text-xl font-semibold">Advanced Processing</h3>
                <p className="text-muted-foreground mb-4">
                  State-of-the-art algorithms leverage dual-core power for maximum performance.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Real-time signal processing</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Complex noise reduction</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Intelligent audio enhancement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="mb-8 text-3xl font-bold">Performance Advantages</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Superior Clarity</h3>
                <p className="text-muted-foreground">
                  Unmatched sound quality with incredibly clear speech in any environment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Powerful Processing</h3>
                <p className="text-muted-foreground">Handles complex hearing situations with ease and precision.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Extended Battery</h3>
                <p className="text-muted-foreground">
                  Efficient dual-core design maximizes battery life while delivering peak performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-bold">BI-CORE Features</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Binaural Beamforming</h3>
                <p className="text-muted-foreground">
                  Both ears work together to focus on speech and eliminate background noise.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Intelligent Analysis</h3>
                <p className="text-muted-foreground">
                  Continuous environmental analysis provides optimal hearing in any situation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold">Personalized Profiles</h3>
                <p className="text-muted-foreground">
                  Creates and adapts personalized hearing profiles based on your preferences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary">
            <CardContent className="p-8 text-center text-primary-foreground md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Experience BI-CORE Power</h2>
              <p className="mb-6 text-lg opacity-90">
                Discover how dual-core technology revolutionizes your hearing experience.
              </p>
              <Button asChild size="lg" variant="secondary" className="transition-all hover:scale-105">
                <Link href="/booking">Schedule Your Demo</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
