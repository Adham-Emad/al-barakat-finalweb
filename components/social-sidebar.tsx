"use client"

import React, { useState } from "react"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { motion } from "framer-motion"

// أيقونة X (تويتر سابقاً)
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 3.239H4.293L17.607 20.65z" />
  </svg>
)

const socialLinks = [
  { icon: Facebook, url: "https://www.facebook.com/BarakatHearingCareCenters", label: "Facebook" },
  { icon: XIcon, url: "https://x.com/BarakatHearing", label: "X" },
  { icon: Instagram, url: "https://www.instagram.com/albarakathearing", label: "Instagram" },
  { icon: Linkedin, url: "https://www.linkedin.com/company/albarakat-hearing-care/", label: "LinkedIn" },
  { icon: Youtube, url: "https://www.youtube.com/@albarakathearingcare", label: "YouTube" },
]

export function SocialSidebar() {
  const [isBoxHovered, setIsBoxHovered] = useState(false)

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col p-2">
      {/* الصندوق الخارجي مع حدود سوداء خفيفة */}
      <motion.div
        onMouseEnter={() => setIsBoxHovered(true)}
        onMouseLeave={() => setIsBoxHovered(false)}
        className="flex flex-col gap-5 p-3 py-7 rounded-r-2xl bg-white/10 border border-black/20 shadow-md cursor-pointer transition-colors duration-300"
        animate={{
          backgroundColor: isBoxHovered ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.1)",
          borderColor: isBoxHovered ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.15)",
        }}
      >
        {socialLinks.map((link, index) => {
          const Icon = link.icon
          return (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center justify-center"
              aria-label={link.label}
              // التأثير هنا يعتمد على حالة الصندوق بالكامل (isBoxHovered)
              animate={{ 
                // Updated blur values to match the slight screen blur degree
                filter: isBoxHovered ? "blur(0.5px)" : "blur(0.2px)", 
                // Updated opacity to also look softer when not hovered, matching the screenshot
                opacity: isBoxHovered ? 1 : 0.6,
                scale: isBoxHovered ? 1.05 : 1 // Slightly less aggressive scale for smoothness
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-5 h-5 text-black/80 transition-colors duration-300 hover:text-primary" />
              
              {/* Tooltip يظهر فقط عند الهوفر على الأيقونة المحددة */}
              <span className="absolute left-full ml-4 px-2 py-1 rounded bg-black/90 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                {link.label}
              </span>
            </motion.a>
          )
        })}
      </motion.div>
    </div>
  )
}