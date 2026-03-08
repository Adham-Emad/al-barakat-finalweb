"use client"

import { useState } from "react"
import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react"

export default function PureRICPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videos = [
    { 
      title: "How to insert Styletto AX in the ear", 
      src: "https://www.youtube.com/embed/kOq_kUAraJE?si=TbwbVUUyK5Yw2WKn", 
      thumb: "/thumbs/video-1.jpg" 
    },
    { 
      title: "How to take Styletto AX out of the ear", 
      src: "https://www.youtube.com/embed/nrrPN7KJYac?si=IffiTmdRERUjWrWt", 
      thumb: "/thumbs/video-2.jpg" 
    },
    { 
      title: "How to turn Styletto AX on and off", 
      src: "https://www.youtube.com/embed/bmMVzPtxzfs?si=OeqJqpjZCMUaPyIm", 
      thumb: "/thumbs/video-3.jpg" 
    },
    { 
      title: "How to replace an eartip on Styletto AX", 
      src: "https://www.youtube.com/embed/_7hdSuEQmC0?si=LDkbgW4T3eIjQTVV", 
      thumb: "/thumbs/video-4.jpg" 
    },
    { 
      title: "How to clean Styletto AX", 
      src: "https://www.youtube.com/embed/Wcpgx5aSn5s?si=4W_nCsofqAqqn_aq", 
      thumb: "/thumbs/video-5.jpg" 
    },
    { 
      title: "How to charge Styletto AX with the Styletto Charger", 
      src: "https://www.youtube.com/embed/Wqm5418dYGA?si=wnYfB1nr_pDg-Uqe", 
      thumb: "/thumbs/video-6.jpg" 
    },
    { 
      title: "How to charge the Styletto Charger", 
      src: "https://www.youtube.com/embed/VcEPP9jxrvo?si=6ST4pCJXXiCIFKAE", 
      thumb: "/thumbs/video-7.jpg" 
    },
    { 
      title: "How to charge Styletto AX with Styletto Dry&Clean", 
      src: "https://www.youtube.com/embed/z7FzvLhZluc?si=kdcsTkcEWNHgjwwe", 
      thumb: "/thumbs/video-8.jpg" 
    },
    { 
      title: "How to use CallControl with Styletto AX", 
      src: "https://www.youtube.com/embed/8qpgHNlht0g?si=yP0soY4l-jUYRBzj", 
      thumb: "/thumbs/video-9.jpg" 
    }
  ];
   const iconData = [
    { id: 1, label: "Augmented Xperience", img: "/images/q1.webp" },
    { id: 2, label: "Auto EchoShield", img: "/images/q2.webp" },
    { id: 3, label: "Own Voice Processing 2.0", img: "/images/q3.webp" },
    { id: 4, label: "Award-winning design", img: "/images/q4.webp" },
    { id: 5, label: "Recharge on-the-go", img: "/images/q5.webp" },
    { id: 6, label: "eWindScreen", img: "/images/q6.webp" },
    { id: 7, label: "Android & iPhone Connectivity", img: "/images/q7.webp" },
    { id: 8, label: "HandsFree for iOS", img: "/images/q8.png" },
    { id: 9, label: "AI Assistant", img: "/images/q9.webp" },
    { id: 10, label: "AX Soundscape Processing", img: "/images/q10.png" }
  ];
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

      <section className="relative min-h-[600px] md:min-h-[800px] flex items-center overflow-hidden font-sans">
      {/* Background with Orange/Red Gradient Split */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-1/2 h-full bg-[#f37335]" /> {/* Signia Orange */}
        <div className="w-1/2 h-full bg-[#e62310]" /> {/* Signia Red */}
        
        {/* The Hero Subject Image */}
        <img 
          src="/images/banaxx.webp" 
          alt="Man dancing with Styletto AX" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-normal"
        />
        
        {/* Subtle overlay to ensure text contrast if needed */}
        <div className="absolute inset-0 bg-black/5 md:bg-transparent" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-8">
        <div className="max-w-2xl text-white space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] tracking-tight">
            Award-winning design 
            for brilliant speech 
            clarity
          </h1>

          {/* Sub-branding text */}
          <div className="space-y-1">
            <p className="text-xl md:text-2xl font-medium">
              Be Brilliant™
            </p>
            <p className="text-xl md:text-2xl font-light opacity-90">
              with Styletto AX
            </p>
          </div>
        </div>
      </div>
    </section>
{/* Augmented Xperience Platform Section */}
<section className="py-24 bg-white">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          
          {/* Central Product Image */}
          <div className="flex justify-center mb-16">
            <div className="relative group">
              <img 
                src="/images/charax.webp" 
                alt="Styletto AX Charging Case" 
                className="w-full max-w-md h-auto transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle shadow to ground the image */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/5 blur-xl rounded-full" />
            </div>
          </div>

          {/* Descriptive Text - Matching the photo's spacing and font weight */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-normal">
              Built on our leading-edge <strong>Augmented Xperience</strong> audiology platform, 
              Styletto AX give you the outstanding speech clarity<sup>2</sup> you need with the 
              hearing aid features you want.
            </p>
          </div>

        </div>
      </section>

      <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Title matching the screenshot style */}
        <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-16">
          Key features:
        </h2>

        {/* Responsive Icon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-16 gap-x-4">
          {iconData.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center group">
              
              {/* The Image Element inside a thin-bordered circle */}
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-[1.2px] border-slate-900 flex items-center justify-center mb-6 transition-colors group-hover:bg-slate-50">
                <img 
                  src={item.img} 
                  alt={item.label}
                  className="w-14 h-14 md:w-18 md:h-18 object-contain" 
                />
              </div>

              {/* Text Label */}
              <p className="text-sm md:text-base font-medium text-slate-800 leading-tight max-w-[160px]">
                {item.label}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* 9. Wireless Charging Section */}
    <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Charging Details */}
            <div className="space-y-8 order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Wireless charging
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed">
                <p>
                  You can recharge your Styletto AX hearing aids at home or on-the-go for 
                  up to 17 hours of use per charge. The pocket-sized charging case 
                  wireless technology enables you to simply place the charger on a 
                  charging pad instead of having to plug it into the mains.
                </p>
                <p>
                  You can also choose a Dry&Clean charger that not only charges your 
                  Styletto AX but also offers UVC cleaning and drying technology to keep 
                  your hearing aids in peak condition.
                </p>
              </div>
            </div>

            {/* Right Column: Wireless Charging Visual */}
            <div className="relative flex justify-center order-1 md:order-2">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                {/* Visual representation of the charging pad (The circular base) */}
                <div className="" />
                
                {/* The Charging Case Image */}
                <img 
                  src="/images/v332.webp" 
                  alt="Styletto AX charging case on wireless pad" 
                  className="relative z-10 w-4/5 h-auto   "
                />
              </div>
              
              {/* Subtle pulsing glow to signify "Wireless Charging" activity */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse -z-10" />
            </div>

          </div>
        </div>
      </section>



      {/* 10. Control & AI Section (Signia Assistant) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900">Be in control</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Styletto AX also give you state-of-the-art Bluetooth connectivity for Android and iOS devices. 
              So you can easily stream your phone calls, music and TV audio straight to your award-winning 
              wearwear in high-quality digital sound. You can also connect your Styletto AX to the Signia app, 
              which features groundbreaking artificial intelligence (AI) via the Signia Assistant.
            </p>
          </div>

          {/* Signia Assistant Deep Dive */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80  flex items-center justify-center p-8">
                <img 
                  src="/images/g55.webp" 
                  alt="Signia Assistant AI Icon" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900">Signia Assistant</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Inspired by the way the human brain's neural network solves challenges, the Signia Assistant offers immediate support whenever you need to adjust any settings.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                The live deep neural network AI that drives the Signia Assistant marks a revolution in hearing care. It is a living system that continuously learns about your individual needs in specific situations.
              </p>
              <Button variant="outline" className="rounded-full border-slate-900 px-8 py-6 font-bold">
                Learn more
              </Button>
            </div>
          </div>

          {/* Signia App / Remote Support */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-slate-900">The hearing professional in your pocket</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The Signia app lets you contact your hearing care professional via your smartphone whenever you need remote support.
                </p>
              </div>
          
            </div>

            <div className="flex flex-col items-center space-y-8 order-1 md:order-2">
              <img 
                src="/images/mobb Background Removed.png" 
                alt="Signia App on Smartphone" 
                className="w-full max-w-sm drop-shadow-2xl rotate-6"
              />
             
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Product Pair Image */}
          <div className="flex justify-center">
            <img 
              src="/images/ bvv.png" 
              alt="Styletto AX in Black and Fine Gold" 
              className="w-full max-w-md h-auto drop-shadow-xl"
            />
          </div>

          {/* Right: Technical Details & Color Swatches */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-5xl font-medium text-slate-900">Styletto AX</h2>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                The award-winning SLIM-RIC design<sup>1</sup> of Styletto AX is 
                smaller than its predecessor for an even more discreet fit 
                behind your ear.
              </p>
            </div>

          
          </div>

        </div>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {videos.map((vid, index) => (
            <div key={index} className="flex flex-col space-y-4">
              
              {/* YouTube Iframe Container */}
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-md bg-black">
                <iframe
                  src={vid.src}
                  title={vid.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Caption */}
              <h3 className="text-[15px] font-medium text-slate-900 leading-snug">
                {vid.title}
              </h3>
              
            </div>
          ))}
        </div>
      </div>
    </section>
      <footer className="bg-white border-t py-12 text-center text-slate-500">
        <p>© 2026 Al Barakat Hearing Centers. Official Signia Partner in KSA.</p>
      </footer>
    </div>
  )
}