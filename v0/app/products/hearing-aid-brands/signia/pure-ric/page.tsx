"use client"



import { MainNavigation } from "@/components/main-navigation"

import { Button } from "@/components/ui/button"

import { Card, CardContent } from "@/components/ui/card"

import Link from "next/link"

import {

Zap,

Mic2,

Bluetooth,

BatteryCharging,

Activity,

CheckCircle2,

Smartphone,

Sparkles

} from "lucide-react"



export default function PureRICPage() {

return (

<div className="min-h-screen">

<MainNavigation />



{/* Hero Section */}

<section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">

<div className="container mx-auto max-w-7xl px-4 text-center">

<h1 className="mb-6 text-4xl font-bold md:text-6xl tracking-tight">

Signia Pure RIC Portfolio

</h1>

<p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">

From the world-first RealTime Conversation Enhancement of the <strong>Integrated Xperience (IX)</strong> to the split-processing of <strong>Augmented Xperience (AX)</strong>, discover the ultimate in discreet hearing technology.

</p>

</div>

</section>



{/* 1. Pure Charge&Go IX Section */}

<section className="py-12 md:py-20">

<div className="container mx-auto max-w-7xl px-4">

<div className="grid md:grid-cols-2 gap-12 items-center">

<div className="order-2 md:order-1">

<span className="text-secondary font-bold uppercase tracking-widest text-sm">Latest Technology</span>

<h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Pure Charge&Go IX</h2>

<p className="text-muted-foreground mb-6">

The world’s first hearing aid with <strong>RealTime Conversation Enhancement</strong>. It doesn't just amplify sound; it tracks multiple speakers in a group conversation in real-time, ensuring you never miss a word even when people are moving.

</p>

<ul className="space-y-3 mb-8">

<li className="flex gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-primary" /> RealTime Conversation Enhancement</li>

<li className="flex gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-primary" /> Integrated PowerCell for all-day reliability</li>

<li className="flex gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-primary" /> Future-proof with LE Audio & Auracast</li>

</ul>

<div className="flex gap-4">
  <Button className="" asChild>
    <Link href="/booking">Trial Pure IX Today</Link>
  </Button>
  <Button asChild>
    <Link href="/products/hearing-aid-brands/signia/Charge&GoIX">See Details</Link>
  </Button>
</div>

</div>

<div className="order-1 md:order-2">

<img src="/images/Pure-Charge-Go-BCT-IX_into-charger_1920x1080.webp" alt="Pure Charge&Go IX" className="w-full max-w-md mx-auto drop-shadow-2xl" />

</div>

</div>

</div>

</section>






{/* 2. Pure 312 AX Section */}

<section className="bg-muted/30 py-12 md:py-20 border-y">

<div className="container mx-auto max-w-7xl px-4">

<div className="grid md:grid-cols-2 gap-12 items-center">

<div>

<img src="/images/Pure-312-X_color_change_800x800.webp" alt="Pure 312 AX" className="w-full max-w-md mx-auto drop-shadow-2xl" />

</div>

<div>

<h2 className="text-3xl md:text-4xl font-bold mb-6">Pure 312 AX</h2>

<p className="text-muted-foreground mb-6">

Powered by <strong>Augmented Xperience (AX)</strong>, this device uses two separate processors for the first time: one for focus sounds (like speech) and one for surroundings. This creates a clear contrast that makes speech stand out effortlessly.

</p>

<div className="grid grid-cols-2 gap-4 mb-8">

<Card className="p-4 flex flex-col items-center text-center">

<Zap className="h-6 w-6 text-secondary mb-2" />

<span className="text-xs font-bold">Augmented Focus™</span>

</Card>

<Card className="p-4 flex flex-col items-center text-center">

<Bluetooth className="h-6 w-6 text-secondary mb-2" />

<span className="text-xs font-bold">Android & iOS Stream</span>

</Card>

</div>

 <Button asChild><Link href="/products/hearing-aid-brands/signia/Pure312AX">See Details</Link></Button>

</div>

</div>

</div>

</section>



{/* 3. Pure 312 X Section */}

<section className="py-12 md:py-20">

<div className="container mx-auto max-w-7xl px-4">

<div className="grid md:grid-cols-2 gap-12 items-center">

<div className="space-y-6">

<h2 className="text-3xl md:text-4xl font-bold">Pure 312 X</h2>

<p className="text-muted-foreground">

The foundation of the Xperience platform, featuring the world’s first <strong>Acoustic-Motion Sensors</strong>. It understands your environment and how you are moving through it, automatically adjusting so you always hear what matters.

</p>

<div className="space-y-4">

<div className="flex items-start gap-4">

<Activity className="h-6 w-6 text-primary" />

<div>

<h4 className="font-bold text-sm">Dynamic Soundscape Processing</h4>

<p className="text-xs text-muted-foreground">Delivers natural sound and speech in every situation, even when moving.</p>

</div>

</div>

<div className="flex items-start gap-4">

<Mic2 className="h-6 w-6 text-primary" />

<div>

<h4 className="font-bold text-sm">Own Voice Processing (OVP™)</h4>

<p className="text-xs text-muted-foreground">Ensures your own voice sounds completely natural to you.</p>
<br />
<Button asChild><Link href="/products/hearing-aid-brands/signia/Pure312x">See Details</Link></Button>


</div>

</div>

</div>

</div>

<div>

<img src="/images/Pure-312-X_color_change_800x800.webp" alt="Pure 312 X" className="w-full max-w-md mx-auto drop-shadow-2xl" />

</div>

</div>

</div>

</section>



{/* Technology Feature Grid */}

<section className="bg-primary text-primary-foreground py-16">

<div className="container mx-auto max-w-7xl px-4">

<h2 className="text-3xl font-bold text-center mb-12">Standard Across the Pure RIC Line</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="text-center space-y-2">

<Smartphone className="h-8 w-8 mx-auto text-secondary" />

<h4 className="font-bold">Signia App</h4>

<p className="text-xs opacity-80">Remote control & Signia Assistant AI</p>

</div>

<div className="text-center space-y-2">

<Sparkles className="h-8 w-8 mx-auto text-secondary" />

<h4 className="font-bold">TeleCare</h4>

<p className="text-xs opacity-80">Remote support from your audiologist</p>

</div>

<div className="text-center space-y-2">

<BatteryCharging className="h-8 w-8 mx-auto text-secondary" />

<h4 className="font-bold">Charging Options</h4>

<p className="text-xs opacity-80">Portable & Desktop power solutions</p>

</div>

<div className="text-center space-y-2">

<Bluetooth className="h-8 w-8 mx-auto text-secondary" />

<h4 className="font-bold">Direct Streaming</h4>

<p className="text-xs opacity-80">For phone calls, music, and TV</p>

</div>

</div>

</div>

</section>



{/* CTA */}

<section className="py-20 text-center">

<div className="container mx-auto px-4">

<h2 className="text-3xl font-bold mb-6">Find the Right Pure RIC for Your Lifestyle</h2>

<p className="text-muted-foreground max-w-2xl mx-auto mb-10">

Our experts at Al Barakat Hearing Centers across Saudi Arabia will help you choose between IX, AX, or X platforms based on your specific hearing needs.

</p>

<div className="flex justify-center gap-4">

<Button size="lg" asChild><Link href="/booking">Book Free Trial</Link></Button>

<Button size="lg" variant="outline" asChild><Link href="/contact">Enquire Now</Link></Button>

</div>

</div>

</section>



<footer className="border-t py-12">

<div className="container mx-auto px-4 text-center text-sm text-muted-foreground">

<p>© 2024 Al Barakat Hearing Centers. Official Signia Partner in KSA.</p>

</div>

</footer>

</div>

)

}