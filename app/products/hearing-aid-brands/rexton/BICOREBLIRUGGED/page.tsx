import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

export const metadata = {
  title: "Bi-Core RIC R/R Li - Rexton Hearing Aids | Al-Barakat",
  description: "Discover Rexton Bi-Core RIC - receiver-in-canal with dual-core processing and rechargeable options.",
}
 
const features = [
  "Compact size and discrete design",
  "Ultra-fast adaption to changing environments",
  "Patented Speech Preservation Technology",
  "Advanced binaural signal processing to reduce noise efficiently",
  "Audio streaming directly from iOS or Android Smartphone",
  "Battery runtime (without streaming) up to 39 hours",
  "Battery runtime (5 hours of streaming) up to 36 hours",
  "Reinforced and sealed housing for extra toughness"
];
const ruggedFeatures = [
  "Compact size and discrete design",
  "Ultra-fast adaption to changing environments",
  "Patented Speech Preservation Technology",
  "Advanced binaural signal processing to reduce noise efficiently",
  "Audio streaming directly from iOS or Android Smartphone",
  "Battery runtime (without streaming) up to 39 hours",
  "Battery runtime (5 hours of streaming) up to 36 hours",
  "Reinforced and sealed housing for extra toughness"
];
 
export default function BiCoreRICPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      <section className="bg-white w-full font-sans text-slate-900">
      
      {/* 2. Removed 'container' class and max-width to allow full bleed */}
      <div className="relative w-full aspect-[21/9] md:aspect-[3/1] overflow-hidden">
        
        {/* Background Image - Rubber Duck Pattern */}
        <img 
          src="/images/lastban.webp" 
          alt="Real-life testing environment" 
          className="w-full h-full object-cover"
        />

        {/* Yellow Branding Overlay - Using pl-6 to pl-20 to keep text aligned with your page gutters */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:pl-20">
          <div className="    p-8 md:p-12 max-w-lg md:max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tight text-white drop-shadow-md">
              Tested by real users <br />
              in real-life situations
            </h2>
            <p className="mt-6 text-xl md:text-2xl font-bold uppercase text-white drop-shadow-sm">
              96% preferred BiCore Rugged to their own hearing aids
            </p>
            
            <div className="mt-10">
               
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6">
          <button className="text-white hover:text-[#FFD700] transition-colors">
            <ChevronLeft className="h-8 w-8" />
          </button>
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white shadow-sm"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-white/40"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-white/40"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-white/40"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-white/40"></span>
          </div>
          <button className="text-white hover:text-[#FFD700] transition-colors">
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* 3. Bottom text area remains white, but uses a container to keep text readable */}
    
    </section>
 


    <section className="bg-white py-20 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Text Area */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            Stuff Happens <br />
            <span className="text-slate-800">BiCore B-Li Rugged Can Handle It</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
            Accidents happen, we forget things and we make mistakes. It’s only human. And that’s why BiCore B-Li Rugged is so durable. It’s our toughest hearing aid and can handle all the knocks and spills that can occur in everyday life. It’s rechargeable for convenience and is super compact for a discreet fit behind the ear.
          </p>
        </div>

        {/* Features and Product Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Side: Features List */}
          <div className="w-full lg:w-3/5">
            <ul className="space-y-5">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  {/* Custom Dot Marker */}
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0" />
                  
                  <span className="text-base md:text-lg font-medium text-slate-700 leading-snug">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Product Image */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group">
              {/* Product Image */}
              <img 
                src="/images/lastpro.webp" 
                alt="Rexton BiCore B-Li Rugged Hearing Aid" 
                className="h-[400px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Subtle Shadow for Depth on White Background */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-slate-200/40 blur-2xl rounded-full -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
    


    <div className="container mx-auto px-6 max-w-6xl">

        {/* 3. Video Embed Area */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-100">
          <iframe
            src="https://www.youtube.com/embed/31fz_NSW3fE?si=c_zMNH78UmkdQ1_S" // Replace with actual Rexton ATEX video ID
            title="ATEX certification | REXTON Hearing Aids"
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
          ></iframe>
          {/* Brand Frame Accent */} </div>
         </div>

         <section className="bg-white py-24 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl space-y-32">
        
        {/* 1. Super-Compact Size Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Super-Compact Size
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Rugged is far more compact than conventional behind-the-ear hearing aids. Its size is similar to that of a receiver-in-ear hearing aid, a type of hearing aid that is normally comparatively much smaller.
            </p>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src="/images/last11.jpg" 
                alt="Close-up of BiCore Rugged fit behind the ear" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle Brand Border */}
              <div className="absolute inset-0 border-[8px] border-white/20 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* 2. Water-Resistant Construction Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Water-Resistant Construction
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                If you get caught in the rain or jump in the water without removing it, no worries. Rugged has special seals and microphone protection so it can handle immersion in water for 30 minutes at a depth of 2 meters.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest text-slate-500">IP68 Rated</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Product under water illustration */}
              <img 
                src="/images/last22.webp" 
                alt="BiCore Rugged water resistance illustration" 
                className="max-w-full h-auto drop-shadow-2xl"
              />
              {/* Graphic accents: Yellow Bubbles/Fish to match branding */}
              <div className="absolute -top-4 -right-4 w-12 h-12 border-2 border-[#FFD700] rounded-full opacity-20" />
              <div className="absolute -bottom-8 -left-8 w-20 h-20 border-4 border-[#FFD700] rounded-full opacity-10" />
            </div>
          </div>
        </div>

      </div>
    </section>


    <section className="bg-white py-24 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl space-y-32">
        
        {/* 1. Drop Proof and Scratch Resistant */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Drop Proof and Scratch Resistant
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              So, what happens if you drop your hearing aid? Not much. Rugged has a thick housing and an internal suspension that can withstand a drop of up to 2m. A scratch-resistant paint finish keeps it looking good.
            </p>
          </div>
          
          {/* Illustration Container */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="relative">
              <img 
                src="/images/last33.webp" 
                alt="Illustration showing BiCore Rugged withstands a 2m drop" 
                className="max-w-full h-auto"
              />
              {/* Impact Graphic Accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-slate-100 blur-md rounded-full -z-10" />
            </div>
          </div>
        </div>

        {/* 2. Soaps and Shampoo Resistance */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Soaps and Shampoo Are Not a Problem
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Even the mildest soaps and shampoos can contain liquids and solids that corrode electronics. Luckily, Rugged keeps them all out. So don’t panic if you forgot to take it off before stepping into the shower.
            </p>
          </div>
          
          {/* Illustration Container */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src="/images/last44.webp" 
                alt="Illustration showing BiCore Rugged is resistant to soaps and shampoo" 
                className="max-w-full h-auto drop-shadow-xl"
              />
              {/* Bubbles Accent - Branding Color */}
              <div className="absolute top-0 right-0 w-8 h-8 rounded-full border-2 border-[#FFD700] opacity-20" />
            </div>
          </div>
        </div>

      </div>
    </section>


    <section className="bg-white py-24 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl space-y-32">
        
        {/* 1. Drop Proof and Scratch Resistant */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
            SWEAT WON’T DAMAGE IT
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
            Exercise? Hard work? Unexpected exertion? No problem. Rugged is impervious to the harsh salts and damaging oils that sweat contains. So, when the going gets tough, Rugged just stays going.

</p>
          </div>
          
          {/* Illustration Container */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="relative">
              <img 
                src="/images/last33.webp" 
                alt="Illustration showing BiCore Rugged withstands a 2m drop" 
                className="max-w-full h-auto"
              />
              {/* Impact Graphic Accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-slate-100 blur-md rounded-full -z-10" />
            </div>
          </div>
        </div>
 

      </div>
    </section>

    <section className="bg-white py-24 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        
      <section className="bg-white w-full font-sans text-slate-900">
      
      {/* 2. Removed 'container' class and max-width to allow full bleed */}
      <div className="relative w-full aspect-[21/9] md:aspect-[3/1] overflow-hidden">
        
        {/* Background Image - Rubber Duck Pattern */}
        <img 
          src="/images/lastban.webp" 
          alt="Real-life testing environment" 
          className="w-full h-full object-cover"
        />

        {/* Yellow Branding Overlay - Using pl-6 to pl-20 to keep text aligned with your page gutters */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:pl-20">
          <div className="    p-8 md:p-12 max-w-lg md:max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tight text-white drop-shadow-md">
              Tested by real users <br />
              in real-life situations
            </h2>
            <p className="mt-6 text-xl md:text-2xl font-bold uppercase text-white drop-shadow-sm">
              96% preferred BiCore Rugged to their own hearing aids
            </p>
            
            <div className="mt-10">
               
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6">
          <button className="text-white hover:text-[#FFD700] transition-colors">
            <ChevronLeft className="h-8 w-8" />
          </button>
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white shadow-sm"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-white/40"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-white/40"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-white/40"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-white/40"></span>
          </div>
          <button className="text-white hover:text-[#FFD700] transition-colors">
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* 3. Bottom text area remains white, but uses a container to keep text readable */}
    
    </section>

        {/* 2. Color Selection (Using Single Composite Image) */}
        <div className="pt-20 border-t border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
              Tough Has Never Looked So Good
            </h2>
            <p className="text-xl font-medium text-slate-500">
              Available in 8 two-toned shades.
            </p>
          </div>

          <div className="w-full">
            <img 
              src="/images/last77.webp" 
              alt="Rexton BiCore B-Li Rugged available in 8 two-toned shades" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
    


    <section className="bg-white font-sans text-slate-900">
      {/* 1. ATEX Certification Section */}
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
          
          {/* ATEX Icon */}
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
            <img 
              src="/images/atex-icon.png" 
              alt="ATEX Certification Mark" 
              className="w-48 h-48 object-contain"
            />
          </div>

          {/* ATEX Text Content */}
          <div className="w-full lg:w-3/4 space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight">ATEX Certification</h2>
            <div className="space-y-4 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                Rexton BiCore R-Li and R-Li T have an ATEX certification which verifies that they are tested and approved to be intrinsically safe for use in potentially explosive environments.
              </p>
              <p>
                They can be safely used in areas where there may be flammable substances in the air such as paint and chemical manufacturing, petrol stations and mills.
              </p>
           <br />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl">

{/* 3. Video Embed Area */}
<div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-100">
  <iframe
    src="https://www.youtube.com/embed/hFykuzi49BY?si=9DH8Bew3J875U0y-" // Replace with actual Rexton ATEX video ID
    title="ATEX certification | REXTON Hearing Aids"
    className="absolute top-0 left-0 w-full h-full"
    allowFullScreen
  ></iframe>
  {/* Brand Frame Accent */}
   </div>
 </div>
      </div>

      {/* 3. Smooth Listening Experience Section */}
      <div className="border-t border-slate-100 py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="lg:w-2/3 space-y-8">
              <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight">
                With BiCore Technology for a 
                Smooth All-Round Listening Experience
              </h2>
              <div className="space-y-6 text-xl text-slate-600 font-light leading-relaxed">
                <p>
                  BiCore hearing aids deliver performance you can trust. They have an ultra-quick binaural link, so left and right hearing aids are always synchronized and react instantly and precisely to changes in the sound environment.
                </p>
                <p>
                  Embedded Speech Preservation Technology® removes unwanted noise and emphasizes speech sounds so you can focus on the conversation, even in busy environments.
                </p>
              </div>
            </div>

            {/* Brand Logo */}
            <div className="lg:w-1/3 flex justify-center">
              <img 
                src="/images/rxbicore-logo.png" 
                alt="RX BiCore Technology Logo" 
                className="w-72 h-72 object-contain"
              />
            </div>

          </div>
        </div>
      </div>
    </section>





    <section className="bg-white py-20 md:py-32 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-16 md:mb-24">
          Fast and Easy Charging
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* Left Side: Product Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative group max-w-md w-full">
              <img 
                src="/images/last99.webp" 
                alt="Rexton Charging Station" 
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle floor shadow for white background */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-slate-200/50 blur-xl rounded-full -z-10" />
            </div>
          </div>

          {/* Right Side: Correct Data Content */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Charging Station
              </h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed max-w-md">
                This stationary charger is a very stable and easy to use unit, with a robust design and construction.
              </p>
            </div>

            {/* Feature List from Screenshots */}
            <ul className="space-y-4 pt-6 border-t border-slate-100 max-w-md">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-black shrink-0" />
                <span className="text-base md:text-lg font-bold">Charges in 4 hours</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-black shrink-0" />
                <span className="text-base md:text-lg font-bold">30-minute fast charging</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-black shrink-0" />
                <span className="text-base md:text-lg font-bold">Easy insertion/removal of aids</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-black shrink-0" />
                <span className="text-base md:text-lg font-bold">Automatic on/off</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-black shrink-0" />
                <span className="text-base md:text-lg font-bold">Fixed charging cable</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-black shrink-0" />
                <span className="text-base md:text-lg font-bold">Built in magnet holds hearing aids in place</span>
              </li>
            </ul>
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
