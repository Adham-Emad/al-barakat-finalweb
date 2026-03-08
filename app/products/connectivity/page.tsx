"use client"

import { MainNavigation } from "@/components"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from "next/link"

export default function SigniaAppPage() {
  return (
    <div className="min-h-screen bg-white">
      <MainNavigation />

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-[300px] md:h-[450px]">
        <Image
          src="/images/banner2.webp" 
          alt="Signia app hero banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h1 className="text-5xl font-normal text-slate-900 mb-4">Signia app</h1>
          <h2 className="text-3xl font-normal text-slate-900 mb-8">You're in control</h2>
          <div className="space-y-6 text-lg text-slate-700 max-w-4xl">
            <p>The Signia app gives you everything you need to enjoy your hearing aids to the full, and all tailored to your personal preferences: audio streaming, remote control and remote support. All you need is your smartphone.</p>
            <p>Easy to use, it lets you discreetly control the volume and other settings while streaming audio directly into your ears.</p>
            <p>With the Signia app, you can also get immediate support whenever and wherever you need it with the new Signia Assistant and stay in touch with your Hearing Care Professional via TeleCare.</p>
          </div>
        </div>
      </section>

      {/* ================= NEW WITH SIGNIA ASSISTANT (Text Left, Image Right) ================= */}
      <section className="py-16 border-t">
        <div className="container mx-auto max-w-5xl px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-normal mb-6">New with Signia Assistant</h2>
            <ul className="space-y-4 text-slate-700 mb-8">
              <li className="flex gap-3">• Settings tailored to your personal preferences for an even clearer sound</li>
              <li className="flex gap-3">• Answers to your questions about how to handle your hearing aids</li>
              <li className="flex gap-3">• Highly intuitive 24/7 support whenever you need it</li>
              <li className="flex gap-3">• Confidence and control over your hearing success</li>
            </ul>
            <Button variant="outline" className="rounded-full px-8">Find out more</Button>
          </div>
          <div className="w-full md:w-1/3">
            <div className="relative aspect-[9/19] w-full max-w-[250px] mx-auto">
              <Image src="/images/newwith.webp" alt="Signia Assistant Interface" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MASK MODE FEATURE (Image Left, Text Right) ================= */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-5xl px-4 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-normal mb-6">Mask Mode feature</h2>
            <p className="text-slate-700 mb-8">
              A special button in the Signia app revolutionizes hearing aid wearers’ hearing experience during the COVID-19 pandemic and shows how we continuously introduce innovations to enhance your hearing performance.
            </p>
            <Button variant="outline" className="rounded-full px-8">Read more</Button>
          </div>
          <div className="w-full md:w-1/2">
            <Image 
              src="/images/maskmode.webp" 
              alt="Person wearing a mask" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* ================= WELLBEING TRACKING (Image Left, Text Right) ================= */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="relative aspect-[9/19] w-full max-w-[250px] mx-auto">
              <Image src="/images/well.png" alt="WellBeing tracking" fill className="object-contain" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-normal mb-6">My WellBeing Track your daily steps and more with your hearing aids</h2>
            <p className="text-slate-700 mb-6">
              The hearing aids’ in-built motion sensor not only lets you hear better on the move but also automatically measures how many steps you take each day (My Steps) and how active you are (MyActivity).
            </p>
            <p className="text-slate-700 mb-8">
              The app also shows you how much you are using your hearing aids (My WearTime) and the unique Own Voice Processing technology measures how much you are socially interacting with others (My Conversations).
            </p>
            <Button variant="outline" className="rounded-full px-8">Discover My WellBeing</Button>
          </div>
        </div>
      </section>

      {/* ================= FUNCTIONALITY GRID (Cards) ================= */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-normal mb-12">Functionality at a glance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Signia Assistant */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
              <div className="relative aspect-[9/16] w-full max-w-[180px] mx-auto mb-6">
                <Image src="/images/111.webp" alt="Assistant" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4">Signia Assistant</h3>
              <p className="text-slate-600">The Signia Assistant is your very own hearing companion to let you stay fully involved in life and hear what matters to you.</p>
            </div>

            {/* Mask Mode */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
              <div className="relative aspect-[9/16] w-full max-w-[180px] mx-auto mb-6">
                <Image src="/images/222.webp" alt="Mask Mode" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4">Mask Mode</h3>
              <p className="text-slate-600">Helps you understand what people wearing a face mask are saying.</p>
            </div>

            {/* Remote Control */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
              <div className="relative aspect-[9/16] w-full max-w-[180px] mx-auto mb-6">
                <Image src="/images/333.webp" alt="Remote Control" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4">Remote control</h3>
              <ul className="text-slate-600 text-sm space-y-2 text-left inline-block">
                <li>• Hearing program and volume control</li>
                <li>• Sound Balance Adjustment</li>
                <li>• Connection and battery status</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4">
           <div className="grid md:grid-cols-3 gap-8">
            {/* Signia Assistant */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
              <div className="relative aspect-[9/16] w-full max-w-[180px] mx-auto mb-6">
                <Image src="/images/444.webp" alt="Assistant" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4">Directional hearing
              </h3>
              <p className="text-slate-600"> 360° Spatial Configurator for individual adjustment of directionality</p>
            </div>

            {/* Mask Mode */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
              <div className="relative aspect-[9/16] w-full max-w-[180px] mx-auto mb-6">
                <Image src="/images/555.webp" alt="Mask Mode" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4">Connectivity and streaming</h3>
              <p className="text-slate-600">Easy management of audio streaming accessories (e.g. StreamLine TV, StreamLine Mic)</p>
            </div>

            {/* Remote Control */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
              <div className="relative aspect-[9/16] w-full max-w-[180px] mx-auto mb-6">
                <Image src="/images/666.webp" alt="Remote Control" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4">Virtual appointments</h3>
              <p className="text-slate-600">
              Get support of your Hearing Care Professional when you need it – even you can’t visit them personally</p>

            </div>
          </div>
        </div>
      </section>



      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4">
           <div className="grid md:grid-cols-3 gap-8">
            {/* Signia Assistant */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
              <div className="relative aspect-[9/16] w-full max-w-[180px] mx-auto mb-6">
                <Image src="/images/777.webp" alt="Assistant" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4">CareChat
              </h3>
              <p className="text-slate-600"> Stay in closer contact with your Hearing Care Professional via text message, voice call or video call</p>
            </div>

            {/* Mask Mode */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
              <div className="relative aspect-[9/16] w-full max-w-[180px] mx-auto mb-6">
                <Image src="/images/888.jpg" alt="Mask Mode" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4"> Hearing lessons</h3>
              <p className="text-slate-600">Improve your hearing experience and get used to your hearing aids at your own pace</p>
            </div>

            {/* Remote Control */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
              <div className="relative aspect-[9/16] w-full max-w-[180px] mx-auto mb-6">
                <Image src="/images/999.webp" alt="Remote Control" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4">Satisfaction rating</h3>
              <p className="text-slate-600">
              Intuitive real-time feedback on your daily satisfaction with your hearing aids</p>

            </div>
          </div>
        </div>
      </section>


      {/* ================= REMOTE SUPPORT CTA ================= */}
      <section className="py-20 border-t">
        <div className="container mx-auto max-w-4xl px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-32 h-32 relative flex-shrink-0">
             <Image src="/images/interest.webp" alt="Location icon" fill className="object-contain" />
          </div>
          <div>
            <h2 className="text-3xl font-normal mb-6 leading-tight">
              Are you interested in getting remote support? Contact your hearing care professional.
            </h2>
            <Button asChild variant="outline" className="rounded-full px-10 py-6 text-lg">
              <Link href="/locator">Store Locator</Link>
            </Button>
          </div>
        </div>
      </section>


      {/* ================= REXTON APP SECTION ================= */}
      <section className="py-20 border-t bg-slate-50">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-4xl font-normal text-slate-900 mb-8">Rexton App</h2>
          <div className="space-y-6 text-lg text-slate-700 max-w-4xl">
            <p>The Rexton App is your gateway to complete hearing aid control and connectivity. Seamlessly manage your hearing aids from your smartphone with intuitive controls and direct audio streaming.</p>
            <p>Whether you're on iOS or Android, the Rexton App provides you with easy access to hearing program adjustments, volume control, and connectivity settings. Stay connected to what matters most with direct streaming from your devices.</p>
            <p>Experience the convenience of remote support and receive guidance whenever you need it. The Rexton App brings you closer to your hearing care professional through virtual appointment capabilities.</p>
          </div>
        </div>
      </section>

{/* ================= REXTON APP SECTION (WEBSITE IDENTITY DESIGN) ================= */}
<section className="py-24 bg-white overflow-hidden">
  <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center gap-16">
    
    {/* Left Column: Content */}
    <div className="flex-1 space-y-8">
      <h2 className="text-4xl font-bold text-slate-900 uppercase tracking-tight leading-tight">
        REXTON APP - YOUR HEARING AID COMMAND CENTRAL
      </h2>
      
      <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
        <p>
          Once you’ve downloaded the Rexton hearing aid App for your iPhone or Android, 
          it’s time to unlock the full potential of your Rexton hearing aids.
        </p>
        <p>
          From inside the app, you can adjust everything from volume to choosing between 
          different hearing settings your provider has created for you and can get real time 
          support from your HCP or Rexton Assist, our intelligent online support system 
          —all without needing to book an appointment.
        </p>
      </div>

      <div className="space-y-6 pt-4">
        <h4 className="text-xl font-bold text-slate-900 uppercase tracking-wide">
          DOWNLOAD THE FREE REXTON APP
        </h4>
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <a 
            href="https://apps.apple.com/en/app/rexton-app/id1356550309" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow-md rounded-xl overflow-hidden"
          >
            <img 
              src="https://cdn.rexton.com/-/media/rexton/global/images/logos-icons/download-badges/apple-app-store-badge_en_300px.png" 
              alt="Download on App Store" 
              className="h-[65px] w-auto"
            />
          </a>
          <a 
            href="https://play.google.com/store/apps/details?id=com.connexx.rta" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow-md rounded-xl overflow-hidden"
          >
            <img 
              src="https://cdn.rexton.com/-/media/rexton/global/images/logos-icons/download-badges/google-play-badge_en_300px.png" 
              alt="Get it on Google Play" 
              className="h-[65px] w-auto"
            />
          </a>
        </div>
      </div>
      
      <div className="pt-6">
        
      </div>
    </div>

    {/* Right Column: Visual with Yellow Brand Accent */}
    <div className="flex-1 relative w-full">
      {/* Brand Accent: The Yellow Box from the original identity */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4/5 h-3/5 bg-[#FDE047] z-0 rounded-sm shadow-sm"></div>
      
      {/* Main Image Container */}
      <div className="relative z-10 p-4">
        <Image 
          src="https://cdn.rexton.com/-/media/rexton/global/images/products/rexton-app/rexton-app_yellow-background_1600x1067_new-design.png" 
          alt="Rexton App Interface on Smartphone" 
          width={1600}
          height={1067}
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>

  </div>
</section>
      

      {/* ================= REXTON APP FEATURES ================= */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-normal mb-12">Rexton App Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Remote Control */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
              <h3 className="text-xl font-bold mb-4">Remote Control</h3>
              <ul className="text-slate-600 text-sm space-y-2 text-left inline-block">
                <li>• Hearing program switching</li>
                <li>• Volume and balance adjustment</li>
                <li>• Connection and battery status</li>
              </ul>
            </div>

            {/* Direct Streaming */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
              <h3 className="text-xl font-bold mb-4">Direct Streaming</h3>
              <p className="text-slate-600">Stream phone calls, music, and audio directly into your hearing aids from your smartphone or tablet.</p>
            </div>

            {/* Remote Support */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
              <h3 className="text-xl font-bold mb-4">Remote Support</h3>
              <p className="text-slate-600">Connect with your Hearing Care Professional for virtual appointments and remote assistance.</p>
            </div>
          </div>
        </div>
      </section>


{/* ================= DOWNLOAD NOW (MATCHING SCREENSHOT) ================= */}
<section className="py-20 bg-white border-t border-slate-100">
  <div className="container mx-auto max-w-6xl px-4">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      
      {/* 1. Left Column: Download Badges */}
      <div className="flex-1 space-y-6">
        <h4 className="text-4xl font-normal text-slate-900">Download now:</h4>
        <div className="flex flex-col gap-4">
          <a 
            href="https://play.google.com/store/apps/details?id=com.signia.rta" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-fit transition-transform hover:scale-105"
          >
            <img 
              src="https://cdn.signia.net/-/media/rexton/global/images/logos-icons/download-badges/google-play-badge_en_300px.png" 
              alt="Google Play" 
              className="h-16 w-auto shadow-md rounded-lg"
            />
          </a>
          <a 
            href="https://apps.apple.com/app/apple-store/id1316911473" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-fit transition-transform hover:scale-105"
          >
            <img 
              src="https://cdn.rexton.com/-/media/rexton/global/images/logos-icons/download-badges/apple-app-store-badge_en_300px.png" 
              alt="App Store" 
              className="h-16 w-auto shadow-md rounded-lg"
            />
          </a>
        </div>
      </div>

      {/* 2. Center Column: Phone Image */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-[300px] aspect-[1/2]">
          <Image 
            src="/images/Signia-app_smartphone_soundwave_1000x1000.webp" // Ensure this path is correct in your public folder
            alt="Signia App on Smartphone" 
            fill 
            className="object-contain"
          />
        </div>
      </div>

      {/* 3. Right Column: App Title */}
      <div className="flex-1 text-right md:text-left">
        <h2 className="text-5xl font-normal text-slate-900 mb-2">Signia app</h2>
        <p className="text-xl text-slate-600 font-light">Personalize your hearing experience</p>
      </div>

    </div> {/* End of Flex Row */}
  </div> {/* End of Container */}
</section>


      {/* ================= HOW-TO VIDEOS SECTION ================= */}
<section className="py-16 border-t">
  <div className="container mx-auto max-w-7xl px-4">
    {/* Heading exactly as per screenshot */}
    <h2 className="text-4xl font-normal text-slate-900 mb-12">How-to videos</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Video 1: iPhone/iPad Pairing */}
      <div className="flex flex-col gap-4">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/1ISLz0C64lY?si=9O-OlCd-JDnaBt6s"
            title="How to pair Signia hearing aids to an iPhone or iPad"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-lg font-medium text-slate-900">
          How to pair Signia hearing aids to an iPhone or iPad
        </p>
      </div>

      {/* Video 2: Android Pairing */}
      <div className="flex flex-col gap-4">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/4ZXZQtj7YKA?si=9R1ILHpu1kP6RImB"
            title="How to pair Signia hearing aids to an Android smartphone"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-lg font-medium text-slate-900">
          How to pair Signia hearing aids to an Android smartphone
        </p>
      </div>

      {/* Video 3: HandsFree for iOS */}
      <div className="flex flex-col gap-4">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/81S-zUbrtUI?si=kGaV1asAplAYj_42"
            title="How to use HandsFree for iOS"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-lg font-medium text-slate-900">
          How to use HandsFree for iOS - Signia AX hearing aids
        </p>
      </div>

    </div>
  </div>
</section>
<footer className="border-t bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 Al Barakat Hearing Centers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
