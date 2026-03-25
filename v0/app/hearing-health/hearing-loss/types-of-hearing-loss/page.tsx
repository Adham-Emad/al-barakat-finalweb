 "use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Ear, AudioLines, Zap, Combine, Activity, CheckCircle2, Stethoscope, Info } from "lucide-react"

export default function TypesOfHearingLossPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* --- NEW TOP BANNER IMAGE --- */}
      <div className="w-full overflow-hidden">
        <img 
          src="/images/7-Types of Hearing Loss.jpg" 
          alt="Types of hearing loss banner" 
          // w-full h-auto ensures it shows the whole image without zooming
          className="w-full h-auto"
        />
      </div>
      {/* ---------------------------- */}

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
            Types of Hearing Loss
          </h1> 
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Hearing loss isn’t the same for everyone. The type of hearing loss determines how sound is affected, which part of the ear is involved, and what treatment options are best. At Al Barakat Hearing Centers, our audiologists in all regions of Kingdom Saudi Arabia carefully diagnose the type and degree of hearing loss through advanced hearing tests. This helps us recommend the most suitable hearing solutions whether it’s medical treatment, hearing rehabilitation, or advanced hearing aids from Signia and Rexton.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-16">

            {/* Introductory Note */}
            <div className="flex gap-4 p-6 bg-secondary/5 rounded-xl border border-secondary/20">
              <Info className="h-6 w-6 text-secondary shrink-0 mt-1" />
              <p className="text-muted-foreground leading-relaxed">
                At <strong>Al Barakat Hearing Centers</strong>, our audiologists across Saudi Arabia carefully diagnose the degree of loss using advanced hearing tests. This allows us to recommend solutions including medical treatment, hearing rehabilitation, and advanced hearing aids from <strong>Signia</strong> and <strong>Rexton</strong>.
              </p>
            </div>

           {/* --- NEW CONDUCTIVE HEARING LOSS IMAGE --- */}
            <div className="w-full overflow-hidden rounded-xl shadow-lg mb-8">
              <img 
                src="/images/8-Types of Hearing Loss.jpg" 
                alt="Conductive Hearing Loss" 
                className="w-full h-auto"
              />
            </div>
            {/* ----------------------------------------- */}

            {/* 1. Conductive Hearing Loss */}
            <div id="conductive" className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <AudioLines className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold">1. Conductive Hearing Loss</h2>
              </div>
              <Card className="border-none shadow-md overflow-hidden">
                <CardContent className="p-8">
                  <p className="text-lg mb-4">
                    Conductive hearing loss happens when sound waves cannot travel efficiently through the <strong>outer or middle ear</strong>. This means that sound is blocked or weakened before it reaches the inner ear (cochlea).
                  </p>

                  <h4 className="font-bold text-primary mb-2 underline decoration-secondary">Where It Occurs</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                    <li>• Outer Ear: Problems in the ear canal or eardrum</li>
                    <li>• Middle Ear: Issues with the eardrum, ossicles (tiny bones), or fluid buildup</li>
                  </ul>

                  <h4 className="font-bold text-primary mb-2 underline decoration-secondary">Common Causes</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                    <li>• Earwax blockage (cerumen impaction)</li>
                    <li>• Ear infections (otitis media)</li>
                    <li>• Fluid behind the eardrum</li>
                    <li>• Eardrum perforation (hole in the eardrum)</li>
                    <li>• Otosclerosis (stiffening of the middle ear bones)</li>
                    <li>• Foreign object in the ear canal</li>
                  </ul>

                  <h4 className="font-bold text-primary mb-2 underline decoration-secondary">Symptoms</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                    <li>• Sounds seem muffled or faint</li>
                    <li>• You can hear better in one ear than the other</li>
                    <li>• Your own voice sounds louder (autophony)</li>
                    <li>• Ears feel blocked or full</li>
                    <li>• Often accompanied by ear pain or pressure</li>
                  </ul>

                  <h4 className="font-bold text-primary mb-2 underline decoration-secondary">Diagnosis</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                    <li>• Otoscopy (visual ear inspection)</li>
                    <li>• Tympanometry (measures eardrum movement)</li>
                    <li>• Audiogram (hearing test to measure air and bone conduction)</li>
                  </ul>

                  <h4 className="font-bold text-primary mb-2 underline decoration-secondary">Treatment Options</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Many cases are temporary or reversible. Depending on the cause, treatment may include:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Medical management: antibiotics or ear cleaning</li>
                    <li>• Minor procedures: to drain fluid or repair the eardrum</li>
                    <li>• Hearing aids: for chronic or residual hearing loss (Signia and Rexton aids)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* 2. Sensorineural Hearing Loss */}
            <div id="sensorineural" className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Zap className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold">2. Sensorineural Hearing Loss (SNHL)</h2>
              </div>
              <Card className="border-none shadow-md overflow-hidden bg-primary/5 border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <p className="text-lg mb-4">
                    Sensorineural hearing loss is the most common and permanent form. It occurs when there is damage to the <strong>inner ear (cochlea)</strong> or the auditory nerve, affecting sound clarity.
                  </p>

                  <h4 className="font-bold mb-2 underline decoration-secondary">Where It Occurs</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                    <li>• Inner Ear: Damage to tiny hair cells inside the cochlea</li>
                    <li>• Auditory Nerve: Disruption in signal transmission to the brain</li>
                  </ul>

                  <h4 className="font-bold mb-2 underline decoration-secondary">Common Causes</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                    <li>• Aging (presbycusis)</li>
                    <li>• Noise exposure (loud music, machinery, explosions)</li>
                    <li>• Genetic or congenital factors</li>
                    <li>• Head injury or trauma</li>
                    <li>• Ototoxic medications (certain antibiotics, chemotherapy drugs)</li>
                    <li>• Viral or bacterial infections (e.g., meningitis)</li>
                    <li>• Sudden Sensorineural Hearing Loss (SSHL)</li>
                  </ul>

                  <h4 className="font-bold mb-2 underline decoration-secondary">Symptoms</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                    <li>• Difficulty understanding speech, especially in background noise</li>
                    <li>• People seem to mumble</li>
                    <li>• Trouble hearing high-pitched sounds (like birds or children’s voices)</li>
                    <li>• Tinnitus (ringing, buzzing, or roaring sounds)</li>
                    <li>• Difficulty talking on the phone</li>
                  </ul>

                  <h4 className="font-bold mb-2 underline decoration-secondary">Diagnosis</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                    <li>• Pure-tone audiometry</li>
                    <li>• Speech recognition testing</li>
                    <li>• Otoacoustic emissions (OAE) for infants</li>
                  </ul>

                  <h4 className="font-bold mb-2 underline decoration-secondary">Treatment Options</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground mb-2">
                    <li>• Digital hearing aids to amplify and clarify sounds</li>
                    <li>• Tinnitus management programs</li>
                    <li>• Cochlear implants for profound loss</li>
                  </ul>

                  <p className="text-sm mt-4 bg-primary/10 p-3 rounded">
                    <strong>The Al Barakat Advantage:</strong> We recommend advanced Signia and Rexton hearing aids with latest sound processing technology, Bluetooth connectivity, automatic adaptation to listening environments, directional technology, and tinnitus masking features.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 3. Mixed Hearing Loss */}
            <div id="mixed" className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Combine className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold">3. Mixed Hearing Loss</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Mixed hearing loss is a combination of conductive and sensorineural hearing loss. Sound is both blocked or reduced in the outer/middle ear and improperly transmitted in the inner ear or auditory nerve.
              </p>

              <h4 className="font-bold mb-2 underline decoration-secondary">Common Causes</h4>
              <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                <li>• Long-term untreated ear infections leading to nerve damage</li>
                <li>• Ear trauma or head injury</li>
                <li>• Genetic hearing conditions combined with middle ear issues</li>
                <li>• Otosclerosis (middle ear bone stiffening extending to inner ear)</li>
                <li>• Aging combined with conductive blockages (wax or fluid)</li>
              </ul>

              <h4 className="font-bold mb-2 underline decoration-secondary">Symptoms</h4>
              <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                <li>• Difficulty hearing both soft and loud sounds</li>
                <li>• Poor sound clarity even after volume is increased</li>
                <li>• Feeling that speech is unclear or distorted</li>
                <li>• Persistent tinnitus or ear pressure</li>
              </ul>

              <h4 className="font-bold mb-2 underline decoration-secondary">Diagnosis & Treatment</h4>
              <p className="text-sm mb-2">
                Full audiological evaluation including audiogram, tympanometry, speech recognition testing, and bone conduction studies is required. Treatment addresses both components:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Medical or surgical treatment for the conductive part</li>
                <li>• Hearing aids or cochlear implants for the sensorineural part (Signia & Rexton multi-channel digital aids)</li>
              </ul>
            </div>

     {/* 4. Auditory Neuropathy Spectrum Disorder */}
<div id="neuropathy" className="space-y-6">
  <div className="flex items-center gap-4">
    <div className="bg-primary/10 p-3 rounded-lg text-primary">
      <Activity className="h-8 w-8" />
    </div>
    <h2 className="text-3xl font-bold">
      4. Auditory Neuropathy Spectrum Disorder (ANSD)
    </h2>
  </div>

  <p className="text-muted-foreground italic">
    (Less common but important to mention for professionals and families)
  </p>

  <h4 className="font-bold mb-1 underline decoration-secondary">What It Is</h4>
  <p className="text-sm text-muted-foreground mb-2">
    Auditory neuropathy occurs when the inner ear detects sound, but the auditory nerve fails to send the signals properly to the brain. This causes sound distortion and poor speech understanding, especially in noisy environments.
  </p>

  <h4 className="font-bold mb-1 underline decoration-secondary">Causes</h4>
  <ul className="space-y-1 text-sm text-muted-foreground mb-2">
    <li>• Premature birth or neonatal jaundice</li>
    <li>• Lack of oxygen during birth</li>
    <li>• Genetic factors</li>
    <li>• Neurological conditions</li>
  </ul>

  <h4 className="font-bold mb-1 underline decoration-secondary">Symptoms</h4>
  <ul className="space-y-1 text-sm text-muted-foreground mb-2">
    <li>• Normal hearing test results but poor speech clarity</li>
    <li>• Difficulty understanding speech, especially in background noise</li>
    <li>• Inconsistent hearing responses</li>
  </ul>

  <h4 className="font-bold mb-1 underline decoration-secondary">Management</h4>
  <p className="text-sm text-muted-foreground mb-2">Treatment includes:</p>
  <ul className="space-y-1 text-sm text-muted-foreground">
    <li>• Specialized hearing aids</li>
    <li>• Cochlear implants for severe cases</li>
    <li>• Auditory training and speech therapy</li>
  </ul>
</div>


            {/* Why Knowing Your Type Matters */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Why It’s Important to Know Your Hearing Loss Type</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Choose the right treatment plan",
                  "Avoid further damage",
                  "Select the best hearing aid technology",
                  "Improve communication & quality of life"
                ].map((text, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span className="text-xs font-semibold">{text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Expert Diagnosis for Better Hearing</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our specialists perform Pure-tone audiometry, Speech testing, and OAE for infants to ensure a perfect diagnosis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/hearing-test">Free Online Evaluation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-colors font-bold">
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
