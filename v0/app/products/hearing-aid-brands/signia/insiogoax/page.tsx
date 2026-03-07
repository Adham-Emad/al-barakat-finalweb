"use client"

import React, { useState } from 'react';
import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Data Constants
const features = [
  { name: "Augmented Xperience", icon: "/images/ix1.webp" },
  { name: "Auto EchoShield", icon: "/images/ix2.webp" },
  { name: "Customized Fit", icon: "/images/ix3.webp" },
  { name: "Rechargeable", icon: "/images/ix4.webp" },
  { name: "HandsFree for iOS", icon: "/images/ix5.png" },
  { name: "eWindScreen", icon: "/images/ix6.webp" },
  { name: "Android & iPhone Connectivity", icon: "/images/ix7.webp" },
  { name: "AI Assistant", icon: "/images/ix8.webp" },
  { name: "Award-winning design", icon: "/images/ix9.webp" },
];

const videos = [
  {
    id: "vid1",
    title: "How to insert Insio Charge&Go AX",
    src: "https://www.youtube.com/embed/P-szJgGeqoU"
  },
  {
    id: "vid2",
    title: "How to take Insio Charge&Go AX out",
    src: "https://www.youtube.com/embed/E5lrV9U5yxU"
  },
  {
    id: "vid3",
    title: "How to clean Insio Charge&Go AX",
    src: "https://www.youtube.com/embed/VIyThTroDO8"
  },
  {
    id: "vid4",
    title: "How to charge Insio Charge&Go AX",
    src: "https://www.youtube.com/embed/0q_YiRODzfM"
  },
  {
    id: "vid5",
    title: "How to use CallControl with Insio AX",
    src: "https://www.youtube.com/embed/UGMHKh-2EZk"
  }
];

export default function PureRICPage() {
  // Fixed: Only one state declaration with proper TypeScript types
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden flex items-center">
        <img 
          src="/images/insiooban.webp" 
          alt="Man moving dynamically with Insio Charge&Go AX" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-xl text-white space-y-4">
            <h2 className="text-5xl md:text-6xl font-medium leading-tight drop-shadow-md">
              Rechargeable custom-fit for outstanding speech
            </h2>
            <p className="text-2xl font-light opacity-90">
              Be Brilliant™ with Insio Charge&Go AX
            </p>
          </div>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="py-24 container mx-auto px-6 max-w-6xl">
        <div className="text-center space-y-8 mb-16">
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight">
            The speech clarity you need, the hearing aid features you want
          </h3>
          <p className="text-xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
            Our new rechargeable Insio Charge&Go AX hearing aids offer brilliant 
            hearing discreetly custom-made for you.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-12">
          <div className="relative max-w-3xl w-full">
            <img 
              src="/images/insiosec Background Removed.png" 
              alt="Insio Charge&Go AX in charging case" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
          
          <div className="max-w-3xl text-center">
            <p className="text-2xl text-slate-800 font-medium leading-snug">
              Insio Charge&Go AX are tailored to the individual shape of your 
              ear canal to sit discreetly inside your ear.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-medium text-center mb-16 text-slate-900">Key features:</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-16 gap-x-8 mb-32">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 border-[1.5px] border-slate-900 rounded-full flex items-center justify-center p-4">
                  <img src={feature.icon} alt={feature.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-medium leading-tight max-w-[120px] text-slate-800">
                  {feature.name}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center space-y-8 mb-32">
            <h3 className="text-3xl md:text-5xl font-medium leading-tight max-w-5xl mx-auto text-slate-900">
              An overwhelming 95% of participants in a recent study reported 
              being satisfied with Augmented Xperience (AX).¹
            </h3>
          </div>

          <div className="flex flex-col items-center text-center space-y-8">
            <div className="flex items-center space-x-4 mb-4">
               <div className="bg-[#e2001a] rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-2xl">AX</div>
               <span className="text-3xl text-slate-500 font-light">Augmented Xperience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900">Contactless charging for effortless energy</h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-4xl">
              Insio Charge&Go AX are the first custom hearing aids with lithium-ion contactless charging. 
              Simply place Insio Charge&Go AX in the Insio Charger without worrying about any exact charging contact.
            </p>
          </div>
        </div>
      </section>

      {/* Connectivity & AI Section */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="container mx-auto px-6 max-w-6xl text-slate-900">
          <div className="text-center space-y-8 mb-24">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
              Android & iPhone connectivity <br /> for calls, music and TV
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-5xl mx-auto">
              Insio Charge&Go AX also give you state-of-the-art Bluetooth connectivity for Android and iOS devices. 
              So you can easily stream your phone calls, music and TV audio straight to your custom hearing aids 
              in high-quality digital sound.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center md:justify-end">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-[4rem] flex items-center justify-center p-12 bg-slate-50">
                <img src="/images/g55.webp" alt="Signia AI Assistant Icon" className="w-full h-auto" />
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-4xl font-medium">Signia Assistant</h3>
              <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed text-slate-900">
                <p>Inspired by the way the human brain’s neural network solves challenges, the Signia Assistant offers immediate support whenever you need to adjust any settings.</p>
                <p>93% of hearing aid wearers regard the Signia Assistant as a meaningful innovation that raises their satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Support Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900">The hearing professional in your pocket</h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                The Signia app lets you contact your hearing care professional via your 
                smartphone whenever you need remote support.
              </p>
              <div className="flex gap-4 pt-4">
                <img src="/images/Apple-App-Store-Badge_en_300px.webp" alt="App Store" className="h-12 cursor-pointer" />
                <img src="/images/google-play-badge_en_300.webp" alt="Google Play" className="h-12 cursor-pointer" />
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img src="/images/mobb.webp" alt="Signia App" className="w-full max-w-md drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Color/Style Selection Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img src="/images/insiopro.png" alt="Insio AX Custom" className="w-full max-w-md h-auto drop-shadow-2xl" />
            </div>
            <div className="space-y-10">
              <h2 className="text-5xl font-medium tracking-tight text-slate-900">Insio ChargeGo AX</h2>
              <p className="text-2xl text-slate-600 font-light leading-relaxed">
                Insio AX ITE and ITC models are tailored to the individual shape 
                of your ear canal to sit discreetly inside your ear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="bg-white font-sans text-slate-900 py-24 border-t border-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl font-medium mb-16 tracking-tight text-center">
            How to handle Insio Charge&Go AX
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {videos.map((video) => (
              <div key={video.id} className="group">
                <div className="relative aspect-video bg-slate-200 rounded-lg overflow-hidden mb-4 shadow-md">
                  {activeVideo === video.id ? (
                    <iframe
                      src={`${video.src}?autoplay=1`}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div 
                      onClick={() => setActiveVideo(video.id)}
                      className="w-full h-full cursor-pointer bg-slate-100 flex items-center justify-center relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 opacity-50" />
                      <div className="relative z-10 w-16 h-16 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                      </div>
                     
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-medium leading-snug group-hover:text-[#e2001a] transition-colors">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 text-center bg-white border-t border-slate-100">
      
      </section>

      <footer className="border-t py-12 bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 Al Barakat Hearing Centers. Official Signia Partner in KSA.</p>
        </div>
      </footer>
    </div>
  )
}