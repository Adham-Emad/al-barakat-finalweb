"use client"
import React, { useState, useMemo } from "react"
import { MainNavigation } from "@/components/main-navigation"

/**
 * 1. CONTENT REPOSITORY
 * Complete Signia Library content for all 54 posts across 6 pages.
 */
const POST_CONTENT_DATABASE: Record<number, { 
  subtitle: string; 
  body: string[]; 
  takeaways?: string[]; 
  downloadUrl?: string;
}> = {
  // PAGE 1 - Integrated Xperience Focus
  11: {
    subtitle: "Signia IX enhances the brain's response to speech sounds in noise",
    body: [
      "Two peer-reviewed studies examined how RTCE on Signia's IX hearing aids impacts brain activity in wearers listening to simulated group conversations in loud noise.",
      "RTCE was found to enhance the brain's ability to automatically detect small acoustic contrasts, helping listeners differentiate speech sounds while reducing neural signatures of effortful listening."
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
      "Signia's unique Binaural OneMic Directionality (BOMD) 2.0 makes Signia the only manufacturer delivering directionality in single-microphone hearing aids.",
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
    subtitle: "Large-scale data confirm: Bluetooth Classic benefits Android users",
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
    subtitle: "Own Voice Processing 2.0 linked to 23% fewer returns",
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
    subtitle: "Silk Charge&Go IX - the discreet ready-to-wear CIC loved by wearers",
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
  },
  16: {
    subtitle: "Directionality in single-microphone hearing aids: Speech enhancement",
    body: [
      "This breakthrough research demonstrates how Signia achieves directional processing in single-microphone form factors, addressing a major gap in the hearing aid market.",
      "The technology enables discrete CIC and IIC hearing aids to deliver focused directional enhancement typically found only in larger BTE and RIC devices."
    ],
    takeaways: [
      "First-ever directional processing in true single-mic CIC design.",
      "Maintains discreetness while delivering competitive speech enhancement.",
      "Enables more wearers to enjoy directional benefits without cosmetic concerns."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2025/2025-08_signia-white-paper_binaural-onemic-directionality-20.pdf?rev=61e4ad6386334f6cb18487ba03111c48/"
  },
  17: {
    subtitle: "86% of participants performed better with Signia IX in noisy group",
    body: [
      "In a rigorous clinical trial comparing Signia IX to leading competitors in simulated group conversation environments, 86% of participants demonstrated superior speech understanding performance.",
      "The study evaluated real-world group conversation scenarios with multiple speakers, background noise, and dynamic speaker movement—conditions that challenge traditional hearing aid processing."
    ],
    takeaways: [
      "86% superiority rate across diverse hearing profiles.",
      "Evaluated in realistic group conversation scenarios with dynamic multi-speaker environments.",
      "Demonstrates clear performance advantage in the most challenging real-world listening situation."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2025/2025-04_signia-onepager_study-86-percent-performed-better-with-signia-ix.pdf?rev=317e731bd51d4fd1a6d61ad519c05d1f"
  },
  18: {
    subtitle: "Beyond the lab: Signia IX improves real-world busy group conversations",
    body: [
      "This landmark study moved testing beyond controlled laboratory conditions to real-world environments—a shopping mall food court—where hearing aid wearers face authentic group conversation challenges.",
      "Results confirm that Signia IX's multi-stream architecture translates to measurable improvements in actual real-world group listening situations, not just laboratory simulations."
    ],
    takeaways: [
      "First study validating group conversation performance in authentic real-world settings.",
      "Multibeam processing technology delivers consistent benefits in complex acoustic environments.",
      "Proves that laboratory advantages translate to meaningful real-world hearing experiences."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2025/2025-02_signia-ix_whitepaper_rtce-improves-busy-group-conversations.pdf?rev=3694c55198644982add9ac76b84ae64b/"
  },
  19: {
    subtitle: "Conversations in noise: Multi-stream architecture vs. deep neural network",
    body: [
      "This technical white paper compares two fundamentally different approaches to hearing aid noise reduction: Signia's proven multi-stream architecture versus AI-based single-stream neural network approaches used by competitors.",
      "The analysis demonstrates how split processing and real-time multi-talker enhancement provide superior outcomes compared to monolithic AI-based approaches in dynamic group conversation scenarios."
    ],
    takeaways: [
      "Multi-stream architecture outperforms single-stream AI approaches for group conversations.",
      "Real-time tracking of multiple talkers provides superior flexibility and responsiveness.",
      "Split processing enables independent management of speech and background noise."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2024/2024-12_one-pager_conversations-in-noise_benchmark-study.pdf?rev=73ab696e1ddd40788a841634249fe0b4&hash=2E0FD10AC5448022BB89CDBAF968A494"
  },

  // PAGE 2 - Advanced Integrated Xperience Studies
  21: {
    subtitle: "Signia IX with pioneering multi-stream technology delivers 22% better speech understanding",
    body: [
      "Signia IX achieved a statistically significant improvement in speech reception threshold, outperforming a newly launched competitor AI-powered hearing aid by 1.4 dB in a modified OLSA test.",
      "This difference translates to a remarkable 22% enhancement in speech understanding, with 77% of the 27 participants performing better with Signia IX compared to the competitor."
    ],
    takeaways: [
      "22% improvement in speech understanding versus AI co-processor competitor.",
      "77% of participants showed superior performance with Signia IX.",
      "Multi-stream processing outperforms single-stream AI approaches in real-world scenarios."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2024/2024-11_white-paper_signia-ix_speech-understanding-study.pdf?rev=556de16a695d448cb7e38e8a6aa787b9/"
  },
  22: {
    subtitle: "Signia IX delivers more than twice the speech enhancement benefit",
    body: [
      "This comprehensive technical study demonstrates that Signia IX provides more than double the speech enhancement benefit in noisy group conversations compared to the closest competitors.",
      "Using standardized acoustic measurements and simulated group conversation scenarios, the research validates Signia's unique multi-stream approach against leading competitor platforms."
    ],
    takeaways: [
      "2x speech enhancement advantage over closest competitors in signal-to-noise ratios.",
      "Validated using industry-standard acoustic testing protocols.",
      "Multi-stream architecture advantage proven in controlled laboratory conditions."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2024/2024-10_one-pager_signia-ix_objective-competitive-study.pdf?rev=001efe3d7b454e04b3eca2451f085e67&hash=9B2EBB428FC9A22A89E6F1583378511C"
  },
  23: {
    subtitle: "Multi-stream architecture improvement for real-world conversations",
    body: [
      "This study explores how multi-stream processing technology improves conversation performance by managing speech and noise independently through parallel processing pathways.",
      "The research details the algorithmic advantages of split processing versus conventional single-stream approaches, demonstrating superior performance across diverse acoustic environments."
    ],
    takeaways: [
      "Multi-stream parallel processing enables independent speech and noise management.",
      "Split processing maintains speech clarity while reducing noise artifacts.",
      "Superior performance consistency across varying acoustic conditions."
    ],
    downloadUrl: "https://hearingreview.com/hearing-products/hearing-aids/speech-in-noise/improving-the-real-world-conversation-experience-with-a-multi-stream-architecture"
  },
  24: {
    subtitle: "Hearing at the mall: Multibeam processing improves real-world group conversations",
    body: [
      "Researchers conducted a naturalistic study in an actual shopping mall food court, evaluating how Signia IX's multibeam processing technology performs in authentic uncontrolled acoustic environments.",
      "The study demonstrates that Signia IX hearing aid wearers experienced significantly improved ability to follow group conversations in one of the most acoustically challenging real-world listening scenarios."
    ],
    takeaways: [
      "Real-world validation in authentic shopping mall environment.",
      "Multibeam technology delivers measurable group conversation improvements.",
      "Benefits extend to naturally occurring complex acoustic scenarios."
    ],
    downloadUrl: "https://pubs.asha.org/doi/10.1044/2024_AJA-24-00027"
  },
  25: {
    subtitle: "Accentuating the positive: Overcoming stigma through thoughtful product design",
    body: [
      "This research addresses an often-overlooked aspect of hearing aid success: the psychological and social factors related to device appearance and self-perception of stigma.",
      "The study examines how discrete device designs combined with effective person-centered communication strategies influence wearer acceptance, satisfaction, and long-term use."
    ],
    takeaways: [
      "Device discreteness significantly impacts wearer acceptance and satisfaction.",
      "Psychological factors play important role in hearing aid success metrics.",
      "Person-centered communication enhances technology adoption and retention."
    ],
    downloadUrl: "https://www.audiologyonline.com/articles/overcoming-complexities-stigma-with-product-28940"

  },
  26: {
    subtitle: "Augmenting split processing with multi-stream architecture algorithm",
    body: [
      "This technical paper details how Signia's split processing approach is enhanced through multi-stream architecture algorithms that enable simultaneous processing of multiple conversational streams.",
      "The algorithmic innovations allow the hearing aid to track and enhance multiple speakers in real-time while maintaining independent background noise management."
    ],
    takeaways: [
      "Split processing enables independent speech and noise channel management.",
      "Multi-stream algorithms track multiple speakers simultaneously.",
      "Real-time processing maintains responsiveness to dynamic conversation changes."
    ],
    downloadUrl: "https://hearingreview.com/inside-hearing/research/augmenting-split-processing-with-a-multi-stream-architecture-algorithm"
  },
  27: {
    subtitle: "Real-world assessment of Signia IX with RealTime Conversation Enhancement",
    body: [
      "This comprehensive field study evaluated Signia IX hearing aids in authentic real-world listening environments, tracking wearer satisfaction and reported benefit over extended wearing periods.",
      "Results demonstrate that the laboratory-validated benefits of RealTime Conversation Enhancement translate consistently to real-world benefits that wearers recognize and value."
    ],
    takeaways: [
      "Laboratory benefits replicate successfully in real-world use.",
      "Wearers report significant subjective improvement in group conversation ability.",
      "Extended field trial data confirms sustained benefit over time."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2024/2024-03_white-paper_real-world-assessment-of-signia-ix.pdf?rev=3269196c94b847e0838e70708cc9dca4/"
  },
  28: {
    subtitle: "New study reveals Signia IX outshines competitors in group conversations",
    body: [
      "This headline-making study provides definitive evidence that Signia IX significantly outperforms leading competitor hearing aids specifically in group conversation scenarios—the most important real-world use case.",
      "The research validates years of Signia's technological development focused specifically on addressing the group conversation challenge that hearing aid wearers identify as their #1 need."
    ],
    takeaways: [
      "Definitive evidence of Signia IX superiority in group conversations.",
      "Addresses the #1 real-world challenge identified by hearing aid wearers.",
      "Consistent performance advantage across multiple competitor platforms."
    ],
    downloadUrl: "https://www.youtube.com/watch?v=HTsiTKW1lI8"
  },
  29: {
    subtitle: "Multi-stream architecture for improved conversation performance",
    body: [
      "This foundational technical publication explains the core algorithmic advantage of Signia's multi-stream architecture approach and how it delivers superior performance in multi-talker scenarios.",
      "The paper provides detailed analysis of how parallel processing streams enable the hearing aid to respond dynamically to changing conversation dynamics and speaker positions."
    ],
    takeaways: [
      "Multi-stream architecture enables responsive dynamic processing.",
      "Parallel processing improves handling of multiple concurrent speakers.",
      "Architecture fundamentally supports real-time conversation enhancement."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-11_white-paper_signia-ax-handsfree-callcontrol.pdf?rev=669ed67bbad1460abd52caf511efe275/"
  },

  // PAGE 3 - Augmented Xperience Platform
  31: {
    subtitle: "Unlocking quality of life benefits through firmware and apps",
    body: [
      "This research explores how firmware updates and mobile app features expand the functional capabilities of hearing aids beyond core amplification, enabling wearers to optimize their listening experience.",
      "The study documents how additional features like remote control, environmental adaptability, and personalized sound preferences significantly enhance wearer satisfaction and real-world outcomes."
    ],
    takeaways: [
      "Firmware and app features meaningfully expand hearing aid utility.",
      "User customization options increase long-term wearer satisfaction.",
      "Technology beyond core amplification drives positive health outcomes."
    ],
    downloadUrl: "https://hearingreview.com/hearing-products/hearing-aids/unlocking-quality-of-life-benefits-through-firmware-and-apps"
  },
  32: {
    subtitle: "AI-based fine-tuning: How Signia Assistant improves wearer acceptance",
    body: [
      "Signia Assistant uses artificial intelligence to analyze wearer behavior and automatically optimize hearing aid settings based on real-world use patterns and wearer responses.",
      "Data shows that AI-based fine-tuning improves initial wearer acceptance rates and reduces the need for multiple in-clinic adjustment visits during the acclimation period."
    ],
    takeaways: [
      "AI-based optimization accelerates wearer acclimation period.",
      "Automatic fine-tuning reduces need for multiple clinic visits.",
      "Intelligent adaptation improves early satisfaction metrics."
    ],
    downloadUrl: "https://www.audiologyonline.com/articles/ai-based-fine-tuning-signia-28555"
  },
  33: {
    subtitle: "Upgraded eWindScreen and improved AX Soundscape Processing",
    body: [
      "This technical backgrounder describes enhancements to Signia AX's wind noise reduction (eWindScreen) and comprehensive soundscape processing, delivering improved performance in outdoor and complex acoustic environments.",
      "The upgrades maintain natural sound quality while providing more aggressive wind noise reduction and better preservation of environmental context."
    ],
    takeaways: [
      "Enhanced wind noise reduction for outdoor activities.",
      "Improved soundscape processing maintains environmental context.",
      "Advanced algorithms reduce artifacts and distortion in complex environments."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2023/2023-03_backgrounder_ewindscreen_soundscape-processing.pdf?rev=40142ab496d34720bcf53e98e65eb373/"
  },
  34: {
    subtitle: "HandsFree and CallControl in Signia AX deliver a great phone experience",
    body: [
      "This study evaluates Signia AX's HandsFree and CallControl features, enabling seamless phone conversations without needing to remove hearing aids or use speaker phone.",
      "Research demonstrates that these connectivity features significantly improve phone call quality and accessibility for hearing aid wearers in both personal and professional settings."
    ],
    takeaways: [
      "HandsFree feature enables natural phone conversations.",
      "CallControl provides intuitive conversation management.",
      "Features significantly improve accessibility and social connectivity."
    ],
    downloadUrl: "https://hearingreview.com/hearing-products/hearing-aids/psap/preferences-with-a-hearing-aid-headset-mode"
  },
  35: {
    subtitle: "Signia AX HandsFree and CallControl: A dream to stream",
    body: [
      "This comprehensive white paper explores the streaming architecture that enables Signia AX HandsFree and CallControl features, detailing how hearing aids can seamlessly connect to phones and other devices.",
      "The technology provides effortless connectivity that feels natural to users, allowing phone conversations and media streaming to feel like part of the hearing aid experience."
    ],
    takeaways: [
      "Seamless phone and media streaming integration.",
      "Natural user experience matches modern device expectations.",
      "Architecture enables future connectivity enhancements."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-11_white-paper_signia-ax-handsfree-callcontrol.pdf?rev=669ed67bbad1460abd52caf511efe275/"
  },
  36: {
    subtitle: "Measuring steps at the ear: How My Steps improves accuracy",
    body: [
      "Signia's My Steps feature uses hearing aid ear-mounted sensors to measure steps and physical activity, providing an alternative perspective on wellness that complements traditional wearable fitness trackers.",
      "The research validates that ear-mounted sensors provide comparable accuracy to traditional wrist-worn activity trackers while offering additional contextual health information."
    ],
    takeaways: [
      "Ear-mounted sensors provide accurate step counting.",
      "Hearing aids serve as comprehensive wellness platforms.",
      "Activity tracking integrates naturally with hearing aid experience."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-09_white-paper_measuring-steps-at-the-ear-my-steps.pdf?rev=da8047bc6a7142a685bb66e1a1e23e58/"
  },
  37: {
    subtitle: "Improving general health with My WellBeing",
    body: [
      "Signia's My WellBeing feature extends health monitoring beyond hearing and activity, providing wearers with comprehensive wellness insights and health-related recommendations.",
      "The feature demonstrates how hearing aids can contribute to broader health and wellness management, supporting holistic wearer health outcomes."
    ],
    takeaways: [
      "Hearing aids contribute to comprehensive wellness monitoring.",
      "Health insights support proactive health management.",
      "Integrated health data improves overall wearer outcomes."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-09_white-paper_my-wellbeing.pdf?rev=84fc1c0378dc40358174cec0086f918f/"
  },
  38: {
    subtitle: "Signia AX split processing: Technological advantages",
    body: [
      "This technical deep dive explains Signia AX's split processing technology—the core architectural innovation that separates speech from background sound, enabling independent processing of each channel.",
      "The paper details how split processing provides superior sound quality and speech clarity compared to conventional single-stream processing in complex acoustic environments."
    ],
    takeaways: [
      "Split processing enables independent channel optimization.",
      "Speech clarity improves through dedicated processing pathways.",
      "Architecture foundation enables advanced features and future innovations."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-06_white-paper_evidence-supports-advantages-of-signia-ax-split-processing.pdf?rev=385e18b71b0e46e7a1b1c6e3fccf153e/"
  },
  39: {
    subtitle: "Auto EchoShield AX: Eliminating feedback and optimization",
    body: [
      "Signia AX's Auto EchoShield feature automatically detects and eliminates feedback before it becomes audible to the wearer, providing a cleaner listening experience without manual intervention.",
      "The algorithm achieves superior feedback management through predictive processing that addresses potential feedback situations proactively."
    ],
    takeaways: [
      "Automatic feedback elimination improves listening experience.",
      "Predictive processing prevents feedback before occurrence.",
      "Transparent technology improves user experience without user effort."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_white-paper_upgrading-the-performance-of-signia-ax.pdf?rev=e248da8d54b84ddf8590dda94065549c/"
  },

  // PAGE 4 - Augmented Xperience Features & Xperience Platform
  41: {
    subtitle: "HandsFree for iOS: Backgrounder and technical overview",
    body: [
      "This backgrounder explains the technical requirements and capabilities of Signia AX HandsFree connectivity with iOS devices, enabling hands-free phone control and call management.",
      "The feature provides seamless integration with Apple devices, allowing wearers to answer, end, and switch calls directly from their hearing aids."
    ],
    takeaways: [
      "Seamless iOS device integration.",
      "Direct hearing aid call management without phone handling.",
      "Natural, intuitive user experience for modern smartphone users."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_backgrounder_signia-ax_handsfree-ios.pdf?rev=3d08dd584d3c4d0bac879e9ac987a684/"
  },
  42: {
    subtitle: "Signia AX Own Voice Processing 2.0: Technical backgrounder",
    body: [
      "Own Voice Processing 2.0 represents an evolution of Signia's exclusive technology that selectively reduces the loudness of the wearer's own voice while maintaining normal perception of others' voices.",
      "The enhanced algorithm provides more precise own-voice detection and more natural sound quality across diverse speaking styles and acoustic environments."
    ],
    takeaways: [
      "Exclusive own voice detection and processing technology.",
      "Improved naturalness in own-voice perception.",
      "Critical feature for comfortable hearing aid wearing."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_backgrounder_signia-ax_ovp-20.pdf?rev=e1434a2bf52c449b8d6a3825aad0dc5e/"
  },
  43: {
    subtitle: "Auto EchoShield: Automatic feedback elimination backgrounder",
    body: [
      "This backgrounder explains how Auto EchoShield works to automatically detect and eliminate feedback before it becomes audible, providing a transparent hearing aid experience.",
      "The technology represents a significant user experience improvement by eliminating one of the most common hearing aid challenges without requiring user intervention."
    ],
    takeaways: [
      "Automatic feedback detection and elimination.",
      "Transparent technology improves daily experience.",
      "Reduces common frustration points in hearing aid use."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_backgrounder_signia-ax_auto-echoshield.pdf?rev=0af5a107ca154f2eb6e642b1bb63db42/"
  },
  44: {
    subtitle: "Battery solutions and rechargeable technology comparison",
    body: [
      "This white paper compares traditional disposable hearing aid batteries with modern rechargeable battery technology, documenting the environmental, economic, and user experience advantages of rechargeable systems.",
      "The research demonstrates that rechargeable hearing aids provide superior long-term value and convenience while reducing environmental waste."
    ],
    takeaways: [
      "Rechargeable batteries reduce environmental impact.",
      "Superior long-term cost economics versus disposable batteries.",
      "Enhanced user convenience with simplified battery management."
    ],
    downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2021/2021-12_white-paper_comparison-of-battery-solutions-for-hearing-aids.pdf?rev=72a2cde9a9374876a25148736fad0abd/"
  },
  45: {
    subtitle: "Split-processing technological breakthroughs",
    body: [
      "This journal paper documents the algorithmic breakthroughs enabling Signia's split-processing technology, which separates speech and background sound for independent optimization.",
      "The research details novel signal processing approaches that enable simultaneous optimization of speech clarity and background sound quality without mutual interference."
    ],
    takeaways: [
      "Breakthrough algorithms enable independent channel processing.",
      "Superior signal-to-noise ratio in complex environments.",
      "Foundational technology for future feature development."
    ],
        downloadUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4111442/"

  },
  46: {
    subtitle: "Xperience super powers: Hero features and capabilities",
    body: [
      "This white paper highlights the most impactful features of the Xperience platform, positioning hearing aids as comprehensive health and wellness devices beyond traditional amplification.",
      "The document showcases how Xperience's features combine to deliver superior overall user experience and measurable health benefits."
    ],
    takeaways: [
      "Comprehensive platform delivers multiple complementary benefits.",
      "Hero features address key wearer needs and desires.",
      "Hearing aids become central to overall health management."
    ],
        downloadUrl: "https://youtu.be/kSB6Gv2yijU"

  },
  47: {
    subtitle: "TeleCare: Improving wearer engagement and outcomes",
    body: [
      "Signia TeleCare enables remote hearing aid adjustments and consultations with hearing care professionals without requiring in-person clinic visits, improving accessibility and wearer engagement.",
      "Research demonstrates that TeleCare increases wearer satisfaction by providing convenient support access and enabling faster problem resolution."
    ],
    takeaways: [
      "Remote support improves accessibility for dispersed users.",
      "Faster problem resolution increases satisfaction metrics.",
      "Enables better support continuity across geographic areas."
    ],
    downloadUrl: "https://www.audiologyonline.com/articles/signia-telecare-hearing-aid-acceptance-26463"
  },
  48: {
    subtitle: "Augmented Focus: Concentration and clarity backgrounder",
    body: [
      "Signia's Augmented Focus feature enables wearers to narrow the directionality window to focus exclusively on forward-facing speech, improving clarity in multi-speaker environments.",
      "This feature is particularly valuable in situations like classroom lectures, presentations, or one-on-one conversations where the wearer wants to focus attention specifically forward."
    ],
    takeaways: [
      "Narrow focus improves clarity in forward speech situations.",
      "Enables wearer control over directional focus.",
      "Addresses specific challenging listening scenarios."
    ],
        downloadUrl: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2021/2021-05_backgrounder_signia-ax-augmented-focus.pdf?rev=67e4145b07014776a21849d0b6798e7e/"

  },
  49: {
    subtitle: "Real-world listening survey: Augmented Xperience wearer satisfaction",
    body: [
      "This comprehensive survey of Signia AX wearers documents reported satisfaction, benefit, and overall quality of life improvements compared to previous hearing aid experiences.",
      "The research validates that the technical features and technological advances of Augmented Xperience translate to meaningful real-world benefit that wearers recognize and value."
    ],
    takeaways: [
      "High reported satisfaction with Augmented Xperience features.",
      "Measurable improvement in reported quality of life.",
      "Technical advantages translate to real-world wearer benefit."
    ],
    downloadUrl: "https://www.audiologyonline.com/articles/improving-speech-understanding-in-noisy-29273"
  }
};

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeFilter, setActiveFilter] = useState("All topics")
  const [selectedPost, setSelectedPost] = useState<any>(null)

  const blogDatabase: Record<number, any[]> = {
    1: [
      { id: 11, title: "Signia IX enhances the brain's response to speech sounds in noise and reduces listening effort", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2026/2026-02-03-eeg-evaluation-of-signia-ix-1920x1080.jpeg" },
      { id: 12, title: "Binaural OneMic Directionality 2.0 delivers 5 times speech enhancement in noise versus competitors", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/insio-chargego-ix/insio-charge-go-cic-ix_conversation_1920x1080.jpg" },
      { id: 13, title: "Large-scale data confirm: Bluetooth Classic benefits Android smartphone users", topic: "Integrated Xperience", type: "Data insights", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2025/2025-11-data-insights-bct-android-streaming-1920x1080.png" },
      { id: 14, title: "Own Voice Processing 2.0 linked to 23% fewer returns", topic: "Integrated Xperience", type: "Data insights", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2025/2025-11-data-insights-ovp-return-rates-1920x1080.png" },
      { id: 15, title: "Silk Charge&Go IX - the discreet ready-to-wear CIC loved by wearers", topic: "Integrated Xperience", type: "Data insights", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2025/2025-10-silk-charge-go-ix-soundwave-1920x1080.jpg" },
      { id: 16, title: "Directionality in single-microphone hearing aids: Speech enhancement with discretion", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2025/2025-10-directional-in-single-microphone-16-9.png" },
      { id: 17, title: "86% of participants performed better with Signia IX in noisy group conversations", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/pure-chargego-bct-ix/pure-charge-go-bct-ix_congress-53927_group-conversation-3_1920x1080.jpg" },
      { id: 18, title: "Beyond the lab: Signia IX improves real-world busy group conversations", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/pure-chargego-bct-ix/pure-charge-go-bct-ix_congress-53981_group-conversation-2_1920x1080.jpg" },
      { id: 19, title: "Conversations in noise: Multi-stream architecture vs. deep neural network approach", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2024/2024-12_conversations-in-noise_16-9.jpg" }
    ],
    2: [
        { id: 21, title: "Signia IX with pioneering multi-stream technology delivers 22% better speech understanding", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/active-ix/active-ix_group-laughing_1920x1080.jpg" },
        { id: 22, title: "Signia IX delivers more than twice the speech enhancement benefit in noisy group conversation", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/platform/signia-ix_coach-with-kids-cheering_1920x1080.jpg" },
        { id: 23, title: "Improving the real-world conversation experience with a multi-stream architecture", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2024/2024-09_improving-rtce-with-multi-stream_16-9.jpg" },
        { id: 24, title: "Hearing at the mall: Multibeam processing improves group conversations in real-world environment", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/stock/food-court_1920x1080.jpg" },
        { id: 25, title: "Accentuating the positive: Overcoming stigma through thoughtful product design", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/styletto-ix/styletto-ix_taking-out-of-charger_1920x1080.jpg" },
        { id: 26, title: "Augmenting split processing with a multi-stream architecture algorithm", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/platform/signia-ix_coach-talking-to-kids_1920x1080.jpg" },
        { id: 27, title: "Real-world assessment of Signia Integrated Xperience with RealTime Conversation Enhancement", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/platform/signia-ix_coach-with-kids-circle_1920x1080.jpg" },
        { id: 28, title: "New study reveals Signia IX outshines competitors in group conversations", topic: "Integrated Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/platform/signia-ix_coach-talking-to-kids_1920x1080.jpg" },
        { id: 29, title: "Multi-Stream Architecture for Improved Conversation Performance", topic: "Integrated Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ix/platform/signia-ix_live-auditory-space_16-9.jpg" }
    ],
    3: [
        { id: 31, title: "Unlocking quality of life benefits through firmware and apps", topic: "Augmented Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2023/2023-09-unlocking-quality-of-life_16-9.jpg" },
        { id: 32, title: "AI-based fine-tuning: How Signia Assistant improves wearer acceptance rates", topic: "Augmented Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/products/apps---telecare/signia-assistant/signia-assistant_ia-chat_1920x1080.jpg" },
        { id: 33, title: "Upgraded eWindScreen and improved AX Soundscape Processing", topic: "Augmented Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2023/2023-03_ewindscreen_soundscape-processing_1920x1080.jpg" },
        { id: 34, title: "HandsFree and CallControl in Signia AX deliver a great phone experience", topic: "Augmented Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_signia-ax_handsfree-ios_1920x1080.jpg" },
        { id: 35, title: "Signia AX HandsFree and CallControl: A dream to stream", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_signia-ax_handsfree-ios_1920x1080.jpg" },
        { id: 36, title: "Measuring steps at the ear: How My Steps improves activity tracking accuracy", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-09_measuring-steps-at-the-ear-my-steps_1920x1080.jpg" },
        { id: 37, title: "Improving general health with My WellBeing health monitoring", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-09_my-wellbeing_1920x1080.jpg" },
        { id: 38, title: "Signia AX Split Processing advantages and technical architecture", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ax/platform/signia-ax_see-through-chip_split-sound_1920x1080.jpg" },
        { id: 39, title: "Auto EchoShield AX automatic feedback elimination performance", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/brand/signia_soundwave_ax_1920x1080.jpg" }
    ],
    4: [
        { id: 41, title: "HandsFree for iOS: Backgrounder and technical overview", topic: "Augmented Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_signia-ax_handsfree-ios_1920x1080.jpg" },
        { id: 42, title: "Signia AX Own Voice Processing 2.0: Technical backgrounder", topic: "Augmented Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_signia-ax_ovp-20_1920x1080.jpg" },
        { id: 43, title: "Auto EchoShield: Automatic feedback elimination backgrounder", topic: "Augmented Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2022/2022-05_signia-ax_auto-echoshield_1920x1080.jpg" },
        { id: 44, title: "Battery solutions and rechargeable technology comparison", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/brand/signia_soundwave_ax_1920x1080.jpg" },
        { id: 45, title: "Split-processing technological breakthroughs and innovations", topic: "Augmented Xperience", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ax/platform/signia-ax_see-through-chip_split-sound_blue-bg_1920x1080.jpg" },
        { id: 46, title: "Xperience Super Power: Hero features and capabilities", topic: "Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/xperience/motion-x/motion-sp-x_hero_image-replacement_v2_1920x1080.jpg" },
        { id: 47, title: "TeleCare: Improving wearer engagement and remote support outcomes", topic: "TeleCare", type: "Journal paper", img: "https://cdn.signia-pro.com/-/media/signia/global/signia-library/2020/2020-02_user-engagement-with-telecare_16-9.jpg" },
        { id: 48, title: "Augmented Focus: Concentration and clarity backgrounder", topic: "Augmented Xperience", type: "Backgrounder", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/brand/signia_soundwave_ax_1920x1080.jpg" },
        { id: 49, title: "Real-world listening survey: Augmented Xperience wearer satisfaction", topic: "Augmented Xperience", type: "White paper", img: "https://cdn.signia-pro.com/-/media/signia/global/images/campaigns/signia-ax/platform/signia-ax_augmented-focus_1920x1080.jpg" }
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
