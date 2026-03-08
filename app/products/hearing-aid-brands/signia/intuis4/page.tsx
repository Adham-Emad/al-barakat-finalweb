"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"
import { 
  Bluetooth, 
  Volume2,
  Play
} from "lucide-react"

export default function Intuis4Page() {
  // 1. إدارة الألوان لكل موديل بشكل مستقل
  const [selectedColorM, setSelectedColorM] = useState("Black")
  const [selectedColorP, setSelectedColorP] = useState("Black")
  const [selectedColorSP, setSelectedColorSP] = useState("Black")

  const colors = [
    { name: "Black", code: "bg-[#1a1a1a]" },
    { name: "Graphite", code: "bg-[#555555]" },
    { name: "Dark Champagne", code: "bg-[#b8ada1]" },
    { name: "Silver", code: "bg-[#d1d1d1]" },
    { name: "Sandy Brown", code: "bg-[#8b7355]" },
    { name: "Beige", code: "bg-[#d2b48c]" }
  ]

  // وظيفة لجلب رابط الصورة الصحيح من سورس كود سجنيا بناءً على الموديل واللون
  const getSigniaImg = (model: string, color: string) => {
    const colorLower = color.toLowerCase().replace(" ", "-");
    const modelPath = model === "m" ? "s" : model; // M 4 يستخدم s-4 في السيرفر
    return `https://cdn.signia.net/-/media/signia/global/images/products/other-hearing-aids/intuis-4/intuis-${modelPath}-4_${colorLower}.png`;
  }

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

        <div className="grid md:grid-cols-2 gap-16 items-center text-left border-t border-slate-100 pt-16">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/Intuis-S-4.webp" alt="Intuis 4 BTE" className="w-full h-auto" />
          </div>
          <div className="space-y-6">
            <h4 className="text-2xl font-medium leading-snug font-bold">
              Intuis 4 behind-the-ear (BTE) hearing aids feature advanced technology that delivers brilliant sound and speech clarity.
            </h4>
            <div className="space-y-4 text-slate-600 font-light">
              <p>Enhanced connectivity and Bluetooth streaming, as well as the Signia App, provide a suite of controls and communication options.</p>
              <p>And if you have tinnitus, Intuis 4 features a range of therapy options to make life more comfortable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Connectivity Section */}
      <section className="py-20 container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium mb-8">Connectivity and app control</h2>
              <h4 className="text-3xl font-medium text-slate-800 mb-6 font-bold text-left">A great solution for you</h4>
              <p className="text-lg text-slate-600 font-light leading-relaxed text-left">
                Signia Intuis 4 comes packed with high-tech features such as state-of-the-art 
                Bluetooth streaming for Android and iOS devices. You can easily stream phone calls, 
                music and TV audio (via the StreamLine TV accessory) straight into your ears.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 font-light leading-relaxed text-left">
                Intuis 4 is also equipped with an integrated telecoil. In places with induction loops, 
                you can activate the telecoil feature to hear the desired signal without distracting noises.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-12 pt-12">
            <div className="w-48 h-48 border-[1px] border-slate-200 rounded-full flex items-center justify-center">
              <img src="/images/intuisbiu.webp" alt="Bluetooth" className="w-24 h-24" />
            </div>
            <div className="w-48 h-48 rounded-lg flex items-center justify-center">
              <img src="/images/T-Coil_icon_1000x1000.webp" alt="Telecoil" className="w-32 h-32" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. App Download Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 md:order-1 text-left">
              <h2 className="text-4xl md:text-5xl font-medium">The hearing professional in your pocket</h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                The Signia app lets you contact your hearing care professional via your smartphone whenever you need remote support.
              </p>
              <div className="flex gap-4 pt-4">
                <Link href="https://play.google.com/store/apps/details?id=com.signia.rta" target="_blank">
                  <img src="/images/google-play-badge_en_300.webp" alt="Google Play" className="h-12 cursor-pointer" />
                </Link>
                <Link href="https://apps.apple.com/app/signia-app/id1316911473" target="_blank">
                  <img src="/images/Apple-App-Store-Badge_en_300px.webp" alt="App Store" className="h-12 cursor-pointer" />
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img src="/images/mobb.webp" alt="Signia App" className="w-full max-w-md drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Product Range Breakdown with Full Texts */}
      <section className="py-20 bg-white container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mb-20">
          <h2 className="text-5xl font-medium mb-8 font-bold">Super Power your hearing</h2>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            Because everyone’s hearing needs are different, Intuis 4 comes in three models to suit 
            different degrees of hearing loss, from mild all the way to profound: **Intuis M 4, 
            Intuis P 4 and Intuis SP 4**. All models come in a range of colors and are IP68-rated 
            for water and dust resistance.
          </p>
        </div>

        {/* Intuis M 4 */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32 border-b pb-20">
          <div className="flex flex-col items-center">
            <img src={getSigniaImg("m", selectedColorM)} alt="Intuis M 4" className="w-full max-w-xs h-auto drop-shadow-xl transition-all duration-300" />
            <div className="mt-8 flex gap-3">
              {colors.map((c) => (
                <button key={c.name} onClick={() => setSelectedColorM(c.name)} className={`w-8 h-8 rounded-full border-2 ${selectedColorM === c.name ? 'border-blue-500 scale-110' : 'border-slate-200'} ${c.code}`} title={c.name} />
              ))}
            </div>
            <p className="mt-4 text-slate-500 text-sm font-medium">{selectedColorM}</p>
          </div>
          <div className="space-y-8 text-left">
            <h3 className="text-4xl font-medium font-bold">Intuis M 4</h3>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Suitable for mild to moderate hearing loss, Intuis M 4’s state-of-the-art sensors and microphones help you to enjoy brilliant sound and outstandingly clear speech, so you can easily follow conversations even in challenging situations with a lot of background noise.
            </p>
          </div>
        </div>

        {/* Intuis P 4 */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32 border-t pt-20">
          <div className="order-2 md:order-1 space-y-8 text-left">
            <h3 className="text-4xl font-medium font-bold">Intuis P 4</h3>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Suitable for moderate to profound hearing loss, Intuis P 4’s state-of-the-art sensors and microphones help you to enjoy brilliant sound and outstandingly clear speech, so you can easily follow conversations even in challenging situations with a lot of background noise.
            </p>
          </div>
          <div className="order-1 md:order-2 flex flex-col items-center">
            <img src={getSigniaImg("p", selectedColorP)} alt="Intuis P 4" className="w-full max-w-xs h-auto drop-shadow-xl transition-all duration-300" />
            <div className="mt-8 flex gap-3">
              {colors.map((c) => (
                <button key={c.name} onClick={() => setSelectedColorP(c.name)} className={`w-8 h-8 rounded-full border-2 ${selectedColorP === c.name ? 'border-blue-500 scale-110' : 'border-slate-200'} ${c.code}`} title={c.name} />
              ))}
            </div>
            <p className="mt-4 text-slate-500 text-sm font-medium">{selectedColorP}</p>
          </div>
        </div>

        {/* Intuis SP 4 */}
        <div className="grid md:grid-cols-2 gap-16 items-center border-t pt-20 pb-20">
          <div className="flex flex-col items-center">
            <img src={getSigniaImg("sp", selectedColorSP)} alt="Intuis SP 4" className="w-full max-w-xs h-auto drop-shadow-xl transition-all duration-300" />
            <div className="mt-8 flex gap-3">
              {colors.map((c) => (
                <button key={c.name} onClick={() => setSelectedColorSP(c.name)} className={`w-8 h-8 rounded-full border-2 ${selectedColorSP === c.name ? 'border-blue-500 scale-110' : 'border-slate-200'} ${c.code}`} title={c.name} />
              ))}
            </div>
            <p className="mt-4 text-slate-500 text-sm font-medium">{selectedColorSP}</p>
          </div>
          <div className="space-y-8 text-left">
            <h3 className="text-4xl font-medium font-bold">Intuis SP 4</h3>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Suitable for profound to severe hearing loss, Intuis SP 4’s state-of-the-art sensors and microphones help you to enjoy brilliant sound and outstandingly clear speech, so you can easily follow conversations even in challenging situations with a lot of background noise.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Videos Section */}
      <section className="py-24 bg-slate-50 border-t">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-medium mb-12 text-center font-bold">How to handle Intuis 4 hearing aids</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Insertion & Removal", vid: "pd8-eEmmIKo" },
              { title: "Power On/Off", vid: "ANH6339daAg" },
              { title: "Battery Exchange", vid: "0kBzJmGR7Ic" },
              { title: "Cleaning", vid: "dHKfwkJaBm4" }
            ].map((v, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-video bg-slate-200 rounded-2xl overflow-hidden mb-4 shadow-md">
                  <img src={`https://i.ytimg.com/vi/${v.vid}/mqdefault.jpg`} className="w-full h-full object-cover group-hover:scale-110 transition-all" alt={v.title} />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20"><Play className="fill-white text-white w-10 h-10" /></div>
                </div>
                <p className="text-sm font-medium text-slate-700 text-center">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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