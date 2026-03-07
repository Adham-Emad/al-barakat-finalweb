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
const reasons = [
  {
    title: "Ready-to-wear",
    description: "Experience the satisfaction of a near-invisible device that's ready to wear and improve your hearing from day one.",
    image: "/images/silk11.webp", // Replace with your image path
  },
  {
    title: "All-day power",
    description: "Enjoy the convenience of a rechargeable battery that powers your hearing all day. Plus, the case offers charging on-the-go.",
    image: "/images/silk22.webp", // Replace with your image path
  },
  {
    title: "Focus on what matters",
    description: "It's a tiny hearing aid that makes a big difference in every conversation.",
    image: "/images/silk33.webp", // Replace with your image path
  },
  {
    title: "Personalized control",
    description: "Fine-tune your hearing aids to suit your unique hearing preferences with a user-friendly app.",
    image: "/images/silk44.webp", // Replace with your image path
  }
];
export default function InsioCustomPage() {
  return (
    <div className="bg-white font-sans text-slate-900">
        <MainNavigation />

  
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-center">
      {/* Background Image: Group of people at a bouldering/climbing gym */}
      <img 
        src="/images/silkixban.webp" 
        alt="Group of friends talking in a climbing gym" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay for text readability (optional based on image contrast) */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl text-white space-y-6">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight drop-shadow-lg">
            The only thing that changes is your hearing
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-light opacity-95 tracking-wide">
            with the near-invisible Silk Charge&Go IX
          </p>

          {/* Awards Badges Container */}
          <div className="flex items-center gap-8 pt-12 animate-fade-in">
            

            {/* CES Innovation Awards 2024 */}
       
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white py-24 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Top Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            Meet Silk Charge&Go IX – a tiny hearing aid that makes a big difference in every conversation.
          </h2>
        </div>

        {/* Product Image: Charging Case with floating Silk IX devices */}
        <div className="relative flex justify-center items-center">
          <div className="w-full max-w-3xl">
            <img 
              src="/images/prosilkix Background Removed.png" 
              alt="Silk Charge&Go IX rechargeable hearing aids with charging case" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Sub-text or CTA could be added here if needed */}
      </div>
    </section>

    <section className="bg-white py-12">
  <div className="container mx-auto px-4 max-w-6xl">
    {/* Aspect Ratio Box to match screenshot dimensions */}
    <div className="relative w-full aspect-video rounded-md overflow-hidden shadow-lg border border-gray-200">
      <iframe
        src="https://www.youtube.com/embed/Z6nadLVecfs?si=hHKDcUVQeXIBreFR"
        title="Silk Charge&Go IX tiny rechargeable hearing aids | Signia Hearing Aids"
        className="absolute top-0 left-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

<section className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-center">
      {/* Background Image: High-quality lifestyle shot */}
      <img 
        src="/images/silkkk.webp" 
        alt="Man holding a tiny Silk Charge&Go IX hearing aid" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content Overlay */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl ml-auto text-white space-y-6">
          <h2 className="text-4xl md:text-6xl font-medium leading-tight">
            Why choose <br /> Silk Charge&Go IX?
          </h2>
          
          <p className="text-lg md:text-xl font-light leading-relaxed opacity-95">
            Silk Charge&Go IX, a tiny, snug hearing aid, goes 
            unnoticed while offering advanced noise-cancellation technology. 
            Designed for comfort, ease of use, and recharging, it fits 
            seamlessly into your lifestyle and is controllable via a smartphone app.
          </p>

          <div className="pt-6">
           
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white py-24 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-medium text-center mb-20 tracking-tight">
          4 reasons to choose Silk Charge&Go IX
        </h2>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              {/* Circular Image Container */}
              <div className="w-64 h-64 md:w-full aspect-square rounded-full overflow-hidden mb-8 shadow-sm transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={reason.image} 
                  alt={reason.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-4 max-w-[280px]">
                <h3 className="text-2xl md:text-3xl font-medium leading-tight">
                  {reason.title}
                </h3>
                <p className="text-lg text-slate-600 font-light leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="bg-white py-24 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Section Title */}
        <h2 className="text-5xl md:text-6xl font-medium text-center mb-24">
          Seamless hearing with discretion
        </h2>

        {/* Top Grid: Charging Case */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-medium">
              Charge anytime, anywhere.
            </h3>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Take your hearing aids on the move with a pocket-sized wireless 
              charging case that can provide up to 3 additional charges.
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

        {/* Bottom Grid: Colors & Style */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
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
                Available in two colors, mocha and black
              </li>
              <li className="flex items-start gap-4 text-xl font-light text-slate-700">
                <span className="mt-2 w-2 h-2 rounded-full bg-slate-900 shrink-0" />
                Soft textured surface to avoid reflections for added discretion
              </li>
              <li className="flex items-start gap-4 text-xl font-light text-slate-700">
                <span className="mt-2 w-2 h-2 rounded-full bg-slate-900 shrink-0" />
                Access controls through the Signia app or a miniPocket remote control
              </li>
            </ul>

       
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