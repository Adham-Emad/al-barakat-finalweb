"use client"

import { MainNavigation } from "@/components"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export default function TinnitusSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />

      {/* 1. HERO SECTION */}
      <section className="relative w-full py-12">
        <div className="container mx-auto max-w-7xl px-4">
        <div className="relative h-[400px] w-full overflow-hidden rounded-lg pt-4">
             {/* Tinnitus - People experiencing symptoms */}
            <Image
              src="/images/tinnitus-hero.png" 
              alt="Adults experiencing tinnitus symptoms"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-normal text-slate-900 mb-6">
              Unique tinnitus therapy
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              Most people know that hearing aids can help people hear – but they don’t know that they can also help them enjoy the silence.
            </p>
          </div>
        
        </div>
      </section>

      {/* 2. THREE STRATEGIES INTRO */}
      <section className="py-12 border-b">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-normal mb-6">Signia hearing aids offer three different strategies against tinnitus</h2>
          <p className="text-slate-600 mb-4">
            Static noise tinnitus therapy and ocean wave tinnitus therapy cover up the disturbing tinnitus sounds with individually tuned therapy signals which divert attention away from the tinnitus and thereby reduce its impact. As a result, you can relax and concentrate on what you want to hear.
          </p>
          <p className="text-slate-600">
            Notch Therapy is unique to Signia hearing aids and is proven to reduce the annoyance of tonal tinnitus.*
          </p>
        </div>
      </section>

      {/* 3. STATIC NOISE SECTION (Text Left, Icon Right) */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-normal mb-6">Static noise tinnitus therapy signals</h2>
            <p className="text-slate-600 mb-6">Gentle static noise therapy signals mix with tinnitus to help it fade into the background.</p>
            <p className="text-slate-600">Signia hearing aids offer five different types of static noise therapy signals so that your hearing care professional can help you choose the most comfortable solution for you.</p>
          </div>
          <div className="w-48 h-48 relative flex-shrink-0">
            <Image src="/images/tinnitus_icon_static-noise_768x768px.webp" alt="Static noise icon" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* 4. OCEAN WAVE SECTION (Text Left, Icon Right) */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-5xl px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-normal mb-6">Ocean wave tinnitus therapy signals</h2>
            <p className="font-semibold mb-4">What’s more relaxing than the sound of the sea?</p>
            <p className="text-slate-600 mb-6">Gentle static noise therapy signals mix with tinnitus to help it fade into the background.</p>
            <p className="text-slate-600">Signia hearing aids offer five different types of static noise therapy signals so that your Hearing Care Professional can help you choose the most comfortable solution for you.</p>
          </div>
          <div className="w-48 h-48 relative flex-shrink-0">
            <Image src="/images/tinnitus_icon_ocean-waves_768x768px.webp" alt="Ocean wave icon" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* 5. NOTCH THERAPY INTRO (Text Left, Icon Right) */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-normal mb-6">World’s first: Tinnitus Notch Therapy</h2>
            <p className="text-slate-600 mb-6">
              Notch Therapy is customized to create a "quiet zone" in the auditory system around your specific tinnitus frequency, so your brain doesn’t notice tinnitus as much.
            </p>
            <p className="text-slate-600 mb-6">
              Signia hearing aids are the only ones with the built-in tinnitus Notch Therapy. This is a method that has shown to be especially effective for people who experience tonal tinnitus, the most common type of tinnitus.
            </p>
            <div className="space-y-3">
              <p className="font-bold">Proven Notch Therapy benefits include:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-black" /> Reduced tinnitus severity</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-black" /> Improved sleep quality</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-black" /> Reduced impact of tinnitus on daily life</li>
              </ul>
            </div>
          </div>
          <div className="w-64 h-64 relative flex-shrink-0">
            <Image src="/images/tinnitus_icon_notch-therapy_768x768px.webp" alt="Notch therapy target" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* 6. COMPARISON SECTION (Side by Side Images) */}
      <section className="py-16 border-t">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Without Notch */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-normal mb-4">Without Notch Therapy</h3>
              <p className="text-slate-600 mb-8 min-h-[50px]">Tinnitus stands out above other surrounding noise and is clearly heard.</p>
              <div className="relative w-full aspect-square max-w-[400px]">
                <Image src="/images/tinnitus_therapy-without-notch_1000x1000.webp" alt="Visual representation without notch therapy" fill className="object-contain" />
              </div>
            </div>
            
            {/* With Notch */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-normal mb-4">With Notch Therapy</h3>
              <p className="text-slate-600 mb-8 min-h-[50px]">Notch Therapy reduces the annoyance of your tinnitus so that you can enjoy the sounds of your environment again.</p>
              <div className="relative w-full aspect-square max-w-[400px]">
                <Image src="/images/tinnitus_therapy-with-notch_1000x1000.webp" alt="Visual representation with notch therapy" fill className="object-contain" />
              </div>
            </div>
          </div>
          
         
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-normal mb-6">Ready to find relief?</h2>
          <Button asChild size="lg" variant="outline" className="text-white border-white bg-transparent hover:text-slate-900">
            <Link href="/booking">Find a hearing care professional</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
