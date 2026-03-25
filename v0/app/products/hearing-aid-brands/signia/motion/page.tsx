 "use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  Zap, 
  BatteryCharging, 
  Bluetooth, 
  Activity, 
  Waves, 
  Mic2,
  Ear,
  ShieldCheck
} from "lucide-react"
const videoGuides = [
  { 
    title: "How to insert Styletto AX in the ear", 
    url: "https://www.youtube.com/embed/kOq_kUAraJE" 
  },
  { 
    title: "How to take Styletto AX out of the ear", 
    url: "https://www.youtube.com/embed/nrrPN7KJYac" 
  },
  { 
    title: "How to turn Styletto AX on and off", 
    url: "https://www.youtube.com/embed/bmMVzPtxzfs" 
  },
  { 
    title: "How to replace an eartip on Styletto AX", 
    url: "https://www.youtube.com/embed/_7hdSuEQmC0" 
  },
  { 
    title: "How to clean Styletto AX", 
    url: "https://www.youtube.com/embed/Wcpgx5aSn5s" 
  },
  { 
    title: "How to charge Styletto AX with the Styletto Charger", 
    url: "https://www.youtube.com/embed/Wqm5418dYGA" 
  },
  { 
    title: "How to charge the Styletto Charger", 
    url: "https://www.youtube.com/embed/VcEPP9jxrvo" 
  },
  { 
    title: "How to charge Styletto AX with Styletto Dry&Clean", 
    url: "https://www.youtube.com/embed/z7FzvLhZluc" 
  },
  { 
    title: "How to use CallControl with Styletto AX", 
    url: "https://www.youtube.com/embed/8qpgHNlht0g" 
  }
];
const motionFeatures = [
  { label: "Bluetooth Streaming", icon: "/images/motionf1.webp" },
  { label: "Recharge on-the-go", icon: "/images/motionf2.webp" },
  { label: "AI Digital Assistant", icon: "/images/motionf3.webp" },
  { label: "Automatic Situation Detection", icon: "/images/motionf4.webp" },
];
const motionModels = [
  { 
    name: "Motion Charge&Go X", 
    img: "/images/motionx1.png",
    description: "Compact and powerful" 
  },
  { 
    name: "Motion Charge&Go P X", 
    img: "/images/motionx2.png",
    description: "Versatile performance" 
  },
  { 
    name: "Motion Charge&Go SP X", 
    img: "/images/motionx3.png",
    description: "Super power for severe loss" 
  }
];
export default function MotionPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      <section className="relative min-h-[600px] md:min-h-[800px] flex items-center overflow-hidden font-sans">
      {/* Background with Blue Gradient and Brand Graphic */}
      <div className="absolute inset-0 z-0">
        {/* The primary blue background color */}
        <div className="absolute inset-0 bg-[#0070c0]" />
        
        {/* Lifestyle Hero Image */}
        <img 
          src="/images/motionban.webp" 
          alt="Woman smiling with Signia Motion X" 
          className="absolute inset-0 w-full h-full object-cover object-right md:object-center opacity-90"
        />
        
        {/* Decorative Wave Graphics (Matches the screenshot's fine lines) */}
        <div className="absolute inset-0 bg-[url('/images/blue-wave-pattern.svg')] bg-cover opacity-30 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-8">
        <div className="max-w-xl text-white space-y-2">
          {/* Brand Tagline */}
          <h1 className="text-4xl md:text-6xl font-normal leading-tight">
            Be <br />
            Brilliant™
          </h1>
          
          {/* Product Name */}
          <p className="text-2xl md:text-4xl font-light opacity-95 tracking-wide">
            with Signia Motion X
          </p>
        </div>
      </div>
    </section>

      
    <section className="py-24 bg-white font-sans">
      <div className="container mx-auto max-w-7xl px-6 text-center">
        
        {/* Headline Section */}
        <div className="mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">
            Perform at your best in every situation
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 font-light">
            Signia Motion X hearing aids lets you take your performance to the next level.
          </p>
        </div>

        {/* Product Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end mb-20">
          {motionModels.map((model, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-8 group">
              <div className="relative w-full aspect-[3/4] flex items-end justify-center">
                <img 
                  src={model.img} 
                  alt={model.name} 
                  className="w-auto h-full max-h-[300px] md:max-h-[400px] object-contain transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-slate-900 leading-tight">
                {model.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Technology Highlight Text */}
        <div className="max-w-4xl mx-auto border-t border-slate-100 pt-16">
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
            They feature revolutionary sensor technology that even recognizes if you 
            are moving or not, ensuring that you experience everything going on 
            around you as you move through your day.
          </p>
        </div>

      </div>
    </section>
   
    <section className="py-24 bg-white font-sans">
      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Row 1: Key Icon Grid */}
        <h2 className="text-3xl font-medium text-center mb-16 text-slate-900">Key features:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {motionFeatures.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-slate-900 flex items-center justify-center mb-6">
                <img src={feature.icon} alt={feature.label} className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              <p className="text-sm md:text-base font-medium text-slate-800 leading-tight">
                {feature.label}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2: Performance Highlights */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Battery Performance */}
          <div className="flex flex-col items-center text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
              Up to 61 hours of use on a single charge
            </h3>
            <p className="text-lg text-slate-600 max-w-md">
              No more annoying battery changes: these modern all-rounders are rechargeable, 
              delivering up to a whopping 61 hours of use on a single charge!
            </p>
            <img 
              src="/images/motionb1.webp" 
              alt="Motion X Charging Case" 
              className="w-48 h-auto pt-4" 
            />
          </div>

          {/* Design & Fit */}
          <div className="flex flex-col items-center text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight">
              Sleek design for the right fit
            </h3>
            <p className="text-lg text-slate-600 max-w-md">
              The new smaller design delivers a Super Fit together with Super Power and Super Features.
            </p>
            <img 
              src="/images/motionb2.webp" 
              alt="Motion X Hearing Aids" 
              className="w-64 h-auto pt-4" 
            />
          </div>

        </div>
      </div>
    </section>


    <section className="bg-white py-16 font-sans">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Main Section Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-medium text-slate-900 mb-20">
          Connectivity and app control
        </h2>

        <div className="space-y-24">
          {/* AI Powered Personal Sound Row */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-start">
              {/* Pink AI Icon Container */}
              <div className="w-64 h-64 md:w-72 md:h-72  rounded-[3rem] flex items-center justify-center p-8">
                <img 
                  src="/images/motiong.webp" 
                  alt="Signia Assistant AI" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-medium text-slate-900">
                AI powered personal sound
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                The revolutionary Signia Assistant in the Signia app lets you optimize the sound for you personally in real-life situations.
              </p>
       
            </div>
          </div>

          {/* The Hearing Professional in Your Pocket Row */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h3 className="text-3xl font-medium text-slate-900">
                The hearing professional in your pocket
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                The Signia app lets you contact your hearing care professional via your smartphone whenever you need remote support.
              </p>
         
            </div>
            <div className="order-1 md:order-2">
              {/* Remote Support Lifestyle Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-slate-200">
                <img 
                  src="/images/motiongg.webp" 
                  alt="Using the Signia App for remote support" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>

          {/* Bottom Heading Section */}
          <div className="pt-12 space-y-6">
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900">
              Be Brilliant with the right choice for you
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed font-light max-w-5xl">
              Because everyone’s hearing needs are different, Motion X comes in a range of models to suit different degrees of hearing loss, from very small to fully loaded with Super Power to tackle profound hearing loss:
            </p>
          </div>
        </div>
      </div>
    </section>


    <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <p className="text-xl font-medium mb-12 text-slate-800">
            All models come with a compact charger with the option to upgrade to a Dry&Clean charger for Power or SuperPower versions.
          </p>
          
          {/* Displaying the 4 chargers as one single wide asset as requested */}
          <div className="flex justify-center mb-16">
            <img 
              src="/images/motionv.webp" 
              alt="Signia Motion X Charging range" 
              className="w-full max-w-6xl h-auto"
            />
          </div>

          <div className="max-w-4xl mx-auto border-t border-slate-100 pt-16">
            <p className="text-2xl md:text-3xl font-light text-slate-800 leading-tight italic">
              The innovative Signia Motion X range of sleek, modern, rechargeable devices stands up to any challenge to let you <br />
              <span className="font-semibold block mt-2">Be Brilliant – all day, every day.</span>
            </p>
          </div>
        </div>
      </section>


      <section className="py-24 bg-white font-sans">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Product Image */}
          <div className="flex justify-center">
            <img 
              src="/images/motio.png" 
              alt="Motion Charge&Go X in Black" 
              className="w-full max-w-md h-auto drop-shadow-lg"
            />
          </div>

          {/* Right: Product Details */}
          <div className="space-y-8">
            <h2 className="text-5xl font-medium text-slate-900">Motion Charge&Go X</h2>
            
            <div className="space-y-6 text-xl text-slate-700 font-light leading-relaxed">
              <p>
                Comparable in its small size to a 312-device, the new Motion Charge&Go X 
                is the ultimate BTE combining sleek design with rechargeability, 
                Bluetooth, and the Signia Assistant.
              </p>
              <p>
                It is flexible to fit, easy to use and comfortable to wear, making 
                this an easy choice for those looking for convenience and 
                robustness – all in one.
              </p>
            </div>

        
          </div>

        </div>
      </div>
    </section>


    <section className="py-24 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="relative">
                {/* Background Wave Graphic matching screenshot */}
                <div className="absolute inset-0 opacity-20 bg-[url('/images/red-wave.svg')] bg-center bg-no-repeat" />
                <img 
                  src="/images/motionz.webp" 
                  alt="EarWear 3.0 Components" 
                  className="relative z-10 w-full h-auto"
                />
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl font-medium">EarWear 3.0</h2>
              <div className="space-y-6 text-xl text-slate-600 font-light leading-relaxed">
                <p>
                  The new miniReceiver 3.0, ThinTube 3.0, Eartips 3.0 and Sleeves 3.0 
                  are designed for the comfortable and secure fit of your hearing aids 
                  in your ears.
                </p>
                <p>
                  The new bending and in-ear positioning of the tube/cable that connects 
                  hearing aids sitting behind your ear with your ear canal improves 
                  its appearance on your ear.
                </p>
                <p className="font-medium text-slate-900">
                  Its size reduction of 25% enables you to wear even smaller hearing aids.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {videoGuides.map((video, index) => (
            <div key={index} className="flex flex-col space-y-4">
              {/* Responsive Video Container */}
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-100 shadow-sm">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video Title */}
              <h4 className="text-sm font-medium leading-snug text-slate-900 pr-4">
                {video.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        </div>
      </footer>
    </div>
  )
}