 "use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  Zap, 
  Bluetooth, 
  Fingerprint, 
  Smartphone, 
  BatteryCharging, 
  Volume2,
  ShieldCheck,
  CheckCircle2
} from "lucide-react"

export default function InsioCustomPage() {
  return (
    <div className="bg-white font-sans text-slate-900">
        <MainNavigation />
        <section className="relative w-full h-[600px] bg-[#9ca3af] overflow-hidden flex items-center">
      {/* Background Graphic Waves - Red */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/images/silkxban.webp" 
          alt="Decorative red waves" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        

        {/* Right Side: Headlines */}
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

          {/* Optional CTA to match brand style */}
          <div className="pt-4">
           
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Main Descriptive Headline */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-slate-900">
            One of the world’s smallest hearing aids, Silk gives you the confidence of 
            knowing that no one even notices you’re wearing them. All models sit 
            discreetly inside your ear.
          </h2>
        </div>

        {/* Optional divider or visual breathing room */}
        <div className="mt-16   w-1/3 mx-auto" />
      </div>
    </section>


    <section className="bg-white py-24 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Top Grid: Signia Xperience Branding */}
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
              Whether you’re in a crowded street, working in an open-plan office, 
              or dining in a busy restaurant, wherever there’s a high level of 
              ambient noise, holding a conversation requires concentration and effort. 
              Silk X tackles these challenges expertly with the true-to-life sound of 
              Signia Xperience. So you hear what matters to you. All day long, in every situation.
            </p>
           
          </div>
        </div>

        {/* Bottom Grid: Silk X Product Info */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <div className="flex justify-center md:order-1">
            <img 
              src="/images/ signiapro.png" 
              alt="Signia Silk X hearing aids" 
              className="w-full max-w-md h-auto drop-shadow-xl"
            />
          </div>

          {/* Product Content */}
          <div className="space-y-8 md:order-2">
            <h2 className="text-5xl font-medium tracking-tight">Silk X</h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              The only ready-to-wear CIC available on the Signia Xperience platform 
              delivers clear speech understanding in an ultra-discreet size with 
              instant fit. Thanks to its flexible silicone Click Sleeves, Silk X 
              sits securely in the ear for a brilliant fit on the spot.
            </p>

          
          </div>
        </div>

      </div>
    </section>

    {/* Call to Action Footer */}    <section className="py-24 bg-slate-50">
    <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-medium">The hearing professional in your pocket</h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                The Signia app lets you contact your hearing care professional via your 
                smartphone whenever you need remote support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-4">
               
                <div className="flex gap-4">
                  <img src="/images/Apple-App-Store-Badge_en_300px.webp" alt="Get it on Google Play" className="h-12 cursor-pointer" />
                  <img src="/images/google-play-badge_en_300.webp" alt="Download on the App Store" className="h-12 cursor-pointer" />
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