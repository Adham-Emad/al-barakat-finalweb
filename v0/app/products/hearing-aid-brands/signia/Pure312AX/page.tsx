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

      {/* Hero Section - Pure 312 AX Branding */}
      <section className="relative min-h-[600px] md:min-h-[750px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/ban33.webp" 
            alt="Be Brilliant with Pure 312 AX" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay: Darker on the right to make white text pop */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2">
            {/* Left side empty to push content to the right */}
            <div className="hidden md:block"></div>

            {/* Right side content: Aligned to the right */}
            <div className="flex flex-col justify-center items-start md:items-end md:text-right space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-7xl font-normal text-white leading-tight tracking-tight">
                  Brilliant hearing, <br />
                  <span className="font-bold">tiny hearing aids</span>
                </h1>
              </div>
              
              <div className="pt-2">
                <p className="text-xl md:text-2xl text-white font-medium opacity-90">
                  Be Brilliant™ with Pure 312 AX
                </p>
              </div>

              <div className="pt-8">
                <Button 
                  size="lg" 
                  asChild 
                   className="rounded-full px-12 py-7 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold border-none shadow-2xl transition-transform hover:scale-105"
                >
                  <Link href="/booking">Discover Pure 312 AX</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Placeholder for the next section to show transition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
           <p className="text-slate-500 uppercase tracking-widest font-bold">Signia Technology</p>
        </div>
      </section>

      {/* AX Technology Highlights (Screenshot 8) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">
            Augmented Xperience (AX)
          </h2>
          <p className="text-lg md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Despite their small size, Pure 312 AX hearing aids feature our leading 
            <strong> Augmented Xperience</strong> hearing technology. 95% of participants reported 
            being satisfied with AX technology in a recent study.
          </p>
        </div>
      </section>


      {/* 6 Features Carousel (Updated for AX Content) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-slate-900">Key Features</h2>
          
          <div className="relative mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 transition-all duration-700">
              {features.slice(currentIndex, currentIndex + 3).map((item, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-6 animate-in fade-in duration-700">
                  <div className="w-60 h-60 rounded-full overflow-hidden border-8 border-slate-50 shadow-xl">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                 </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-10">
            <button onClick={prevSlide} className="p-4 rounded-full bg-slate-50 hover:bg-white shadow-md transition-all">
              <ChevronLeft className="h-8 w-8 text-[#E30613]" />
            </button>
            <div className="flex gap-3">
              <div className={`h-3 w-3 rounded-full transition-all ${currentIndex === 0 ? 'bg-[#E30613] scale-125' : 'bg-slate-300'}`} />
              <div className={`h-3 w-3 rounded-full transition-all ${currentIndex === 3 ? 'bg-[#E30613] scale-125' : 'bg-slate-300'}`} />
            </div>
            <button onClick={nextSlide} className="p-4 rounded-full bg-slate-50 hover:bg-white shadow-md transition-all">
              <ChevronRight className="h-8 w-8 text-[#E30613]" />
            </button>
          </div>
        </div>
      </section>
      <div className="bg-white font-sans text-slate-900">
      
      {/* 1. Connectivity and App Control */}
      <section className="py-24 container mx-auto px-6 max-w-6xl text-center">
        <h2 className="text-5xl font-medium mb-12">Connectivity and app control</h2>
        <div className="space-y-8 text-xl text-slate-600 font-light leading-relaxed max-w-5xl mx-auto">
          <p>
            Pure 312 AX connects to the Signia app, which contains the Signia Assistant 
            and TeleCare support. Using artificial intelligence, the Signia Assistant 
            offers you immediate support whenever you need to adjust settings.
          </p>
          <p className="text-2xl font-normal text-slate-800">
            Pure 312 AX hearing aids are powered by batteries that deliver a runtime of around 4 days.
          </p>
        </div>
      </section>

      {/* 2. Prescription Audio Feature */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-medium">Prescription audio that performs</h2>
              <div className="space-y-6 text-xl text-slate-600 font-light leading-relaxed">
                <p>
                  Pure 312 AX give you state-of-the-art Bluetooth connectivity for 
                  Android and iOS devices. So you can easily stream your phone calls, 
                  music and TV audio straight to your tiny hearing aids in high-quality 
                  digital sound.
                </p>
                <p>
                  You can also connect your Pure 312 AX to the Signia app, which features 
                  groundbreaking artificial intelligence (AI) via the Signia Assistant.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/ghh.jpg" 
                alt="Woman in white suit dancing" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
      {/* Video Guide Section (Screenshot 10) */}



<div className="bg-white font-sans text-slate-900">
      
      {/* 1. AI Powered Personal Sound Section */}
      <section className="py-20 container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            {/* AI Assistant Face Icon */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-[3.5rem] flex items-center justify-center p-12">
              <img 
                src="/images/motiong.webp" 
                alt="AI Digital Assistant" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-medium">AI powered personal sound</h2>
            <div className="space-y-4 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                Inspired by the way the human brain’s neural network solves challenges, 
                the Signia Assistant offers immediate support whenever you need to adjust any settings.
              </p>
              <p>
                The live deep neural network AI marks a revolution in hearing care. It is a 
                living system that continuously learns about your individual needs in specific situations.
              </p>
              <p className="italic font-normal text-slate-800">
                93% of hearing aid wearers regard the Signia Assistant as a meaningful 
                innovation that raises their satisfaction.
              </p>
            </div>
          
          </div>
        </div>
      </section>

      {/* 2. Remote Support & App Download Section */}
      <section className="py-24 bg-slate-50">
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

    </div>
    <section className="py-20 bg-white font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-5xl font-medium leading-tight">
              Get extra support on the spot
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              Signia TeleCare enables you to keep in touch with your hearing 
              care professional, so you get support when you need it.
            </p>
            <p className="text-2xl font-normal">
              So you can Be Brilliant in any situation.
            </p>
            
            <div className="pt-4">
             
            </div>
          </div>

          {/* Visual Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/images/rtt.webp" 
              alt="Person using Signia TeleCare app" 
              className="w-full h-auto object-cover"
            />
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
              <h2 className="text-4xl font-bold">Pure 312 AX</h2>
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

    <section className="py-20 bg-slate-900 text-white">
  <div className="container mx-auto max-w-7xl px-4">
    <h2 className="text-3xl font-bold mb-12">How to handle Pure 312 AX</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "How to turn Pure 312 AX on and off",
          videoId: "09ih1BUFYIw?si=phBeqr0DWJDfqmV-", // Example Signia ID
        },
        {
          title: "How to exchange the battery",
          videoId: "6c9UQvx0jJU?si=DaLnJSzSDOV6xMoo", // Example Signia ID
        },
        {
          title: "How to connect to the app",
          videoId: "6c9UQvx0jJU?si=FkWrFCipw7TVdwE8", // Example Signia ID
        },
        {
          title: "How to use CallControl",
          videoId: "vzMHT5AQwM8?si=4pvP-8I2fCUw6kFJ", // Replace with your specific CallControl ID
        },
      ].map((video, i) => (
        <div key={i} className="space-y-4">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-700 bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-sm font-semibold text-slate-300 px-1 leading-snug">
            {video.title}
          </p>
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