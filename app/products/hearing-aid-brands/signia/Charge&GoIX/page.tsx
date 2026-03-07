"use client"



import { useState } from "react"

import { MainNavigation } from "@/components/main-navigation"

import { Button } from "@/components/ui/button"

import Link from "next/link"

import { 

  PlayCircle, 

  ChevronLeft, 

  ChevronRight 

} from "lucide-react"



export default function PureRICPage() {

  const [currentIndex, setCurrentIndex] = useState(0);


  const pairingVideos = [
    { title: "Pairing Pure Charge&Go BCT IX to an iPhone", url: "https://www.youtube.com/embed/IYcws0FSvE0?si=Q7gtbZ8L_1SGyFAU" },
    { title: "Pairing Pure Charge&Go BCT IX to an Android phone", url: "https://www.youtube.com/embed/_HiFo9zsFcE?si=YuHRWuhZutqV8HKX" },
    { title: "Pairing Pure Charge&Go BCT IX to a PC", url: "https://www.youtube.com/embed/gq9NWZ8ZRmw?si=92IEAfY2mOYxY348" },
    { title: "How to switch Pure Charge&Go BCT IX streaming connection between an iPhone and a PC", url: "https://www.youtube.com/embed/QBRnfI-Dc7s?si=tsF00BQNminpbxZF" },
    { title: "How to switch Pure Charge&Go BCT IX streaming connection between an Android phone and a PC", url: "https://www.youtube.com/embed/O0FbmC9M-_c?si=dlQciJvNzOLHu7tf" },
  ];
  const features = [

    {

      img: "/images/cu1.webp",

      title: "Connect to the conversation",

      text: "Hear what you need to hear, when you need to hear it – no matter your phone or the way you want to connect."

    },

    {

      img: "/images/cu2.webp",

      title: "Enhanced connectivity",

      text: "Connect to Signia Integrated Xperience via MFi, ASHA, LE Audio (with or without telecoil) and now, Bluetooth® Classic."

    },

    {

      img: "/images/cu3.webp",

      title: "Boost communication",

      text: "Whichever model you choose, the Pure Charge&Go IX family is designed to ensure your own voice sounds clear and concise."

    },

    {

      img: "/images/cu4.webp", // Mapping to Screenshot 7

      title: "Make adjustments in real-time",

      text: "With access to the Signia Assistant, your personal AI helper, enjoy 24/7 support for sound customization and troubleshooting."

    },

    {

      img: "/images/cu5.webp", // Mapping to Screenshot 7

      title: "Power for all-day conversations",

      text: "The Pure Charge&Go IX family is available with a small, lightweight, on-the-go charger, ensuring you're always powered up."

    },

    {

      img: "/images/cu6.webp", 

      title: "Crystal Clear Focus",

      text: "Advanced noise suppression allows you to focus on speech even in noisy restaurants."

    }

  ];



  const nextSlide = () => {

    setCurrentIndex((prev) => (prev === 0 ? 3 : 0));

  };



  const prevSlide = () => {

    setCurrentIndex((prev) => (prev === 0 ? 3 : 0));

  };



  return (

    <div className="min-h-screen">

      <MainNavigation />



      {/* Hero Section - White Text & Background Banner */}

      <section className="relative min-h-[500px] md:min-h-[650px] flex items-center overflow-hidden">

        <div className="absolute inset-0 z-0">

          <img 

            src="/images/ban.webp" 

            alt="People in conversation" 

            className="w-full h-full object-cover object-center"

          />

          <div className="absolute inset-0 bg-black/30" />

        </div>



        <div className="container relative z-10 mx-auto max-w-7xl px-4">

          <div className="grid md:grid-cols-2">

            <div className="hidden md:block"></div>

            <div className="flex flex-col justify-center items-start space-y-4">

              <h1 className="text-4xl md:text-6xl font-normal text-white leading-tight tracking-tight">

                Introducing Pure <br />

                <span className="font-bold">Charge&Go BCT IX</span>

              </h1>

              <div className="pt-2">

                <p className="text-lg md:text-xl text-white font-medium">

                  Bluetooth® Connectivity Transformed

                </p>

              </div>

              <div className="pt-6">

            

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* Bluetooth Logo Section - Large & Centered */}

      <section className="py-20 md:py-32 bg-background border-b">

        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">

          <div className="w-full max-w-5xl flex justify-center mb-12">

            <img 

              src="/images/p11 Background Removed.png" 

              alt="Bluetooth Connectivity Transformed Logo" 

              className="w-full max-w-[600px] md:max-w-[850px] h-auto object-contain transition-transform duration-500 hover:scale-105" 

            />

          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground max-w-3xl">

            Pure Charge&Go BCT IX is joining the Pure Charge&Go IX family

          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">

            Access the market's smallest* Bluetooth®-compatible RIC hearing aid, 

            with a runtime of 36 hours on one charge.

          </p>

        </div>

      </section>



      {/* YouTube Video Section */}

      <section className="py-16 md:py-24 bg-muted/30 border-y">

        <div className="container mx-auto max-w-5xl px-4 text-center">

          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl mb-10 bg-black">

            <iframe

              className="absolute inset-0 w-full h-full"

              src="https://www.youtube.com/embed/0fHS3TYitA8?si=MwoEW4OqkJCw_nvU"

              title="Signia Pure Charge&Go IX Expert Demo"

              allowFullScreen

            ></iframe>

          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">

            Watch Signia experts demonstrate what Pure Charge&Go IX can do

          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">

            See the groundbreaking RealTime Conversation Enhancement technology in action.

          </p>

        </div>

      </section>



      {/* Technology Section */}

      <section className="py-16 md:py-24">

        <div className="container mx-auto max-w-7xl px-4">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div className="space-y-6">

              <h2 className="text-3xl md:text-4xl font-bold">Why choose Pure Charge&Go IX?</h2>

              <p className="text-muted-foreground text-lg leading-relaxed">

                Harness the full power of <strong>Signia Integrated Xperience</strong>. 

                Stay involved no matter how busy it gets with a hearing aid that offers 

                a comfortable fit, easy-to-use tactile push button, and enhanced connectivity.

              </p>

              <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/5">

                Signia Integrated Xperience

              </Button>

            </div>

            <div className="flex justify-center">

              <img src="/images/gg2.webp" alt="IX Technology" className="w-full max-w-sm h-auto" />

            </div>

          </div>

        </div>

      </section>



      {/* Carousel Section - 6 Features, showing 3 at a time */}

      <section className="py-16 md:py-24 bg-muted/20 overflow-hidden">

        <div className="container mx-auto max-w-7xl px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-16">Reasons to choose Pure Charge&Go IX</h2>

          

          <div className="relative mb-12">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 transition-all duration-500">

              {features.slice(currentIndex, currentIndex + 3).map((feature, idx) => (

                <div key={idx} className="flex flex-col items-center space-y-4 animate-in fade-in duration-700">

                  <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-background shadow-lg bg-white">

                    <img src={feature.img} alt={feature.title} className="w-full h-full object-cover" />

                  </div>

                  <h3 className="text-xl font-bold">{feature.title}</h3>

                  <p className="text-sm text-muted-foreground max-w-xs">{feature.text}</p>

                </div>

              ))}

            </div>

          </div>



          {/* Navigation Arrows & Dots */}

          <div className="flex justify-center items-center gap-6">

            <button onClick={prevSlide} className="p-2 rounded-full hover:bg-background shadow-sm transition-colors">

              <ChevronLeft className="h-8 w-8 text-primary" />

            </button>

            

            <div className="flex gap-2">

              <div className={`h-2.5 w-2.5 rounded-full transition-colors ${currentIndex === 0 ? 'bg-primary' : 'bg-muted-foreground/30'}`} />

              <div className={`h-2.5 w-2.5 rounded-full transition-colors ${currentIndex === 3 ? 'bg-primary' : 'bg-muted-foreground/30'}`} />

            </div>



            <button onClick={nextSlide} className="p-2 rounded-full hover:bg-background shadow-sm transition-colors">

              <ChevronRight className="h-8 w-8 text-primary" />

            </button>

          </div>

        </div>

      </section>
      <section className="bg-white py-16 font-sans">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Heading and Intro */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6">
            Watch Signia experts demonstrate what Pure Charge&Go IX can do
          </h2>
          <p className="text-lg text-slate-600 font-light max-w-4xl mx-auto">
            See the groundbreaking RealTime Conversation Enhancement technology of Signia Integrated Xperience in action.
          </p>
        </div>

        {/* Video Demo Container */}
        <div className="relative group max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
          {/* YouTube Embed specifically for IX Sound Demo */}
          <div className="aspect-video bg-black flex items-center justify-center">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/HTsiTKW1lI8?si=hVxx04D23uXKjyQ1" 
              title="Signia Integrated Xperience: sound demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Overlay text matching the live capture look */}
          <div className="absolute bottom-10 left-10 z-20 hidden md:block">
            <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded text-white text-sm font-light border-l-2 border-red-500">
              This helps ensure <br /> that speech is prominent
            </div>
          </div>
        </div>

     
      </div>
    </section>

    <div className="bg-white font-sans text-slate-900">
      
   

      {/* 2. IX Performance Statistics */}
      <section className="py-20 bg-white border-t border-slate-50">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-8">
            Signia IX offers a 22% improvement in speech understanding in a noisy group conversation compared to our closest competitors.*
          </h2>
          <div className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-wider">
            <p>*Jensen NS, Mohnlein-Gilbert K, Wilson C, Berwick N, Kamkar Parsi H, Samra B, Best S & Taylor B. 2024.</p>
            <p className="mt-2">
              Signia IX with pioneering multi-stream technology delivers 22% better speech understanding in noisy group conversation 
              than a competitor with an AI co-processor-driven platform. Signia White Paper.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Final Call to Action Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/ban.webp" 
            alt="Smiling woman looking up" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle Blue/Dark Overlay to match screenshot */}
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-end text-right">
          <div className="max-w-2xl text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-medium leading-tight drop-shadow-md">
              Ready to take the first step to better hearing?
              <span className="block mt-2">Try our free online hearing test.</span>
            </h2>
            
            <a 
            href="/app/hearing-test" // Replace with your actual URL
            className="inline-block bg-[#004a99] hover:bg-[#003366] text-white text-xl font-medium px-14 py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl  tracking-wide"
          >
            Take the test
          </a>
          </div>
        </div>
      </section>

    </div>

    <div className="bg-white font-sans text-slate-900 py-20">
      <div className="container mx-auto max-w-7xl px-6 space-y-32">
        
        {/* 1. Versatile Charging Solutions */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <img 
              src="/images/riccv.webp" 
              alt="Signia Charging Solutions" 
              className="w-full max-w-lg h-auto"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-medium">Versatile charging solutions</h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-lg font-bold">Charge anytime, anywhere:</p>
                <p className="text-lg text-slate-600 font-light">
                  Take your hearing aids on the move with our pocket-sized charging case, which holds enough power to provide 3 full charges.
                </p>
              </div>
              
              <div>
                <p className="text-lg font-bold">Charge at home with ease:</p>
                <p className="text-lg text-slate-600 font-light">
                  Our Standard Charger provides reliable desktop charging.
                </p>
              </div>
              
              <div>
                <p className="text-lg font-bold">Clean while you charge:</p>
                <p className="text-lg text-slate-600 font-light">
                  Our Dry&Clean charger also cleans and dries your hearing aids in just 15 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Pure Charge&Go BCT IX Product Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center order-1 md:order-2">
            <img 
              src="/images/vcxx.png" 
              alt="Pure Charge&Go BCT IX" 
              className="w-full max-w-md h-auto"
            />
          </div>
          <div className="space-y-8 order-2 md:order-1 text-left">
            <h2 className="text-4xl md:text-5xl font-medium">Pure Charge&Go BCT IX</h2>
            <div className="space-y-6 text-xl text-slate-700 font-light leading-relaxed">
              <p>
                A small RIC hearing aid that is compatible with Bluetooth® Classic. 
                Can operate for unprecedented 36 hours between charges (with 5 hours 
                of streaming) and a portable charger is also available.
              </p>
            </div>
 
          </div>
        </div>

      </div>
    </div>

    {/* 1. Bluetooth Pairing Video Grid */}
    <section className="py-20 container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-medium mb-12">
          Bluetooth pairing for Pure Charge&Go BCT IX hearing aids
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pairingVideos.map((video, idx) => (
            <div key={idx} className="space-y-4">
              <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden relative group cursor-pointer shadow-sm">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-lg font-medium leading-snug pr-4">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </section>
      <footer className="border-t py-12 text-center text-sm text-muted-foreground">

        <p>© 2026 Al Barakat Hearing Centers. Official Signia Partner in KSA.</p>

      </footer>

    </div>

  )

}