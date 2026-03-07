"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function SilkClient() {
  const [activeModel, setActiveModel] = useState<"silkx" | "silkix">("silkx")

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <MainNavigation />

      {/* Model Selection Tabs */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-8 border-b sticky top-0 z-40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setActiveModel("silkx")}
              className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                activeModel === "silkx"
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white text-slate-900 border-2 border-slate-200 hover:border-primary"
              }`}
            >
              Silk X
            </button>
            <button
              onClick={() => setActiveModel("silkix")}
              className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                activeModel === "silkix"
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white text-slate-900 border-2 border-slate-200 hover:border-primary"
              }`}
            >
              Silk Charge&Go IX
            </button>
          </div>
        </div>
      </section>

      {/* Silk X Content */}
      {activeModel === "silkx" && (
        <>
          <section className="relative w-full h-[600px] bg-[#9ca3af] overflow-hidden flex items-center">
            <div className="absolute inset-0 pointer-events-none">
              <img 
                src="/images/silkxban.webp" 
                alt="Silk X banner" 
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
                    with Signia Silk X
                  </h3>
                </div>
                
                <p className="text-xl md:text-2xl font-light leading-relaxed max-w-md">
                  Your nearly invisible ready-to-wear hearing experience.
                </p>

                <div className="pt-4">
                  <Button size="lg" asChild className="rounded-full px-12 py-7 text-lg font-bold bg-primary hover:bg-primary/90">
                    <Link href="/booking">Book Your Silk X Trial</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-24">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center space-y-4 mb-20">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-slate-900">
                  One of the world's smallest hearing aids
                </h2>
                <p className="text-xl text-slate-600 font-light">
                  Ultra-discreet hearing that gives you confidence
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white py-24 font-sans text-slate-900">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                <div className="flex justify-center md:justify-start">
                  <img 
                    src="/images/Xperience-logo_1920x1080.webp" 
                    alt="Signia Xperience Logo" 
                    className="w-full max-w-sm h-auto"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-4xl font-medium tracking-tight leading-tight">
                    Crystal-clear sound in every situation
                  </h2>
                  <p className="text-xl text-slate-600 font-light leading-relaxed">
                    Whether you're in a crowded street, working in an open-plan office, or dining in a busy restaurant, Silk X tackles these challenges expertly with the true-to-life sound of Signia Xperience.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="flex justify-center md:order-1">
                  <img 
                    src="/images/signiapro.png" 
                    alt="Signia Silk X hearing aids" 
                    className="w-full max-w-md h-auto drop-shadow-xl"
                  />
                </div>

                <div className="space-y-8 md:order-2">
                  <h2 className="text-5xl font-medium tracking-tight">Silk X</h2>
                  <p className="text-xl text-slate-600 font-light leading-relaxed">
                    The only ready-to-wear CIC available on the Signia Xperience platform delivers clear speech understanding in an ultra-discreet size with instant fit. Thanks to its flexible silicone Click Sleeves, Silk X sits securely in the ear for a brilliant fit on the spot.
                  </p>
                  
                  <Button size="lg" asChild className="rounded-full px-12 py-7 text-lg font-bold bg-primary hover:bg-primary/90 w-fit">
                    <Link href="/booking">Try Silk X Today</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 order-2 md:order-1">
                  <h2 className="text-4xl md:text-5xl font-medium">The hearing professional in your pocket</h2>
                  <p className="text-xl text-slate-600 font-light leading-relaxed">
                    The Signia app lets you contact your hearing care professional via your smartphone whenever you need remote support.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-4">
                    <div className="flex gap-4">
                      <img src="/images/Apple-App-Store-Badge_en_300px.webp" alt="App Store" className="h-12 cursor-pointer hover:opacity-80 transition-opacity" />
                      <img src="/images/google-play-badge_en_300.webp" alt="Google Play" className="h-12 cursor-pointer hover:opacity-80 transition-opacity" />
                    </div>
                  </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                  <img 
                    src="/images/mobb.webp" 
                    alt="Signia App on Smartphone" 
                    className="w-full max-w-md drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Silk Charge&Go IX Content */}
      {activeModel === "silkix" && (
        <>
          <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-center">
            <img 
              src="/images/silkixban.webp" 
              alt="Silk Charge&Go IX banner" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />

            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-2xl text-white space-y-6">
                <h1 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight drop-shadow-lg">
                  The only thing that changes is your hearing
                </h1>
                
                <p className="text-xl md:text-2xl font-light opacity-95 tracking-wide">
                  with the near-invisible Silk Charge&Go IX
                </p>

                <div className="pt-8">
                  <Button size="lg" asChild className="rounded-full px-12 py-7 text-lg font-bold bg-primary hover:bg-primary/90">
                    <Link href="/booking">Book Your Silk Charge&Go IX Trial</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-24 font-sans text-slate-900">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                  Meet Silk Charge&Go IX
                </h2>
                <p className="text-xl text-slate-600 font-light">
                  A tiny hearing aid that makes a big difference in every conversation
                </p>
              </div>

              <div className="relative flex justify-center items-center">
                <div className="w-full max-w-3xl">
                  <img 
                    src="/images/prosilkix Background Removed.png" 
                    alt="Silk Charge&Go IX with charging case" 
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-12">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="relative w-full aspect-video rounded-md overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.youtube.com/embed/Z6nadLVecfs?si=hHKDcUVQeXIBreFR"
                  title="Silk Charge&Go IX tiny rechargeable hearing aids"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>

          <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-center">
            <img 
              src="/images/silkkk.webp" 
              alt="Silk Charge&Go IX lifestyle" 
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-2xl ml-auto text-white space-y-6">
                <h2 className="text-4xl md:text-6xl font-medium leading-tight">
                  Why choose <br /> Silk Charge&Go IX?
                </h2>
                
                <p className="text-lg md:text-xl font-light leading-relaxed opacity-95">
                  Silk Charge&Go IX offers advanced noise-cancellation technology, designed for comfort and ease of use, with all-day power in a pocket-sized case.
                </p>

                <div className="pt-6">
                  <Button size="lg" asChild className="rounded-full px-12 py-7 text-lg font-bold bg-primary hover:bg-primary/90">
                    <Link href="/booking">Experience The Difference</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-24 font-sans text-slate-900">
            <div className="container mx-auto px-6 max-w-7xl">
              <h2 className="text-4xl md:text-6xl font-medium text-center mb-20 tracking-tight">
                Seamless hearing with discretion
              </h2>

              <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-medium">
                    Charge anytime, anywhere
                  </h3>
                  <p className="text-xl text-slate-600 font-light leading-relaxed">
                    Take your hearing aids on the move with a pocket-sized wireless charging case that can provide up to 3 additional charges. So you're always ready.
                  </p>
                </div>
                
                <div className="relative flex justify-center">
                  <img 
                    src="/images/silkjh.webp" 
                    alt="Silk Charge&Go IX wireless charging case" 
                    className="w-full max-w-md h-auto"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="flex justify-center">
                  <img 
                    src="/images/silklo.webp" 
                    alt="Silk Charge&Go IX in mocha and black" 
                    className="w-full max-w-md h-auto"
                  />
                </div>

                <div className="space-y-10">
                  <h3 className="text-3xl md:text-4xl font-medium">
                    Discretion with style
                  </h3>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4 text-xl font-light text-slate-700">
                      <span className="mt-2 w-2 h-2 rounded-full bg-slate-900 shrink-0" />
                      Available in two colors - mocha and black
                    </li>
                    <li className="flex items-start gap-4 text-xl font-light text-slate-700">
                      <span className="mt-2 w-2 h-2 rounded-full bg-slate-900 shrink-0" />
                      Soft textured surface to avoid reflections for added discretion
                    </li>
                    <li className="flex items-start gap-4 text-xl font-light text-slate-700">
                      <span className="mt-2 w-2 h-2 rounded-full bg-slate-900 shrink-0" />
                      Access controls through the Signia app or miniPocket remote
                    </li>
                  </ul>
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