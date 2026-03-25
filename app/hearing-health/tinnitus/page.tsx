 "use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  ClipboardList, 
  Search, 
  Headphones, 
  Waves, 
  BarChart3, 
  CheckCircle2, 
  Brain, 
  Stethoscope,
  ShieldCheck,
  Baby,
  MessageSquare,
  FileText
} from "lucide-react"

export default function HearingTestPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
{/* --- NEW TOP BANNER IMAGE --- */}
      <div className="w-full overflow-hidden">
        <img 
          src="/images/1- Understanding Hearing Tests.jpg" 
          alt="Understanding Hearing Tests Banner" 
          className="w-full h-auto"
        />
      </div>
      {/* ---------------------------- */}

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight text-primary">
            Understanding Hearing Tests
          </h1>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A <strong>hearing test</strong> (also called a hearing assessment or audiometry test) is a painless, non-invasive procedure used to measure how well you hear different sounds and speech.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left bg-background/50 p-6 rounded-2xl border border-primary/10">
              <div className="space-y-2">
                <p className="font-bold text-primary">It helps determine:</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> Whether you have hearing loss</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> The type (conductive, sensorineural, or mixed)</li>
                </ul>
              </div>
              <div className="space-y-2 md:pt-8">
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> The degree or severity of the loss</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> The best treatment or hearing aid solution</li>
                </ul>
              </div>
            </div>
            <p className="text-muted-foreground italic">
              At Al Barakat Hearing Centers, we use advanced diagnostic technology and experienced audiologists to provide accurate evaluations for adults and children across Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-16">
            
            {/* Why Hearing Tests Matter */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">Why Hearing Tests Are Important</h2>
              <p className="text-center text-muted-foreground">They are an essential part of maintaining overall hearing health.</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4 p-4 border rounded-xl hover:bg-muted/30 transition-colors">
                  <div className="shrink-0 bg-secondary/10 p-3 rounded-lg h-fit">
                    <Search className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">1. Early Detection</h4>
                    <p className="text-sm text-muted-foreground">Hearing loss often develops gradually. Regular tests help detect problems before they become serious.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 border rounded-xl hover:bg-muted/30 transition-colors">
                  <div className="shrink-0 bg-secondary/10 p-3 rounded-lg h-fit">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">2. Prevent Communication Problems</h4>
                    <p className="text-sm text-muted-foreground">Untreated loss can lead to frustration, isolation, and miscommunication with family or colleagues.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 border rounded-xl hover:bg-muted/30 transition-colors">
                  <div className="shrink-0 bg-secondary/10 p-3 rounded-lg h-fit">
                    <Brain className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">3. Protect Brain Health</h4>
                    <p className="text-sm text-muted-foreground">Untreated hearing loss can contribute to cognitive decline and memory issues.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 border rounded-xl hover:bg-muted/30 transition-colors">
                  <div className="shrink-0 bg-secondary/10 p-3 rounded-lg h-fit">
                    <ShieldCheck className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">4. Choose the Right Solution</h4>
                    <p className="text-sm text-muted-foreground">Helps recommend suitable hearing aids (Signia or Rexton) customized to your profile.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works - Step by Step */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">How Hearing Tests Work</h2>
              <p className="text-muted-foreground">Our specialists use state-of-the-art diagnostic tools. Here is what you can expect:</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                  <div className="font-bold text-2xl text-primary/30">01</div>
                  <div>
                    <h4 className="font-bold flex items-center gap-2"><ClipboardList className="h-4 w-4" /> Case History and Consultation</h4>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                  <div className="font-bold text-2xl text-primary/30">02</div>
                  <div>
                    <h4 className="font-bold flex items-center gap-2"><Stethoscope className="h-4 w-4" /> Physical Ear Examination</h4>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-primary/5 border border-primary/10 rounded-xl shadow-sm">
                  <div className="font-bold text-2xl text-primary">03</div>
                  <div>
                    <h4 className="font-bold flex items-center gap-2 text-primary"><Headphones className="h-4 w-4" /> Pure-Tone Audiometry (PTA)</h4>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      The most common test. You will wear headphones and listen to beeps and tones at different pitches and volumes. This maps your <strong>hearing threshold</strong>—the quietest sounds you can hear—displayed on an <strong>audiogram</strong>.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                  <div className="font-bold text-2xl text-primary/30">04</div>
                  <div>
                    <h4 className="font-bold flex items-center gap-2"><MessageSquare className="h-4 w-4" /> Speech Audiometry</h4>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                  <div className="font-bold text-2xl text-primary/30">05</div>
                  <div>
                    <h4 className="font-bold flex items-center gap-2"><Waves className="h-4 w-4" /> Tympanometry (Middle Ear Test)</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Interpreting Results */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Interpreting the Results</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Your audiologist will explain your results using an <strong>audiogram chart</strong> that shows thresholds at various frequencies (low, mid, high) and the degree of loss: <strong>Mild, Moderate, Severe, or Profound</strong>.
              </p>
              
              

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-center">
                  <h5 className="font-bold text-sm mb-1">Medical Referral</h5>
                  <p className="text-[10px] text-muted-foreground">For infections or wax buildup.</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-center">
                  <h5 className="font-bold text-sm mb-1">Hearing Aids</h5>
                  <p className="text-[10px] text-muted-foreground">Signia and Rexton solutions.</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-center">
                  <h5 className="font-bold text-sm mb-1">Tinnitus Management</h5>
                  <p className="text-[10px] text-muted-foreground">Relief and protection programs.</p>
                </div>
              </div>
            </div>

            {/* What Happens After */}
            <div className="bg-secondary/5 rounded-2xl p-8 border border-secondary/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" /> What Happens After the Test
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Recommending suitable hearing aid models</li>
                  <li className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Demonstrating and trying hearing aid technology</li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Providing tinnitus therapy if needed</li>
                  <li className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Creating a personalized hearing care plan</li>
                </ul>
              </div>
              <p className="mt-6 text-sm italic text-muted-foreground">You’ll receive a clear, written report and can ask questions about your results or treatment options.</p>
            </div>

            {/* Types of Tests We Offer */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">Types of Hearing Tests We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Comprehensive adult hearing assessments",
                  "Pediatric hearing evaluations",
                  "Tinnitus assessments",
                  "Pre-employment hearing screening",
                  "Noise-induced hearing monitoring",
                  "Hearing aid fitting and verification tests"
                ].map((test, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-background border rounded-xl shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{test}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Al Barakat Advantage */}
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold">Why Choose Al Barakat Hearing Centers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm">We are the most trusted provider in Saudi Arabia, combining experience, compassion, and cutting-edge technology.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg bg-background shadow-sm">
                  <ShieldCheck className="h-6 w-6 text-secondary mx-auto mb-2" />
                  <p className="text-xs font-bold">Certified Specialists</p>
                </div>
                <div className="p-4 border rounded-lg bg-background shadow-sm">
                  <Waves className="h-6 w-6 text-secondary mx-auto mb-2" />
                  <p className="text-xs font-bold">Modern soundproof testing rooms</p>
                </div>
                <div className="p-4 border rounded-lg bg-background shadow-sm">
                  <BarChart3 className="h-6 w-6 text-secondary mx-auto mb-2" />
                  <p className="text-xs font-bold">Signia & Rexton Range</p>
                </div>
                <div className="p-4 border rounded-lg bg-background shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-secondary mx-auto mb-2" />
                  <p className="text-xs font-bold">Free Initial Consultation</p>
                </div>
                <div className="p-4 border rounded-lg bg-background shadow-sm col-span-2 md:col-span-1">
                  <Baby className="h-6 w-6 text-secondary mx-auto mb-2" />
                  <p className="text-xs font-bold">Riyadh, Jeddah & Across KSA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Professional Hearing Care</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book your comprehensive diagnostic assessment today at any of our clinics in Riyadh, Jeddah, or across Saudi Arabia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/booking">Book a Clinic Visit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-colors font-bold">
              <Link href="/contact">Contact a Specialist</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground">
          <p></p>
        </div>
      </footer>
    </div>
  )
} 