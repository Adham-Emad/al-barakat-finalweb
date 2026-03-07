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

export default function InsioCustomPage() {
  return (
    <div className="bg-white font-sans text-slate-900">
        <MainNavigation />
    {/* 1. Single Image Banner Section */}
    <section className="w-full">
      <img 
        src="/images/banintuis.webp" 
        alt="Signia Intuis 4 Range" 
        className="w-full h-auto object-cover"
      />
    </section>

    {/* 2. Main Content Body */}
    <section className="container mx-auto px-6 max-w-5xl text-center py-20">
      <h2 className="text-3xl md:text-4xl font-light text-slate-500 mb-2 italic">Intuis 4</h2>
      <h3 className="text-4xl md:text-5xl font-medium mb-10 tracking-tight">
        Proven technology for clarity and comfort
      </h3>
      
      <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto mb-16">
        A quiet chat, a lively family dinner, a phone call to a friend, a favorite movie - life is filled with important moments. 
        Move through your day with confidence knowing Intuis 4 will support you in every moment, with advanced technology 
        that adapts to deliver comfort and clarity wherever you are.
      </p>

      {/* Two-Column Detail Section */}
      <div className="grid md:grid-cols-2 gap-16 items-center text-left border-t border-slate-100 pt-16">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="/images/Intuis-S-4.webp" 
            alt="Intuis 4 BTE Fitment" 
            className="w-full h-auto"
          />
        </div>
        
        <div className="space-y-6">
          <h4 className="text-2xl font-medium leading-snug">
            Intuis 4 behind-the-ear (BTE) hearing aids feature advanced technology that delivers brilliant sound and speech clarity.
          </h4>
          <div className="space-y-4 text-slate-600 font-light">
            <p>
              Enhanced connectivity and Bluetooth streaming, as well as the Signia App, provide a suite of controls 
              and communication options, while the hearing aids' ergonomic design and easy-to-use controls make 
              daily operation straightforward and comfortable.
            </p>
            <p>
              And if you have tinnitus, Intuis 4 features a range of therapy options to make life more comfortable.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Branded Call to Action */}
      <div className="mt-20 pt-10 border-t border-slate-100">
  
      </div>
    </section>



    <div className="bg-white font-sans text-slate-900">
      
      {/* 1. Single Image Product Banner */}
     

      {/* 2. Connectivity Details Section */}
      <section className="py-20 container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium mb-8">Connectivity and app control</h2>
              <h3 className="text-3xl font-medium text-slate-800 mb-6">A great solution for you</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Signia Intuis 4 comes packed with high-tech features such as state-of-the-art 
                Bluetooth streaming for Android and iOS devices. You can easily stream phone calls, 
                music and TV audio (via the StreamLine TV accessory) straight into your ears.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Intuis 4 is also equipped with an integrated telecoil. In places with induction loops, 
                you can activate the telecoil feature to hear the desired signal without distracting 
                noises in the background.
              </p>
            </div>
          </div>

          {/* Icon Column */}
          <div className="flex flex-col items-center justify-center space-y-12 pt-12">
            <div className="w-48 h-48 border-[1px] border-slate-200 rounded-full flex items-center justify-center">
              <img src="/images/intuisbiu.webp" alt="Bluetooth Streaming" className="w-24 h-24" />
            </div>
            <div className="w-48 h-48  rounded-lg flex items-center justify-center">
              <img src="/images/T-Coil_icon_1000x1000.webp" alt="Telecoil Support" className="w-32 h-32" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. AI Support Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              {/* Signia AI Face Icon */}
              <div className="w-64 h-64  rounded-[3rem] flex items-center justify-center p-10">
                <img src="/images/g55.webp" alt="AI Assistant" className="w-full" />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-medium">Personal support at your fingertips</h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Intuis 4 hearing aids connect to the Signia app, which offers convenient remote 
                control adjustments, the Signia Assistant, and TeleCare support. Powered by 
                artificial intelligence (AI), the chat-based Signia Assistant offers immediate 
                support whenever you want to customize settings.
              </p>
            
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final Red CTA Button */}
      <section className="py-16 text-center">
      
      </section>

    </div>
     {/* Call to Action Footer */}    <section className="py-24 bg-slate-50">
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

      <div className="bg-white font-sans text-slate-900">
      
      {/* 1. Single Image Banner */}
 

      {/* 2. Super Power Range Content */}
      <section className="py-20 container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mb-20">
          <h2 className="text-5xl font-medium mb-8">Super Power your hearing</h2>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            Because everyone’s hearing needs are different, Intuis 4 comes in three models to suit 
            different degrees of hearing loss, from mild all the way to profound: **Intuis M 4, 
            Intuis P 4 and Intuis SP 4**. All models come in a range of colors and are IP68-rated 
            for water and dust resistance.
          </p>
        </div>

        {/* 3. Specific Model Detail: Intuis M 4 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <img 
              src="/images/intuisss.png" 
              alt="Intuis M 4 Hearing Aid" 
              className="w-full max-w-xs h-auto drop-shadow-xl"
            />
          </div>

          <div className="space-y-8">
            <h3 className="text-4xl font-medium">Intuis M 4</h3>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Suitable for mild to moderate hearing loss, Intuis M 4’s state-of-the-art 
              sensors and microphones help you to enjoy brilliant sound and outstandingly 
              clear speech, so you can easily follow conversations even in challenging 
              situations with a lot of background noise.
            </p>

     
          </div>
        </div>
      </section>

      {/* 4. Final Red Brand CTA */}
      <section className="py-16 text-center border-t border-slate-100">
       
      </section>

    </div>
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