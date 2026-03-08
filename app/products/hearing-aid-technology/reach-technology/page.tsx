import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  Bluetooth, 
  Smartphone, 
  Wifi, 
  BatteryCharging, 
  ShieldCheck, 
  Download,
  MapPin,
  Mail,
  Ear
} from "lucide-react"

export const metadata = {
  title: "REACH Technology | Al-Barakat",
  description: "Innovative Rexton Reach Technology with Multi-Voice Focus for every dynamic conversation.",
}

export default function REACHTechnologyPage() {
  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />

      {/* 1. Hero Banner Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <img 
          src="https://cdn.rexton.com/-/media/rexton/global/images/campaigns/reach/rexton_reach_r-li_man-taking-order_1600x540.jpg" 
          alt="Man in foodtruck taking orders" 
          className="w-full h-auto object-cover min-h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-6 md:p-10 max-w-sm md:max-w-xl bg-black/10 backdrop-blur-[2px]">
            <h1 className="text-white text-4xl md:text-6xl font-bold uppercase leading-tight">
              EVERY VOICE MATTERS<br />
              REXTON REACH
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Multi-Voice Focus Section (Text + Animation GIF) */}
      <section className="bg-white py-20 md:py-28 font-sans text-slate-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-left">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight border-l-8 border-[#fff200] pl-6">
                MULTI-VOICE FOCUS MAKES SURE EVERY VOICE IS HEARD
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                When multiple people are involved in a conversation, voices drop in and out, and move around. Until now hearing aid users have struggled to catch every word. Rexton Reach, with Multi-Voice Focus, will make sure every voice is heard.
              </p>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Multi-Voice Focus scans the surrounding environment 1000 times a second with 4 focus beams and adapts automatically to changes in speaker positions and volumes.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://cdn.rexton.com/-/media/rexton/global/images/campaigns/reach/rexton_reach_technology-animation_1600x1067.gif" 
                alt="Rexton Reach technology animation" 
                className="w-full max-w-2xl h-auto rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tech Demo Video Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/x9I2dzYIqdw?rel=0" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 4. Bluetooth LE Audio Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-left">
              <h2 className="text-4xl font-bold uppercase tracking-tight flex items-center gap-4">
                <Bluetooth className="w-10 h-10 text-primary" />
                BLUETOOTH &reg;LE AUDIO KEEPS EVERYONE WITHIN REACH
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Reach connects seamlessly with iPhones and Android smartphones for effortless calls and media streaming.
              </p>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                It uses the new Bluetooth &reg;Low Energy Audio protocol that minimizes the energy used during connection with smartphones and improves the quality of the connection.
              </p>
            </div>
            <img 
              src="https://cdn.rexton.com/-/media/rexton/global/images/campaigns/reach/rexton_reach_r-li_man-smartphone-talking_1600x1067.jpg" 
              alt="Man doing video chat on smartphone"
              className="rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 5. Tech Demonstration Video 2 */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-10">
          <div className="space-y-4">
            <h4 className="text-2xl font-bold uppercase tracking-widest text-[#fff200]">REXTON REACH TECHNOLOGY DEMONSTRATION</h4>
            <p className="text-lg opacity-80">In this video you can check how the Multi-Voice Focus from Rexton Reach works in a noisy situation with multiple speakers. Please wear headphones for a better experience.</p>
          </div>
          <div className="aspect-video rounded-3xl overflow-hidden border-4 border-[#fff200]/30 shadow-2xl">
            <iframe className="w-full h-full" src="https://www.youtube-nocookie.com/embed/w5i7OLSh7dg?rel=0" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      {/* 6. What does Bluetooth mean Video 3 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-10">
          <h4 className="text-3xl font-bold text-slate-900 uppercase">WHAT DOES IT MEAN TO HAVE BLUETOOTH IN HEARING AIDS?</h4>
          <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
            <iframe className="w-full h-full" src="https://www.youtube-nocookie.com/embed/PY1waBlxTJ0?rel=0" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      {/* 7. Little Things Section (Banner) */}
      <section className="relative w-full h-[500px] flex items-center overflow-hidden">
        <img 
          src="https://cdn.rexton.com/-/media/rexton/global/images/campaigns/little-things/rexton_little-things_man-sitting-phone-call_wide-angle_1600x540.jpg" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Man sitting and talking" 
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-xl space-y-4 bg-white/10 backdrop-blur-md p-8 rounded-3xl text-white">
            <h3 className="text-2xl font-bold uppercase">IT &rsquo;S THE LITTLE THINGS THAT COUNT</h3>
            <h4 className="text-3xl font-medium">Enjoy music and calls anywhere. Your hearing aids connect seamlessly with smartphones.</h4>
            
          </div>
        </div>
      </section>

      {/* 8. Product Catalog Section (Grid) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl space-y-32">
          
          {/* REACH R-LI */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <img src="https://cdn.rexton.com/-/media/rexton/global/images/products/reach/r-li/reach-r-li_black-ha_travel-charger_lifeproof_1600x1067.jpg" className="rounded-3xl shadow-xl" alt="Rexton Reach R-Li" />
            <div className="space-y-6 text-left">
              <h4 className="text-3xl font-bold uppercase">REACH R-LI / R-LI T</h4>
              <p className="text-lg text-slate-600">The rechargeable receiver-in-canal hearing aid that makes sure every voice in the conversation is clear and recognizable.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                <li className="flex items-center gap-2 font-light"><Bluetooth className="w-5 h-5 text-primary" /> Multi-Voice Focus</li>
                <li className="flex items-center gap-2 font-light"><Wifi className="w-5 h-5 text-primary" /> Direct Streaming</li>
                <li className="flex items-center gap-2 font-light"><BatteryCharging className="w-5 h-5 text-primary" /> Up to 34h runtime</li>
                <li className="flex items-center gap-2 font-light"><ShieldCheck className="w-5 h-5 text-primary" /> ATEX certified*</li>
              </ul>
             
            </div>
          </div>

          {/* REACH R PLUS */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-left order-2 lg:order-1">
              <h4 className="text-3xl font-bold uppercase text-slate-900">REACH R PLUS</h4>
              <p className="text-lg text-slate-600 font-light leading-relaxed">The rechargeable behind-the-ear hearing aid that connects with 99% of smartphones.</p>
              <ul className="space-y-3 text-slate-600">
                <li>• Multi-Voice Focus technology</li>
                <li>• Battery runtime: up to 54 hours</li>
                <li>• Hands-free calls and direct streaming</li>
                <li>• Complete with Telecoil</li>
              </ul>
             
            </div>
            <img src="https://cdn.rexton.com/-/media/rexton/global/images/products/reach/r-plus/rexton_reach-r-plus_black_pair_travel-charger_lifeproof_1600x1067.jpg" className="rounded-3xl shadow-xl order-1 lg:order-2" alt="Reach R Plus" />
          </div>

          {/* REACH inoX-CIC Li */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <img src="https://cdn.rexton.com/-/media/rexton/global/images/products/reach/ix-cic-li/reach-ix-cic-li_into-charger_lifeproof_1600x1067.jpg" className="rounded-3xl shadow-xl" alt="Reach inoX-CIC Li" />
            <div className="space-y-6 text-left">
              <h4 className="text-3xl font-bold uppercase text-slate-900">REACH inoX-CIC Li</h4>
              <p className="text-lg text-slate-600 font-light">The new completely-in-canal hearing aid that fits comfortably and invisibly.</p>
              <ul className="space-y-3 text-slate-600">
                <li>• Voice-stabilizer technology</li>
                <li>• Fits completely in the ear</li>
                <li>• USB or wireless Qi charging</li>
                <li>• Battery runtime up to 28 hours</li>
              </ul>
              
            </div>
          </div>
        </div>
      </section>

      {/* 9. Feature Table Download Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="flex flex-col md:flex-row items-center gap-12 bg-primary/5 p-10 rounded-3xl border border-primary/10">
              <img src="https://cdn.rexton.com/-/media/rexton/global/images/logos-icons/icons/reach_icon_1600x1067.png" className="w-48 h-auto" alt="Reach Icon" />
              <div className="space-y-6 text-left">
                 <h4 className="text-3xl font-bold uppercase">REACH TECHNOLOGY</h4>
                 <p className="text-xl text-slate-600">Download the feature overview for all Rexton Reach hearing aids.</p>
                 <Button asChild size="lg" className="rounded-full px-10 py-7 font-bold">
                    <Link href="https://cdn.rexton.com/-/media/rexton/global/files/feature-tables/rexton-reach_feature-overview_2025-10.pdf" target="_blank">
                      <Download className="w-6 h-6 mr-2" /> Download pdf
                    </Link>
                 </Button>
              </div>
           </div>
        </div>
      </section>

      {/* 10. Rexton App Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <img src="https://cdn.rexton.com/-/media/rexton/global/images/products/rexton-app/rexton-app_800x800_new-design.png" className="w-full max-w-md mx-auto" alt="Rexton App" />
            <div className="space-y-8 text-left">
              <h4 className="text-3xl font-bold uppercase">COMPREHENSIVE HEARING AID CONTROL RIGHT FROM YOUR PHONE</h4>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Download the Rexton hearing aid App for your iPhone or Android. You can adjust volume, hearing settings and get real time support all from inside the app.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://apps.apple.com/en/app/rexton-app/id1356550309" target="_blank">
                  <img src="/images/Apple-App-Store-Badge_en_300px.webp" className="h-14 w-auto cursor-pointer shadow-md rounded-xl hover:scale-105 transition-all" alt="App Store" />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.connexx.rta" target="_blank">
                  <img src="/images/google-play-badge_en_300.webp" className="h-14 w-auto cursor-pointer shadow-md rounded-xl hover:scale-105 transition-all" alt="Play Store" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final Note and Global Resources */}
      <section className="py-12 bg-white text-center italic text-slate-400">
        <p className="container mx-auto px-6 text-sm">*The ATEX certificate is normally available within six months after launch.</p>
      </section>

      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl grid md:grid-cols-3 gap-16 text-center">
          <div className="space-y-6 group">
            <div className="w-24 h-24 mx-auto border-2 border-slate-100 rounded-full flex items-center justify-center group-hover:border-primary transition-colors"><Ear className="w-10 h-10 text-slate-600" /></div>
            <h4 className="text-xl font-bold">Online Hearing Test</h4>
            <Link href="/hearing-test" className="text-primary font-bold hover:underline">Take the test</Link>
          </div>
          <div className="space-y-6 group">
            <div className="w-24 h-24 mx-auto border-2 border-slate-100 rounded-full flex items-center justify-center group-hover:border-primary transition-colors"><MapPin className="w-10 h-10 text-slate-600" /></div>
            <h4 className="text-xl font-bold">Find Al-Barakat Store</h4>
            <Link href="/contact" className="text-primary font-bold hover:underline">Store Locator</Link>
          </div>
          <div className="space-y-6 group">
            <div className="w-24 h-24 mx-auto border-2 border-slate-100 rounded-full flex items-center justify-center group-hover:border-primary transition-colors"><Mail className="w-10 h-10 text-slate-600" /></div>
            <h4 className="text-xl font-bold">Get In Touch</h4>
            <Link href="/contact" className="text-primary font-bold hover:underline">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Final CTA Card */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-primary text-white overflow-hidden relative shadow-2xl rounded-[3rem]">
            <CardContent className="p-12 text-center relative z-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Experience REACH Technology</h2>
              <p className="text-xl opacity-90 font-light">Connect seamlessly to all your devices. Schedule a demo today.</p>
              <Button asChild size="lg" variant="secondary" className="transition-all hover:scale-110 px-12 py-8 rounded-full font-black text-xl shadow-xl">
                <Link href="/booking">Book Your Appointment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}