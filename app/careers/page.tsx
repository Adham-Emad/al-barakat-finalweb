"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Briefcase, 
  History, 
  Target, 
  Users2, 
  Mail, 
  ExternalLink,
  ChevronRight,
  Stethoscope,
  Headphones,
  Settings,
  ShieldCheck
} from "lucide-react"

export default function CareersPage() {
  const positions = [
    { title: "Reception & Customer Service", icon: <Users2 size={20} /> },
    { title: "Sales Professional", icon: <Target size={20} /> },
    { title: "Audiologist", icon: <Headphones size={20} /> },
    { title: "Speech Therapist", icon: <Stethoscope size={20} /> },
    { title: "Biomedical / Electronic Engineering", icon: <Settings size={20} /> },
    { title: "Biomedical Technician", icon: <ShieldCheck size={20} /> },
    { title: "Maintenance / Laboratory Technician", icon: <Briefcase size={20} /> },
  ]

  return (
    <div className="min-h-screen bg-white font-sans text-left">
      <MainNavigation />

      {/* 1. Hero Section - التاريخ والهوية */}
      <section className="relative bg-[#00838f] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 relative z-10 text-left">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-white text-sm font-medium backdrop-blur-md">
              <History size={16} /> Since 1985 — Over 40 Years of Excellence
            </div>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Join the Al-Barakat <br /> Legacy of Care
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
              We are not simply seeking employees. We are looking for partners in our continued success and shared vision for excellence.
            </p>
          </div>
        </div>
        {/* Background Design */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
      </section>

      {/* 2. Our Philosophy - المحتوى اللي بعته */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900 italic">"Not simply employees, but partners."</h2>
                <div className="w-16 h-1.5 bg-[#00838f] rounded-full"></div>
              </div>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  At Al Barakat Hearing Care Centers, established in 1985, we are not simply seeking employees. We are looking for dedicated individuals who aspire to become partners in our continued success and share our clear vision for excellence.
                </p>
                <p>
                  With over 40 years of experience in hearing care across Saudi Arabia, we take great pride in our legacy of service, innovation, and patient-centered care.
                </p>
                <p className="font-semibold text-slate-800">
                  If you are motivated, driven, and ready to grow within a respected and forward-thinking organization, we welcome you to be part of our journey.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl shadow-sm space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary"><Users2 /></div>
                <h4 className="font-bold">Team Spirit</h4>
                <p className="text-xs text-slate-500">A collaborative environment that values every partner's input.</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm space-y-3 mt-8">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary"><Target /></div>
                <h4 className="font-bold">Real Growth</h4>
                <p className="text-xs text-slate-500">Clear career paths and professional advancement.</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary"><ShieldCheck /></div>
                <h4 className="font-bold">Stability</h4>
                <p className="text-xs text-slate-500">Join a market leader since 1985 in Saudi Arabia.</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm space-y-3 mt-8">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary"><ExternalLink /></div>
                <h4 className="font-bold">Innovation</h4>
                <p className="text-xs text-slate-500">Work with the latest global hearing technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Open Positions List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight">Open Opportunities</h2>
            <p className="text-slate-500">We continuously seek talented professionals across all disciplines who are passionate about making a meaningful impact.</p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {positions.map((job, idx) => (
              <div key={idx} className="group flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {job.icon}
                  </div>
                  <span className="font-bold text-slate-800 md:text-lg">{job.title}</span>
                </div>
                <ChevronRight className="text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Action Section - الأزرار اللي طلبتها */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 relative z-10 text-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Ready to Start Your Journey?</h2>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                Submit your application today via our official form or send your CV directly to our HR team.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {/* Button 1: Application Form */}
              <Button asChild size="lg" className="rounded-full bg-[#00838f] hover:bg-[#00606a] px-10 py-8 text-xl font-bold shadow-2xl hover:scale-105 transition-all w-full md:w-auto">
                <a href="https://forms.gle/Xi3jH28tgwpKgyW46" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 uppercase">
                  <ExternalLink size={24} />
                  Online Application Form
                </a>
              </Button>

              {/* Button 2: Email */}
              <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 bg-white/5 hover:bg-white hover:text-slate-900 px-10 py-8 text-xl font-bold backdrop-blur-md hover:scale-105 transition-all w-full md:w-auto">
                <a href="mailto:career@albarakatgroup.com" className="flex items-center gap-3 uppercase">
                  <Mail size={24} />
                  Send CV via Email
                </a>
              </Button>
            </div>
            
            <p className="text-slate-500 text-sm">
              * Please ensure your CV is in PDF format for faster processing.
            </p>
          </div>
        </div>
        {/* Background Decorative Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none"></div>
      </section>

      {/* Footer - تأكد إن عندك مكون فوتر */}
      {/* <Footer /> */}
    </div>
  )
}