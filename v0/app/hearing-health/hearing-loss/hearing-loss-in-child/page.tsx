 "use client"

import { MainNavigation } from "@/components"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  Baby, 
  Search, 
  Stethoscope, 
  Music, 
  GraduationCap, 
  ShieldCheck, 
  Ear, 
  Heart,
  CheckCircle2,
  AlertCircle
} from "lucide-react"

export default function PediatricHearingLossPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

     {/* --- NEW TOP BANNER IMAGE --- */}
      <div className="w-full overflow-hidden">
        <img 
          src="/images/11-Hearing Loss in Children.jpg" 
          alt="Hearing Loss in Children Banner" 
          className="w-full h-auto object-cover max-h-[500px]"
        />
      </div>
      {/* ---------------------------- */}

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50/50 to-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight text-primary">
            Hearing Loss in Children
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Hearing plays a vital role in a child’s speech, language, and learning development. 
            At Al Barakat Hearing Centers, we help your child hear, speak, and thrive with confidence.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            
            {/* Early Detection Alert */}
            <Card className="border-primary/20 bg-primary/5 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Search className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Why Early Detection Matters</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Children may not recognize hearing difficulties. Early diagnosis is essential to prevent 
                      <strong> speech delays</strong> and <strong>learning difficulties</strong>. We recommend 
                      newborn screenings within the first month of life.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Causes Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">Common Causes in Children</h2>
              
            {/* --- NEW SECTION IMAGE (FIXED) --- */}
              <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg mt-6 mb-10">
                <img 
                  src="/images/12-Common Causes in Children.jpg" 
                  alt="Common causes of hearing loss in children" 
                  // Removed object-cover and max-h-[400px]
                  className="w-full h-auto"
                />
              </div>
              {/* ------------------------- */}

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Baby, title: "Genetic & Congenital", text: "About half of childhood cases are inherited or present from birth." },
                  { icon: ShieldCheck, title: "Pregnancy & Birth", text: "Infections during pregnancy or lack of oxygen during delivery." },
                  { icon: Stethoscope, title: "Ear Infections", text: "Fluid trapped behind the eardrum (Otitis Media) is very common." },
                  { icon: Music, title: "Noise Exposure", text: "Loud toys, video games, and high headphone volumes." }
                ].map((item, idx) => (
                  <Card key={idx} className="border-none bg-muted/30">
                    <CardContent className="p-6">
                      <item.icon className="h-8 w-8 text-secondary mb-4" />
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Warning Signs Table */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <AlertCircle className="text-primary" />
                Signs to Watch For
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-6 rounded-2xl bg-white border border-border shadow-sm">
                  <h4 className="font-bold text-secondary mb-3">Infants (0–1yr)</h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Doesn't startle at noise</li>
                    <li>• Doesn't turn to voices</li>
                    <li>• Doesn't babble by 6mo</li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-border shadow-sm">
                  <h4 className="font-bold text-secondary mb-3">Toddlers (1–3yrs)</h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Delayed speech</li>
                    <li>• Unclear pronunciation</li>
                    <li>• Turning up TV volume</li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-border shadow-sm">
                  <h4 className="font-bold text-secondary mb-3">Older Children</h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Struggles with instructions</li>
                    <li>• Poor school performance</li>
                    <li>• Becomes withdrawn</li>
                  </ul>
                </div>
              </div>
            </div>

            



            {/* Testing Methods */}
            <Card className="bg-primary text-primary-foreground overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Child-Friendly Testing</h2>
                <p className="mb-6 opacity-90">Our pediatric audiologists use safe, non-invasive methods:</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Newborn OAE & ABR</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Visual Reinforcement</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Play Audiometry</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Tympanometry</div>
                </div>
              </CardContent>
            </Card>

            {/* Hearing Aids Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Solutions for Little Ears</h2>
              <p className="text-muted-foreground">
                For permanent loss, we offer child-specific <strong>Signia</strong> and <strong>Rexton</strong> 
                models designed for comfort, durability, and school connectivity.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4 p-4 border rounded-xl items-start">
                  <GraduationCap className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">School Ready</h4>
                    <p className="text-xs text-muted-foreground">Connects directly to smartphones and classroom FM systems.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 border rounded-xl items-start">
                  <Heart className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">Durable & Fun</h4>
                    <p className="text-xs text-muted-foreground">Available in bright colors with robust materials for active play.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    {/* Updated CTA Section - Matching Adult & Causes Pages */}
    <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Help Your Child Reach Their Full Potential</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Early diagnosis is the key to success. Our qualified audiologists provide 
            gentle, accurate screenings and world-class Signia and Rexton technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/booking">Book a Pediatric Test</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-colors font-bold">
              <Link href="/contact">Contact Our Specialists</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Al Barakat Hearing Centers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}