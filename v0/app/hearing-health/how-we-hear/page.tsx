 "use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HowWeHearPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
            How Hearing Works
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            At Al Barakat Hearing Centers, we believe that understanding your hearing is the first step toward protecting it.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl space-y-12">

           {/* Overview */}
            <div className="text-center md:text-left border-l-4 border-primary pl-6 py-2">
              <p className="text-lg leading-relaxed text-foreground/80 font-medium">
                Your ear is a finely tuned organ that transforms sound waves into information your brain can understand.
                This process happens in a fraction of a second and involves three main parts: the outer ear, the middle ear,
                and the inner ear.
              </p>
            </div>

            {/* --- NEW EAR ANATOMY IMAGE --- */}
            <div className="my-10 w-full overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/images/How HearingWorks.jpg" 
                alt="Diagram of human ear anatomy" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* ----------------------------- */}

            {/* Sections */}
            <div className="grid gap-8">

              {/* Outer Ear */}
              <Card className="overflow-hidden border-none shadow-md">
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    1. The Outer Ear – Collecting Sound
                  </h2>
                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      The <strong>pinna</strong> (the visible part of your ear) gathers sound waves and funnels them through
                      the <strong> ear canal</strong> to the <strong>eardrum (tympanic membrane)</strong>.
                    </p>
                    <p>
                      When sound waves strike the eardrum, they cause it to vibrate. These vibrations carry the pitch and
                      volume information of the sound.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Middle Ear */}
              <Card className="overflow-hidden border-none shadow-md">
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    2. The Middle Ear – Amplifying Sound
                  </h2>
                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      Behind the eardrum lie three delicate bones known as the <strong>ossicles</strong>:
                    </p>
                    <ul className="list-disc list-inside pl-4 space-y-1 text-foreground font-medium">
                      <li>Malleus (hammer)</li>
                      <li>Incus (anvil)</li>
                      <li>Stapes (stirrup)</li>
                    </ul>
                    <p>
                      These bones amplify the vibrations and transmit them to the <strong>oval window</strong>, a membrane
                      that connects to the inner ear. The middle ear also contains the <strong>Eustachian tube</strong>,
                      which balances air pressure between the ear and the environment — essential for clear hearing.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Inner Ear */}
              <Card className="overflow-hidden border-none shadow-md">
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    3. The Inner Ear – Converting Vibration into Signals
                  </h2>
                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      Inside the <strong>cochlea</strong>, a fluid-filled spiral structure, thousands of microscopic
                      <strong> hair cells</strong> convert mechanical vibrations into <strong>electrical nerve impulses</strong>.
                      These signals travel via the <strong>auditory nerve</strong> to the brain’s hearing center
                      (auditory cortex), where they’re interpreted as recognizable sounds — speech, music, or ambient noise.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Brain */}
              <Card className="overflow-hidden border-none shadow-md">
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    4. The Brain – Making Sense of Sound
                  </h2>
                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      Your brain not only decodes sound but also determines its <strong>direction</strong>,
                      <strong> distance</strong>, and <strong>meaning</strong>.
                    </p>
                    <p className="font-medium text-foreground bg-primary/5 p-4 rounded-lg italic">
                      This coordination between the ears and brain is why even a small hearing imbalance can affect
                      communication and quality of life.
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
{/* Regional Message */}
            <div className="pt-8 text-center">
              <p className="text-xl font-semibold text-primary/80">
                Our audiologists in all regions of Kingdom Saudi Arabia are here to help you every step
                of the way to understanding your hearing.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- NEW VIDEO SECTION --- */}
      <section className="py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <video 
              className="w-full h-auto object-cover"
              src="/newvideo.mp4" 
              controls
              playsInline
            >
              <source src="/newvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      {/* ------------------------- */}

      {/* CTA */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Test Your Hearing
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Ready to take the first step? Try our quick online hearing test today.
          </p>
          <Button asChild size="lg" className="px-8 font-bold">
            <Link href="/hearing-test">Take Free Hearing Test</Link>
          </Button>
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
