 "use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  Music, 
  BrainCircuit, 
  Ear, 
  Sparkles, 
  CheckCircle2, 
  Headphones, 
  Mic2,
  HeartPulse,
  Stethoscope,
  Info
} from "lucide-react"

export default function TinnitusTherapyPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
{/* --- NEW TOP BANNER IMAGE --- */}
      <div className="w-full overflow-hidden">
        <img 
          src="/images/13-Tinnitus Symptoms and Causes.jpg" 
          alt="Tinnitus Symptoms and Causes" 
          className="w-full h-auto"
        />
      </div>
      {/* ---------------------------- */}

      {/* Hero Section - What Is Tinnitus? */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
            Tinnitus Symptoms and Causes
          </h1>
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-2xl font-semibold text-primary">What Is Tinnitus?</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Tinnitus is the perception of sound when no external sound is present, often described as ringing, buzzing, humming, whistling, or clicking in one or both ears.
            </p>
            <p className="text-muted-foreground">
              It’s not a disease itself, but a symptom of an underlying condition affecting the hearing system. Nearly 1 in 5 adults experience tinnitus at some point in their lives, and while it can be frustrating, effective treatments are available.
            </p>
            <p className="font-medium text-primary">
              At Al Barakat Hearing Centers, our audiologists specialize in tinnitus assessment and therapy, helping patients manage symptoms and improve quality of life through our cutting-edge technology Signia & Rexton Tinnitus Hearing aids.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-16">
            
            {/* How Tinnitus Happens Section */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">How Tinnitus Happens</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Tinnitus occurs when there’s disruption or damage to the auditory system, the ear, hearing nerve, or the brain’s sound-processing center.
                </p>
                <p>
                  When the ear doesn’t receive normal sound input (due to hearing loss or injury), the brain may create its own “phantom sounds.” Think of it as your brain <strong>“filling in the silence.”</strong>
                </p>
              </div>
            </div>

            {/* Visual Representation Placeholder */}
            <div className="bg-muted/50 rounded-2xl p-8 flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/20">
              <BrainCircuit className="h-16 w-16 text-primary/40 mb-4" />
              <p className="text-sm text-muted-foreground italic text-center">
                

[Image of the neural pathways from the ear to the brain's auditory cortex]

              </p>
            </div>

            {/* Common Causes Grid (1. Hearing Loss & 2. Noise Exposure) */}
            <div className="space-y-8">
               <h2 className="text-3xl font-bold text-center">Common Causes of Tinnitus</h2>
               <p className="text-center text-muted-foreground -mt-4 italic">Understanding the cause is the first step toward relief.</p>
               
               <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-none shadow-md bg-white">
                  <CardContent className="p-8 space-y-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary">
                      <Ear className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">1. Hearing Loss</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The most frequent cause of tinnitus. When the tiny hair cells in the inner ear are damaged (due to age, noise, or illness), the brain compensates by producing internal sounds.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-white">
                  <CardContent className="p-8 space-y-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary">
                      <Headphones className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">2. Noise Exposure</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Loud sounds from concerts, construction, or headphones can cause permanent ear damage. Even short exposure to intense noise can trigger tinnitus.
                    </p>
                    <div className="bg-secondary/10 p-3 rounded-lg flex gap-2 items-start">
                      <Sparkles className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                      <p className="text-xs font-semibold text-secondary">Prevention Tip: Always use ear protection in noisy environments and limit headphone use.</p>
                    </div>
                  </CardContent>
                </Card>

                {/* 3. Earwax & 4. Medications */}
                <Card className="border-none shadow-md bg-white">
                  <CardContent className="p-8 space-y-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary">
                      <Info className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">3. Earwax Blockage</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Excess earwax can trap sound waves and irritate the eardrum, causing temporary tinnitus.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-white">
                  <CardContent className="p-8 space-y-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary">
                      <Music className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">4. Medications (Ototoxic Drugs)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Certain antibiotics, chemotherapy drugs, painkillers, and diuretics can cause tinnitus as a side effect. Always inform your doctor if ringing begins after starting a new medication.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 5. Medical Conditions & Specialist Guidance Section */}
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">5. Medical Conditions</h2>
                  <p className="text-muted-foreground">Several health problems can contribute to tinnitus, including:</p>
                  <ul className="space-y-3">
                    {[
                      "High blood pressure (hypertension)",
                      "Diabetes",
                      "Thyroid disorders",
                      "Ear infections or eardrum damage",
                      "Jaw (TMJ) problems or neck tension"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-primary/10">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Stethoscope className="text-primary h-5 w-5" />
                    When to See a Specialist
                  </h3>
                  <p className="text-sm text-muted-foreground">You should schedule a tinnitus evaluation if you experience:</p>
                  <ul className="space-y-2">
                    {[
                      "Persistent ringing, buzzing, or humming in the ears",
                      "Tinnitus in one ear only",
                      "Hearing loss or difficulty understanding speech",
                      "Dizziness or ear fullness"
                    ].map((symptom, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary font-bold">•</span>
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs italic text-muted-foreground pt-2">
                    Our audiologists at Al Barakat Hearing Centers use advanced diagnostic tools to identify the cause and develop a personalized treatment plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Al Barakat Hearing Centers Section */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold flex items-center gap-3 justify-center">
                Why Choose Al Barakat Hearing Centers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-background border rounded-xl shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-secondary mb-3" />
                  <p className="text-sm font-bold">Expert Diagnosis</p>
                  <p className="text-xs text-muted-foreground">Certified audiologists experienced in tinnitus diagnosis and therapy</p>
                </div>
                <div className="p-6 bg-background border rounded-xl shadow-sm">
                  <Sparkles className="h-6 w-6 text-secondary mb-3" />
                  <p className="text-sm font-bold">Advanced Technology</p>
                  <p className="text-xs text-muted-foreground">Access to advanced Signia and Rexton hearing technology</p>
                </div>
                <div className="p-6 bg-background border rounded-xl shadow-sm">
                  <HeartPulse className="h-6 w-6 text-secondary mb-3" />
                  <p className="text-sm font-bold">Personalized Plans</p>
                  <p className="text-xs text-muted-foreground">Personalized tinnitus management plans</p>
                </div>
                <div className="p-6 bg-background border rounded-xl shadow-sm">
                  <BrainCircuit className="h-6 w-6 text-secondary mb-3" />
                  <p className="text-sm font-bold">Long-term Success</p>
                  <p className="text-xs text-muted-foreground">Follow-up care and counseling for long-term success</p>
                </div>
              </div>
              <p className="text-center text-muted-foreground text-sm font-medium">
                We serve patients across Riyadh, Jeddah, and all major cities in Saudi Arabia, providing world-class hearing and tinnitus care.
              </p>
            </div>

            {/* Specialist Guidance / Audit Card */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">The First Step is a Tinnitus Audit</h2>
                <p className="opacity-90 mb-6">
                  Our audiologists use advanced diagnostic tools to identify the cause and develop a personalized treatment plan for patients across Riyadh, Jeddah, and all major cities in Saudi Arabia.
                </p>
                <Button asChild size="lg" variant="secondary" className="font-bold">
                  <Link href="/booking">Schedule Your Tinnitus Evaluation</Link>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-muted py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience World-Class Hearing Care</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="font-bold">
              <Link href="/contact">Contact Our Specialists</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold">
              <Link href="/booking">Book a Clinic Visit</Link>
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