import { MainNavigation } from "@/components"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from 'lucide-react';export const metadata = {
  title: "BiCore R 312 - Rexton Hearing Aids | Al-Barakat",
  description: "Discover Rexton BiCore R 312 - rugged, durable receiver-in-canal hearing aids with dual-core processing, ATEX certification, and extended battery life.",
}
 
const features = [
  "Battery runtime (without streaming) up to 89 hours",
  "Battery runtime (20h of streaming) up to 72 hours",
  "BiCore processing",
  "Direct audio streaming from iOS and Android smartphones",
  "ATEX certified"
];





export default function BiCoreRICPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      <section className="w-full font-sans">
      {/* Top Image Section */}
      <div className="relative h-[450px] md:h-[650px] lg:h-[800px] w-full overflow-hidden">
        {/* Background Lifestyle Image - Focused on intensive use/perspiration */}
        <img 
          src="/images/banxs.jpg" 
          alt="Man exercising to demonstrate hearing aid robustness" 
          className="h-full w-full object-cover object-center"
        />

        {/* Brand Accent Box Overlay */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-24 lg:pl-40">
          <div className=" bg-black/10 backdrop-blur-[2px] p-8 md:p-12 max-w-sm md:max-w-2xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-[1.1] tracking-tight">
              Robustness and <br /> 
              run time that <br /> 
              meet your needs
            </h1>
          </div>
        </div>
      </div>

    
    </section>

    <section className="bg-white py-20 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            BiCore R 312
          </h2>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* Left Side: Product Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative group">
              <img 
                src="/images/REXTON_BiCORE-colors.png" 
                alt="Rexton BiCore R 312 Hearing Aid in 10 Colors" 
                className="h-[400px] md:h-[500px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle Shadow for White Background Depth */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-slate-200/50 blur-xl rounded-full -z-10" />
            </div>
          </div>

          {/* Right Side: Features List */}
          <div className="w-full md:w-1/2">
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  {/* Custom Dot Marker */}
                  <span className="mt-2.5 h-2 w-2 rounded-full bg-slate-900 shrink-0 transition-transform group-hover:scale-125" />
                  
                  <span className="text-lg md:text-xl font-medium text-slate-700 leading-snug">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
 

  
    <section className="bg-white font-sans text-slate-900">
      {/* 1. ATEX Certification Content Area */}
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="lg:w-2/3 space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl font-bold uppercase tracking-wide">ATEX Certification</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed font-light">
              <p>
                Rexton BiCore R 312 hearing aids have an ATEX certification which verifies that they are tested and approved to be intrinsically safe for use in potentially explosive environments.
              </p>
              <p>
                They can be safely used in areas where there may be flammable substances in the air such as paint and chemical manufacturing, petrol stations and mills.
              </p>
              <p className="text-sm italic text-slate-400">
                The ATEX group/class is printed on the ATEX card, which must be available at hand when the hearing aids are used in explosive atmospheres. Ask your hearing care professional for your ATEX card.
              </p>
            </div>
          </div>

          {/* Right Icon */}
          <div className="lg:w-1/3 flex justify-center order-1 lg:order-2">
            <img 
              src="/images/atex-icon.png" 
              alt="ATEX Certification Mark" 
              className="w-40 h-40 md:w-56 md:h-56 object-contain"
            />
          </div>
        </div>
      </div>

      {/* 2. Style & Color Selection Section */}
      <div className="container mx-auto px-6 py-20 max-w-7xl border-t border-slate-100">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Choose the color that matches your style
          </h2>
          <p className="text-lg font-medium text-slate-500">
            Available in 10 different colors
          </p>
        </div>

        {/* Single Composite Image of all 10 Colors */}
        <div className="flex flex-col items-center">
          <div className="w-full">
            <img 
              src="/images/REXTON_BiCORE-colors.png" 
              alt="10 Colors of BiCore R 312: Pearl White, Grey, Silver, Dark Champagne, Granite, Black, Beige, Sandy Brown, Deep Brown, Rose Gold" 
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Subtle Mobile Instruction */}
          <p className="mt-8 text-xs uppercase tracking-widest text-slate-400 font-bold md:hidden">
            Scroll to view all finishes
          </p>
        </div>
      </div>
    </section>


    <div className="container mx-auto px-6 max-w-6xl">

        {/* 3. Video Embed Area */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-100">
          <iframe
            src="https://www.youtube.com/embed/psaKnWZfIxs?si=mtL3Zgm2J7BgtMeK" // Replace with actual Rexton ATEX video ID
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
            <div className="relative group">
              <img 
                src="/images/lifeproof-stamp.png" 
                alt="Rely On Lifeproof Rexton" 
                className="w-64 h-64 md:w-80 md:h-80 object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* 2. Content Area */}
          <div className="lg:w-2/3 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-6 mb-6">
                
                
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight"></h2>
              </div>
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
