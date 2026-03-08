import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Augment Xperience Technology | Al-Barakat",
  description: "Enhanced hearing technology with augmented speech recognition and clarity.",
  alternates: {
    canonical: "https://al-barakat.com/products/hearing-aid-technology/augment-xperience",
  },
  openGraph: {
    title: "Signia Augment Xperience - Next-Gen Hearing Technology",
    description: "Exceptional speech clarity with Augmented Focus technology",
    url: "https://al-barakat.com/products/hearing-aid-technology/augment-xperience",
    type: "website",
  },
}
const features = [
  { title: "Augmented Speech Understanding", icon: "/images/qw11.png" },
  { title: "Auto EchoShield", icon: "/images/qw22.webp" },
  { title: "Own Voice Processing 2.0", icon: "/images/qw33.webp" },
  { title: "Android & iPhone connectivity", icon: "/images/qw44.webp" },
  { title: "HandsFree for iOS", icon: "/images/qw55.png" },
  { title: "Immersive Soundscape", icon: "/images/qw66.png" },
  { title: "AI Digital Assistant", icon: "/images/qw77.webp" },
  { title: "Recharge on-the-go", icon: "/images/qw88.webp" },
  { title: "AX Soundscape Processing", icon: "/images/qw99.png" },
  { title: "eWindScreen", icon: "/images/qw10.webp" }
];
export default function AugmentXperiencePage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      <section className="relative w-full min-h-[600px] flex items-center overflow-hidden bg-[#0070c9]">
      {/* Background Image/Graphic */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/banvc.webp" 
          alt="Woman in white suit against blue technical background" 
          className="w-full h-full object-cover object-center opacity-90"
        />
        {/* Dynamic Blue Overlay to match brand aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#005da0]/80 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Side Heading */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="mb-6">
              <img 
                src="/images/signia-logo-clean.png" 
                alt="Signia Logo" 
                className="w-28 h-28 object-contain drop-shadow-lg"
              />
            </div>
            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
              Augment your hearing <br />
              <span className="font-medium">Xperience</span>
            </h2>
          </div>

    

        </div>
      </div>
    </section>


    <section className="bg-white py-20 md:py-28 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
          
          {/* Left Side: Branding Icon and Title */}
          <div className="w-full lg:w-1/2 flex items-center gap-6 md:gap-8">
            <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 bg-[#ff0000] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-5xl md:text-7xl font-bold tracking-tighter">AX</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
              Augmented <br />
              <span className="font-normal">Xperience</span>
            </h2>
          </div>

          {/* Right Side: Detailed Copy and Research Stats */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
                Signia AX changes the way you hear the world. It uses our revolutionary <span className="font-medium text-slate-900">Augmented Focus™</span> technology to split the sound of speech from surrounding sounds, process them separately and create a clear contrast.
              </p>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
                It then recombines them to give you outstanding speech clarity in a fully immersive environment. No more straining to discern speech from background noise.
              </p>
            </div>

            {/* Research and Study Results */}
            <div className="space-y-6 pt-8 border-t border-slate-100">
              <p className="text-lg md:text-xl text-slate-800 leading-relaxed">
                As a result, <span className="font-bold">100% of participants</span> in a recent study reported excellent speech understanding in their home environment.¹ Signia AX wearers also enjoy <span className="font-bold text-[#ff0000]">more than 25% better speech understanding</span> in noise than with their previous hearing aids.¹
              </p>
              
              <p className="text-lg md:text-xl text-slate-800 leading-relaxed">
                Signia AX is even proven to perform better than normal hearing in a tested party scenario.²
              </p>

              <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-medium">
                AX is the popular choice: 4 times more people prefer Signia AX hearing aids to their previous hearing aid according to a recent study.³
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>




    <section className="bg-white py-24 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Key features:
          </h2>
        </div>

        {/* Features Grid - 5 columns on desktop, 2-3 on tablet, 1 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              {/* Icon Container */}
              <div className="w-32 h-32 md:w-40 md:h-40 mb-6 flex items-center justify-center rounded-full border border-slate-200 p-6 transition-colors group-hover:border-red-500">
                <img 
                  src={feature.icon} 
                  alt={`${feature.title} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Feature Title */}
              <h3 className="text-sm md:text-base font-normal leading-tight max-w-[150px]">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>


    <section className="bg-white py-24 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Top Feature Highlight */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-32">
          {/* Text Content */}
          <div className="w-full lg:w-3/5 space-y-6">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
              Never miss a word
            </h2>
            <div className="text-lg text-slate-600 font-light leading-relaxed space-y-4">
              <p>
                The newly updated eWindScreen feature keeps wind noise at bay so you can enjoy outdoor activities.
              </p>
              <p>
                Meanwhile, improved AX Soundscape Processing works to understand your situational needs more precisely than ever before, utilizing input from our Own Voice Processing feature to better optimize for conversation in difficult listening situations.
              </p>
            </div>
          </div>

          {/* "New" Badge Graphic */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex flex-col items-center justify-center text-center p-8 text-white shadow-xl">
              <span className="text-3xl font-bold mb-2">New</span>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest opacity-90">Upgraded</p>
                <p className="text-xl font-bold">eWindScreen™</p>
                <p className="text-2xl font-light py-1">+</p>
                <p className="text-xs uppercase tracking-widest opacity-90">Improved</p>
                <p className="text-xl font-bold">AX Soundscape Processing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sensor Technology Statement */}
        <div className="text-center max-w-5xl mx-auto mb-32 space-y-8">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight">
            Advanced sensor technology recognizes if you are moving, and detects which hearing situation you are in automatically.
          </h3>
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight">
            Making sure you always experience the best possible sound as you move through your day.
          </p>
        </div>

        {/* Video Demo Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Demo 1 */}
          <div className="container mx-auto px-6 max-w-6xl">
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-100">
  <iframe
    src="https://www.youtube.com/embed/rHLGt0fVZMo?si=ez7Tp1GPKFyfGbqk" // Replace with actual Rexton ATEX video ID
    title="ATEX certification | REXTON Hearing Aids"
    className="absolute top-0 left-0 w-full h-full"
    allowFullScreen
  ></iframe>
  {/* Brand Frame Accent */}
   </div>
   </div>

   <div className="container mx-auto px-6 max-w-6xl">
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-100">
  <iframe
    src="https://www.youtube.com/embed/EShmKQ0DC4U?si=leB6NB-rPmHrYF-2" // Replace with actual Rexton ATEX video ID
    title="ATEX certification | REXTON Hearing Aids"
    className="absolute top-0 left-0 w-full h-full"
    allowFullScreen
  ></iframe>
  {/* Brand Frame Accent */}
   </div>
   </div>
        </div>

        {/* Bottom CTA Text */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-medium">
            With Signia AX, your ability to perform at your best in all conversations everywhere just became even more brilliant.
          </h3>
          <p className="text-lg text-slate-500 font-light italic">
            Experience just how big a difference Signia AX makes by clicking on the listening examples above. Please make sure to use headphones for an accurate impression.
          </p>
        </div>

      </div>
    </section>


      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary">
            <CardContent className="p-8 text-center text-primary-foreground md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Try Augment Xperience Today</h2>
              <p className="mb-6 text-lg opacity-90">
                Experience the difference enhanced technology makes in your daily conversations.
              </p>
              <Button asChild size="lg" variant="secondary" className="transition-all hover:scale-105">
                <Link href="/booking">Schedule Your Consultation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
