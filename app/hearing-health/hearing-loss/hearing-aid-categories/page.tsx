"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function RextonTypesPage() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />

      {/* HERO */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight">
            Types of Rexton Hearing Aids
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Rexton offers a wide range of modern hearing aid styles designed to fit
            different levels of hearing loss, lifestyle needs, and comfort preferences.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Hearing aids have evolved dramatically over the past decades. Today,
            Rexton hearing aids combine advanced technology, discreet design, and
            natural sound quality to help you stay connected to the world around you.
          </p>
          <p>
            Choosing the right hearing aid depends on your hearing needs, ear shape,
            daily activities, and personal preferences. Below are the main types of
            hearing aids available from Rexton.
          </p>
        </div>
      </section>

      {/* SECTION 1 – BTE */}
      <section className="py-20 border-t">
        <div className="container mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Behind-The-Ear (BTE) Hearing Aids
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Behind-The-Ear hearing aids house all electronic components in a casing
              that sits comfortably behind the ear. Sound is delivered into the ear
              canal through a tube and earmold.
            </p>
            <p className="text-muted-foreground text-lg">
              BTE hearing aids are powerful, durable, and easy to handle, making them
              suitable for people of all ages and for mild to profound hearing loss.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/rexton/bte.png"
              alt="Rexton BTE Hearing Aid"
              width={420}
              height={420}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 – RIC */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <Image
              src="/images/rexton/ric.png"
              alt="Rexton RIC Hearing Aid"
              width={420}
              height={420}
              className="object-contain"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">
              Receiver-In-The-Canal (RIC) Hearing Aids
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              RIC hearing aids are smaller and more discreet than traditional BTEs.
              The receiver sits directly in the ear canal and connects to the device
              with a thin wire.
            </p>
            <p className="text-muted-foreground text-lg">
              This design delivers natural sound quality and comfort, making RIC
              hearing aids ideal for mild to severe hearing loss.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 – INSTANT FIT */}
      <section className="py-20 border-t">
        <div className="container mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Instant-Fit Hearing Aids
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Instant-fit hearing aids are designed to be worn immediately without
              custom earmolds. They use soft, flexible tips that adapt naturally to
              the ear canal.
            </p>
            <p className="text-muted-foreground text-lg">
              These hearing aids offer excellent comfort, quick fitting, and
              discreet appearance for everyday use.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/rexton/instant-fit.png"
              alt="Rexton Instant Fit Hearing Aid"
              width={420}
              height={420}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 – CUSTOM */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <Image
              src="/images/rexton/custom.png"
              alt="Rexton Custom Hearing Aid"
              width={420}
              height={420}
              className="object-contain"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">
              Custom Hearing Aids
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Custom hearing aids are individually crafted from an impression of
              your ear, ensuring a precise and comfortable fit.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground text-lg space-y-2">
              <li>
                <strong>CIC & IIC:</strong> Completely-in-canal and invisible-in-canal
                models for maximum discretion.
              </li>
              <li>
                <strong>ITE & ITC:</strong> In-the-ear models that are easier to handle
                and can include advanced controls.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold mb-4">
            Find the Right Rexton Hearing Aid for You
          </h2>
          <p className="mb-8 text-lg">
            Book a consultation with our hearing specialists and get professionally
            fitted Rexton hearing aids tailored to your lifestyle and hearing needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-bold">
            <Link href="/booking">Book a Consultation</Link>
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Al Barakat Hearing Centers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
