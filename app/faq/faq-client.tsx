"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Phone, Mail, MessageCircle, HelpCircle, Volume2, Battery, Settings, Search } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const faqCategories = [
  {
    icon: HelpCircle,
    title: "Services & General Questions",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    questions: [
      {
        q: "What services do Al Barakat Hearing Centers provide?",
        a: "We offer comprehensive hearing care, including hearing tests, tinnitus assessments, hearing aid fittings, follow-up care, maintenance, and professional counseling. We also provide advanced hearing aids from Signia and Rexton, suitable for all levels of hearing loss.",
      },
      {
        q: "Why should I choose Al Barakat Hearing Centers?",
        a: "Because we offer: Global brands like Signia & Rexton, advanced hearing tests, customized treatment plans, professional care, affordable options, reliable after-care & follow-up, multiple branches in KSA, and patient-first service. Your hearing improvement is our top priority.",
      },
      {
        q: "How do I know if I need a hearing test?",
        a: "If you struggle to hear conversations, ask people to repeat themselves, increase TV or phone volume, or experience ringing in the ears, you should book a professional hearing evaluation or use our Online test as screening methods. Early testing helps prevent future complications.",
      },
      {
        q: "Are your specialists licensed?",
        a: "Yes. All audiologists and hearing-care professionals at Al Barakat Hearing Centers are certified, trained, and experienced in advanced diagnostic procedures and hearing aid fitting.",
      },
    ],
  },
  {
    icon: Volume2,
    title: "Appointments & Testing",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    questions: [
      {
        q: "Do I need an appointment?",
        a: "Yes. We recommend booking an appointment to ensure you receive dedicated time with our hearing specialists. Appointments can be scheduled through Website, phone, WhatsApp, or by visiting our center.",
      },
      {
        q: "How long does a hearing test take?",
        a: "A complete hearing evaluation typically takes 10–20 minutes, depending on your needs and the tests performed.",
      },
      {
        q: "What type of hearing tests do you perform?",
        a: "Our centers use advanced diagnostic tools to perform: Pure-tone audiometry, Speech audiometry, Tympanometry, and Tinnitus assessments. These tests help identify the type, degree, and cause of hearing loss.",
      },
      {
        q: "Can hearing loss be prevented?",
        a: "Yes. Avoid loud noise exposure, wear hearing protection, and attend regular hearing screenings, especially if you work in noisy environments.",
      },
    ],
  },
  {
    icon: Battery,
    title: "Hearing Aids & Technology",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    questions: [
      {
        q: "What brands do you offer?",
        a: "We are official partners of Signia and Rexton (Germany and Denmark) global leaders known for innovation, AI sound processing, durability, and comfort.",
      },
      {
        q: "Do you offer hearing aid trials?",
        a: "Yes. We offer hearing aid trials for selected models so patients can experience the sound quality, comfort, and performance in real-life environments before making a decision.",
      },
      {
        q: "Do you offer affordable hearing aid options?",
        a: "Yes. We provide solutions for all budgets from premium high-end devices to cost-effective models. Flexible payment options are available.",
      },
      {
        q: "Do your hearing aids connect to smartphones?",
        a: "Yes. Many models include Bluetooth connectivity, allowing you to control your hearing aids, stream calls, music, and adjust settings through mobile apps.",
      },
    ],
  },
  {
    icon: Settings,
    title: "Hearing Aid Features & Care",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    questions: [
      {
        q: "Can hearing aids restore normal hearing?",
        a: "Hearing aids do not cure hearing loss, but they significantly improve hearing clarity, speech understanding, and quality of life. With modern technology such as Signia IX, AX and Rexton Bi-Core, many users achieve near-natural sound.",
      },
      {
        q: "Will hearing aids make me look older?",
        a: "Not at all. Today's hearing aids are nearly invisible, sleek, and stylish, designed for comfort and confidence. Many customers choose them for lifestyle enhancement, not medical appearance.",
      },
      {
        q: "Do hearing aids improve tinnitus?",
        a: "Yes. Many models include built-in tinnitus therapy, offering soothing sound options that reduce ringing and improve focus.",
      },
      {
        q: "How long do hearing aids last?",
        a: "With proper care, most hearing aids last 3–4 years. We also provide professional maintenance to extend the lifespan and ensure peak performance.",
      },
    ],
  },
  {
    icon: HelpCircle,
    title: "Insurance & After-Care",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    questions: [
      {
        q: "Are hearing aids covered by insurance in Saudi Arabia?",
        a: "Coverage depends on your insurance provider. Our team can help you check eligibility.",
      },
      {
        q: "Do you provide warranties?",
        a: "All hearing aids come with manufacturer warranty, free servicing, and professional support.",
      },
      {
        q: "Do you offer after-care and maintenance?",
        a: "Absolutely. Every hearing aid purchase includes after-care services, cleaning, tuning, follow-up visits, and support to ensure long-term hearing success.",
      },
      {
        q: "Do you provide hearing aids for children?",
        a: "Yes. We offer pediatric hearing assessments, child-friendly testing, and hearing solutions designed specifically for young users.",
      },
    ],
  },
]

export default function FAQClientPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return faqCategories

    const query = searchQuery.toLowerCase()
    return faqCategories
      .map((category) => ({
        ...category,
        questions: category.questions.filter(
          (item) => item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query),
        ),
      }))
      .filter((category) => category.questions.length > 0)
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-teal-500/10 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4 animate-float">
              <HelpCircle className="h-12 w-12 text-primary" />
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Find answers to common questions about hearing aids, hearing loss, and our services.
            </p>
            <div className="relative mx-auto max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-2 rounded-lg border-2 border-primary/20 focus:border-primary transition-colors"
              />
            </div>
            {searchQuery && (
              <p className="mt-4 text-sm text-muted-foreground">
                Found {filteredCategories.reduce((sum, cat) => sum + cat.questions.length, 0)} matching results
              </p>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          {filteredCategories.length > 0 ? (
            <div className="space-y-16">
              {filteredCategories.map((category, categoryIndex) => {
                const Icon = category.icon
                return (
                  <div
                    key={categoryIndex}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                  >
                    <div className="mb-8 flex items-center gap-4">
                      <div className={`rounded-xl ${category.bgColor} p-3 transition-transform hover:scale-110`}>
                        <Icon className={`h-8 w-8 ${category.color}`} />
                      </div>
                      <h2 className="text-3xl font-bold">{category.title}</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((item, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${categoryIndex}-${index}`}
                          className="rounded-lg border bg-card px-6 shadow-sm transition-all hover:shadow-md"
                        >
                          <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-base text-muted-foreground">{item.a}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-2xl font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try searching with different keywords or browse all categories below.
              </p>
              <Button variant="outline" onClick={() => setSearchQuery("")} className="mt-4">
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="overflow-hidden border-2 bg-gradient-to-br from-primary/5 to-teal-500/5 animate-fade-in-up">
            <CardContent className="p-8 md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Still Have Questions?</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Our hearing care specialists are here to help. Contact us for personalized answers and expert guidance
                  on your hearing health journey.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" asChild className="group">
                    <Link href="/contact">
                      <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                      Contact Us
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="group bg-transparent">
                    <a href="https://wa.me/9668001248882">
                      <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                      WhatsApp Chat
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="group bg-transparent">
                    <a href="tel:+9668001248882">
                      <Phone className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Resources */}
      <section className="border-t bg-muted/30 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold">Helpful Resources</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="group transition-all hover:shadow-lg animate-fade-in-up">
              <CardContent className="p-6">
                <Search className="mb-4 h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-xl font-semibold">Hearing Test</h3>
                <p className="mb-4 text-muted-foreground">
                  Take our free online hearing test to assess your hearing health.
                </p>
                <Button variant="link" asChild className="p-0">
                  <Link href="/hearing-test">Take Test →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card
              className="group transition-all hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-6">
                <Volume2 className="mb-4 h-10 w-10 text-teal-600 transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-xl font-semibold">Our Products</h3>
                <p className="mb-4 text-muted-foreground">Explore our range of advanced hearing aid solutions.</p>
                <Button variant="link" asChild className="p-0">
                  <Link href="/products">View Products →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card
              className="group transition-all hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-6">
                <HelpCircle className="mb-4 h-10 w-10 text-amber-600 transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-xl font-semibold">Blog & Articles</h3>
                <p className="mb-4 text-muted-foreground">Read expert insights on hearing health and care tips.</p>
                <Button variant="link" asChild className="p-0">
                  <Link href="/blog">Read Blog →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
  
}
