"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function PureClient() {
  const [activeModel, setActiveModel] = useState<"ric" | "312x" | "312ax">("ric")

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <MainNavigation />

      {/* Model Selection Tabs */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-8 border-b sticky top-0 z-40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setActiveModel("ric")}
              className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                activeModel === "ric"
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white text-slate-900 border-2 border-slate-200 hover:border-primary"
              }`}
            >
              Pure RIC
            </button>
            <button
              onClick={() => setActiveModel("312x")}
              className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                activeModel === "312x"
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white text-slate-900 border-2 border-slate-200 hover:border-primary"
              }`}
            >
              Pure 312 X
            </button>
            <button
              onClick={() => setActiveModel("312ax")}
              className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                activeModel === "312ax"
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white text-slate-900 border-2 border-slate-200 hover:border-primary"
              }`}
            >
              Pure 312 AX
            </button>
          </div>
        </div>
      </section>

      {/* Pure RIC Content */}
      {activeModel === "ric" && (
        <>
          <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-center">
            <div className="absolute inset-0 pointer-events-none">
              <img 
                src="/images/ban66.webp" 
                alt="Pure RIC banner" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-white space-y-6">
                <div className="space-y-1">
                  <h2 className="text-5xl md:text-7xl font-medium leading-tight">
                    Be Brilliant™
                  </h2>
                  <h3 className="text-4xl md:text-6xl font-light">
                    with Signia Pure RIC
                  </h3>
                </div>
                
                <p className="text-xl md:text-2xl font-light leading-relaxed max-w-md">
                  Premium hearing aids with Natural Fit and advanced technology.
                </p>

                <div className="pt-4">
                  <Button size="lg" asChild className="rounded-full px-12 py-7 text-lg font-bold bg-primary hover:bg-primary/90">
                    <Link href="/booking">Book Your Pure RIC Trial</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-24 font-sans text-slate-900">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                <div className="flex justify-center md:justify-start">
                  <img 
                    src="/images/ric-pure-500x500.webp" 
                    alt="Pure RIC hearing aids" 
                    className="w-full max-w-md h-auto drop-shadow-xl"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-4xl font-medium tracking-tight leading-tight">
                    Premium hearing with natural fit
                  </h2>
                  <p className="text-xl text-slate-600 font-light leading-relaxed">
                    Pure RIC offers receiver-in-the-canal design for natural sound and exceptional clarity. With direct streaming, advanced noise management, and premium fit, Pure RIC delivers brilliant hearing in every situation.
                  </p>
                  
                  <Button size="lg" asChild className="rounded-full px-12 py-7 text-lg font-bold bg-primary hover:bg-primary/90 w-fit">
                    <Link href="/booking">Try Pure RIC Today</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Pure 312 X Content */}
      {activeModel === "312x" && (
        <>
          <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-center">
            <img 
              src="/images/ban66.webp" 
              alt="Pure 312 X banner" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />

            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-2xl text-white space-y-6">
                <h1 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight drop-shadow-lg">
                  Be Brilliant™
                </h1>
                <h2 className="text-4xl md:text-6xl font-light">
                  with Pure 312 X
                </h2>
                
                <p className="text-xl md:text-2xl font-light opacity-95 tracking-wide">
                  Compact, discreet hearing with premium Xperience platform
                </p>

                <div className="pt-8">
                  <Button size="lg" asChild className="rounded-full px-12 py-7 text-lg font-bold bg-primary hover:bg-primary/90">
                    <Link href="/booking">Book Your Pure 312 X Trial</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-24 font-sans text-slate-900">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                  Small hearing aids, big sound
                </h2>
                <p className="text-xl text-slate-600 font-light">
                  Premium 312 battery hearing aids with advanced technology
                </p>
              </div>

              <div className="relative flex justify-center items-center">
                <div className="w-full max-w-3xl">
                  <img 
                    src="/images/vvb Background Removed.png" 
                    alt="Pure 312 X hearing aids" 
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-24 font-sans text-slate-900">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-medium">
                    Modern lifestyle design
                  </h2>
                  <p className="text-xl text-slate-600 font-light leading-relaxed">
                    Pure 312 X's small size and clean lines exemplify slimness and comfort, with a soft rounded form for ergonomic fit. Direct streaming and advanced connectivity keep you connected to your world.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <img 
                    src="/images/vvb Background Removed.png" 
                    alt="Pure 312 X design" 
                    className="w-full max-w-md h-auto"
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Pure 312 AX Content */}
      {activeModel === "312ax" && (
        <>
          <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-center">
            <img 
              src="/images/ban66.webp" 
              alt="Pure 312 AX banner" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />

            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-2xl text-white space-y-6">
                <h1 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight drop-shadow-lg">
                  Be Brilliant™
                </h1>
                <h2 className="text-4xl md:text-6xl font-light">
                  with Pure 312 AX
                </h2>
                
                <p className="text-xl md:text-2xl font-light opacity-95 tracking-wide">
                  Advanced speech clarity with Augment Xperience platform
                </p>

                <div className="pt-8">
                  <Button size="lg" asChild className="rounded-full px-12 py-7 text-lg font-bold bg-primary hover:bg-primary/90">
                    <Link href="/booking">Book Your Pure 312 AX Trial</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-24 font-sans text-slate-900">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                  Outstanding speech clarity
                </h2>
                <p className="text-xl text-slate-600 font-light">
                  Pure 312 AX with Augmented Focus technology for better speech understanding
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white py-24 font-sans text-slate-900">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-medium">
                    Excellent speech in noise
                  </h2>
                  <p className="text-xl text-slate-600 font-light leading-relaxed">
                    Pure 312 AX uses Augmented Focus technology to process speech separately from background noise, delivering exceptional clarity. Perfect for conversations in busy environments.
                  </p>
                  
                  <Button size="lg" asChild className="rounded-full px-12 py-7 text-lg font-bold bg-primary hover:bg-primary/90 w-fit">
                    <Link href="/booking">Experience Pure 312 AX</Link>
                  </Button>
                </div>
                
                <div className="flex justify-center">
                  <img 
                    src="/images/Pure-312-AX_silver_1000x1000.jpg" 
                    alt="Pure 312 AX" 
                    className="w-full max-w-md h-auto drop-shadow-2xl rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA Footer */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready for Brilliant Hearing?</h2>
          <Button size="lg" variant="secondary" className="rounded-full px-12 py-8 text-xl font-extrabold shadow-xl hover:scale-105 transition-transform">
            Book Your Free Trial Today
          </Button>
        </div>
      </section>
    </div>
  )
}