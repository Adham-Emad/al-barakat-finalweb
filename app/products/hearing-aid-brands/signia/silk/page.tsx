"use client"

import { useEffect, useState } from "react"
import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  EyeOff, 
  Zap, 
  BatteryCharging, 
  Smartphone, 
  Target, 
  Settings2,
  Ear,
  CheckCircle2
} from "lucide-react"
// استيراد ملف الكلاينت اللي فيه شغلك القديم وتفاصيل المنتجات
import SilkClient from "./SilkClient"

export default function SilkPage() {
  const [currentHash, setCurrentHash] = useState("")

  useEffect(() => {
    // تحديث الحالة فوراً عند تحميل الصفحة
    setCurrentHash(window.location.hash)

    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  // ============================================================
  // الشرط القاطع: لو الهاش فيه موديل، اعرض التفاصيل فوراً
  // ============================================================
  if (currentHash === "#charge-go" || currentHash === "#silkx") {
    return <SilkClient />
  }

  // ============================================================
  // الحالة الافتراضية: صفحة النبذة الكاملة (Overview)
  // ============================================================
  return (
    <div className="min-h-screen bg-white font-sans">
      <MainNavigation />
      
      {/* 1. Hero Section - النبذة العامة */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24 text-center">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl tracking-tight text-primary uppercase">
            Signia Silk
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed italic text-center">
            "The only thing that changes is your hearing" — Discover the world's most discreet, ready-to-wear hearing solutions.
          </p>
        </div>
      </section>

      {/* 2. Silk Charge&Go IX Overview Row */}
      <section className="py-12 md:py-24 border-b border-slate-50">
        <div className="container mx-auto max-w-7xl px-4 text-left">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <span className="bg-[#00838f]/10 text-[#00838f] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block">New Arrival | Rechargeable</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">Silk Charge&Go IX</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Silk Charge&Go IX, a tiny, snug hearing aid, goes unnoticed while offering advanced noise-cancellation technology. Designed for comfort, ease of use, and recharging. Fits seamlessly into your lifestyle.
              </p>
              
              {/* المميزات اللي إنت طلبتها */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3"><Zap className="text-primary" size={20} /> <span className="text-sm font-semibold text-slate-700">Ready-to-wear</span></div>
                <div className="flex items-center gap-3"><BatteryCharging className="text-primary" size={20} /> <span className="text-sm font-semibold text-slate-700">All-day power</span></div>
                <div className="flex items-center gap-3"><Target className="text-primary" size={20} /> <span className="text-sm font-semibold text-slate-700 text-left">Focus on what matters</span></div>
                <div className="flex items-center gap-3"><Smartphone className="text-primary" size={20} /> <span className="text-sm font-semibold text-slate-700 text-left">Personalized Control</span></div>
              </div>

              <div className="pt-6">
                <Button asChild size="lg" className="rounded-full px-12 bg-[#00838f] hover:bg-[#00606a] text-white font-bold shadow-lg transition-all hover:scale-105">
                  <a href="#charge-go">See Details</a>
                </Button>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative p-8 bg-slate-50 rounded-[3rem] overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src="/images/Silk C&Go IX نبذه.jpeg" 
                  className="w-full h-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" 
                  alt="Silk Charge&Go IX" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Silk X Overview Row */}
      <section className="py-12 md:py-24 bg-slate-50/50">
        <div className="container mx-auto max-w-7xl px-4 text-left">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-white p-8 rounded-[3rem] shadow-sm group overflow-hidden">
              <img 
                src="/images/Silk X_black.jpeg" 
                className="w-full h-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" 
                alt="Silk X" 
              />
            </div>
            <div className="space-y-6">
              <span className="bg-slate-200 text-slate-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block text-left">Battery Powered</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">Silk X</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The only ready-to-wear CIC available on the Signia Xperience platform delivers clear speech understanding in an ultra-discreet size with instant fit. Silk X sits securely in the ear for a brilliant fit on the spot.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3"><EyeOff className="text-primary" size={20} /> <span className="text-sm font-semibold text-slate-700">Ready-to-wear</span></div>
                <div className="flex items-center gap-3"><Settings2 className="text-primary" size={20} /> <span className="text-sm font-semibold text-slate-700">Remote control</span></div>
                <div className="flex items-center gap-3"><Ear className="text-primary" size={20} /> <span className="text-sm font-semibold text-slate-700 text-left">Addressing single-sided hearing loss</span></div>
              </div>

              <div className="pt-6">
                <Button asChild variant="outline" size="lg" className="rounded-full px-12 border-[#00838f] text-[#00838f] hover:bg-[#00838f] hover:text-white font-bold transition-all shadow-md hover:scale-105">
                  <a href="#silkx">See Details</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA Section - زي الـ Styletto */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-[#00838f] rounded-[3rem] p-12 md:p-20 text-center text-white space-y-8 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Start Your Journey to Better Hearing</h2>
              <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 text-center">
                Experience the discreet power of Signia Silk today. Visit any Al Barakat Hearing Care Center branch across KSA for a free consultation.
              </p>
              <div className="pt-4">
                <Button size="lg" variant="secondary" asChild className="rounded-full px-12 py-8 text-xl font-black shadow-2xl hover:bg-white hover:text-primary transition-all hover:scale-110">
                  <Link href="/booking">Book Your Free Appointment</Link>
                </Button>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -ml-10 -mb-10"></div>
          </div>
        </div>
      </section>
    </div>
  )
}