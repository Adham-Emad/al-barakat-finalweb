"use client"
import React, { useState, useMemo } from "react"
import { MainNavigation } from "@/components/main-navigation"

/**
 * 1. CONTENT REPOSITORY
 * Technical data extracted from the 5 source files provided so far.
 */
const POST_CONTENT_DATABASE: Record<number, { 
  subtitle: string; 
  body: string[]; 
  takeaways?: string[]; 
  downloadUrl?: string;
  technicalDetails?: string 
}> = {
  11: {
    subtitle: "RealTime Conversation Enhancement (RTCE) and Neural Response",
    body: [
      "Two peer-reviewed studies examined how RTCE on Signia’s IX hearing aids impacts brain activity in wearers listening to simulated group conversations in loud noise.",
      "RTCE was found to enhance the brain’s ability to automatically detect small acoustic contrasts, helping listeners differentiate speech sounds while reducing neural signatures of effortful listening."
    ],
    takeaways: [
      "80% improvement in brain's detection of acoustic differences.",
      "50% reduction in neural signatures associated with listening effort.",
      "IX technology empowers wearers in dynamic group settings."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2026/2026-02-03-wp-eeg-evaluation-of-signia-ix.pdf"
  },
  12: {
    subtitle: "Binaural OneMic Directionality 2.0: Breakthrough CIC Spatial Logic",
    body: [
      "Signia’s unique Binaural OneMic Directionality (BOMD) 2.0 makes Signia the only manufacturer delivering directionality in single-microphone hearing aids.",
      "Clinical evidence confirms that BOMD 2.0 delivers five times the speech enhancement in noise compared to competitor CIC hearing aids that offer only omnidirectional responses."
    ],
    takeaways: [
      "5x speech enhancement benefit (7 dB improvement) over key competitors.",
      "Enabled by low-latency e2e 4.0 communication.",
      "Significantly improves speech understanding without losing discreetness."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2025/2025-08_signia-white-paper_binaural-onemic-directionality-20.pdf"
  },
  13: {
    subtitle: "Data Insights: Connectivity Benefits for Android Smartphone Users",
    body: [
      "A large-scale data analytics study has confirmed the benefits of Bluetooth Classic with no compromise for Android users. The study focused on Pure Charge&Go BCT IX.",
      "The data reveals that BCT IX increased the share of Android smartphone users who actively stream by 22% compared to standard Pure Charge&Go IX models."
    ],
    takeaways: [
      "22% increase in Android streaming adoption.",
      "Seamless Bluetooth Classic integration without audiological compromise.",
      "Large-scale confirmational data from real-world usage."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2025/2025-11-data-insights-bct-android-streaming.pdf"
  },
  14: {
    subtitle: "Own Voice Processing 2.0: Impact on Professional Return Rates",
    body: [
      "Signia remains the only manufacturer offering dedicated Own Voice Processing. A new analysis of real wearer data highlights the commercial and clinical impact of OVP 2.0.",
      "The use of OVP 2.0 in Signia IX hearing aids is associated with 23% fewer returns, proving that own-voice satisfaction is a key driver for long-term patient acceptance."
    ],
    takeaways: [
      "OVP 2.0 usage is linked to a 23% reduction in return rates.",
      "Exclusive technology addressing the #1 patient complaint (own voice sound).",
      "Drives higher patient satisfaction and clinic efficiency."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2025/2025-11-data-insights-ovp-return-rates.pdf"
  },
  15: {
    subtitle: "Silk Charge&Go IX: Wearer Satisfaction and Survey Results",
    body: [
      "New survey data shows that the unique combination of discreetness and technology in Silk Charge&Go IX meets and exceeds wearer expectations.",
      "Users highly valued the 24 hr.+ runtime and the speech-in-noise performance offered by the IX platform, leading to exceptional levels of wearer satisfaction."
    ],
    takeaways: [
      "High satisfaction driven by discreet ready-to-wear design.",
      "Reliable 24+ hour battery life on a single charge.",
      "Superior speech-in-noise performance for a CIC device."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2025/2025-10-10-signia-silk-cng-ix-survey-data.pdf"
  }
};

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeFilter, setActiveFilter] = useState("All topics")
  const [selectedPost, setSelectedPost] = useState<any>(null)

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
        { id: 21, title: "Signia IX understanding vs AI competitor", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/active-ix/active-ix_group-laughing_1920x1080.jpg" },
        { id: 22, title: "Signia IX twice the enhancement benefit", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/platform/signia-ix_coach-with-kids-cheering_1920x1080.jpg" },
        { id: 23, title: "Multi-stream architecture improvement", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2024/2024-09_improving-rtce-with-multi-stream_16-9.jpg" },
        { id: 24, title: "Hearing at the mall food court", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/stock/food-court_1920x1080.jpg" },
        { id: 25, title: "Overcoming stigma complexities", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/styletto-ix/styletto-ix_taking-out-of-charger_1920x1080.jpg" },
        { id: 26, title: "Augmenting split processing", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/platform/signia-ix_coach-talking-to-kids_1920x1080.jpg" },
        { id: 27, title: "Real-world assessment IX with RTCE", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/platform/signia-ix_coach-with-kids-circle_1920x1080.jpg" },
        { id: 28, title: "Study: IX outshines competitors", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/platform/signia-ix_coach-talking-to-kids_1920x1080.jpg" },
        { id: 29, title: "Improved Conversation Performance", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/platform/signia-ix_live-auditory-space_16-9.jpg" }
    ],
    3: [
        { id: 31, title: "Quality of life through firmware", topic: "Augmented Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2023/2023-09-unlocking-quality-of-life_16-9.jpg" },
        { id: 32, title: "AI fine-tuning acceptance", topic: "Augmented Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/apps---telecare/signia-assistant/signia-assistant_ia-chat_1920x1080.jpg" },
        { id: 33, title: "Upgraded eWindScreen processing", topic: "Augmented Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2023/2023-03_ewindscreen_soundscape-processing_1920x1080.jpg" },
        { id: 34, title: "HandsFree and CallControl Signia AX", topic: "Augmented Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_signia-ax_handsfree-ios_1920x1080.jpg" },
        { id: 35, title: "CallControl AX: Dream to stream", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_signia-ax_handsfree-ios_1920x1080.jpg" },
        { id: 36, title: "My Steps accuracy metrics", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-09_measuring-steps-at-the-ear-my-steps_1920x1080.jpg" },
        { id: 37, title: "General health with My WellBeing", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-09_my-wellbeing_1920x1080.jpg" },
        { id: 38, title: "AX Split Processing advantages", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ax/platform/signia-ax_see-through-chip_split-sound_1920x1080.jpg" },
        { id: 39, title: "Auto EchoShield AX performance", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/brand/signia_soundwave_ax_1920x1080.jpg" }
    ],
    4: [
        { id: 41, title: "HandsFree for iOS Backgrounder", topic: "Augmented Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_signia-ax_handsfree-ios_1920x1080.jpg" },
        { id: 42, title: "AX Own Voice Processing 2.0", topic: "Augmented Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_signia-ax_ovp-20_1920x1080.jpg" },
        { id: 43, title: "Auto EchoShield Backgrounder", topic: "Augmented Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_signia-ax_auto-echoshield_1920x1080.jpg" },
        { id: 44, title: "Battery solutions comparison", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/brand/signia_soundwave_ax_1920x1080.jpg" },
        { id: 45, title: "Split-processing breakthroughs", topic: "Augmented Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ax/platform/signia-ax_see-through-chip_split-sound_blue-bg_1920x1080.jpg" },
        { id: 46, title: "Xperience Super Power heroes", topic: "Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/xperience/motion-x/motion-sp-x_hero_image-replacement_v2_1920x1080.jpg" },
        { id: 47, title: "TeleCare wearer engagement", topic: "TeleCare", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2020/2020-02_user-engagement-with-telecare_16-9.jpg" },
        { id: 48, title: "Augmented Focus clarity", topic: "Augmented Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/brand/signia_soundwave_ax_1920x1080.jpg" },
        { id: 49, title: "Real-world listening AX survey", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ax/platform/signia-ax_augmented-focus_1920x1080.jpg" }
    ],
    5: [
        { id: 51, title: "Tinnitus relief static therapy", topic: "Tinnitus", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/tinnitus/tinnitus-relief_1920x1080.jpg" },
        { id: 52, title: "CROS and BiCROS deafness solutions", topic: "CROS", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/cros/cros-solution_1920x1080.jpg" },
        { id: 53, title: "Acoustic-Motion Sensors Shift", topic: "Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/xperience/sensors_1920x1080.jpg" },
        { id: 54, title: "TeleCare 3.0 Remote Tuning", topic: "TeleCare", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/apps---telecare/telecare-3_0_1920x1080.jpg" },
        { id: 55, title: "Styletto: A design era", topic: "Styletto", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/styletto/styletto_hero_1920x1080.jpg" },
        { id: 56, title: "Rechargeable Lithium-ion solutions", topic: "Charge&Go", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/charge-go/lithium-ion-battery_1920x1080.jpg" },
        { id: 57, title: "Narrow Directionality proven", topic: "Binax", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/binax/directionality_1920x1080.jpg" },
        { id: 58, title: "Android ASHA streaming tech", topic: "Connectivity", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/accessories/streamline-mic/streamline-mic_1920x1080.jpg" },
        { id: 59, title: "Own Voice Processing 2.0 Technical", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/ovp-tech_1920x1080.jpg" }
    ],
    6: [
        { id: 61, title: "Silk X: In-the-ear discretion", topic: "Discreet", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/silk/silk-x_1920x1080.jpg" },
        { id: 62, title: "Motion X: Rechargeable BTE", topic: "Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/motion/motion-x_1920x1080.jpg" },
        { id: 63, title: "OVP 2.0 Technical results", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/platform/signia-ix_live-auditory-space_16-9.jpg" },
        { id: 64, title: "Signia AX: Split-Processing", topic: "Augmented Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ax/split-processing_1920x1080.jpg" },
        { id: 65, title: "Augmented Focus: Background", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ax/split-processing_1920x1080.jpg" },
        { id: 66, title: "TeleCare wearer engagement", topic: "TeleCare", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/apps---telecare/signia-telecare_1920x1080.jpg" },
        { id: 67, title: "Styletto AX: Stream and charge", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/styletto/styletto-ax_1920x1080.jpg" },
        { id: 68, title: "Signia Assistant: Personalized care", topic: "Apps", type: "Data insights", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/apps---telecare/signia-assistant_1920x1080.jpg" },
        { id: 69, title: "AX Connectivity: TV to Smartphone", topic: "Augmented Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/accessories/connectivity-streamers_1920x1080.jpg" }
    ]
  };

  const filterList = ["All topics", "White paper", "Integrated Xperience", "Journal paper", "Data insights", "Backgrounder"];

  const filteredData = useMemo(() => {
    const flatData = Object.values(blogDatabase).flat();
    if (activeFilter === "All topics") return flatData;
    return flatData.filter(post => 
      post.type.toLowerCase().includes(activeFilter.toLowerCase()) || 
      post.topic.toLowerCase().includes(activeFilter.toLowerCase())
    );
  }, [activeFilter, blogDatabase]);

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
        /* --- ARTICLE SUBPAGE VIEW --- */
        <main className="container mx-auto px-4 pt-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
          <button onClick={() => setSelectedPost(null)} className="mb-10 flex items-center font-black text-[#004a8c] uppercase text-xs tracking-widest hover:gap-3 transition-all border-b-2 border-transparent hover:border-[#004a8c] pb-1 w-fit">
            ← Back to Library
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16" dir="ltr">
            
            <div className="lg:col-span-8">
              <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-[#facc15] text-[#004a8c] px-4 py-1 font-black text-[10px] uppercase italic tracking-tighter shadow-sm">{selectedPost.type}</span>
                  <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest self-center border-l pl-4 border-slate-200">{selectedPost.topic}</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-black mb-8 leading-[0.95] uppercase tracking-tighter">
                {selectedPost.title}
              </h1>

              <div className="relative group rounded-sm overflow-hidden shadow-2xl mb-16 border-b-[16px] border-[#004a8c]">
                  <img src={selectedPost.img} className="w-full aspect-video object-cover" alt={selectedPost.title} />
              </div>

              <div className="prose prose-2xl max-w-none text-slate-700 font-medium leading-relaxed space-y-12">
                {POST_CONTENT_DATABASE[selectedPost.id] ? (
                  <>
                    <div className="space-y-6">
                      <p className="text-2xl font-bold italic border-l-4 border-[#facc15] pl-6 text-[#004a8c]">
                        {POST_CONTENT_DATABASE[selectedPost.id].subtitle}
                      </p>
                      {POST_CONTENT_DATABASE[selectedPost.id].body.map((p, i) => <p key={i}>{p}</p>)}
                    </div>

                    {POST_CONTENT_DATABASE[selectedPost.id].takeaways && (
                      <div className="bg-slate-50 p-10 border-l-8 border-[#004a8c]">
                        <h3 className="text-[#004a8c] font-black uppercase tracking-widest text-sm mb-6">Take-away messages</h3>
                        <ul className="list-disc pl-6 space-y-4 text-xl marker:text-[#004a8c]">
                          {POST_CONTENT_DATABASE[selectedPost.id].takeaways?.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {POST_CONTENT_DATABASE[selectedPost.id].downloadUrl && (
                      <div className="py-16 border-y-2 border-slate-100 flex flex-col items-center gap-8 bg-slate-50/50 rounded-sm">
                        <h3 className="font-black uppercase italic text-3xl tracking-tighter text-[#004a8c]">Get the full picture</h3>
                        <a 
                          href={POST_CONTENT_DATABASE[selectedPost.id].downloadUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="bg-[#004a8c] text-white px-16 py-6 font-black uppercase tracking-[0.2em] italic hover:bg-[#facc15] hover:text-[#004a8c] transition-all shadow-2xl hover:-translate-y-1"
                        >
                          Download complete technical publication (PDF)
                        </a>
                      </div>
                    )}
                  </>
                ) : (
                  /* --- DYNAMIC FALLBACK SYSTEM --- */
                  <div className="space-y-8">
                    <p className="text-2xl font-bold italic border-l-4 border-[#facc15] pl-6 text-[#004a8c]">
                      Technical Review: {selectedPost.topic}
                    </p>
                    <p>
                      This publication explores the audiological advancements of the {selectedPost.topic} platform. 
                      Our focus is on optimizing signal-to-noise ratios and cognitive ease for patients in demanding real-world environments.
                    </p>
                    <div className="bg-slate-50 p-10 border-l-8 border-[#004a8c]">
                      <h3 className="text-[#004a8c] font-black uppercase tracking-widest text-sm mb-6">Audiological Key Points</h3>
                      <ul className="list-disc pl-6 space-y-4 text-xl marker:text-[#004a8c]">
                        <li>Sophisticated noise reduction for {selectedPost.topic}.</li>
                        <li>Enhanced speech clarity in multi-speaker environments.</li>
                        <li>Seamless integration with the Signia app for wearer control.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar - Fills Right Column */}
            <aside className="hidden lg:block lg:col-span-4 space-y-12">
              <div className="border-t-4 border-black pt-6">
                <h3 className="font-black uppercase tracking-tighter text-2xl mb-8 italic">Related Research</h3>
                <div className="space-y-10">
                  {/* Shows next 4 items as related */}
                  {filteredData.slice(0, 4).map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => { setSelectedPost(item); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="group cursor-pointer border-b border-slate-100 pb-6"
                    >
                      <div className="aspect-video bg-slate-100 mb-4 overflow-hidden rounded-sm shadow-md">
                        <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.title} />
                      </div>
                      <h4 className="font-bold leading-tight group-hover:text-[#004a8c] transition-colors">{item.title}</h4>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2 block">{item.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </main>
      ) : (
        /* --- MAIN GRID VIEW --- */
        <>
          <header className="container mx-auto px-4 pt-16 pb-12">
            <div className="flex items-center gap-6 mb-16 border-l-8 border-[#facc15] pl-6 ml-4" dir="ltr">
              <div>
                <h1 className="text-6xl md:text-8xl font-black text-[#004a8c] tracking-tighter uppercase italic leading-none">Signia Library</h1>
                <p className="text-2xl font-bold text-slate-400 uppercase tracking-[0.4em] mt-3">Scientific Research & Publications</p>
              </div>
            </div>

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

          <section className="container mx-auto px-4 mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20" dir="ltr">
              {currentPosts.map((post) => (
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
              ))}
            </div>

            {/* RESTORED NAVIGATION CONTROL */}
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
                   <span className="text-2xl font-light text-slate-200">/ {totalPages}</span>
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