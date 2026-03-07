import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from 'lucide-react';export const metadata = {
  title: "BiCore R-Li / BiCore R-Li T - Rexton Hearing Aids | Al-Barakat",
  description: "Discover Rexton BiCore R-Li and BiCore R-Li T - durable, rechargeable receiver-in-canal hearing aids with dual-core processing and extended battery life.",
}
const models = [
  {
    name: "BICORE R-Li",
    description: "BiCore hearing have the lowest power consumption of any Rexton hearing aids and therefore have a 20% longer runtime.",
    details: [
      "With a full charge, wearers can expect 28 hours without streaming or 24 hours with 5 hours of streaming.",
      "With a 30-minute fast charge, you can get a runtime of 6 hours without streaming, or 4 hours with 100% streaming."
    ],
    image: "/images/rli1.webp" // Replace with your asset path
  },
  {
    name: "BICORE R-Li T",
    description: "BiCore hearing aids are also available in a rechargeable RIC version with a telecoil.",
    details: [
      "With a full charge, wearers can expect 39 hours without streaming or 36 hours with 5 hours of streaming.",
      "With a 30-minute fast charge, you can get a runtime of 9 hours without streaming, or 5 hours with 100% streaming."
    ],
    image: "/images/rli2.webp" // Replace with your asset path
  }
];





const chargingSolutions = [
  {
    title: "Travel Charger",
    description: "This portable charger provides up to 3 charges on the go — without connecting to a power outlet.",
    image: "/images/ch1.webp",
    features: [
      "Charges in 4 hours",
      "30-minute fast charging",
      "Easy insertion/removal of aids",
      "Automatic on/off",
      "USB-C, power adapter"
    ]
  },
  {
    title: "Charging + Station",
    description: "The multi-function charger makes taking care of your hearing aids easy. It not only charges your hearing aids but also includes a drying function to ensure there is no moisture build-up.",
    image: "/images/ch2.webp",
    features: [
      "Charges in 4 hours",
      "30-minute fast charge",
      "Integrated drying cycle",
      "Integrated UV sanitizing cycle"
    ],
    extraInfo: "In addition there is a UV sanitizing cycle that helps destroy any harmful germs or bacteria from the surface areas."
  },
  {
    title: "Charging Station",
    description: "This stationary charger is a very stable and easy to use unit, with a robust design and construction.",
    image: "/images/ch3.webp",
    features: [
      "Charges in 4 hours",
      "30-minute fast charging",
      "Easy insertion/removal of aids",
      "Automatic on/off",
      "Fixed charging cable",
      "Built in magnet holds hearing aids in place"
    ]
  }
];
export default function BiCoreRICPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      <section className="w-full font-sans">
      {/* Top Image Section */}
      <div className="relative h-[400px] md:h-[600px] lg:h-[750px] w-full overflow-hidden">
        {/* Background Lifestyle Image */}
        <img 
          src="/images/banvv.webp" 
          alt="Man looking up enjoying clean sound" 
          className="h-full w-full object-cover object-center"
        />

        {/* Yellow Box Overlay */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-32 lg:pl-48">
          <div className=" p-6 md:p-10 max-w-sm md:max-w-xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tight">
              Sound that stays true and clean
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Content Area - White Background Version */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 uppercase tracking-widest mb-6">
            BiCore R-Li / R-Li T
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed italic">
              Durable and rechargeable hearing aids with Speech Preservation Technology and ultra-fast synchronization
            </p>
          </div>
        </div>
      </div>
    </section>


    <section className="bg-white py-24 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* 1. Battery Performance Grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          {models.map((model, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex justify-center mb-8">
                <img 
                  src={model.image} 
                  alt={model.name} 
                  className="h-64 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">{model.name}</h3>
              <p className="text-slate-600 mb-6 font-light leading-relaxed">
                {model.description}
              </p>
              <div className="space-y-4">
                {model.details.map((detail, i) => (
                  <p key={i} className="text-sm text-slate-500 border-l-2  pl-4">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 2. ATEX Certification Section */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
          <div className="shrink-0">
            <img 
              src="/images/atex-icon.png" 
              alt="ATEX Certification Mark" 
              className="w-24 h-24 object-contain"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold uppercase tracking-wide">ATEX Certification</h3>
            <p className="text-slate-600 leading-relaxed font-light text-sm max-w-4xl">
              Rexton BiCore R-Li and R-Li T have an ATEX certification which verifies that they are tested and approved to be intrinsically safe for use in potentially explosive environments. They can be safely used in areas where there may be flammable substances in the air such as paint and chemical manufacturing, petrol stations and mills.
            </p>
          </div>
        </div>

        {/* 3. Video Embed Area */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-100">
          <iframe
            src="https://www.youtube.com/embed/hFykuzi49BY?si=X6nAcH1onYFmxQOr" // Replace with actual Rexton ATEX video ID
            title="ATEX certification | REXTON Hearing Aids"
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
          ></iframe>
          {/* Brand Frame Accent */}
          <div className="absolute inset-0 border-[8px] border-yellow-400 pointer-events-none opacity-20"></div>
        </div>
      </div>
    </section>

    <section className="bg-white py-16 md:py-24 font-sans text-[#212121]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Choose the color that matches your style
          </h2>
          <p className="mt-2 text-lg font-medium text-slate-600">
            Available in 10 different colors
          </p>
        </div>

        {/* Single Composite Image Section */}
        <div className="flex flex-col items-center">
          <div className="w-full">
            <img 
              src="/images/vcx.webp" 
              alt="Rexton BiCore R-Li available in 10 colors: Pearl White, Grey, Silver, Dark Champagne, Granite, Black, Beige, Sandy Brown, Deep Brown, and Rose Gold" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Optional: Mobile-only indicator since labels in a single photo might get small */}
          <p className="mt-6 text-sm text-slate-400 md:hidden">
            Swipe or zoom to view color details
          </p>
        </div>

      </div>
    </section>
    <section className="bg-white py-24 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-20 text-center md:text-left">
          Rechargeable at home, at work or on the go
        </h2>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {chargingSolutions.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Product Image */}
              <div className="h-64 flex items-center justify-center mb-10 group">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-6">
                {item.description}
              </p>
              
              {/* Conditional Extra Info for Charging + Station */}
              {item.extraInfo && (
                <p className="text-slate-600 font-light leading-relaxed mb-6">
                  {item.extraInfo}
                </p>
              )}

              {/* Feature List */}
              <ul className="space-y-3 mt-auto">
                {item.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="container mx-auto px-6 max-w-6xl">

        {/* 3. Video Embed Area */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-100">
          <iframe
            src="https://www.youtube.com/embed/ycxHLq86OTo?si=J5BrGMELESA2l1nU" // Replace with actual Rexton ATEX video ID
            title="ATEX certification | REXTON Hearing Aids"
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
          ></iframe>
          {/* Brand Frame Accent */} </div>
         </div>



         <section className="bg-white py-24 font-sans text-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* 1. Industrial Branding Badge */}
          <div className="lg:w-1/3 flex justify-center">
            <img 
              src="/images/lifeproof-stamp-updated.jpg" 
              alt="Rely On Lifeproof Rexton" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
            />
          </div>

          {/* 2. Content Area */}
          <div className="lg:w-2/3 space-y-8">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
                Drop, push, rain, vibration and UV exposure are part of daily life. Rexton hearing aids are built using robust components and tested extensively to ensure they can withstand whatever life throws at them.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                They are durable enough to withstand everyday challenges and harsh environments.
              </p>
              <p className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                Get to know more about Lifeproof™ and why you can Rely on Rexton.
              </p>
            </div>

            {/* 3. Action Button */}
            <div className="pt-4">
            
            </div>
          </div>
        </div>
      </div>
    </section>



    <div className="container mx-auto px-6 max-w-6xl">

        {/* 3. Video Embed Area */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-100">
          <iframe
            src="https://www.youtube.com/embed/HoBZFYqP9XA?si=DEz3vCDria7-WOaQ" // Replace with actual Rexton ATEX video ID
            title="ATEX certification | REXTON Hearing Aids"
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
          ></iframe>
          {/* Brand Frame Accent */} </div>
         </div>

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
