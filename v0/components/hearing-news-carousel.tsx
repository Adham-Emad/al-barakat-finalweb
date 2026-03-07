"use client"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NewsItem {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  category: string
}

const newsItems: NewsItem[] = [
  {
    id: "news-1",
    title: "New AI-Powered Hearing Aid Technology Launched",
    excerpt:
      "Revolutionary AI technology now helps hearing aids adapt to your environment in real-time, providing superior clarity in noisy settings.",
    content:
      "New AI-powered hearing aid technology is revolutionizing the industry. These advanced devices can now adapt to your environment automatically, providing you with crystal-clear sound in any situation.",
    image: "images/Gemini_Generated_Image_5ehjtq5ehjtq5ehj.png",
    date: "Dec 2, 2025",
    category: "Innovation",
  },
  {
    id: "news-2",
    title: "Study Shows Early Hearing Loss Detection Prevents Cognitive Decline",
    excerpt:
      "Recent research demonstrates that detecting and treating hearing loss early can significantly reduce the risk of cognitive decline and dementia.",
    content:
      "A groundbreaking study published in major hearing journals shows that early detection and treatment of hearing loss can prevent cognitive decline. Treating hearing loss early is more important than ever.",
    image: "images/Gemini_Generated_Image_rk1g8rrk1g8rrk1g.png",
    date: "Nov 28, 2025",
    category: "Research",
  },
  {
    id: "news-3",
    title: "Wireless Hearing Aids Now Compatible with All Major Devices",
    excerpt:
      "The latest generation of hearing aids now offers seamless connectivity with iPhones, Android phones, and smart home devices.",
    content:
      "Wireless connectivity has reached new heights. Today's hearing aids can connect to virtually any device, from smartphones to smart TVs, providing a seamless audio experience.",
    image: "images/Gemini_Generated_Image_sbl4iqsbl4iqsbl4.png",
    date: "Nov 15, 2025",
    category: "Technology",
  },
  {
    id: "news-4",
    title: "Hearing Aids Now More Affordable Than Ever",
    excerpt:
      "Insurance coverage for hearing aids has expanded, and new pricing models are making quality hearing care accessible to more people.",
    content:
      "Good news for hearing aid users! Insurance companies are expanding coverage, and manufacturers are introducing new affordable options without compromising on quality.",
    image: "images/Gemini_Generated_Image_zcqf3nzcqf3nzcqf.png",
    date: "Nov 5, 2025",
    category: "Accessibility",
  },
  {
    id: "news-5",
    title: "Breakthrough: Hearing Loss Risk Reduced with Better Sleep",
    excerpt:
      "New study reveals that getting quality sleep and maintaining healthy sleep patterns can significantly reduce your risk of developing hearing loss.",
    content:
      "Sleep and hearing health are more connected than you might think. Researchers have found that maintaining consistent, quality sleep patterns can help protect your hearing.",
    image: "images/Gemini_Generated_Image_5ehjtq5ehjtq5ehj.png",
    date: "Oct 28, 2025",
    category: "Health",
  },
  {
    id: "news-6",
    title: "Personalized Hearing Solutions: Genetic Testing Now Available",
    excerpt:
      "Advanced genetic testing can now help predict your hearing loss risk and recommend personalized treatment plans tailored to your DNA.",
    content:
      "Personalized medicine has arrived in hearing care. New genetic testing can help predict your hearing loss risk and recommend the most effective treatment for your specific profile.",
    image: "images/Gemini_Generated_Image_5ehjtq5ehjtq5ehj.png",
    date: "Oct 12, 2025",
    category: "Innovation",
  },
]

export function HearingNewsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="bg-gradient-to-b from-background via-muted/30 to-background py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">Hearing Health News & Updates</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Stay informed with the latest developments in hearing aid technology, research, and hearing health tips from
            industry experts.
          </p>
        </div>

        <div className="relative">
          {/* Left Scroll Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/80 shadow-lg transition-all hover:bg-white hover:scale-110 backdrop-blur"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Scrollable Container */}
          <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide" style={{ scrollBehavior: "smooth" }}>
            <div className="flex gap-6 pb-4">
              {newsItems.map((news, index) => (
                <div
                  key={news.id}
                  className="flex-shrink-0 w-80 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer border border-muted hover:border-primary/50 flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    {/* Category Badge */}
                    <div className="px-6 pt-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                        {news.category}
                      </span>
                    </div>

                    {/* Content Container */}
                    <CardContent className="flex flex-col p-6 pt-2 flex-grow">
                      <p className="text-xs text-muted-foreground mb-2">{news.date}</p>
                      <h3 className="mb-3 text-lg font-semibold transition-colors duration-300 hover:text-primary group-hover:text-primary line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="line-clamp-3 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground flex-grow">
                        {news.excerpt}
                      </p>
                      <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                        Read More
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Right Scroll Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/80 shadow-lg transition-all hover:bg-white hover:scale-110 backdrop-blur"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
