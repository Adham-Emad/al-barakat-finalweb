"use client"
import Link from "next/link"
import { MainNavigation } from "@/components/main-navigation"
import Image from 'next/image'
import { motion } from "framer-motion"

// قائمة الشركات بناءً على الصور والملف الذي أرفقته
// يمكنك تعديل الـ src يدوياً هنا لكل شركة (مثلاً تغيير .png إلى .jpg)
const insuranceCompanies = [
  { id: 1, name: "Bupa Arabia Cooperative Insurance Company", src: "/images/insurance/1-Bupa_logo.jpg" },
  { id: 2, name: "Tawuniya Insurance Company", src:"/images/insurance/2-Tawuniya_Logo.png" },
  { id: 3, name: "GlobeMed Saudi Company", src:"/images/insurance/3-Globemed_Logo.png" },
  { id: 4, name: "MedGulf Cooperative Insurance Company", src:"/images/insurance/4-Medgulf_logo.png" },
  { id: 5, name: "GIG Insurance Company", src: "/images/insurance/5-GIG_logo.png" },
  { id: 6, name: "Malath Cooperative Insurance Company", src: "/images/insurance/6-Malath_Logo.png" },
  { id: 7, name: "Saco Cooperative Insurance Company", src: "/images/insurance/7-Saico_Logo.png" },
  { id: 8, name: "Arabian Cooperative Insurance Company", src: "/images/insurance/8-Arabia_Logo.png" },
  { id: 9, name: "Amana Cooperative Insurance Company", src: "/images/insurance/9-Amana_Logo.png" },
  { id: 10, name: "Salama Cooperative Insurance Company", src: "/images/insurance/10-Salama_Logo.png" },
  { id: 11, name: "Mutakamela Insurance Company", src: "/images/insurance/11-Mutakamela_Logo.png" },
  { id: 12, name: "Orient Insurance Company", src: "/images/insurance/12-Orient_Logo.png" },
  { id: 13, name: "Walaa Cooperative Insurance Company", src: "/images/insurance/13-Walaa_Logo.png" },
  { id: 14, name: "Saudi Enaya Cooperative Insurance Company", src: "/images/insurance/14-Saudi Enaya_Logo.png" },
  { id: 15, name: "Cigna Healthcare", src: "/images/insurance/15-cigna-logo.jpg" },
  { id: 16, name: "Al Rajhi Takaful Insurance Company", src: "/images/insurance/16-Al Rajhi Takaful_Logo.png" },
  { id: 17, name: "United Cooperative Insurance Group (ACIG)", src: "/images/insurance/17-Acig_Logo.png" },
  { id: 18, name: "Al-Jazira Takaful Insurance Company", src: "/images/insurance/18-AlJazira Takaful_logo.png" },
  { id: 19, name: "Al-Saqr Cooperative Insurance Company", src: "/images/insurance/19-AlSagr_Logo.png" },
  { id: 20, name: "Arabian Shield Cooperative Insurance Company", src: "/images/insurance/20-Arabian Shield_Logo.png" },
  { id: 21, name: "Buruj Cooperative Insurance Company", src: "/images/insurance/21-Buruj_logo.png" },
  { id: 22, name: "Alinma Tokio Marine Company", src: "/images/insurance/22-Alinma Tokio Marine_logo.png" },
  { id: 23, name: "United Cooperative Insurance Company", src: "/images/insurance/23-UCA_logo.png" },
  { id: 24, name: "Al-Ittihad Cooperative Insurance Company", src: "/images/insurance/24-Al Etihad_logo.png" },
]

export default function InsuranceCompaniesPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <MainNavigation />

      {/* Hero Section - بسيط وراقي */}
      <section className="relative py-24 bg-white border-b border-slate-100 overflow-hidden">
  {/* ================= ANIMATED BACKGROUND ELEMENTS ================= */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    {/* Soft, Animated Gradient Glows */}
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, 30, 0] 
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute -top-24 -left-24 w-96 h-96 bg-[#FDE047]/20 rounded-full blur-[100px] opacity-60"
    />
    <motion.div 
      animate={{ 
        scale: [1, 1.3, 1],
        x: [0, -40, 0],
        y: [0, -60, 0] 
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[120px] opacity-70"
    />

    {/* Subtle Decorative Grid Pattern for Texture */}
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
  </div>

  {/* ================= CONTENT CONTAINER ================= */}
  <div className="container relative z-10 mx-auto px-4 text-center">
    {/* Subtle badge above the title */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-block mb-4 px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full shadow-sm"
    >
      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Trust & Quality</span>
    </motion.div>

    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-none"
    >
      Our Insurance <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900">Partners</span>
    </motion.h1>

    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "80px" }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="h-1.5 bg-[#FDE047] mx-auto mb-8 rounded-full"
    />

    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed"
    >
      Empowering your journey to better hearing through our extensive network 
      of leading insurance providers in the <span className="text-slate-900 font-bold border-b-2 border-[#FDE047]">Kingdom.</span>
    </motion.p>
  </div>
</section>

      {/* Grid Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {insuranceCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -12, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm transition-all duration-500"
            >
              {/* الترقيم بشكل خفي وجميل */}
              <span className="absolute top-4 right-6 text-slate-100 font-bold text-5xl group-hover:text-[#FDE047]/20 transition-colors">
                {String(company.id).padStart(2, '0')}
              </span>

              {/* Logo Container */}
              <div className="relative z-10 w-full aspect-square flex items-center justify-center mb-6 overflow-hidden">
                <Image
                  src={company.src} // المسار الذي ستحدده يدوياً
                  alt={company.name}
                  width={160}
                  height={160}
                  className="object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Text Info */}
              <div className="relative z-10 text-center">
                <h3 className="text-sm font-bold text-slate-800 leading-tight uppercase tracking-tight group-hover:text-black transition-colors">
                  {company.name}
                </h3>
                <div className="w-8 h-1 bg-[#FDE047] mx-auto mt-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer-like CTA */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-10 w-64 h-64 bg-[#FDE047] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 italic tracking-tighter">
            Hassle-Free Direct Billing
          </h2>
          <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto">
            We handle the paperwork with your insurance company directly, so you can focus on your hearing health.
          </p>
          <Link href="/contact">
  <motion.button 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-[#FDE047] text-black font-black py-4 px-12 rounded-full uppercase tracking-widest text-sm shadow-xl"
  >
    Check My Coverage
  </motion.button>
</Link>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-xs tracking-widest uppercase">
        © 2026 Al Barakat Hearing Centers • All rights reserved
      </footer>
    </div>
  )
}