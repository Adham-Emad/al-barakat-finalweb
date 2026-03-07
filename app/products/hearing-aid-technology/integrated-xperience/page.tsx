import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
const pillars = [
  {
    title: "Analyze",
    description: "First, it carefully considers 192,000 datapoints a second to understand your environment and the people you are talking with.",
    image: "/images/anmi1.webp", // Replace with your image path
  },
  {
    title: "Augment",
    description: "Next, it locks on to and boosts the voices of all the people you are talking to, helping you hear them clearer against the background noise.",
    image: "/images/anmi2.webp", // Replace with your image path
  },
  {
    title: "Adapt",
    description: "Finally, it seamlessly adjusts 1000 times a second as the conversation moves and shifts to ensure you are always part of the action and never miss out.",
    image: "/images/anmi3.webp", // Replace with your image path
  }
];



const products = [
  {
    name: "Pure Charge&Go IX",
    tagline: "Our groundbreaking architecture in a small RIC device.",
    features: ["Three hearing aid models", "Multiple connectivity options (MFi, ASHA, LE Audio, Bluetooth®)", "Attractive design", "Convenient portable charger"],
    link: "/products/signia/pure-charge-go-ix",
    image: "/images/prod1.webp"
  },
  {
    name: "Styletto IX",
    tagline: "The world's slimmest Slim-RIC hearing aid.",
    features: ["Slim and unique design", "Natural, effortless conversations", "Instant comfort and clarity", "Future-proof connectivity"],
    link: "/products/signia/styletto-ix",
    image: "/images/prod2.webp"
  },
  {
    name: "Silk Charge&Go IX",
    tagline: "The world's only instant-fit CIC with Binaural OneMic Directionality, now rechargeable.",
    features: ["Immediate comfort", "Ultra discreet", "Power to last", "Pocket-sized case with power bank"],
    link: "/products/signia/silk-ix",
    image: "/images/prod3.webp"
  },
  {
    name: "Motion Charge&Go IX",
    tagline: "The BTE with the longest battery runtime of any rechargeable superpower device.",
    features: ["Wide range of hearing needs", "All-day power", "Bluetooth® and telecoil", "User-friendly app control"],
    link: "/products/signia/motion-ix",
    image: "/images/prod4.webp"
  },
  {
    name: "Active Pro IX",
    tagline: "An earbud like any other. With high-performance hearing technology like no other.",
    features: ["Comfortable earbud fit", "Instant comfort and clarity", "Wireless charging case", "Enhanced connectivity"],
    link: "/products/signia/active-pro-ix",
    image: "/images/prod5.webp"
  },
  {
    name: "Insio IX",
    tagline: "A discreet custom hearing aid. Engineered for conversations.",
    features: ["Improved design for comfort", "Engineered for conversation", "Enhanced speech focus in noise"],
    link: "/products/signia/insio-ix",
    image: "/images/prod6.webp"
  },
  {
    name: "Insio Charge&Go CIC IX",
    tagline: "The world's first rechargeable custom CIC with one-mic directionality.",
    features: ["Invisibly powerful", "All-day power", "Pocket-sized portable charger", "Available in range of colors"],
    link: "/products/signia/insio-cic-ix",
    image: "/images/prod7.webp"
  }
];




export const metadata = {
  title: "Integrated Xperience Technology | Al-Barakat",
  description: "Advanced hearing technology with integrated audio processing and signal clarity.",
  alternates: {
    canonical: "https://al-barakat.com/products/hearing-aid-technology/integrated-xperience",
  },
  openGraph: {
    title: "Signia Integrated Xperience - Advanced Hearing Technology",
    description: "Natural hearing experience with integrated Xperience technology",
    url: "https://al-barakat.com/products/hearing-aid-technology/integrated-xperience",
    type: "website",
  },
}

export default function IntegratedXperiencePage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />
      <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* 1. Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/banxs.webp" 
          alt="Coach talking to young soccer players"
          className="w-full h-full object-cover object-center"
        />
        
        {/* 2. Gradient Overlay (Orange to Transparent) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e35a42]/90 via-[#e35a42]/40 to-transparent" />
      </div>

      {/* 3. Content Container */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          {/* Signia Logo */}
          <div className="mb-4">
            <img 
              src="/images/signia-logo-clean.png" 
              alt="Signia Logo" 
              className="w-28 h-28 object-contain drop-shadow-lg"
            />
          </div>
          
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight">
            Unleash the power of <br /> conversation
          </h1>
          
          <p className="text-white/90 text-xl md:text-2xl font-light">
            with Signia Integrated Xperience
          </p>

          {/* 4. Action Buttons */}
        
        </div>
      </div>
    </section>
     
    <section className="bg-white py-16 md:py-24 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* 1. Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
            Finally, a hearing aid built for real conversations
          </h2>
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
              Unleash the power of conversation. With Signia Integrated Xperience, every word you say, every laugh you share, and every story you tell enhances all life&apos;s essential moments.
            </p>
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
              This is about more than just hearing better. It is about giving you the confidence to engage, interact, and contribute, especially in noisy group conversations. Do not just observe from the sidelines. Dive into the conversation.
            </p>
          </div>
        </div>

        {/* 2. Feature Banner Section (Blue Gradient Area) */}
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-r from-[#001e3c] via-[#003366] to-[#001e3c] text-white p-8 md:p-16 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-8 z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              The smallest Bluetooth® Classic-compatible hearing aid with the longest battery runtime ever.*
            </h3>
            <p className="text-xs text-white/60 font-light">
              *In a comparison of RIC hearing aids based on the manufacturers&apos; newest platforms as of 2024.
            </p>
            <div>
         
            </div>
          </div>

          {/* Right Imagery */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-8 z-10">
            <div className="relative w-full max-w-md">
              <img 
                src="/images/vcz.webp" 
                alt="Two Signia Integrated Xperience hearing aids" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            <div className="flex items-center gap-4">
       
             
            </div>
          </div>

          {/* Background Decorative Circle */}
          <div className="absolute right-[-10%] top-[-20%] w-[60%] h-[140%] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* 3. Social Proof Section */}
        <div className="mt-20 text-center max-w-4xl mx-auto space-y-6">
          <h4 className="text-3xl md:text-4xl font-medium tracking-tight">
            86% of participants performed better with Signia Integrated Xperience versus a key competitor in noisy group conversation.*
          </h4>
          <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed font-light">
            *Jensen, N. S., Samra, B., Best, S., Wilson, C., & Taylor, B. (2025). Improving speech understanding in noisy group conversation: 86% of participants performed better with Signia Integrated Xperience versus key competitor. Signia White Paper.
          </p>
        </div>

      </div>
    </section>
    <div className="container mx-auto px-6 max-w-6xl">
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-100">
  <iframe
    src="https://www.youtube.com/embed/WuA9VwptlzY?si=a0y2vCTYOLWX4G8S" // Replace with actual Rexton ATEX video ID
    title="ATEX certification | REXTON Hearing Aids"
    className="absolute top-0 left-0 w-full h-full"
    allowFullScreen
  ></iframe>
  {/* Brand Frame Accent */}
   </div>
   </div>





   <section className="font-sans text-slate-900">
      
      {/* 1. Dynamic Communication Section (White Background) */}
      <div className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Content Column */}
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                Communication is dynamic — just like life.
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                <p>
                  Life's conversations are not scripted – they are lively, dynamic, and full of unexpected turns.
                </p>
                <p>
                  With Signia Integrated Xperience’s RealTime Conversation Enhancement technology, you will never miss a beat, even if you are not directly facing the person speaking or turning your head to engage with others. Our advanced hearing aid technology lets you enjoy natural and effortless conversations as they are meant to be enjoyed.
                </p>
                <p className="text-slate-900 font-medium">
                  It is time to stop observing and start participating.
                </p>
              </div>

              <h3 className="text-2xl md:text-3xl font-medium tracking-tight border-t border-slate-100 pt-6">
                It is time for Signia Integrated Xperience.
              </h3>
            </div>

            {/* Right Illustration Column */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
                {/* Visualizing RealTime Conversation Enhancement */}
                <img 
                  src="/images/anmiphpoto.webp" 
                  alt="Signia IX RealTime Conversation Enhancement Illustration" 
                  className="w-full h-auto object-contain"
                />
                {/* Subtle pulse effect for the IX center */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 rounded-full border-2 border-red-100 animate-ping opacity-20" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Hearing Test CTA Section (Light Gray Background) */}
      <div className="bg-[#f2f2f2] py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Text & Button Area */}
            <div className="w-full md:w-2/3 space-y-8 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                Trouble hearing? Take a test.
              </h2>
              <p className="text-xl text-slate-600 font-light max-w-2xl">
                Not sure about whether to visit a hearing care professional for a hearing test? Try our free and quick online hearing test.
              </p>
              <div className="pt-4">
                <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 rounded-full px-10 py-6 text-lg font-medium transition-all shadow-sm">
                  <Link href="/hearing-test">Free online hearing test</Link>
                </Button>
              </div>
            </div>

            {/* Hearing Test Icon Area */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-slate-300 flex items-center justify-center bg-white shadow-inner">
                {/* SVG Pulse Icon to match screenshot */}
                <svg viewBox="0 0 100 100" className="w-3/5 h-3/5 text-slate-700 stroke-current fill-none stroke-[1.5]">
                  <path d="M10,50 Q25,50 30,30 T40,70 T50,50 Q75,50 90,50" />
                  <path d="M45,40 A15,15 0 1,1 75,60" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>


    <section className="bg-white py-24 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            The science of keeping up with real conversations
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
            RealTime Conversation Enhancement is a breakthrough in hearing aid technology constantly analyzing, augmenting, and adapting to your sound environment.
          </p>
        </div>

        {/* Triple Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-24">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-8">
              <div className="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
                <img 
                  src={pillar.image} 
                  alt={`${pillar.title} icon`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-medium">{pillar.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-medium">
            Watch Signia experts demonstrate what RealTime Conversation Enhancement can do
          </h3>
          <p className="text-lg text-slate-500 font-light">
            See the groundbreaking RealTime Conversation Enhancement technology of Signia Integrated Xperience in action.
          </p>
        </div>

      </div>
    </section>
    <div className="container mx-auto px-6 max-w-6xl">
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-100">
  <iframe
    src="https://www.youtube.com/embed/HTsiTKW1lI8?si=VTlL4xq-bFHDB2Ei" // Replace with actual Rexton ATEX video ID
    title="ATEX certification | REXTON Hearing Aids"
    className="absolute top-0 left-0 w-full h-full"
    allowFullScreen
  ></iframe>
  {/* Brand Frame Accent */}
   </div>
   </div>


   <section className="bg-white py-24 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Our Integrated Xperience hearing aids
          </h2>
          <p className="text-lg text-slate-500 font-light max-w-3xl mx-auto">
            Discover the freedom of effortless conversation with our hearing models, each offering advanced technology tailored to your lifestyle.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {products.map((product, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row items-start gap-8 group">
              
              {/* Product Image Area */}
              <div className="w-full lg:w-1/2 flex justify-center  p-8   group-hover:bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-64 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Product Details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-slate-600 font-light italic">
                    {product.tagline}
                  </p>
                </div>

                <ul className="space-y-2">
                  {product.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>




    <section className="bg-white py-24 font-sans text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* 1. Own Voice Processing Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Hear your own voice just right, and enjoy socializing more
          </h2>
          <p className="text-lg text-slate-600 font-light max-w-4xl mx-auto leading-relaxed">
            Chatting with others is key to feeling good and keeping your brain sharp. Our Own Voice Processing 2.0 (OVP) technology makes your own voice sound just right and helps you join in the conversation more easily.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          {/* Left: Imagery */}
          <div className="w-full lg:w-1/2">
            <img 
              src="/images/yel1.webp" 
              alt="Two women chatting comfortably" 
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

          {/* Right: OVP Content */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-4">
              <h3 className="text-3xl font-medium">Boost conversations</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Increased social interaction has a positive impact on mental well-being** and OVP 2.0 not only ensures your own voice sounds just right, it helps you engage in conversations.
              </p>
              <p className="text-slate-600 font-light leading-relaxed">
                One study showed that 78%*** of people said they chatted more when wearing a hearing aid with OVP turned on.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-medium">Only with Signia</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                OVP 2.0 (Own Voice Processing) is a unique technology to help you contribute comfortably and, and it is only available in Signia hearing aids.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Enhanced Connectivity Section */}
        <div className="pt-24 border-t border-slate-100">
          <h2 className="text-center text-4xl md:text-5xl font-medium tracking-tight mb-20">
            Enhanced connectivity for your hearing aids
          </h2>

          <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left: Connectivity Details */}
            <div className="w-full lg:w-1/2 space-y-8">
              <h3 className="text-3xl font-medium leading-tight">
                Bluetooth® streaming and hands-free calling with multiple connectivity options
              </h3>
              
              <ul className="space-y-4">
                {[
                  "Bluetooth® Classic",
                  "MFi (Made for iPhone)",
                  "LE Audio",
                  "ASHA (Audio Streaming for Hearing Aids)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600 shrink-0" />
                    <span className="text-lg text-slate-700 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
               
              </div>
            </div>

            {/* Right: Connectivity Graphic */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <img 
                  src="/images/yel2.webp" 
                  alt="Smartphone with Bluetooth connectivity graphic" 
                  className="w-full h-auto"
                />
                {/* Decorative Bluetooth Pulsing Effect */}
                <div className="absolute inset-0 flex items-center justify-center">
               
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


    <section className="bg-white py-20 font-sans text-slate-900 border-t border-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Final Brand Message */}
        <div className="text-center space-y-8 mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight">
            Unleash the power of conversation with Signia Integrated Xperience
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
            Conversations can connect, inspire, and enrich our lives. They open doors to new friendships, fond memories, and deeper bonds. The Signia Integrated Xperience is your key to unlocking these doors, bringing you closer to the people and the moments that matter most.
          </p>
        </div>

        {/* Scientific Citations & Footnotes */}
        <div className="space-y-8 pt-12 border-t border-slate-100">
          <div className="text-xs md:text-sm text-slate-400 space-y-6 font-light leading-relaxed">
            
            <p>
              *Jensen NS, Mohnlein-Gilbert K, Wilson C, Berwick N, Kamkar Parsi H, Samra B, Best S & Taylor B. 2024. 
              Signia IX with pioneering multi-stream technology delivers 22% better speech understanding in noisy 
              group conversation than a competitor with an AI co-processor-driven platform. Signia White Paper.
            </p>

            <p>
              ** Friedler B, Crapser J, McCullough L. One is the deadliest number: the detrimental effects of social 
              isolation on cerebrovascular diseases and cognition. Acta Neuropathol. 2015;129(4):493-509. 
              doi:10.1007/s00401-014-1377-9
            </p>

            <p>
              ***Own Voice Processing Has People Talking More (researchgate.net)
            </p>
            
          </div>
        </div>

      </div>
    </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary">
            <CardContent className="p-8 text-center text-primary-foreground md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Experience Integrated Xperience</h2>
              <p className="mb-6 text-lg opacity-90">
                Discover how seamless technology can improve your hearing and life.
              </p>
              <Button asChild size="lg" variant="secondary" className="transition-all hover:scale-105">
                <Link href="/booking">Schedule Demo</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
