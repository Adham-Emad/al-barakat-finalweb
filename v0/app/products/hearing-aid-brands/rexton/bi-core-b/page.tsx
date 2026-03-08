import { MainNavigation } from "@/components"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Check } from 'lucide-react';
export const metadata = {
  title: "Bi-Core B - Rexton Hearing Aids | Al-Barakat",
  description: "Discover Rexton Bi-Core B - advanced hearing technology with dual-core processing.",
}
const generalFeatures = [
  "BiCore processing with Speech Preservation Technology™",
  "Direct audio streaming via MFi or ASHA protocols*",
  "Battery operated",
  "Programmable via Noahlink Wireless",
  "Integrated telecoil",
  "CROS compatible*",
  "Child safe options: battery door, rocker switch, and earhook"
];

const models = [
  {
    name: "BiCore B M",
    loss: "Mild to moderate hearing loss",
    battery: "Up to 142 h (without streaming) / 129 h (with 20h streaming)",
    image: "/images/bm.webp"
  },
  {
    name: "BiCore B P",
    loss: "Moderate to severe hearing loss",
    battery: "Up to 148 h (without streaming) / 115 h (with streaming)",
    image: "/images/bp.webp"
  },
  {
    name: "BiCore B HP",
    loss: "Severe to profound hearing loss",
    battery: "Up to 227 h (without streaming) / 217 h (with 60h streaming)",
    image: "/images/hp.webp"
  }
];
export default function BiCoreBPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      <section className="relative w-full overflow-hidden bg-black font-sans">
      {/* Top Image Content Area */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full">
        {/* Background Lifestyle Image */}
        <img 
          src="/images/rexbann.jpg" 
          alt="Woman wearing BiCore B hearing aid" 
          className="h-full w-full object-cover object-center"
        />

        {/* Overlay Text Box */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 md:left-20 lg:left-32">
          <div className=" bg-transparent px-6 py-4 md:px-10 md:py-6 max-w-xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white  leading-tight tracking-tight">
              Extraordinarily long <br /> battery life
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Branding Bar */}
      <div className="w-full bg-white py-10 md:py-16 flex justify-center items-center">
        <h2 className="text-4xl md:text-6xl font-bold text-black uppercase tracking-widest">
          BiCore B
        </h2>
      </div>
    </section>
    <section className="bg-white py-24 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Top Section: Features List & Hero Image */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src="/images/bbfir.webp" 
              alt="Rexton BiCore B Models" 
              className="w-full max-w-md h-auto drop-shadow-md"
            />
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold uppercase tracking-wider text-slate-400 mb-8">
              Key Technology
            </h3>
            <ul className="space-y-4">
              {generalFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-lg text-slate-700">
                  <Check className="h-6 w-6 text-slate-900 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-400 mt-6">* except PL10</p>
          </div>
        </div>

        {/* Bottom Section: Model Comparison */}
        <div className="grid md:grid-cols-3 gap-12">
          {models.map((model, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="h-64 flex items-center justify-center mb-8 transition-transform duration-300 group-hover:-translate-y-2">
                <img src={model.image} alt={model.name} className="h-full w-auto object-contain" />
              </div>
              <h4 className="text-2xl font-bold mb-4">{model.name}</h4>
              <div className="space-y-3">
                <p className="font-medium text-slate-500">{model.loss}</p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm font-semibold uppercase text-slate-400 mb-1">Battery Run Time</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{model.battery}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>


    <section className="bg-white font-sans text-slate-900">
      {/* 1. Color Selection Sub-section */}
      <div className="container mx-auto px-6 py-24 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Text */}
          <div className="lg:w-1/3 space-y-4 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Choose the color that matches your style
            </h2>
            <p className="text-lg text-slate-500 font-light">
              Available in 10 different colors.
            </p>
          </div>
          
          {/* Right Side: Single Image showing all colors */}
          <div className="lg:w-2/3 flex justify-center">
            <img
              src="/images/rexton-bicore-colors.png"
              alt="Rexton BiCore B available in 10 colors: Pearl White, Grey, Silver, Dark Champagne, Granite, Black, Beige, Sandy Brown, Deep Brown, and Rose Gold"
              className="w-full max-w-4xl h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* 2. ATEX & Experience Sub-section */}
      <div className="container mx-auto px-6 py-24 max-w-5xl space-y-24">
        
        {/* ATEX Certification */}
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="shrink-0">
            <img 
              src="/images/atex-icon.png" 
              alt="ATEX Certification Mark" 
              className="w-32 h-32 object-contain"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold uppercase tracking-wide">ATEX Certification</h3>
            <p className="text-slate-600 leading-relaxed font-light">
              Rexton BiCore R-Li and R-Li T have an ATEX certification which verifies that they are tested and approved to be intrinsically safe for use in potentially explosive environments.
            </p>
            <p className="text-slate-600 leading-relaxed font-light">
              They can be safely used in areas where there may be flammable substances in the air such as paint and chemical manufacturing, petrol stations and mills.
            </p>
          </div>
        </div>

        {/* Smooth Listening Experience */}
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="shrink-0">
            <img 
              src="/images/rxbicore-icon.png" 
              alt="RX BiCore Technology Logo" 
              className="w-32 h-32 object-contain"
            />
          </div>
          <div className="space-y-4 flex-1">
            <h3 className="text-2xl font-bold uppercase tracking-wide">A smooth all-round listening experience</h3>
            <p className="text-slate-600 leading-relaxed font-light">
              BiCore hearing aids deliver performance you can trust. They have an ultra-quick binaural link, so left and right hearing aids are always synchronized and react instantly and precisely to changes in the sound environment.
            </p>
            <p className="text-slate-600 leading-relaxed font-light">
              Embedded Speech Preservation Technology® removes unwanted noise and emphasizes speech sounds so you can focus on the conversation, even in busy environments.
            </p>
            
            <div className="pt-8">
             
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary">
            <CardContent className="p-8 text-center text-primary-foreground md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Experience Rexton Innovation</h2>
              <p className="mb-6 text-lg opacity-90">
                Discover the difference dual-core technology makes. Schedule your consultation.
              </p>
              <Button asChild size="lg" variant="secondary" className="transition-all hover:scale-105">
                <Link href="/booking">Book Your Appointment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>


      <footer className="border-t py-12 bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 Al Barakat Hearing Centers. Official Signia Partner in KSA.</p>
        </div>
      </footer>
    </div>
  )
}
