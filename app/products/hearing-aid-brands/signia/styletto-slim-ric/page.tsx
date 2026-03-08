"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  Sparkles, 
  BatteryCharging, 
  Bluetooth, 
  Users, 
  Zap, 
  ShieldCheck,
  Smartphone,
  CheckCircle2
} from "lucide-react"

export default function StylettoPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/10 to-background py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl tracking-tight text-primary">
            Signia Styletto
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            The world’s first SLIM-RIC hearing aid. Styletto isn't just a hearing aid—it’s a fashion-forward statement piece that combines an award-winning design with game-changing technology.
          </p>
        </div>
      </section>

      {/* 1. Styletto IX Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">New Arrival</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Styletto Integrated Xperience (IX)</h2>
              <p className="text-muted-foreground mb-6">
                Engineered for conversation. Styletto IX features <strong>RealTime Conversation Enhancement</strong> technology, allowing you to engage in lively group discussions even in noisy environments. It tracks multiple speakers simultaneously, ensuring you're always part of the conversation.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium">Multi-speaker conversation tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <BatteryCharging className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium">Pocket-sized portable charging case</span>
                </div>
                <div className="flex items-center gap-3">
                  <Bluetooth className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium">Direct streaming for iPhone & Android</span>
                </div>
              </div>
 



<div className="flex flex-wrap items-center gap-4">

              <Button asChild size="lg"><Link href="/booking">Experience Styletto IX</Link></Button>
              <Button asChild><Link href="/products/hearing-aid-brands/signia/stylettoix">See Details</Link></Button>
              </div>

            </div>
            <div className="order-1 md:order-2">
              <img src="/images/Styletto-IX_black-silver_double_charger_1920x1080.webp" alt="Signia Styletto IX" className="w-full max-w-md mx-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Styletto AX Section */}
      <section className="bg-muted/30 py-12 md:py-20 border-y">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/images/Styletto-AX-charger_open- with-ha_light-off_1920x1080.webp" alt="Signia Styletto AX" className="w-full max-w-md mx-auto drop-shadow-2xl" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Styletto Augmented Xperience (AX)</h2>
              <p className="text-muted-foreground">
                Built on the <strong>Augmented Focus™</strong> platform, Styletto AX uses two dedicated processors to handle speech and background noise separately. This results in outstanding speech clarity and a fully immersive soundscape.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-4 bg-background border-none shadow-sm">
                  <Zap className="h-5 w-5 text-primary mb-2" />
                  <h4 className="font-bold text-sm">Augmented Focus™</h4>
                  <p className="text-xs text-muted-foreground">Crystal clear speech in any noise.</p>
                </Card>
                <Card className="p-4 bg-background border-none shadow-sm">
                  <Sparkles className="h-5 w-5 text-primary mb-2" />
                  <h4 className="font-bold text-sm">Award-Winning Design</h4>
                  <p className="text-xs text-muted-foreground">Red Dot Design award winner.</p>
                </Card>
              </div>
               <Button asChild><Link href="/products/hearing-aid-brands/signia/stylettoax">See Details</Link></Button>

            </div>
          </div>
        </div>
      </section>

      {/* Innovative Charging Case Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Charging Without Limits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                <BatteryCharging className="h-6 w-6" />
              </div>
              <h4 className="font-bold">4 Days of Autonomy</h4>
              <p className="text-sm text-muted-foreground">The pocket-sized case provides 4 full charges on the go without needing a plug.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                <Zap className="h-6 w-6" />
              </div>
              <h4 className="font-bold">Qi Wireless Charging</h4>
              <p className="text-sm text-muted-foreground">Simply place the charger on a wireless charging pad for effortless power.</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h4 className="font-bold">Fast Charge</h4>
              <p className="text-sm text-muted-foreground">A quick 30-minute charge gives you up to 5 additional hours of use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Grid */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center gap-3">
              <Smartphone className="h-8 w-8 text-secondary" />
              <div className="text-center">
                <h5 className="font-bold">Signia App</h5>
                <p className="text-xs opacity-70">Complete control & AI assistant</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Bluetooth className="h-8 w-8 text-secondary" />
              <div className="text-center">
                <h5 className="font-bold">AStream</h5>
                <p className="text-xs opacity-70">Phone, Music & TV streaming</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-secondary" />
              <div className="text-center">
                <h5 className="font-bold">IP68 Rated</h5>
                <p className="text-xs opacity-70">Moisture & dust resistance</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Users className="h-8 w-8 text-secondary" />
              <div className="text-center">
                <h5 className="font-bold">My WellBeing</h5>
                <p className="text-xs opacity-70">Activity and hearing health tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-secondary to-primary border-none text-white overflow-hidden">
            <CardContent className="p-8 md:p-16 text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">Style That Speaks Volumes</h2>
              <p className="max-w-2xl mx-auto text-lg opacity-90">
                Visit Al Barakat Hearing Centers in Riyadh, Jeddah, or any of our KSA branches to try the Signia Styletto in person.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" variant="secondary" asChild className="font-bold"><Link href="/booking">Book Your Free Trial</Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Al Barakat Hearing Centers. Premium Signia Provider.</p>
        </div>
      </footer>
    </div>
  )
}