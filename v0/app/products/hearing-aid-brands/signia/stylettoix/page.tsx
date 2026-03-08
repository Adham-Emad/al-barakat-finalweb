"use client"

import { useState } from "react"
import { MainNavigation } from "@/components"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react"

export default function PureRICPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Features updated based on Pure 312 AX and your latest screenshots
  const features = [
    {
      img: "/images/axx1.webp",
      title: "Augmented Xperience",
     },
    {
      img: "/images/axx2.webp",
      title: "Auto EchoShield",
     },
    {
      img: "/images/axx3.webp",
      title: "Own Voice Processing 2.0",
     },
    {
      img: "/images/axx4.png", 
      title: "Augmented Speech Understanding",
     },
    {
      img: "/images/axx5.png", 
      title: "Immersive Soundscape",
     },
    {
      img: "/images/axx6.png", 
      title: "AX Soundscape Processing",
     }
  ];
  const nextSlide = () => setCurrentIndex((prev) => (prev === 0 ? 3 : 0));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? 3 : 0));
  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />

     {/* Styletto IX: A Conversation Starter Section */}
     <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image - Styletto IX Lifestyle */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/styban.webp" 
            alt="Signia Styletto IX lifestyle" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay to ensure white text is readable */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-12">
          <div className="max-w-3xl text-white space-y-4">
            {/* Heading - Matching the large, clean font in the screenshot */}
            <h2 className="text-5xl md:text-8xl font-normal leading-tight tracking-tight">
              A conversation starter
            </h2>
            
            {/* Subheading */}
            <p className="text-xl md:text-3xl font-light opacity-95">
              The ultra-slim and sophisticated Signia Styletto IX
            </p>

            {/* CTA Button in your Primary Blue */}
            <div className="pt-10">
        
            </div>
          </div>
        </div>
      </section>


    

      {/* Product Detail Section (The sleek hearing aid and case) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <p className="text-2xl md:text-3xl text-slate-800 font-medium leading-relaxed mb-12">
            This sleek hearing aid, equipped with advanced technology, is a stylish 
            and distinctive choice. Embrace your style and fully participate in 
            conversations with confidence.
          </p>
          <div className="flex justify-center">
            <img 
              src="/images/styix.webp" 
              alt="Styletto IX Hearing Aids and Portable Charging Case" 
              className="w-full max-w-3xl h-auto"
            />
          </div>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/ITlAzmHo0WM?si=iDmBnXrWxQJIlCgT" // Replace with actual Styletto IX YouTube ID
              title="Styletto IX ultra-slim rechargeable hearing aid"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">
              Watch: Styletto IX Technology Overview
            </p>
          </div>
        </div>
      </section>

{/* Why Choose Styletto IX Section */}
<section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Why choose Styletto IX?
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed">
                <p>
                  Styletto IX is different from your ordinary hearing aid. It harnesses 
                  the full power of Signia Integrated Xperience with RealTime 
                  Conversation Enhancement technology to keep you connected 
                  with conversations, no matter how busy they get.
                </p>
                
                <p>
                  Enjoy its comfortable fit, all-day battery life, personalized control, 
                  and enhanced connectivity.
                </p>
                
                <p className="font-semibold text-slate-900">
                  All this and super slim.
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4">
               
              </div>
            </div>

            {/* Right Column: IX Diagram */}
            <div className="relative flex justify-center">
              <div className="w-full max-w-lg animate-in fade-in zoom-in duration-1000">
                <img 
                  src="/images/livee.webp" 
                  alt="Signia IX RealTime Conversation Enhancement Diagram" 
                  className="w-full h-auto object-contain"
                />
              </div>
              
              {/* Decorative background pulse for the diagram */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            </div>

          </div>
        </div>
      </section>


      {/* 6 Reasons to Choose Styletto IX Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-slate-900">
            6 reasons to choose Styletto IX
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {[
              {
                title: "Contribute to the conversation",
                text: "Our Signia Integrated Xperience technology is designed to adapt to the wearer's conversational environment in real time, for a truly personalized hearing experience.",
                img: "/images/f11.webp"
              },
              {
                title: "The sleek and comfortable choice",
                text: "A beautiful ultra-slim design also takes up less space behind the ear. You can even comfortably wear it with glasses.",
                img: "/images/f22.webp"
              },
              {
                title: "Diverse color options",
                text: "Available in seven distinctive colors.",
                img: "/images/f33.webp"
              },
              {
                title: "Enhanced connectivity",
                text: "Enjoy Bluetooth streaming and hands-free calling for iPhones and devices equipped with Bluetooth LE Audio. Android ASHA is also supported for audio streaming.",
                img: "/images/f44.webp"
              },
              {
                title: "Powered for all-day conversations",
                text: "Never miss a word with a rechargeable battery that lasts all day and a wireless charging case that lets you charge on the go.",
                img: "/images/f55.webp"
              },
              {
                title: "Tailored to your hearing",
                text: "Adjust settings to your unique hearing needs via a user-friendly mobile app.",
                img: "/images/f66.webp"
              }
            ].map((reason, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-6 group">
                {/* Circular Image Container */}
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-white ring-1 ring-slate-100 transition-transform duration-500 group-hover:scale-105">
                  <img 
                    src={reason.img} 
                    alt={reason.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Text Content */}
                <div className="space-y-3 max-w-xs">
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {reason.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* 4. Expert Demonstration Section (Video Showcase) */}
<section className="py-24 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          {/* Header text directly from the screenshot */}
          <div className="space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl  text-slate-900">
              Watch Signia experts demonstrate what Styletto IX can do
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See the groundbreaking RealTime Conversation Enhancement technology of 
              Signia Integrated Xperience in action.
            </p>
          </div>

          {/* Video Container with premium styling */}
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/HTsiTKW1lI8?rel=0&modestbranding=1" 
              title="Signia Integrated Xperience: sound demo | Signia Hearing Aids"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Caption for the video */}
          <div className="mt-8">
            <p className="text-slate-400 font-medium uppercase tracking-[0.2em] text-xs">
              Official Technology Demonstration • Signia Hearing Aids
            </p>
          </div>
        </div>
      </section>
{/* 5. Competitive Advantage Section (Signia IX excels...) */}
<section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-6xl font-normal text-slate-900 leading-tight tracking-tight">
              Signia IX excels in enhancing speech within a <br className="hidden md:block" />
              noisy group conversation scenario, <br className="hidden md:block" />
              outperforming four top competitors.*
            </h2>
            <p className="text-[10px] md:text-xs text-slate-400 max-w-3xl mx-auto leading-relaxed pt-8">
              *Jensen NS, Wilson C, Kamkar Parsi H & Taylor B. 2023. Improving the signal-to-noise ratio in group conversations with Signia Integrated Xperience and RealTime Conversation Enhancement. Signia White Paper.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Final High-Impact CTA Banner (Screenshot: Ready to take the first step?) */}
      <section className="relative min-h-[450px] md:min-h-[550px] flex items-center overflow-hidden">
        {/* Background Image - Close up of ear/profile */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/styban.webp" 
            alt="Person ready for better hearing" 
            className="w-full h-full object-cover object-center"
          />
          {/* Red overlay to match the branding in the screenshot */}
          <div className="absolute inset-0 bg-red-600/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/20 to-red-900/60" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-medium text-white">
                Ready to take the first step to better hearing?
              </h2>
              <p className="text-2xl md:text-4xl font-light text-white">
                Try our free online hearing test.
              </p>
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                asChild 
                className="rounded-full px-12 py-8 text-xl bg-b-600  text-white font-bold border-none shadow-2xl transition-all "
              >
                <Link href="/hearing-test">Take the test</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* 7. Charging & Portability Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Charge anytime, anywhere
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Take your hearing aids on the move with our pocket-sized wireless Styletto Charger. 
                The charger case provides up to five full charges without needing to be plugged in.
              </p>
              <div className="pt-4">
                <Button 
                  variant="outline" 
                  asChild 
                  className="rounded-full border-2 border-slate-900 px-8 py-6 text-lg font-bold hover:bg-slate-900 hover:text-white transition-all"
                >
                  <Link href="/accessories">Learn more about charging solutions</Link>
                </Button>
              </div>
            </div>

            {/* Product Image (Charger Case) */}
            <div className="flex justify-center order-1 md:order-2">
              <img 
                src="/images/char Background Removed.png" 
                alt="Styletto IX pocket-sized wireless charger" 
                className="w-full max-w-md h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Detailed Product Summary & Colors */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Product Hero Image */}
            <div className="flex justify-center">
              <img 
                src=" /images/s11.png" 
                alt="Styletto IX slim-RIC hearing aids" 
                className="w-full max-w-lg h-auto rotate-[-15deg] drop-shadow-xl"
              />
            </div>

            {/* Technical Details & Color Picker */}
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-slate-900">Styletto IX</h2>
              
              <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
                <p>
                  A thin, stylish, comfortable design with advanced features that keep you 
                  part of the conversation, even in noisy environments.
                </p>
                <p>
                  With a rechargeable battery that lasts the full day and a convenient 
                  portable charging case. Appropriate for mild to severe hearing loss.
                </p>
              </div>

         
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-white border-t py-12 text-center text-slate-500">
        <p>© 2026 Al Barakat Hearing Centers. Official Signia Partner in KSA.</p>
      </footer>
    </div>
  )
}