import { MainNavigation } from "@/components"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "BI-CORE Technology | Al-Barakat",
  description: "Revolutionary dual-core processing for unprecedented hearing performance. Explore our complete BiCore hearing aid range.",
}

export default function BiCoreTechnologyPage() {
  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />

      {/* 1. Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://cdn.rexton.com/-/media/rexton/global/images/campaigns/bicore/rx_bicore_team_1600x540.jpg"
          alt="Hearing Excellence"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl uppercase italic">
            HEARING SHOULDN'T BE HARD WORK
          </h1>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-wider text-primary">BiCore Technology</h2>
          <p className="mx-auto max-w-3xl text-xl font-medium text-muted-foreground uppercase">
            A SMOOTH ALL-ROUND HEARING EXPERIENCE
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 items-center text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Whatever the situation, it’s always important that you can recognize the sounds around you.</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our new BiCore hearing aids ensure you can clearly hear speech sounds such as a remark made by a colleague or friend, 
                while also staying aware of other sounds in the environment such as the sounds of machinery, a phone ringing, or background music.
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link href="https://www.youtube.com/watch?v=NFTq-uyyVSw" target="_blank">Inside a BiCore device</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <Image 
                src="https://cdn.rexton.com/-/media/rexton/global/images/logos-icons/icons/bicore-icon_800x800.png" 
                alt="BiCore Icon" 
                width={280} 
                height={280}
                className="drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Video: BiCore Technology Sound Demo (Jackeline & Casper) */}
      <section className="py-16 bg-gray-50 border-y-4 border-[#F9E100]">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold uppercase text-black tracking-tighter">BiCore Technology Sound Demo</h2>
          <p className="mb-10 text-gray-600 font-medium">Experience the difference with our newest platform that offers clean and reliable sound.</p>
          <div className="aspect-video overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-black">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube-nocookie.com/embed/xxXkwbyeu3Y" 
              title="BiCore Sound Demo" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 4. ALL PRODUCTS RANGE SECTION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-4 uppercase tracking-tight text-black">BICORE HEARING AIDS</h2>
            <p className="text-xl text-primary font-bold uppercase tracking-widest">Hearing aids you can trust throughout the day</p>
          </div>

          <div className="space-y-24">
            
            {/* Model 1: R 312 (From Image 5) */}
            <div className="grid md:grid-cols-2 gap-12 items-center bg-black text-white p-8 md:p-12 rounded-[2rem] shadow-2xl">
              <div className="relative group">
                <Image 
                  src="https://cdn.rexton.com/-/media/rexton/global/images/products/bicore/r-312/bicore_r-312_silver_with-shadow_1600x1067.png" 
                  alt="R 312" width={700} height={466} className="transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-5xl font-black text-[#F9E100] tracking-tighter uppercase">R 312</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our newest battery RIC delivers sound that's true and clean. Lifeproof™ microphones, a 60% lower binaural latency rate, and user-friendly rocker switch bumps.
                </p>
                <ul className="space-y-3 font-medium">
                  <li className="flex items-start gap-2"><span>•</span> Battery runtime (without streaming) up to 89h</li>
                  <li className="flex items-start gap-2"><span>•</span> Battery runtime (20h of streaming) up to 72h</li>
                  <li className="flex items-start gap-2"><span>•</span> BiCore processing & Direct streaming (iOS/Android)</li>
                  <li className="flex items-start gap-2"><span>•</span> ATEX certified</li>
                </ul>

                <Button className="bg-[#F9E100] text-black hover:bg-yellow-500 font-bold px-8 h-12 uppercase tracking-widest"><Link href="/products/hearing-aid-brands/rexton/r-312">Learn more</Link></Button>
              </div>
            </div>

            {/* Model 2: R-Li and R-Li T (From Image 5) */}
            <div className="grid md:grid-cols-2 gap-12 items-center bg-black text-white p-8 md:p-12 rounded-[2rem] shadow-2xl">
              <div className="space-y-6 order-2 md:order-1">
                <h3 className="text-5xl font-black text-[#F9E100] tracking-tighter uppercase">R-Li and R-Li T</h3>
                <ul className="space-y-3 font-medium">
                  <li className="flex items-start gap-2"><span>•</span> Available in standard and T-coil versions</li>
                  <li className="flex items-start gap-2"><span>•</span> Up to 39 hours runtime on a single charge</li>
                  <li className="flex items-start gap-2"><span>•</span> New ERU couplings for a more comfortable fit</li>
                  <li className="flex items-start gap-2"><span>•</span> Direct audio streaming and ATEX certified</li>
                </ul>
                <Button className="bg-[#F9E100] text-black hover:bg-yellow-500 font-bold px-8 h-12 uppercase tracking-widest"><Link href="/products/hearing-aid-brands/rexton/BICORER-LI">Learn more</Link></Button>
              </div>
              <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
                <Image src="https://cdn.rexton.com/-/media/rexton/global/images/products/bicore/r-li/rexton_bicore_r-li_silver_800x800.png" alt="R-Li" width={400} height={400} />
                <Image src="https://cdn.rexton.com/-/media/rexton/global/images/products/bicore/r-li/rexton_bicore_r-li_t_silver_800x800.png" alt="R-Li T" width={400} height={400} />
              </div>
            </div>

            {/* Model 3: R-Li M RUGGED */}
            <div className="grid md:grid-cols-2 gap-12 items-center px-4">
              <div className="order-2 md:order-1">
                <Image 
                  src="https://cdn.rexton.com/-/media/rexton/global/images/products/bicore/b-li-rugged/bicore_rugged_granite_1600x1067.png" 
                  alt="R-Li M RUGGED" width={600} height={400} className="rounded-2xl"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-4xl font-bold text-primary tracking-tighter uppercase">R-Li M RUGGED</h3>
                <p className="text-lg text-muted-foreground">It's our toughest hearing aid, handling all the knocks and spills of everyday life.</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Water, sweat, and shampoo proof</li>
                  <li>• Drop proof and scratch resistant</li>
                  <li>• Battery runtime up to 39 hours</li>
                </ul>
                <Button asChild variant="default" className="h-12 px-8 uppercase"><Link href="/products/hearing-aid-brands/rexton/BICOREBLIRUGGED">Learn more</Link></Button>
              </div>
            </div>

            {/* Model 4: B M, P & HP */}
            <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-primary tracking-tighter uppercase">B M, P & HP</h3>
                <p className="text-lg text-muted-foreground">BTE hearing aids with extraordinarily long battery life (up to 227 hours).</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Available in 3 power levels</li>
                  <li>• Direct audio streaming via MFI or ASHA</li>
                  <li>• Optional child-safe battery door</li>
                </ul>
                <Button asChild variant="default" className="h-12 px-8 uppercase"><Link href="/products/hearing-aid-brands/rexton/bi-core-b">Learn more</Link></Button>
              </div>
              <Image 
                src="https://cdn.rexton.com/-/media/rexton/global/images/products/bicore/b/bicore-b_range-black_1600x1067.png" 
                alt="B Series Range" width={600} height={400}
              />
            </div>

            {/* Model 5: SLIM RIC */}
            <div className="grid md:grid-cols-2 gap-12 items-center px-4">
              <div className="order-2 md:order-1">
                <Image 
                  src="https://cdn.rexton.com/-/media/rexton/global/images/products/bicore/slim-ric/bicore_slim-ric_black-silver_1600x1067.png" 
                  alt="SLIM RIC" width={600} height={400}
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-4xl font-bold text-primary tracking-tighter uppercase">SLIM RIC</h3>
                <p className="text-lg text-muted-foreground">Smaller, lighter, and more stylish with 10% longer run time.</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Lifeproof™ microphones</li>
                  <li>• Direct audio streaming capabilities</li>
                  <li>• Up to 4 days autonomy with Travel Charger 2</li>
                </ul>
              </div>
            </div>

            {/* Model 6: CUSTOM LI */}
            <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-primary tracking-tighter uppercase">CUSTOM LI</h3>
                <p className="text-lg text-muted-foreground">Our first rechargeable custom model with contactless charging.</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Bespoke fit for your unique ear</li>
                  <li>• Battery runtime up to 24 hours</li>
                  <li>• Direct Bluetooth streaming</li>
                </ul>
              </div>
              <Image 
                src="https://cdn.rexton.com/-/media/rexton/global/images/products/bicore/custom-li/bicore_custom-li_brown_with-shadow_1600x1067_smaller.png" 
                alt="CUSTOM LI" width={600} height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Video: Solid Set of Features (Image 1) */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <div className="mb-12 space-y-2">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">BICORE HEARING AIDS HAVE</h2>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-[#F9E100] tracking-tighter">A SOLID SET OF FEATURES</h2>
          </div>
          <div className="aspect-video overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-gray-900">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube-nocookie.com/embed/r6rkcIBGz-M" 
              title="BiCore Features Showcase" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 6. Video: AutoEcho Reducer (Image 2) */}
      <section className="py-24 bg-[#F9E100]">
        <div className="container mx-auto max-w-5xl px-4 text-center text-black">
          <h2 className="mb-8 text-3xl md:text-5xl font-black uppercase leading-tight tracking-tighter">
            REXTON AUTOECHO REDUCER <br/> FOR EASIER LISTENING
          </h2>
          <div className="aspect-video overflow-hidden rounded-3xl shadow-2xl border-8 border-white bg-white">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube-nocookie.com/embed/4PEcM6VgSLc" 
              title="AutoEcho Reducer Demo" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 7. Rexton App & Assist Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <h2 className="text-5xl font-black tracking-tighter uppercase">REXTON APP</h2>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Your all-in-one smartphone companion</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Conveniently control volume, program changes, and microphone patterns. Available for iPhone and Android with Bluetooth connectivity.
                </p>
              </div>
              <div className="flex gap-4">
                 <Image src="https://cdn.rexton.com/-/media/rexton/global/images/logos-icons/download-badges/apple-app-store-badge_en_300px.png" alt="App Store" width={160} height={48} />
                 <Image src="https://cdn.rexton.com/-/media/rexton/global/images/logos-icons/download-badges/google-play-badge_en_300px.png" alt="Play Store" width={160} height={48} />
              </div>
            </div>
            <Image 
              src="https://cdn.rexton.com/-/media/rexton/global/images/products/rexton-app/rexton-app_yellow-background_1600x1067_new-design.png" 
              alt="Rexton App" width={700} height={466} className="rounded-[2.5rem] shadow-2xl"
            />
          </div>

          <Card className="bg-white border-2 border-primary/10 overflow-hidden rounded-[2rem]">
            <CardContent className="p-0 grid md:grid-cols-2 items-stretch">
              <div className="p-12 flex flex-col justify-center space-y-6">
                <h3 className="text-4xl font-black tracking-tight text-primary uppercase">REXTON ASSIST</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Use the power of thousands of hearing aid solutions to enhance performance in any situation instantly through our AI-driven network.
                </p>
              </div>
              <div className="relative min-h-[350px]">
                <Image 
                  src="https://cdn.rexton.com/-/media/rexton/global/images/products/rexton-app/rexton-assist_1600x1067_new-design.png" 
                  alt="Rexton Assist AI" fill className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary overflow-hidden border-none rounded-[3rem]">
            <CardContent className="p-16 text-center text-primary-foreground">
              <h2 className="mb-6 text-5xl font-black uppercase tracking-tighter italic">Experience BI-CORE Power</h2>
              <p className="mb-10 text-xl opacity-90 mx-auto max-w-2xl font-medium">
                Find the perfect BiCore device for your lifestyle. Schedule your professional demo today.
              </p>
              <Button asChild size="lg" variant="secondary" className="font-bold px-16 h-14 text-lg uppercase shadow-2xl hover:scale-105 transition-transform">
                <Link href="/booking">Schedule Your Demo</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}