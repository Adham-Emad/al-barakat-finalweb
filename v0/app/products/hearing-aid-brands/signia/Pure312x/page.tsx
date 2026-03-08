"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function PureBCTIXPage() {
  const videoSupport = [
    { title: "How to turn Pure 312 AX on and off", id: "6oNf4yV-6_M" },
    { title: "How to exchange the battery", id: "3I9S3P_Y9k8" },
    { title: "How to connect to the app", id: "G5R19U3y_h8" },
    { title: "How to use CallControl", id: "dQw4w9WgXcQ" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />

      {/* Hero Section: Text on Right, White Color */}
      <section className="relative min-h-[650px] md:min-h-[800px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/ban66.webp" 
            alt="Introducing Pure Charge&Go BCT IX" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-">
            <div className="hidden md:block"></div>
            <div className="flex flex-col justify-center items-sta md:items-end md:text-ri space-y-6">
              <h1 className="text-4xl md:text-7xl font-normal text-white leading-tight tracking-tight">
              Be <br />
                <span className="font-bold">Brilliant™ with Signia</span>
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium opacity-90">
              Pure 312 X
              </p>
              <div className="pt-6">
                <Button size="lg" asChild className="rounded-full px-12 py-8 text-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-2xl transition-transform hover:scale-105">
                 </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight">
          Now you can cook dinner and hear your loved ones behind you, enjoying the conversation even with all the sounds of the kitchen around you. You can go walking with friends in the park and hear them from any direction while also enjoying the sounds of the birds singing in the trees.

</h2>
          
        </div>
      </section>
 
   
      {/* RealTime Conversation Enhancement */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Modern lifestyle design
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
              Pure 312 X’s small size and clean lines exemplify slimness and comfort, with a soft rounded form for ergonomic fit on your ears. Unique metallic colors and finishes add a sublime high-end touch to match the premium sound quality.              </p>
          
            </div>
            <div className="relative">
              <img src="/images/vvb Background Removed.png" alt="IX Technology Diagram" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

 






  

      {/* RealTime Conversation Enhancement */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Small hearing aids for personalized hearing with direct streaming              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
              Pure 312 X’s smalThe new Pure 312 X also offers top Bluetooth connectivity so you can stream phone calls, music and high-quality TV audio effortlessly straight into the hearing aids. With Pure 312 X you don’t miss a beat when it comes to keeping up with friends or colleagues, enjoying your favorite music, or staying up to date with the latest Hollywood blockbusters and TV series.l size and clean lines exemplify slimness and comfort, with a soft rounded form for ergonomic fit on your ears. Unique metallic colors and finishes add a sublime high-end touch to match the premium sound quality.       
                     </p>
          <br />

                     <p className="text-lg text-slate-600 leading-relaxed">
                     Connectivity also means easy and discreet remote control and hearing care support in the palm of your hands with the new all-in-one Signia app.                     </p>
            </div>
            <div className="relative">
              <img src="/images/vccx.webp" alt="IX Technology Diagram" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
     {/* Color Availability Section (Screenshot 11) */}
     <section className="py-16 bg-slate-50 border-y">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img src="/images/cvb.png" alt="Pure 312 AX Black" className="w-full max-w-sm drop-shadow-2xl" />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Pure 312 X</h2>
              <p className="text-lg text-slate-600">
                Packed with all the high-tech features you need, such as Bluetooth streaming 
                and advanced tinnitus therapies.
              </p>
              <div>
              
              </div>
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