"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  AlertCircle,
  CheckCircle2,
  Phone,
  Volume2,
  Users,
  Ear,
  Brain,
  MessageSquare,
  Activity
} from "lucide-react"

export default function SignsOfHearingLossPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
{/* --- NEW TOP BANNER IMAGE --- */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <img 
          src="/images/3-Signs of Hearing Loss.jpg" 
          alt="Signs of hearing loss" 
          className="w-full h-full object-cover"
        />
      </div>
      {/* ---------------------------- */}

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
              Signs of hearing loss
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Hearing loss is a partial or total inability to hear sound in one or both ears. It may occur gradually
              (over years) or suddenly (within hours).
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-12">

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Al Barakat Hearing Centers, we offer comprehensive hearing assessments, medical guidance,
                and digital hearing aids that restore sound clarity and confidence.
              </p>
              <p>
                At Al Barakat Hearing Centers, we emphasize early detection, because identifying hearing loss
                at an early stage helps prevent communication problems, emotional stress, and social withdrawal.
              </p>
            </div>

            {/* Why Early Detection Matters */}
            <Card className="border-primary/20 bg-primary/5 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Why Early Detection Matters</h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      Your hearing plays a key role in how you communicate, connect, and think.
                      Studies show that untreated hearing loss can lead to:
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-4">
                      <li className="flex items-center gap-3 bg-background/50 p-3 rounded-lg">
                        <Brain className="h-5 w-5 text-primary" />
                        <span>Cognitive decline and memory challenges</span>
                      </li>
                      <li className="flex items-center gap-3 bg-background/50 p-3 rounded-lg">
                        <Activity className="h-5 w-5 text-primary" />
                        <span>Fatigue from constant listening effort</span>
                      </li>
                      <li className="flex items-center gap-3 bg-background/50 p-3 rounded-lg">
                        <Users className="h-5 w-5 text-primary" />
                        <span>Social isolation or anxiety</span>
                      </li>
                      <li className="flex items-center gap-3 bg-background/50 p-3 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>Reduced job performance and confidence</span>
                      </li>
                    </ul>

                    <p className="mt-6 text-muted-foreground">
                      Recognizing the warning signs of hearing loss early allows for timely intervention —
                      whether that’s hearing protection, medical treatment, or advanced hearing aids
                      from Signia and Rexton.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
{/* Signs */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">
                Below are the most common signs and everyday clues that may indicate a hearing problem.
              </h2>

              {/* --- NEW SIGNS IMAGE --- */}
              <div className="w-full overflow-hidden rounded-xl shadow-lg mt-8">
                <img 
                  src="/images/4-Signs of Hearing Loss.jpg" 
                  alt="Common signs of hearing loss" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* ----------------------- */}

              <div className="grid gap-6">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      1. Difficulty Understanding Speech
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      You might hear that someone is speaking but struggle to understand the words clearly.
                      This happens because hearing loss often affects high-frequency sounds
                      (like “s”, “f”, “th”) first, which are essential for speech clarity.
                    </p>
                    <ul className="list-disc list-inside space-y-1 italic">
                      <li>People sound like they are mumbling.</li>
                      <li>Women’s and children’s voices are harder to understand.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      2. Frequently Asking People to Repeat Themselves
                    </h3>
                    <p className="text-muted-foreground">
                      If you often say “pardon?”, “what?”, or “can you repeat that?”,
                      it’s a classic early sign of hearing loss.
                      You may not realize how often this happens until friends or family point it out.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      3. Turning Up the Volume on TV or Phone
                    </h3>
                    <p className="text-muted-foreground">
                      Do you notice your TV, phone, or car radio volume creeping higher than others prefer?
                      If friends or family complain the sound is “too loud,”
                      it’s a strong indicator that you may not be hearing softer speech frequencies.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      4. Trouble Following Conversations in Noisy Environments
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Restaurants, family gatherings, and malls can make conversations especially difficult.
                      Background noise competes with speech, making it hard to focus on voices.
                    </p>
                    <ul className="list-disc list-inside space-y-1 italic">
                      <li>Difficulty following group discussions</li>
                      <li>Frustration in noisy places</li>
                      <li>Avoidance of social events due to “hearing fatigue”</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      5. Trouble Hearing on the Phone
                    </h3>
                    <p className="text-muted-foreground">
                      Phones transmit sound differently than face-to-face conversation — without visual cues or lip reading.
                      If you find phone conversations tiring, unclear, or require speaker mode,
                      your hearing may need testing.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      6. Ringing or Buzzing in the Ears (Tinnitus)
                    </h3>
                    <p className="text-muted-foreground">
                      Tinnitus — hearing ringing, buzzing, or hissing sounds — often accompanies hearing loss.
                      It’s a sign that your auditory system may be under stress or that inner ear hair cells are damaged.
                    </p>
                    <p className="mt-3 italic">
                      At Al Barakat Hearing Centers, we offer tinnitus therapy programs integrated with
                      Signia and Rexton hearing aids.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      7. Needing to See People’s Lips to Understand Speech
                    </h3>
                    <p className="text-muted-foreground">
                      If you depend on lip reading or facial expressions to follow conversations —
                      especially in noisy settings — your brain is compensating for missing sounds.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      8. Feeling Tired After Long Conversations
                    </h3>
                    <p className="text-muted-foreground">
                      When your ears and brain work harder to fill in missing words,
                      it causes mental fatigue known as listening effort.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* What To Do */}
            <div className="rounded-2xl bg-secondary/5 border border-secondary/20 p-8 md:p-12 space-y-6">
              <h2 className="text-2xl font-bold text-center">What to Do If You Notice These Signs</h2>
              <ul className="space-y-3 list-disc list-inside">
                <li>Book a hearing test at your nearest Al Barakat Hearing Center.</li>
                <li>Avoid self-diagnosing or waiting — most hearing loss is treatable.</li>
                <li>Explore Signia or Rexton digital hearing aids, customized for your lifestyle.</li>
                <li>Protect your hearing from further damage by reducing exposure to loud sounds.</li>
              </ul>
            </div>

            {/* Why Choose */}
            <div className="space-y-4 text-muted-foreground">
              <h2 className="text-2xl font-bold text-foreground">Why Choose Al Barakat Hearing Centers</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Trusted hearing specialists across Saudi Arabia</li>
                <li>Authorized provider for Signia and Rexton hearing aids</li>
                <li>Friendly, bilingual staff for clear communication</li>
                <li>Advanced diagnostic technology and customized care</li>
                <li>Support for adults, seniors, and children</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Take the first step toward better hearing today
        </h2>
        <p className="mb-8">
          Visit your nearest Al Barakat Hearing Center for a comprehensive hearing check-up.
        </p>
        <Button asChild size="lg" variant="secondary" className="font-bold">
          <Link href="/booking">Book a Consultation</Link>
        </Button>
      </section>

      <footer className="border-t bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Al Barakat Hearing Centers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
