"use client"
import React, { useState, useMemo } from "react"
import { MainNavigation } from "@/components/main-navigation"

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeFilter, setActiveFilter] = useState("All topics")
  const [selectedPost, setSelectedPost] = useState<any>(null)

  // الداتا الكاملة لـ 54 مقالاً (9 مقالات لكل صفحة) - تم ملء 5 و 6 بصور حقيقية
  const blogDatabase: Record<number, any[]> = {
    1: [
      { id: 11, title: "Signia IX enhances the brain’s response to speech sounds in noise", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2026/2026-02-03-eeg-evaluation-of-signia-ix-1920x1080.jpeg" },
      { id: 12, title: "Binaural OneMic Directionality 2.0 delivers 5 times speech enhancement", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/insio-chargego-ix/insio-charge-go-cic-ix_conversation_1920x1080.jpg" },
      { id: 13, title: "Large-scale data confirm: Bluetooth Classic benefits Android users", topic: "Integrated Xperience", type: "Data insights", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2025/2025-11-data-insights-bct-android-streaming-1920x1080.png" },
      { id: 14, title: "Own Voice Processing 2.0 linked to 23% fewer returns", topic: "Integrated Xperience", type: "Data insights", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2025/2025-11-data-insights-ovp-return-rates-1920x1080.png" },
      { id: 15, title: "Silk Charge&Go IX - the discreet ready-to-wear CIC loved by wearers", topic: "Integrated Xperience", type: "Data insights", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2025/2025-10-silk-charge-go-ix-soundwave-1920x1080.jpg" },
      { id: 16, title: "Directionality in single-microphone hearing aids: Speech enhancement", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2025/2025-10-directional-in-single-microphone-16-9.png" },
      { id: 17, title: "86% of participants performed better with Signia IX in noisy group", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/pure-chargego-bct-ix/pure-charge-go-bct-ix_congress-53927_group-conversation-3_1920x1080.jpg" },
      { id: 18, title: "Beyond the lab: Signia IX improves real-world busy group conversations", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/pure-chargego-bct-ix/pure-charge-go-bct-ix_congress-53981_group-conversation-2_1920x1080.jpg" },
      { id: 19, title: "Conversations in noise: Multi-stream architecture vs. deep neural network", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2024/2024-12_conversations-in-noise_16-9.jpg" }
    ],
    2: [
      { id: 21, title: "Signia IX delivers 22% better speech understanding than AI competitor", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/active-ix/active-ix_group-laughing_1920x1080.jpg" },
      { id: 22, title: "Signia IX delivers twice the speech enhancement benefit in noisy groups", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/platform/signia-ix_coach-with-kids-cheering_1920x1080.jpg" },
      { id: 23, title: "Improving real-world conversation experience with multi-stream architecture", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2024/2024-09_improving-rtce-with-multi-stream_16-9.jpg" },
      { id: 24, title: "Hearing at the mall: Multibeam processing in food court environment", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/stock/food-court_1920x1080.jpg" },
      { id: 25, title: "Accentuating the positive: Overcoming the complexities of stigma", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/styletto-ix/styletto-ix_taking-out-of-charger_1920x1080.jpg" },
      { id: 26, title: "Augmenting split processing with a multi-stream architecture algorithm", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/platform/signia-ix_coach-talking-to-kids_1920x1080.jpg" },
      { id: 27, title: "Real-world assessment of Signia IX with RTCE", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/platform/signia-ix_coach-with-kids-circle_1920x1080.jpg" },
      { id: 28, title: "New study: Signia IX outshines competitors in group conversations", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/platform/signia-ix_coach-talking-to-kids_1920x1080.jpg" },
      { id: 29, title: "Multi-Stream Architecture for Improved Conversation Performance", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/platform/signia-ix_live-auditory-space_16-9.jpg" }
    ],
    3: [
      { id: 31, title: "Unlocking quality of life benefits through firmware and apps", topic: "Augmented Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2023/2023-09-unlocking-quality-of-life_16-9.jpg" },
      { id: 32, title: "AI-based fine-tuning: How Signia Assistant improves acceptance", topic: "Augmented Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/apps---telecare/signia-assistant/signia-assistant_ia-chat_1920x1080.jpg" },
      { id: 33, title: "Upgraded eWindScreen and improved AX Soundscape Processing", topic: "Augmented Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2023/2023-03_ewindscreen_soundscape-processing_1920x1080.jpg" },
      { id: 34, title: "HandsFree and CallControl in Signia AX for great phone experience", topic: "Augmented Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_signia-ax_handsfree-ios_1920x1080.jpg" },
      { id: 35, title: "Signia AX HandsFree and CallControl: A dream to stream", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_signia-ax_handsfree-ios_1920x1080.jpg" },
      { id: 36, title: "Measuring steps at the ear: How My Steps improves accuracy", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-09_measuring-steps-at-the-ear-my-steps_1920x1080.jpg" },
      { id: 37, title: "Supporting hearing health and general health with My WellBeing", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-09_my-wellbeing_1920x1080.jpg" },
      { id: 38, title: "Evidence Supports the Advantages of Signia AX's Split Processing", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ax/platform/signia-ax_see-through-chip_split-sound_1920x1080.jpg" },
      { id: 39, title: "Upgrading the performance of Signia AX with Auto EchoShield", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/brand/signia_soundwave_ax_1920x1080.jpg" }
    ],
    4: [
        { id: 41, title: "Signia AX HandsFree for iOS: Technical Background", topic: "Augmented Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_signia-ax_handsfree-ios_1920x1080.jpg" },
        { id: 42, title: "Signia AX Own Voice Processing 2.0", topic: "Augmented Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_signia-ax_ovp-20_1920x1080.jpg" },
        { id: 43, title: "Signia AX Auto EchoShield Backgrounder", topic: "Augmented Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_signia-ax_auto-echoshield_1920x1080.jpg" },
        { id: 44, title: "Comparison of battery solutions for hearing aid devices", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/brand/signia_soundwave_ax_1920x1080.jpg" },
        { id: 45, title: "Split-processing: A new technology for a new generation", topic: "Augmented Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ax/platform/signia-ax_see-through-chip_split-sound_blue-bg_1920x1080.jpg" },
        { id: 46, title: "Signia Xperience Super Power devices - the true heroes", topic: "Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/xperience/motion-x/motion-sp-x_hero_image-replacement_v2_1920x1080.jpg" },
        { id: 47, title: "User Engagement with Signia TeleCare: Facilitating Acceptance", topic: "TeleCare", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2020/2020-02_user-engagement-with-telecare_16-9.jpg" },
        { id: 48, title: "Augmented Focus: A Breakthrough in Speech Clarity", topic: "Augmented Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/brand/signia_soundwave_ax_1920x1080.jpg" },
        { id: 49, title: "Boosting real-world listening performance with Signia AX survey", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ax/platform/signia-ax_augmented-focus_1920x1080.jpg" }
    ],
    5: [
        { id: 51, title: "Tinnitus relief: Static noise and ocean wave therapy", topic: "Tinnitus", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/tinnitus/tinnitus-relief_1920x1080.jpg" },
        { id: 52, title: "CROS and BiCROS solutions for single-sided deafness", topic: "CROS", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/cros/cros-solution_1920x1080.jpg" },
        { id: 53, title: "Acoustic-Motion Sensors: A Paradigm Shift in Audiology", topic: "Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/xperience/sensors_1920x1080.jpg" },
        { id: 54, title: "TeleCare 3.0: Full Remote Tuning Capabilities", topic: "TeleCare", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/apps---telecare/telecare-3_0_1920x1080.jpg" },
        { id: 55, title: "Styletto: A new era in hearing aid design", topic: "Styletto", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/styletto/styletto_hero_1920x1080.jpg" },
        { id: 56, title: "Rechargeable technology: Lithium-ion solutions", topic: "Charge&Go", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/charge-go/lithium-ion-battery_1920x1080.jpg" },
        { id: 57, title: "Narrow Directionality: Clinically proven understanding", topic: "Binax", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/binax/directionality_1920x1080.jpg" },
        { id: 58, title: "Direct Streaming for Android with ASHA technology", topic: "Connectivity", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/accessories/streamline-mic/streamline-mic_1920x1080.jpg" },
        { id: 59, title: "Own Voice Processing 2.0: Deep Technical Dive", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/ovp-tech_1920x1080.jpg" }
    ],
    6: [
        { id: 61, title: "Silk X: In-the-ear discretion without the wait", topic: "Discreet", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/silk/silk-x_1920x1080.jpg" },
        { id: 62, title: "Motion X: Versatile rechargeable BTE solutions", topic: "Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/motion/motion-x_1920x1080.jpg" },
        { id: 63, title: "OVP 2.0: Technical implementation and results", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/platform/signia-ix_live-auditory-space_16-9.jpg" },
        { id: 64, title: "Signia AX: Audiology's First Split-Processing Platform", topic: "Augmented Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ax/split-processing_1920x1080.jpg" },
        { id: 65, title: "Augmented Focus: Technical background and benefits", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ax/split-processing_1920x1080.jpg" },
        { id: 66, title: "TeleCare: Clinical data on wearer engagement", topic: "TeleCare", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/apps---telecare/signia-telecare_1920x1080.jpg" },
        { id: 67, title: "Styletto AX: A dream to stream and recharge", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/styletto/styletto-ax_1920x1080.jpg" },
        { id: 68, title: "Signia Assistant: Your hearing care, personalized", topic: "Apps", type: "Data insights", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/apps---telecare/signia-assistant_1920x1080.jpg" },
        { id: 69, title: "Connectivity in AX: From TV to smartphones", topic: "Augmented Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/accessories/connectivity-streamers_1920x1080.jpg" }
    ]
  };

  const filterList = ["All topics", "White paper", "Integrated Xperience", "Journal paper", "Data insights", "Backgrounder"];

  // منطق الفلترة (يتم تطبيق الفلترة على كل الداتا المتاحة)
  const filteredData = useMemo(() => {
    const flatData = Object.values(blogDatabase).flat();
    if (activeFilter === "All topics") return flatData;
    return flatData.filter(post => 
      post.type.toLowerCase().includes(activeFilter.toLowerCase()) || 
      post.topic.toLowerCase().includes(activeFilter.toLowerCase())
    );
  }, [activeFilter]);

  // منطق عرض الصفحة الحالية
  const postsPerPage = 9;
  const totalPages = Math.ceil(filteredData.length / postsPerPage);
  
  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    return filteredData.slice(start, end);
  }, [filteredData, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <MainNavigation />

      {selectedPost ? (
        // تفاصيل المقال (SPA View)
        <main className="container mx-auto px-4 pt-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
          <button onClick={() => setSelectedPost(null)} className="mb-10 flex items-center font-black text-[#004a8c] uppercase text-xs tracking-widest hover:gap-3 transition-all border-b-2 border-transparent hover:border-[#004a8c] pb-1 w-fit">
            ← Back to Library
          </button>
          
          <div className="max-w-5xl" dir="ltr">
            <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-[#facc15] text-[#004a8c] px-4 py-1 font-black text-[10px] uppercase italic tracking-tighter shadow-sm">{selectedPost.type}</span>
                <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest self-center border-l pl-4 border-slate-200">{selectedPost.topic}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-black mb-8 leading-[0.95] uppercase tracking-tighter">{selectedPost.title}</h1>
            <div className="relative group rounded-sm overflow-hidden shadow-2xl mb-16 border-b-[16px] border-[#004a8c]">
                <img src={selectedPost.img} className="w-full aspect-video object-cover" alt={selectedPost.title} />
            </div>
            <div className="prose prose-2xl max-w-none text-slate-700 font-medium leading-relaxed space-y-8">
              <p className="text-2xl font-bold italic border-l-4 border-[#facc15] pl-6">Technical Review & Audiological Insights</p>
              <p>This technical publication provides an in-depth analysis of {selectedPost.title}. It explores the audiological breakthroughs achieved through our latest processing architecture and provides clinical evidence supporting improved patient outcomes in challenging acoustic environments.</p>
              <p>Additional scientific data, full charts, and peer-reviewed analysis are available for Al-Barakat professional partners and audiological staff. This documentation is intended for professional use to enhance clinical fitting procedures and patient care standards.</p>
            </div>
          </div>
        </main>
      ) : (
        // الصفحة الرئيسية للبلوج
        <>
          <header className="container mx-auto px-4 pt-16 pb-12">
            <div className="flex items-center gap-6 mb-16 border-l-8 border-[#facc15] pl-6 ml-4" dir="ltr">
              <div>
                <h1 className="text-6xl md:text-8xl font-black text-[#004a8c] tracking-tighter uppercase italic leading-none">Signia Library</h1>
                <p className="text-2xl font-bold text-slate-400 uppercase tracking-[0.4em] mt-3">Scientific Research & Publications</p>
              </div>
            </div>

            {/* Featured Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20" dir="ltr">
               {[
                 { t: "LATEST PUBLICATIONS", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/platform/signia-ix_live-auditory-space_16-9.jpg" },
                 { t: "MEET OUR EXPERTS", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/other/brilliant-talks/brilliant-talks_all-speaker_1920x1080.jpg" },
                 { t: "PUBLICATIONS ARCHIVE", img: "https://cdn.signia-pro.com/-/media/signia/global/images/stock/signia-assistant_image-replacement_hcp-desktop_v2_gi-1138661274_1920x1080.jpg" }
               ].map((item, i) => (
                 <div key={i} className="relative h-96 bg-black overflow-hidden group cursor-pointer border-b-[10px] border-transparent hover:border-[#facc15] transition-all duration-500 shadow-xl">
                    <img src={item.img} className="w-full h-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-90" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#004a8c]/90 via-transparent to-transparent flex flex-col justify-end p-10">
                       <h3 className="text-white text-3xl font-black italic tracking-tighter leading-none mb-2">{item.t}</h3>
                       <div className="w-12 h-1 bg-[#facc15] transition-all group-hover:w-full"></div>
                    </div>
                 </div>
               ))}
            </div>
          </header>

          {/* Filtration */}
          <nav className="bg-[#004a8c] sticky top-0 z-50 py-4 shadow-2xl mb-20">
            <div className="container mx-auto px-4 flex gap-3 overflow-x-auto no-scrollbar scroll-smooth" dir="ltr">
              {filterList.map(f => (
                <button 
                  key={f} 
                  onClick={() => handleFilterChange(f)}
                  className={`px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] border-2 transition-all whitespace-nowrap
                    ${activeFilter === f ? "bg-[#facc15] border-[#facc15] text-[#004a8c] shadow-lg" : "text-white border-white/20 hover:border-white hover:bg-white/5"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </nav>

          {/* The Grid (Dynamic 9 Posts) */}
          <section className="container mx-auto px-4 mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20" dir="ltr">
              {currentPosts.length > 0 ? (
                currentPosts.map((post) => (
                  <article key={post.id} className="flex flex-col border-l-4 border-slate-50 pl-8 hover:border-[#004a8c] transition-all duration-300 group">
                    <div className="relative aspect-[16/10] mb-8 overflow-hidden rounded-sm shadow-md group-hover:shadow-2xl transition-shadow">
                      <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={post.title} />
                      <div className="absolute top-0 right-0 bg-[#facc15] text-[#004a8c] px-4 py-1 font-black text-[9px] uppercase italic tracking-tighter shadow-sm">{post.type}</div>
                    </div>
                    <span className="text-[#004a8c] font-black text-[10px] uppercase mb-4 italic tracking-[0.2em]">{post.topic}</span>
                    <h2 className="text-2xl font-bold text-black leading-tight mb-10 min-h-[4rem] group-hover:text-[#004a8c] transition-colors">{post.title}</h2>
                    <button 
                      onClick={() => { setSelectedPost(post); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="flex items-center gap-4 group/btn w-fit mt-auto py-2"
                    >
                      <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center group-hover/btn:bg-[#004a8c] group-hover/btn:border-[#004a8c] transition-all duration-300">
                         <span className="text-black group-hover/btn:text-white transform group-hover/btn:translate-x-1 transition-transform">→</span>
                      </div>
                      <span className="font-black uppercase text-[10px] tracking-[0.2em] text-slate-500 group-hover/btn:text-black transition-colors">Discover More</span>
                    </button>
                  </article>
                ))
              ) : (
                <div className="col-span-full py-20 text-center text-slate-400 font-bold uppercase tracking-widest">No publications found in this category.</div>
              )}
            </div>

            {/* Updated Navigation Control */}
            <div className="mt-32 border-t-4 border-black pt-12 flex flex-col md:flex-row items-center justify-between gap-12" dir="ltr">
               <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`uppercase font-black tracking-[0.3em] text-[10px] flex items-center gap-3 transition-all ${currentPage === 1 ? 'opacity-20 cursor-not-allowed' : 'text-black hover:text-[#004a8c] hover:-translate-x-2'}`}
               >
                 <span>←</span> Previous Page
               </button>

               <div className="flex items-center gap-6">
                 <span className="text-slate-300 font-bold uppercase text-[10px] tracking-widest italic">Navigation Control</span>
                 <div className="flex items-center gap-3">
                   <div className="relative group">
                      <div className="absolute -inset-1 bg-[#facc15] rounded-sm transform rotate-6 scale-95 group-hover:rotate-0 transition-transform"></div>
                      <input 
                        type="text" 
                        value={currentPage} 
                        readOnly 
                        className="relative z-10 w-12 h-12 bg-white border-2 border-black text-center text-xl font-black shadow-sm outline-none" 
                      />
                   </div>
                   <span className="text-2xl font-light text-slate-200">/ {totalPages || 6}</span>
                 </div>
               </div>

               <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`uppercase font-black tracking-[0.3em] text-[10px] flex items-center gap-3 transition-all ${currentPage === totalPages ? 'opacity-20 cursor-not-allowed' : 'text-black hover:text-[#004a8c] hover:translate-x-2'}`}
               >
                 Next Page <span>→</span>
               </button>
            </div>
          </section>
        </>
      )}

    </div>
  )
}