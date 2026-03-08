"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { User, Clock, Volume2, HeartPulse, Ear, Zap, Brain, Users, CheckCircle2, AlertTriangle } from "lucide-react"

export default function AdultHearingLossPage() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />

     {/* --- NEW TOP BANNER IMAGE --- */}
      <div className="w-full">
        <img 
          src="/images/9-Hearing Loss in Adults.jpg" 
          alt="Hearing Loss in Adults Banner" 
          className="w-full h-auto"
        />
      </div>
{/* ---------------------------- */}

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
            Hearing Loss in Adults
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Hearing loss is a common yet often overlooked condition among adults. It can develop gradually over time or suddenly due to medical, environmental, or lifestyle factors. In Saudi Arabia, thousands of adults experience some form of hearing difficulty, but with today’s technology, hearing loss is highly manageable.
          </p>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
            At <strong>Al Barakat Hearing Centers</strong>, we specialize in adult hearing care, offering comprehensive hearing assessments and advanced hearing aid solutions from <strong>Signia</strong> and <strong>Rexton</strong> to help you reconnect with the sounds of life.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-12">

            {/* Intro Card */}
            <Card className="border-none shadow-sm bg-secondary/5 hover:bg-secondary/10 transition-colors">
              <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
                <div className="bg-white p-4 rounded-full shadow-sm">
                  <User className="h-12 w-12 text-secondary" />
                </div>
                <div className="text-lg leading-relaxed">
                  At <strong>Al Barakat Hearing Centers</strong>, we provide:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Comprehensive hearing assessments</li>
                    <li>Advanced hearing aid solutions from Signia and Rexton</li>
                    <li>Tinnitus therapy and follow-up care</li>
                    <li>Hearing protection and maintenance services</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Why Adults Experience Hearing Loss */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Why Adults Experience Hearing Loss</h2>
              
           {/* --- NEW SECTION IMAGE (FIXED) --- */}
<div className="w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg mt-8 mb-10">
  <img
    src="/images/10-Why Adults Experience Hearing Loss.jpg"
    alt="Causes of hearing loss in adults"
    // Changed class below to remove object-cover and max-height
    className="w-full h-auto"
  />
</div>
{/* --------------------------------- */}
              {/* ------------------------- */}
              
              {/* ... the rest of your paragraphs or content go here ... */}

              {[
                {
                  title: "1. Age-Related Hearing Loss (Presbycusis)",
                  points: [
                    "The most common form of adult hearing loss.",
                    "Caused by gradual damage to the tiny hair cells in the inner ear that detect sound frequencies.",
                    "Usually affects both ears equally.",
                    "Makes it difficult to understand speech, especially in noisy environments."
                  ],
                  icon: Clock
                },
                {
                  title: "2. Noise-Induced Hearing Loss",
                  points: [
                    "Long-term exposure to loud sounds (such as machinery, concerts, or headphones) can permanently damage the hair cells of the inner ear.",
                    "This form of hearing loss is often preventable but irreversible once it occurs."
                  ],
                  icon: Volume2
                },
                {
                  title: "3. Medical and Health-Related Causes",
                  points: [
                    "Hearing loss can also occur because of medical conditions or medication side effects.",
                    "Some health issues reduce blood flow or damage delicate auditory structures."
                  ],
                  icon: HeartPulse
                },
                {
                  title: "4. Earwax and Middle Ear Conditions",
                  points: [
                    "Even something simple like earwax buildup can cause temporary hearing loss in adults.",
                    "Other middle ear issues such as infections, fluid accumulation, or otosclerosis (bone stiffening) can reduce sound transmission."
                  ],
                  icon: Ear
                },
                {
                  title: "5. Sudden Hearing Loss",
                  points: [
                    "Sometimes, hearing loss can occur suddenly, often in one ear, and may be accompanied by tinnitus (ringing) or dizziness.",
                    "This is a medical emergency known as Sudden Sensorineural Hearing Loss (SSHL); treatment must begin within 48 hours for the best recovery results."
                  ],
                  icon: Zap
                }
              ].map((item, idx) => (
                <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="flex flex-col md:flex-row items-start gap-4">
                    <div className="bg-white p-4 rounded-full shadow-sm">
                      <item.icon className="h-10 w-10 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {item.points.map((point, i) => <li key={i}>{point}</li>)}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Impact of Untreated Hearing Loss */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Impact of Untreated Hearing Loss</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Increased stress and fatigue</li>
                <li>Feelings of isolation or depression</li>
                <li>Cognitive decline and reduced memory function</li>
                <li>Strain in personal and professional communication</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                Early detection and treatment help adults stay active, engaged, and confident.
              </p>
            </div>

            {/* Why Choose Al Barakat */}
            <div className="rounded-2xl border p-8 space-y-6">
              <h2 className="text-2xl font-bold">Why Choose Al Barakat Hearing Centers</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Certified audiologists providing expert care</li>
                <li>Comprehensive hearing assessments</li>
                <li>Customized hearing aid fittings</li>
                <li>Tinnitus therapy and follow-up care</li>
                <li>Hearing protection and maintenance services</li>
                <li>Partnership with Signia and Rexton for advanced hearing solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Regain the Joy of Hearing</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/hearing-test">Take Free Online Test</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-colors font-bold">
              <Link href="/booking">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 Al Barakat Hearing Centers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
