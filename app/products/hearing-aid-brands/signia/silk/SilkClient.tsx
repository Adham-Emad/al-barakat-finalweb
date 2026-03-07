"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { 
  Plus, 
  Minus,
  MapPin,
  Mail,
  Ear,
  Download,
  Info,
  Play,
  CheckCircle2
} from "lucide-react"

export default function SilkClient() {
  const [activeModel, setActiveModel] = useState<"silkx" | "silkix">("silkx")
  const [openFaqX, setOpenFaqX] = useState<number | null>(null)
  const [openFaqIX, setOpenFaqIX] = useState<number | null>(null)
  
  // 1. حالة الألوان لـ Silk X
  const [activeColorX, setActiveColorX] = useState("Black")
  const silkXColors = [
    { name: "Black", img: "https://cdn.signia.net/-/media/signia/global/images/products/xperience/silk-x---nx/silk-nx_black_pair_1000x1000.jpg", code: "bg-black" },
    { name: "Mocha", img: "https://cdn.signia.net/-/media/signia/global/images/products/xperience/silk-x---nx/silk-nx_mocha_pair_1000x1000.jpg", code: "bg-[#8b7355]" }
  ]

  // 2. حالة الألوان لـ Silk IX
  const [activeColorIX, setActiveColorIX] = useState("Black")
  const silkIXColors = [
    { name: "Black", img: "https://cdn.signia.net/-/media/signia/global/images/products/signia-ix/silk-chargego-ix/silk-charge-go-ix_color-options_1920x1080.jpg", code: "bg-black" },
    { name: "Mocha", img: "https://cdn.signia.net/-/media/signia/global/images/products/signia-ix/silk-chargego-ix/silk-charge-go-ix_mocha_pair_1000x1000.jpg", code: "bg-[#8b7355]" }
  ]

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <MainNavigation />

      {/* 1. Tabs Selection - Fixed Z-index for Navbar visibility */}
      <section className="bg-white py-6 border-b sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-6 flex justify-center gap-4">
          <button 
            onClick={() => setActiveModel("silkx")} 
            className={`px-10 py-3 rounded-full font-bold transition-all ${activeModel === "silkx" ? "bg-primary text-white shadow-md scale-105" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            Silk X
          </button>
          <button 
            onClick={() => setActiveModel("silkix")} 
            className={`px-10 py-3 rounded-full font-bold transition-all ${activeModel === "silkix" ? "bg-primary text-white shadow-md scale-105" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            Silk Charge&Go IX
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: SILK X CONTENT (FULL RESTORED) */}
      {/* ========================================================================= */}
      {activeModel === "silkx" && (
        <>
          {/* Hero Silk X */}
          <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden flex items-center">
            <img 
              src="https://cdn.signia.net/-/media/signia/global/images/campaigns/xperience/silk-x/silk-x_image-replacement_aligned_v3_1920x1080.jpg" 
              className="absolute inset-0 w-full h-full object-cover" 
              alt="Silk X Hero" 
            />
            <div className="container mx-auto px-6 relative z-10 text-white">
              <h1 className="text-5xl md:text-8xl font-medium leading-[1.1] mb-4 drop-shadow-md">Be<br/>Brilliant™</h1>
              <h2 className="text-3xl md:text-5xl font-light mb-8 opacity-90">with Signia Silk X</h2>
              <p className="text-xl md:text-2xl font-light max-w-md border-l-4 border-primary pl-6 py-2 bg-black/10 backdrop-blur-sm">
                Your nearly invisible ready-to-wear hearing experience.
              </p>
            </div>
          </section>

          {/* Smallest World Title */}
          <section className="py-24 bg-white text-center border-b border-slate-50">
            <div className="container mx-auto px-6 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-medium leading-tight text-slate-800 italic">
                One of the world’s smallest hearing aids, Silk gives you the confidence of knowing that no one even notices you’re wearing them.
              </h2>
            </div>
          </section>

          {/* Tailor-made Section */}
          <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Tailor-made without the wait</h2>
                  <p className="text-xl text-slate-600 leading-relaxed font-light text-left">
                    Silk X is fitted with highly adaptable soft-silicone Click Sleeves that simply click onto the hearing aids to ensure a level of comfort and secure fit in your ear previously only available with custom-built housings.
                  </p>
                  <p className="text-xl text-slate-600 leading-relaxed font-light text-left">
                    The sleeves come in 4 different sizes suitable for most ear anatomies and hearing needs so there is no wait as with other in-the-ear devices.
                  </p>
                </div>
                <div className="relative group">
                  <img 
                    src="https://cdn.signia.net/-/media/signia/global/images/campaigns/xperience/silk-x/silk-x_image-replacement_aligned_v2_1920x1080.jpg" 
                    className="rounded-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-105" 
                    alt="Tailor-made" 
                  />
                  <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-xl text-white hidden md:block text-center">
                     <span className="text-4xl font-bold">4</span>
                     <p className="text-sm font-light">Available Sizes</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Perfectly Positioned Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                   <img src="https://cdn.signia.net/-/media/signia/global/images/campaigns/xperience/silk-x/silk-x_image-replacement_aligned_1920x1080.jpg" alt="Music and Calls" />
                </div>
                <div className="order-1 md:order-2 space-y-8 text-left">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Perfectly positioned for phone calls and music</h2>
                  <p className="text-xl text-slate-600 font-light leading-relaxed">
                    Unlike hearing aids that sit behind the ear, Silk X’s microphones pick up sound inside the ear canal. This enables you to make phone calls and listen to music in the way you are used to, including with over-ear headphones.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Crystal Clear Sound */}
          <section className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid md:grid-cols-2 gap-20 items-center">
                <img src="https://cdn.signia.net/-/media/signia/global/images/campaigns/xperience/platform/xperience-logo_1920x1080.png" className="w-full h-auto brightness-200" alt="Signia Xperience" />
                <div className="space-y-8 text-left text-white">
                  <h2 className="text-4xl font-bold">Crystal-clear sound in every situation</h2>
                  <p className="text-xl opacity-80 font-light leading-relaxed text-white">
                    Whether you're in a crowded street, working in an open-plan office, or dining in a busy restaurant, Silk X tackles these challenges expertly with the true-to-life sound of Signia Xperience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Product Colors Section Silk X */}
          <section className="py-24 bg-white border-b border-slate-50">
             <div className="container mx-auto px-6 max-w-7xl grid md:grid-cols-2 gap-16 items-center">
                <div className="flex justify-center bg-slate-50 rounded-[3rem] p-12">
                   <img 
                    src={silkXColors.find(c => c.name === activeColorX)?.img} 
                    className="w-full max-w-md drop-shadow-2xl transition-all duration-500" 
                    alt={`Silk X ${activeColorX}`} 
                   />
                </div>
                <div className="space-y-8 text-left">
                   <h2 className="text-5xl font-bold">Silk X</h2>
                   <p className="text-xl text-slate-600 leading-relaxed font-light">
                     The only ready-to-wear CIC available on the Signia Xperience platform delivers clear speech understanding in an ultra-discreet size.
                   </p>
                   <div>
                      <h4 className="text-lg font-bold mb-4 text-slate-900">Available colors:</h4>
                      <div className="flex gap-4">
                        {silkXColors.map((color) => (
                          <button
                            key={color.name}
                            onClick={() => setActiveColorX(color.name)}
                            className={`w-12 h-12 rounded-full border-4 transition-all ${activeColorX === color.name ? 'border-primary scale-110 shadow-lg' : 'border-white'} ${color.code} shadow-inner`}
                            title={color.name}
                          />
                        ))}
                      </div>
                      <p className="mt-4 text-sm text-slate-500 font-bold italic">{activeColorX}</p>
                   </div>
                </div>
             </div>
          </section>

          {/* 8. [RESTORED] App Download Section for Silk X */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-10 text-left">
                  <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-slate-900">Download now:</h2>
                    <div className="flex flex-col gap-4 pt-2">
                       <Link href="https://play.google.com/store/apps/details?id=com.signia.rta" target="_blank">
                          <img src="/images/google-play-badge_en_300.webp" className="h-16 w-auto cursor-pointer" alt="Google Play" />
                       </Link>
                       <Link href="https://apps.apple.com/app/signia-app/id1316911473" target="_blank">
                          <img src="/images/Apple-App-Store-Badge_en_300px.webp" className="h-16 w-auto cursor-pointer" alt="App Store" />
                       </Link>
                    </div>
                  </div>
                </div>
                <div className="relative text-left">
                  <div className="max-w-md space-y-6">
                    <img src="/images/mobb.webp" className="w-full drop-shadow-2xl mb-8" alt="Smartphone App" />
                    <h2 className="text-4xl font-bold">Signia app</h2>
                    <p className="text-xl text-slate-600 font-light leading-relaxed">Personalize your hearing experience</p>
                    <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                      <Link href="/en/connectivity/signia-app/">Learn more</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section Silk X */}
          <section className="py-24 bg-slate-50 border-t">
            <div className="container mx-auto px-6 max-w-4xl text-left">
              <h2 className="text-3xl font-bold mb-12">FAQs Silk X</h2>
              <div className="space-y-4">
                {[
                  { q: "I need an invisible device. Is Silk X really the right solution for me?", a: "Yes. With its high level of discretion, the new Silk X is 'practically invisible'." },
                  { q: "Can I control my Silk X hearing aids remotely?", a: "Yes. We offer a direct and very convenient remote control via our Signia app, downloadable for free." },
                  { q: "Can I stream phone calls, music and/or TV?", a: "With Twin Phone functionality, you can hear phone calls in both ears. Music and TV streaming are not supported on this specific model." }
                ].map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <button onClick={() => setOpenFaqX(openFaqX === i ? null : i)} className="w-full px-8 py-6 flex items-center justify-between hover:bg-slate-50 transition-all">
                      <span className="text-lg font-bold text-slate-800">{faq.q}</span>
                      {openFaqX === i ? <Minus className="text-primary"/> : <Plus className="text-primary"/>}
                    </button>
                    {openFaqX === i && <div className="px-8 pb-6 text-slate-600 font-light border-t border-slate-100 pt-4 leading-relaxed animate-in fade-in">{faq.a}</div>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ========================================================================= */}
      {/* SECTION: SILK CHARGE & GO IX CONTENT (FULL RE-INTEGRATED) */}
      {/* ========================================================================= */}
      {activeModel === "silkix" && (
        <>
          {/* Hero IX */}
          <section className="relative w-full h-[600px] overflow-hidden flex items-center">
            <img 
              src="https://cdn.signia.net/-/media/signia/global/images/campaigns/signia-ix/silk-chargego-ix/silk-ix_bouldering_group-conversation_ces_reddot_1920x1080.jpg" 
              className="absolute inset-0 w-full h-full object-cover" 
              alt="Silk IX Hero" 
            />
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-5xl md:text-8xl font-bold text-white drop-shadow-lg">The only thing that<br/>changes is your hearing</h1>
                <p className="text-2xl text-white font-light italic opacity-90">with the near-invisible Silk Charge &Go IX</p>
              </div>
            </div>
          </section>

          {/* Meet Silk IX */}
          <section className="py-24 bg-white text-center">
            <div className="container mx-auto px-6 max-w-5xl">
              <h2 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">Meet Silk Charge &Go IX – a tiny hearing aid that makes a big difference in every conversation.</h2>
              <img src="https://cdn.signia.net/-/media/signia/global/images/products/accessories/chargers/portable-charger-silk_with-silk-chgo-ix-out_led-on_shadow_1920x1080.jpg" className="w-full h-auto rounded-[3rem] shadow-2xl mt-12 border-8 border-slate-50" alt="Silk IX Charger" />
            </div>
          </section>

          {/* Video Player IX */}
          <section className="py-16 bg-slate-50 border-y">
            <div className="container mx-auto px-6 max-w-5xl">
               <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-black">
                  <iframe className="w-full h-full" src="https://www.youtube-nocookie.com/embed/Z6nadLVecfs?rel=0" allowFullScreen></iframe>
               </div>
            </div>
          </section>

          {/* Why Choose IX */}
          <section className="relative w-full h-[600px] flex items-center">
            <img src="https://cdn.signia.net/-/media/signia/global/images/campaigns/signia-ix/silk-chargego-ix/silk-ix_bouldering_man-holding-hearing-aids_aligned_1920x1080.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Lifestyle IX" />
            <div className="container mx-auto px-6 relative z-10 flex justify-end text-left">
               <div className="max-w-xl bg-black/40 backdrop-blur-md p-12 rounded-[3.5rem] text-white">
                  <h2 className="text-4xl font-bold mb-6 text-white">Why choose Silk Charge &Go IX?</h2>
                  <p className="text-xl font-light leading-relaxed text-white">Silk Charge &Go IX, a tiny, snug hearing aid, goes unnoticed while offering advanced noise-cancellation technology. Designed for comfort, ease of use, and recharging. Fits seamlessly into your lifestyle.</p>
               </div>
            </div>
          </section>

          {/* 4 Reasons IX Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 tracking-tight">4 reasons to choose Silk Charge &Go IX</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                  { t: "Ready-to-wear", img: "silk-ix_bouldering_man-backview_circle_1000x1000.jpg" },
                  { t: "All-day power", img: "silk-ix_bouldering_charger-in-hands_circle_1000x1000.jpg" },
                  { t: "Focus on what matters", img: "silk-ix_bouldering_men-talking_circle_1000x1000.jpg" },
                  { t: "Personalized control", img: "silk-ix_bouldering_man-holding-smartphone_circle_1000x1000.jpg" }
                ].map((item, i) => (
                  <div key={i} className="space-y-6">
                    <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-slate-50">
                        <img src={`https://cdn.signia.net/-/media/signia/global/images/campaigns/signia-ix/silk-chargego-ix/${item.img}`} className="w-full h-full object-cover" alt={item.t} />
                    </div>
                    <h4 className="font-bold text-xl text-slate-800">{item.t}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* [RESTORED] Step to Better Hearing Banner */}
          <section className="relative w-full h-[450px] md:h-[550px] flex items-center overflow-hidden">
            <img src="https://cdn.signia.net/-/media/signia/global/images/campaigns/signia-ix/silk-chargego-ix/silk-ix_bouldering_man-backview_1900x396.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Better Hearing Banner" />
            <div className="container mx-auto px-6 relative z-10 text-white text-right">
              <div className="max-w-2xl ml-auto space-y-6 text-white">
                <h2 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md text-white">Ready to take the first step to better hearing?</h2>
                <p className="text-xl md:text-3xl font-light text-white opacity-90">Try our free online hearing test.</p>
                <div className="pt-4">
                  <Button asChild size="lg" className="rounded-full px-12 py-8 text-xl font-bold bg-[#e00000] hover:bg-[#c00000] shadow-2xl border-none transition-all hover:scale-105">
                    <Link href="/en/service/hearing-test/">Take the test</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Discretion with style IX */}
          <section className="py-24 bg-white border-b">
            <div className="container mx-auto px-6 max-w-7xl grid md:grid-cols-2 gap-16 items-center">
               <div className="space-y-8 text-left order-2 md:order-1">
                  <h2 className="text-4xl font-bold text-slate-900">Discretion with style</h2>
                  <div className="bg-slate-50 p-8 rounded-[2.5rem] shadow-inner">
                    <img src={silkIXColors.find(c => c.name === activeColorIX)?.img} className="w-full drop-shadow-2xl transition-all duration-500" alt="IX Color Selection" />
                  </div>
                  <div className="flex gap-4">
                    {silkIXColors.map(c => (
                      <button key={c.name} onClick={() => setActiveColorIX(c.name)} className={`w-12 h-12 rounded-full border-4 ${activeColorIX === c.name ? 'border-primary scale-110 shadow-md' : 'border-white shadow-sm'} ${c.code}`} />
                    ))}
                  </div>
                  <p className="font-bold text-primary italic text-lg">{activeColorIX}</p>
               </div>
               <div className="space-y-8 text-left order-1 md:order-2">
                  <h3 className="text-3xl font-bold text-slate-800">Charge anytime, anywhere.</h3>
                  <p className="text-xl text-slate-600 font-light leading-relaxed">Take your hearing aids on the move with a pocket-sized wireless charging case that provides up to 3 additional charges.</p>
                  <img src="https://cdn.signia.net/-/media/signia/global/images/products/accessories/chargers/portable-charger-silk_top-open-with-silk-chgo-ix_led-on_ces_reddot_1920x1080.jpg" className="rounded-[2.5rem] shadow-xl w-full border-8 border-slate-50" alt="Charger Details" />
               </div>
            </div>
          </section>

          {/* Six Instructional Videos Set */}
          <section className="py-24 bg-slate-50 border-t">
            <div className="container mx-auto px-6 max-w-7xl text-center">
              <h2 className="text-4xl font-bold mb-16 text-slate-900 tracking-tight underline decoration-primary underline-offset-8">How to handle Silk Charge&Go IX</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {[
                  { t: "Power on and off", id: "Ho_P9o4yA-8" },
                  { t: "Insert and remove", id: "1WI0jhx681Y" },
                  { t: "Charging hearing aids", id: "IOWvO7NObdk" },
                  { t: "Charging the charger", id: "k4OSaqSi5AE" },
                  { t: "Maintenance and cleaning", id: "QRwoTi6gBwQ" },
                  { t: "Exchanging a sleeve", id: "5FpJT8Drxko" }
                ].map((v, i) => (
                  <div key={i} className="space-y-4 group">
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-xl bg-black border-4 border-white group-hover:border-primary transition-all duration-300">
                      <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0`} allowFullScreen></iframe>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 px-4 leading-tight group-hover:text-primary transition-colors">{v.t}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs IX Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl text-left">
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-3"><Info className="text-primary"/> FAQs Silk Charge &Go IX</h2>
              <div className="space-y-4">
                {[
                  { q: "Is Silk Charge &Go IX really invisible?", a: "Yes. With its high level of discretion, it is practically invisible." },
                  { q: "Can I control my Silk Charge &Go IX hearing aids remotely?", a: "Yes. We offer a direct and very convenient remote control via our Signia app." }
                ].map((faq, i) => (
                  <div key={i} className="border-2 rounded-2xl p-6 hover:border-primary transition-colors bg-slate-50/20">
                    <button onClick={() => setOpenFaqIX(openFaqIX === i ? null : i)} className="w-full flex items-center justify-between text-left">
                      <span className="text-lg font-bold text-slate-800">{faq.q}</span>
                      {openFaqIX === i ? <Minus className="text-primary"/> : <Plus className="text-primary"/>}
                    </button>
                    {openFaqIX === i && <div className="mt-4 text-slate-600 font-light border-t border-slate-100 pt-4 leading-relaxed">{faq.a}</div>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ========================================================== */}
      {/* GLOBAL FOOTER RESOURCES (Common for both) */}
      {/* ========================================================== */}
      <section className="py-24 bg-white border-t border-slate-100 shadow-inner">
        <div className="container mx-auto px-6 max-w-7xl grid md:grid-cols-3 gap-16 text-center">
          <div className="space-y-6 group cursor-pointer">
            <div className="w-24 h-24 mx-auto border-2 border-slate-100 rounded-full flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300"><Ear className="w-10 h-10 text-slate-600 group-hover:text-primary" /></div>
            <h4 className="text-2xl font-bold text-slate-800">Test your hearing now</h4>
            <Link href="/en/service/hearing-test/" className="text-primary font-bold hover:underline text-lg">Take the test</Link>
          </div>
          <div className="space-y-6 group cursor-pointer">
            <div className="w-24 h-24 mx-auto border-2 border-slate-100 rounded-full flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300"><MapPin className="w-10 h-10 text-slate-600 group-hover:text-primary" /></div>
            <h4 className="text-2xl font-bold text-slate-800">Looking for personal care?</h4>
            <Link href="/contact" className="text-primary font-bold hover:underline text-lg">Contact Us / Store Locator</Link>
          </div>
          <div className="space-y-6 group cursor-pointer">
            <div className="w-24 h-24 mx-auto border-2 border-slate-100 rounded-full flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300"><Mail className="w-10 h-10 text-slate-600 group-hover:text-primary" /></div>
            <h4 className="text-2xl font-bold text-slate-800">Keep up-to-date</h4>
            <Link href="/blog" className="text-primary font-bold hover:underline text-lg">Read our blog</Link>
          </div>
        </div>
      </section>

      {/* Global CTA Footer */}
      <section className="py-28 bg-primary text-white text-center shadow-2xl relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">Ready for Brilliant Hearing?</h2>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full px-16 py-10 text-3xl font-black shadow-2xl hover:bg-white hover:text-primary transition-all hover:scale-105">
                Book Your Free Trial Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}