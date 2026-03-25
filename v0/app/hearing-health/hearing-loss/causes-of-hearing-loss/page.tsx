 "use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  AlertCircle,
  Clock,
  VolumeX,
  Stethoscope,
  Baby,
  Pill,
  ShieldAlert,
  Zap,
  CheckCircle2
} from "lucide-react"

export default function CausesOfHearingLossPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
{/* --- UPDATED "NORMAL" TOP BANNER IMAGE --- */}
      {/* We removed the fixed heights from this div container */}
      <div className="w-full overflow-hidden">
        <img 
          src="/images/5-Causes of Hearing Loss.jpg" 
          alt="Causes of hearing loss" 
          // We changed 'h-full object-cover' to 'h-auto'. 
          // This shows the full, unzoomed image.
          className="w-full h-auto"
        />
      </div>
      {/* --------------------------------------- */}
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
            Causes of Hearing Loss
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Hearing loss can affect anyone — from newborns to older adults — and it can happen suddenly or gradually.
            The causes vary widely, ranging from simple earwax buildup to permanent inner-ear damage.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-12">

            {/* Intro */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Al Barakat Hearing Centers, our audiologists in all regions of Kingdom Saudi Arabia
                are experts in identifying the exact cause of hearing loss through advanced diagnostic testing.
              </p>
              <p>
                Understanding why hearing loss occurs is the first step toward choosing the right treatment
                or hearing solution, such as Signia or Rexton digital hearing aids.
              </p>
            </div>

            {/* How Hearing Loss Happens */}
            <Card className="border-primary/20 bg-primary/5 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">How Hearing Loss Happens</h2>
                    <p className="text-muted-foreground mb-4">
                      Your ear converts sound waves into electrical signals that the brain can interpret.
                    </p>
                    <p className="text-muted-foreground">
                      Hearing loss occurs when any part of this process (the outer ear, middle ear,
                      inner ear, or the auditory nerve) is damaged or blocked.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

         <h2 className="text-2xl font-bold">
              There are main categories of hearing loss causes:
            </h2>

            {/* --- NEW CAUSES CATEGORIES IMAGE --- */}
            <div className="w-full overflow-hidden rounded-xl shadow-lg my-8">
              <img 
                src="/images/6-Causes of Hearing Loss.jpg" 
                alt="Main categories of hearing loss" 
                className="w-full h-auto"
              />
            </div>
            {/* ----------------------------------- */}

            {/* 1 */}
            <Card className="shadow-md">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-4 text-primary">
                  <Clock className="h-8 w-8" />
                  <h3 className="text-xl font-bold">1. Age-Related Hearing Loss (Presbycusis)</h3>
                </div>

                <h4 className="font-semibold">What It Is</h4>
                <p className="text-muted-foreground">
                  As we age, the tiny hair cells in the cochlea (inner ear) naturally deteriorate.
                  These hair cells are responsible for detecting sound frequencies.
                  Once damaged, they cannot regenerate, leading to gradual, permanent hearing loss.
                </p>

                <h4 className="font-semibold">Who It Affects</h4>
                <p className="text-muted-foreground">
                  Most adults begin to notice subtle hearing difficulties after the age of 50,
                  though it can start earlier depending on lifestyle, genetics, and exposure to noise.
                </p>

                <h4 className="font-semibold">Typical Symptoms</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Difficulty understanding high-pitched voices (women, children)</li>
                  <li>Trouble following conversations in noisy settings</li>
                  <li>Sounds seem muffled rather than loud</li>
                </ul>

                <h4 className="font-semibold">Management</h4>
                <p className="text-muted-foreground">
                  While presbycusis cannot be reversed, it can be effectively managed with advanced digital hearing aids.
                </p>
                <p className="italic">
                  At Al Barakat Hearing Centers, we recommend Signia and Rexton hearing aids
                  for their natural and brilliant sound clarity and automatic adjustment features.
                </p>
              </CardContent>
            </Card>

            {/* 2 */}
            <Card className="shadow-md">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-4 text-primary">
                  <VolumeX className="h-8 w-8" />
                  <h3 className="text-xl font-bold">2. Noise-Induced Hearing Loss</h3>
                </div>

                <h4 className="font-semibold">What It Is</h4>
                <p className="text-muted-foreground">
                  One of the most common causes of permanent hearing loss worldwide and one that’s entirely preventable.
                </p>

                <h4 className="font-semibold">Common Sources of Noise Exposure</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Loud music (concerts, headphones)</li>
                  <li>Industrial or construction machinery</li>
                  <li>Traffic, sirens, or airport environments</li>
                  <li>Firearms or explosions</li>
                </ul>

                <h4 className="font-semibold">Prevention & Management</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Use custom hearing protection</li>
                  <li>Limit headphone volume to 60% or less</li>
                  <li>Schedule regular hearing tests</li>
                  <li>
                    Treat early damage with amplification solutions,
                    we recommend Signia and Rexton hearing aids
                  </li>
                </ul>
              </CardContent>
            </Card>

{/* 3. Ear Infections and Fluid Build-Up */}
<Card className="overflow-hidden border-none shadow-md">
  <CardContent className="p-8 space-y-4">
    <div className="flex items-center gap-4 text-primary">
      <Stethoscope className="h-8 w-8" />
      <h2 className="text-2xl font-bold">3. Ear Infections and Fluid Build-Up</h2>
    </div>

    <p className="text-muted-foreground">
      Recurrent ear infections or fluid accumulation in the middle ear can block
      the transmission of sound vibrations. This type of hearing loss — conductive
      hearing loss — is often temporary and treatable.
    </p>

    <div>
      <h3 className="font-semibold mb-2">Who Is Affected</h3>
      <ul className="list-disc pl-6 text-muted-foreground space-y-1">
        <li>Children: more prone due to shorter Eustachian tubes.</li>
        <li>Adults: often affected by chronic sinus problems or allergies.</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Typical Causes</h3>
      <ul className="list-disc pl-6 text-muted-foreground space-y-1">
        <li>Bacterial or viral infections</li>
        <li>Sinus congestion and allergies</li>
        <li>Blocked Eustachian tubes</li>
        <li>Enlarged adenoids (in children)</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Treatment</h3>
      <ul className="list-disc pl-6 text-muted-foreground space-y-1">
        <li>Antibiotics or medical drainage</li>
        <li>Ear cleaning or minor surgical procedures (e.g., grommets for chronic fluid)</li>
        <li>
          In some cases, if hearing does not fully recover, hearing aids can
          compensate for residual loss
        </li>
      </ul>
    </div>
  </CardContent>
</Card>

{/* 4. Genetic or Congenital Hearing Loss */}
<Card className="overflow-hidden border-none shadow-md">
  <CardContent className="p-8 space-y-4">
    <div className="flex items-center gap-4 text-primary">
      <Baby className="h-8 w-8" />
      <h2 className="text-2xl font-bold">4. Genetic or Congenital Hearing Loss</h2>
    </div>

    <p className="text-muted-foreground">
      Some people are born with hearing loss due to genetic factors, or it develops
      early in life due to inherited conditions. Congenital hearing loss can range
      from mild to profound and may affect one or both ears.
    </p>

    <div>
      <h3 className="font-semibold mb-2">Causes</h3>
      <ul className="list-disc pl-6 text-muted-foreground space-y-1">
        <li>Family history of hearing loss</li>
        <li>Genetic mutations affecting the cochlea or auditory nerve</li>
        <li>
          Complications during pregnancy or birth (e.g., infections, lack of oxygen)
        </li>
      </ul>
    </div>

    <p className="text-muted-foreground">
      Early newborn hearing screening and pediatric hearing tests help detect
      hearing loss in infants. Treatment options include digital pediatric hearing
      aids, bone conduction devices, or cochlear implants.
    </p>
  </CardContent>
</Card>

{/* 5. Ototoxic Medications */}
<Card className="overflow-hidden border-none shadow-md">
  <CardContent className="p-8 space-y-4">
    <div className="flex items-center gap-4 text-primary">
      <Pill className="h-8 w-8" />
      <h2 className="text-2xl font-bold">5. Ototoxic Medications</h2>
    </div>

    <p className="text-muted-foreground">
      Certain medications can damage the structures of the inner ear, leading to
      ototoxic hearing loss. This may be temporary or permanent depending on the
      type and dosage of medication.
    </p>

    <div>
      <h3 className="font-semibold mb-2">Common Ototoxic Drugs</h3>
      <ul className="list-disc pl-6 text-muted-foreground space-y-1">
        <li>Certain antibiotics (e.g., gentamicin, streptomycin)</li>
        <li>Chemotherapy drugs (cisplatin, carboplatin)</li>
        <li>High doses of aspirin or diuretics</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-2">Prevention</h3>
      <p className="text-muted-foreground">
        If you must take ototoxic medication, inform your doctor immediately if you
        experience ringing in the ears (tinnitus), sudden changes in hearing, or
        dizziness or balance issues.
      </p>
    </div>
  </CardContent>
</Card>

{/* 6. Physical Trauma or Head Injury */}
<Card className="overflow-hidden border-none shadow-md">
  <CardContent className="p-8 space-y-6">
    <div className="flex items-center gap-4 text-primary">
      <ShieldAlert className="h-8 w-8" />
      <h2 className="text-2xl font-bold">
        6. Physical Trauma or Head Injury
      </h2>
    </div>

    <p className="text-muted-foreground">
      Blunt force trauma, skull fractures, or even rapid pressure changes
      (barotrauma) can injure the delicate bones or nerves of the ear. This may
      result in sudden hearing loss, often accompanied by dizziness or tinnitus.
    </p>

    {/* Treatment */}
    <div>
      <h3 className="text-lg font-semibold mb-2">Treatment</h3>
      <p className="text-muted-foreground">
        Immediate medical attention is critical. Some cases recover with
        medication; others may need long-term hearing rehabilitation using
        hearing aids or implantable solutions. We recommend <strong>Signia</strong>{" "}
        and <strong>Rexton</strong> hearing aids for their natural and brilliant
        sound clarity and automatic adjustment features.
      </p>
    </div>
  </CardContent>
</Card>


{/* 7. Sudden Hearing Loss */}
{/* 7. Unknown or Sudden Hearing Loss */}
<Card className="border-destructive/20 bg-destructive/5">
  <CardContent className="p-8 space-y-4">
    <div className="flex items-center gap-4 text-destructive">
      <Zap className="h-8 w-8" />
      <h2 className="text-2xl font-bold">
        7. Unknown or Sudden Hearing Loss
      </h2>
    </div>

    <p className="text-muted-foreground">
      Sometimes, hearing loss happens suddenly without an identifiable cause —
      known as <strong>Sudden Sensorineural Hearing Loss (SSHL)</strong>.
    </p>

    <p className="font-medium text-destructive">
      It’s a medical emergency that requires immediate treatment (often with
      steroids) to prevent permanent damage.
    </p>
  </CardContent>
</Card>


{/* Protecting and Treating Hearing Loss */}
<section className="pb-16">
  <div className="container mx-auto max-w-7xl px-4">
    <div className="mx-auto max-w-4xl space-y-6">
      <h2 className="text-3xl font-bold text-primary">
        Protecting and Treating Hearing Loss
      </h2>

      <p className="text-muted-foreground text-lg">
        No matter the cause, hearing loss can be managed or treated effectively
        with today’s advanced technology. At <strong>Al Barakat Hearing Centers</strong>, we provide:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-lg">
        <li>Comprehensive hearing tests for all age groups</li>
        <li>Customized hearing protection and ear cleaning services</li>
        <li>
          Signia and Rexton digital hearing aids with AI and tinnitus relief
        </li>
        <li>Follow-up care and annual hearing check-ups</li>
      </ul>
    </div>
  </div>
</section>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Protecting and Treating Hearing Loss
        </h2>
        <p className="mb-8">
          At Al Barakat Hearing Centers, we provide comprehensive hearing tests,
          customized hearing protection, and Signia & Rexton digital hearing aids.
        </p>
        <Button asChild size="lg" variant="secondary" className="font-bold">
          <Link href="/booking">Book a Consultation</Link>
        </Button>
      </section>

      <footer className="border-t bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground">
          <p></p>
        </div>
      </footer>
    </div>
  )
}
