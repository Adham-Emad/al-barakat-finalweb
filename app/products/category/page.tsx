"use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function RextonTypesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <MainNavigation />
{/* --- PAGE TITLE --- */}
<section
  className="w-full border-b bg-cover bg-center bg-no-repeat aspect-[1600/540]"
  style={{
    backgroundImage:
      "url('/images/Rexton_Reach_iX-CIC-Li_woman-side-view-close-up_mirrored_1600x540.webp')",
  }}
>
  <div className="container mx-auto max-w-7xl px-4 h-full flex items-center justify-center text-center">
    <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white drop-shadow-lg">
      TYPES OF <br />
      <span className="text-primary">HEARING AIDS</span>
    </h1>
  </div>
</section>




      {/* --- HERO SECTION --- */}
      <section className="bg-[#f8f9fa] py-20 border-b">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-primary font-bold tracking-widest text-sm uppercase">Right for me?</h2>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Types of Hearing Aids</h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Hearing aids have evolved greatly over the last 50+ years. While all of them will help improve your hearing quality, there are differences between each type. Figuring out which type is best for you ends up being a matter of personal preference of look and performance.
              </p>
            </div>
            <div className="relative h-[350px] w-full">
              <Image src="/images/1122 Background Removed.png" alt="Rexton Collection" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW TO CHOOSE SECTION --- */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">How to choose a hearing aid type</h2>
              <p className="text-slate-600 text-lg">
                There are three main factors that go into choosing the right hearing aid type for you: 
                <strong> hearing loss, ear anatomy, and your specific hearing needs.</strong>
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Hearing Loss", text: "Hearing loss ranges from mild (having trouble with certain frequencies) to profound (can barely hear any sound). Some hearing aid types are more appropriate to specific levels of hearing loss." },
                  { title: "Ear Anatomy", text: "Each ear is unique, just like our fingerprint. Some types of hearing aids might fit better than the others, and those specificities are important drivers when choosing the type of device to wear." },
                  { title: "Hearing Needs", text: "Hearing needs have no linear relation with hearing thresholds. That means each individual has its own needs regardless of how the hearing loss looks. A hearing care professional needs to access those needs in order to address the most suitable features from different hearing aid technologies." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-1 bg-primary h-auto"></div>
                    <p className="text-slate-600">
                      <strong className="text-slate-900 block mb-1">{item.title}</strong>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] w-full bg-slate-100 rounded-2xl overflow-hidden">
              <Image src="/images/Rexton_HCP-Jackie_explaining-hearing-aid_1600x1067.webp" alt="Professional Consultation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: RIC --- */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">BEHIND-THE-EAR (BTE) HEARING AIDS
              </h2>
              <p className="text-lg text-slate-600">
              These are what most people think of when it comes to hearing aids. These devices wrap all electrical components inside its housing, which sits behind the ear. As amplified sound coming out of the BTE needs to reach the ear canal, a connection tube is used, which can either be a personalized earmold or an instant fit with a thin tube. BTE hearing aids are usually more powerful than other types and cover a wider range of hearing loss, from mild to profound. BTEs are easy to clean and handle, and normally offer longer battery life.              </p>
               <Button asChild size="lg" className="w-fit bg-primary hover:bg-primary/90">
  <Link href="/booking">Book Consultation</Link>
</Button>

            </div>
            <div className="flex justify-center">
              <Image src="/images/xxxc.webp" alt="RIC Model" width={450} height={450} className="object-contain" />
            </div>
          </div>
        </div>
      </section>
      
      {/* --- SECTION 2: BTE --- */}
      <section className="py-20 bg-white border-b">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">RECEIVER-IN-THE-CANAL (RIC) HEARING AIDS
              </h2>
              <p className="text-lg text-slate-600">
              They have become the most popular type of hearing aids because of a highly flexible and practical fitting.

<br />
<br />
With one of the electrical components (the receiver) sitting in the ear canal, connected by a wire to the remaining components wrapped in a small housing behind the ear, RIC hearing aids are commonly smaller than BTEs and the best solution for those seeking for discreet fitting.
<br />
<br />
Hearing losses from mild to severe can benefit from a RIC device, and thanks to a variety of instant fit options for couplers, it can be fitted without a specific earmold.
               </p>
              
              <Button asChild size="lg" className="w-fit bg-primary hover:bg-primary/90">
  <Link href="/booking">Book Consultation</Link>
</Button>

            </div>
            <div className="flex justify-center">
              <Image src="/images/xxc2 Background Removed.png" alt="BTE Model" width={450} height={450} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: INSTANT FIT --- */}
      <section className="py-20 bg-slate-50 border-b">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">INSTANT-FIT HEARING AIDS

              </h2>
              <p className="text-lg text-slate-600">
              Instant-fit sit in the ear and are ready-to-wear without custom molding. Soft and flexible tips are maximizing the wearing comfort.
               </p>
               <Button asChild size="lg" className="w-fit bg-primary hover:bg-primary/90">
  <Link href="/booking">Book Consultation</Link>
</Button>

            </div>
            <div className="flex justify-center">
              <Image src="/images/xxcc3 Background Removed.png" alt="Instant Fit Model" width={450} height={450} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

   

      {/* --- SECTION 5: CUSTOM CIC --- */}
      <section className="py-20 bg-slate-50 border-b">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">CUSTOM CIC & IIC
              </h2>
              <p className="text-lg text-slate-600">
              CIC (Completely-In-the-Ccanal) and IIC (Invisible-In-the-Canal) hearing aids sit very deep in the ear canal, and are hardly seen from outside. They are meant to help with mild to moderate hearing loss.               </p>
              <Button asChild size="lg" className="w-fit bg-primary hover:bg-primary/90">
  <Link href="/booking">Book Consultation</Link>
</Button>

            </div>
            <div className="flex justify-center">
              <Image src="/images/xc4 Background Removed.png" alt="CIC Custom Model" width={450} height={450} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: CUSTOM IIC --- */}
      <section className="py-20 bg-white border-b">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">CUSTOM ITE & ITC
              </h2>
              <p className="text-lg text-slate-600">
              An ITE (In-The-Ear) hearing aid fills the outer ear and is easier to handle than the smaller ITC (In-The-Canal). The larger size allows additional hearing aid features in comparison to the small IIC and CIC.              </p>
              <Button asChild size="lg" className="w-fit bg-primary hover:bg-primary/90">
  <Link href="/booking">Book Consultation</Link>
</Button>

            </div>
            <div className="flex justify-center">
              <Image src="/images/xc55 Background Removed.png" alt="IIC Custom Model" width={450} height={450} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-slate-900 text-white py-24 text-center">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to find your perfect fit?</h2>
          <p className="text-xl text-slate-400 mb-10">Consult with our specialists to see which of these types fits your anatomy and lifestyle.</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 px-12 h-14 text-lg">
            <Link href="/booking">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-500 text-sm border-t">
        <p>© 2024 Al Barakat Hearing Centers. Partnering with Rexton.</p>
      </footer>
    </div>
  )
}