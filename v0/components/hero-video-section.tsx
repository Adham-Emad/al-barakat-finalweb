"use client"

import Link from "next/link"
import { Package, TestTube, Mail, Info, Building2 ,Stethoscope , Ear} from "lucide-react"

export function HeroVideoSection() {
  const buttons = [
    {
      icon: Ear,
      label: "Products",
      href: "/products/accessories-batteries",
    },
    {
      icon: Stethoscope,
      label: "Hearing Test",
      href: "/hearing-test",
    },
    {
      icon: Info,
      label: "About",
      href: "/about",
    },
    {
      icon: Mail,
      label: "Contact",
      href: "/contact",
    },
  ]

  return (
    <section className="relative overflow-visible">
      {/* Image background container */}
      <div className="relative h-[420px] sm:h-[520px] md:h-[700px] lg:h-[800px] w-full overflow-hidden">
        <video 
  className="h-full w-full object-cover"
  src="/hero-video.mp4" 
  autoPlay 
  muted 
  loop 
  playsInline 
/>
        {/* Gradient overlay for better button contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      </div>

      <div className="relative bg-white">
        {/* Semi-circle curve divider */}
        <div
          className="h-24 md:h-32 lg:h-40 bg-white"
          style={{
            clipPath: "ellipse(100% 100% at 50% 0%)",
          }}
        />

        <div className="relative -mt-36 md:-mt-48 lg:-mt-56 mx-auto max-w-7xl px-4 z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {buttons.map((button, index) => {
              const Icon = button.icon
              return (
                <Link
                  key={index}
                  href={button.href}
                  className="group flex flex-col items-center gap-4 text-center transition-all duration-300 hover:scale-105"
                >
                  {/* Circular button - half on video, half on curve */}
                  <div className="relative">
                    <div className="h-20 w-20 md:h-28 md:w-28 flex items-center justify-center rounded-full bg-white shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 border-2 border-gray-200">
                      <Icon className="h-8 w-8 md:h-12 md:w-12 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                    </div>
                  </div>
                  {/* Label */}
                  <span className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mt-2">
                    {button.label}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="pt-12 md:pt-16 lg:pt-20" />
      </div>
    </section>
  )
}
