import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "REACH Technology | Al-Barakat",
  description: "Innovative REACH Technology for extended hearing range and connectivity.",
}

export default function REACHTechnologyPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <img 
          src=" /images/banmvc.webp" 
          alt="Man in an apron smiling in a busy cafe environment" 
          className="w-full h-full object-cover"
        />
        {/* Yellow Branding Box Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="  p-6 md:p-10 max-w-sm md:max-w-xl bg-black/10 backdrop-blur-[2px]">
            <h2 className="text-white text-4xl md:text-6xl font-bold uppercase leading-tight">
              Every voice matters <br />
              Rexton Reach
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 md:py-28 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-3/5 space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight border-l-8 border-[#fff200] pl-6">
                Multi-Voice Focus makes sure <br />
                every voice is heard
              </h2>
            </div>
            
            <div className="space-y-6 text-xl text-slate-600 font-light leading-relaxed">
              <p>
                When multiple people are involved in a conversation, voices drop in and 
                out, and move around. Until now, hearing aid users have struggled to catch 
                every word. 
              </p>
              <p>
                <strong className="text-slate-900 font-semibold">Rexton Reach</strong>, with Multi-Voice Focus, will make sure every 
                voice is heard. The technology scans the surrounding environment <span className="text-slate-900 font-medium">1,000 times a second</span> with <span className="text-slate-900 font-medium">4 focus beams</span>.
              </p>
              <p>
                It adapts automatically to changes in speaker positions and volumes, ensuring 
                you stay connected to the conversation, no matter how dynamic it becomes.
              </p>
            </div>
          </div>

          {/* Right Illustration Column */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-4 bg-yellow-100/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              {/* The Technical Graphic */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center rounded-full ">
                <img 
                  src=" /images/anmib Background Removed.png" 
                  alt="Rexton Reach Multi-Voice Focus technology diagram" 
                  className="w-4/5 h-auto object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>




      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary">
            <CardContent className="p-8 text-center text-primary-foreground md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Experience REACH Technology</h2>
              <p className="mb-6 text-lg opacity-90">Connect seamlessly to all your devices. Schedule a demo today.</p>
              <Button asChild size="lg" variant="secondary" className="transition-all hover:scale-105">
                <Link href="/booking">Book Your Appointment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
