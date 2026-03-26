"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
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
  ShieldCheck,
  ClipboardCheck
} from "lucide-react"

export default function CareersPage() {
  const applicationLink = "https://forms.gle/Xi3jH28tgwpKgyW46";

  const positions = [
    { title: "Reception & Customer Service", icon: <Users2 size={20} /> },
    { title: "Sales", icon: <Target size={20} /> },
    { title: "Audiologist", icon: <Headphones size={20} /> },
    { title: "Speech therapist", icon: <Stethoscope size={20} /> },
    { title: "Biomedical / Electronic Engineering", icon: <Settings size={20} /> },
    { title: "Biomedical Technician", icon: <ShieldCheck size={20} /> },
    { title: "Maintenance / Laboratory Technician", icon: <Briefcase size={20} /> },
  ]

  return (
    <div className="min-h-screen bg-white font-sans text-left">
      <MainNavigation />

      {/* 1. Hero Section */}
      <section className="relative bg-[#00838f] py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 relative z-10 text-left">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-white text-sm font-medium backdrop-blur-md uppercase tracking-wider">
              <ClipboardCheck size={16} /> Employment Application Form
            </div>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Join the Al Barakat Hearing <br /> Care Centers Team
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light max-w-3xl leading-relaxed">
              At Al Barakat Hearing Care Centers, established in 1985, we are not simply seeking employees. 
              We are looking for dedicated individuals who aspire to become partners in our continued success 
              and share our clear vision for excellence.
            </p>
            
            {/* Added Email Button in Hero Section */}
            <div className="pt-4">
              <Button asChild variant="outline" className="rounded-full border-white/40 bg-white/10 hover:bg-white hover:text-[#00838f] text-white px-8 py-6 text-lg font-bold backdrop-blur-md transition-all">
                <a href="mailto:career@albarakatgroup.com" className="flex items-center gap-3">
                  <Mail size={20} />
                  SEND CV VIA EMAIL
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
      </section>

      {/* 2. Philosophy & Legacy */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <div className="inline-flex items-center gap-2 text-[#00838f] font-bold">
                <History size={20} /> Over 40 Years of Excellence
              </div>
              <p>
                With over 40 years of experience in hearing care across Saudi Arabia, we take great pride in our legacy of service, innovation, and patient-centered care. 
              </p>
              <p>
                Our commitment to quality drives us to continuously seek talented professionals across all disciplines who are passionate about making a meaningful impact.
              </p>
              <p className="font-semibold text-slate-900 border-l-4 border-[#00838f] pl-4 italic">
                If you are motivated, driven, and ready to grow within a respected and forward-thinking organization, we welcome you to be part of our journey.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Why Join Us?</h3>
              <p className="text-slate-600 mb-6">
                If you are looking for a professional work environment, real growth opportunities, and a clear career path within a leading brand, we welcome you to join the Al Barakat team.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl">
                  <p className="text-xs font-bold text-[#00838f] uppercase">Market Leader</p>
                  <p className="text-sm font-medium">Since 1985</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl">
                  <p className="text-xs font-bold text-[#00838f] uppercase">Growth</p>
                  <p className="text-sm font-medium">Career Path</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Open Opportunities List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">OPEN OPPORTUNITIES</h2>
            <p className="text-slate-500 italic">We are continuously seeking talent in the following disciplines:</p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto text-left">
            {positions.map((job, idx) => (
              <a 
                key={idx} 
                href={applicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-[#00838f]/20 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#00838f] group-hover:bg-[#00838f] group-hover:text-white transition-colors">
                    {job.icon}
                  </div>
                  <span className="font-bold text-slate-800 md:text-lg">{job.title}</span>
                </div>
                <ChevronRight className="text-slate-300 group-hover:text-[#00838f] group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 px-4">
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
              If you are looking for a professional work environment, real growth opportunities, and a clear career path within a leading brand, we welcome you to join the Al Barakat team.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Final Action Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 relative z-10 text-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold italic">"Not simply employees, but partners"</h2>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                Send your CV now via email or through an application form 📩
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button asChild size="lg" className="rounded-full bg-[#00838f] hover:bg-[#00606a] px-10 py-8 text-xl font-bold shadow-2xl hover:scale-105 transition-all w-full md:w-auto">
                <a href={applicationLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <ExternalLink size={24} />
                  ONLINE APPLICATION FORM
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 bg-white/5 hover:bg-white hover:text-slate-900 px-10 py-8 text-xl font-bold backdrop-blur-md hover:scale-105 transition-all w-full md:w-auto">
                <a href="mailto:career@albarakatgroup.com" className="flex items-center gap-3">
                  <Mail size={24} />
                  CAREER@ALBARAKATGROUP.COM
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"></div>
      </section>
    </div>
  )
}