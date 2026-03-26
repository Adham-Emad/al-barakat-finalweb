"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/pagination';
import Image from "next/image"
import Link from "next/link"
import { MainNavigation } from "@/components/main-navigation"
import { HeroVideoSection } from "@/components/hero-video-section"
import { HearingNewsCarousel } from "@/components/hearing-news-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { EditableText } from "@/components/editable-text"
import { Ear, Heart, Shield, Users, ArrowRight, CheckCircle2, Award, CheckCircle } from "lucide-react"
import { productCategories, brands, products } from "@/lib/hearing-data"
import { getStoredProducts, getSiteContent, getStoredBrands, addBrand, deleteBrand } from "@/lib/content-store"
import { useEffect, useState } from "react"
import { useAdminMode } from "@/lib/admin-mode-context"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PerfectSoundSection } from "@/components/perfect-sound-section"

const featuredProducts = [
  {
    id: "pure-ric",
    name: "Signia Pure RIC",
    slug: "pure-ric",
    image: "/images/product-showcase-1.jpg",
    description: "Our smallest, invisible-in-canal solution for discreet daily wear.",
  },
  {
    id: "styletto-ix",
    name: "Signia Styletto",
    slug: "styletto-slim-ric",
    image: "/images/signia-styletto-ix.jpg",
    description: "Latest generation Styletto with advanced Integrated Xperience technology.",
  },
  {
    id: "motion",
    name: "Signia Motion",
    slug: "motion",
    image: "/images/product-showcase-3.jpg",
    description: "Ultra-slim, award-winning design with motion sensor technology.",
  },
  {
    id: "insio",
    name: "Signia Insio Charge & Go Ax",
    slug: "insiogoax",
    image: "/images/insiopro.png",
    description: "Custom-made hearing aids designed for comfort and performance.",
  },
  {
  id: "silk",
  name: "Signia Silk",
  slug: "silk", // Add the hash here
  image: "/images/product-showcase-5.jpg",
  description: "Instant-fit, discreet hearing aids with natural sound quality.",
},
  {
    id: "intuis",
    name: "Intuis 4",
    slug: "intuis4",
    image: "/images/product-showcase-6.jpg",
    description: "Reliable and easy-to-use hearing solution with durable design.",
  },
]

export default function HomePage() {
  const [allProducts, setAllProducts] = useState<any[]>([])
  const [allBrands, setAllBrands] = useState<any[]>([])
  const [content, setContent] = useState(getSiteContent())
  const { isAdminMode } = useAdminMode()
  const [showAddBrandDialog, setShowAddBrandDialog] = useState(false)
  const [newBrand, setNewBrand] = useState({ name: "", description: "", logo: "" })

  useEffect(() => {
    const storedProducts = getStoredProducts()
    const mergedProducts = storedProducts.length > 0 ? storedProducts : products
    setAllProducts(mergedProducts)

    const storedBrands = getStoredBrands()
    const mergedBrands = storedBrands.length > 0 ? storedBrands : brands
    setAllBrands(mergedBrands)

    setContent(getSiteContent())

    const handleStorageChange = () => {
      setContent(getSiteContent())
    }

    const handleContentUpdate = () => {
      window.location.reload()
    }

    window.addEventListener("storage", handleStorageChange)
    window.addEventListener("contentUpdated", handleContentUpdate)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("contentUpdated", handleContentUpdate)
    }
  }, [])

  const handleAddBrand = () => {
    if (newBrand.name && newBrand.description) {
      addBrand({
        id: Date.now().toString(),
        name: newBrand.name,
        description: newBrand.description,
        logo: newBrand.logo || "/placeholder.svg",
      })
      setNewBrand({ name: "", description: "", logo: "" })
      setShowAddBrandDialog(false)
      const storedBrands = getStoredBrands()
      const mergedBrands = storedBrands.length > 0 ? storedBrands : brands  
      setAllBrands(mergedBrands)
    }
  }

  const handleDeleteBrand = (brandId: string) => {
    if (confirm("Are you sure you want to delete this brand?")) {
      deleteBrand(brandId)
      const storedBrands = getStoredBrands()
      const mergedBrands = storedBrands.length > 0 ? storedBrands : brands
      setAllBrands(mergedBrands)
    }
  }

  // دالة التعامل مع السكرول السلس من الفوتر
  const handleFooterScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('product-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', '#product-section');
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <MainNavigation />
      <HeroVideoSection />

      <PerfectSoundSection />
    
    <BannerSection />

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl animate-fade-in-up">
              <EditableText contentKey="home.whyChoose.title" defaultValue="Why Choose Al-Barakat?" as="span" />
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-100">
              <EditableText
                contentKey="home.whyChoose.subtitle"
                defaultValue="Experience the difference with our comprehensive hearing care solutions"
                as="span"
                multiline
              />
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up cursor-pointer">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Ear className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  <EditableText contentKey="home.whyChoose.card1Title" defaultValue="Expert Audiologists" as="span" />
                </h3>
                <p className="text-muted-foreground">
                  <EditableText
                    contentKey="home.whyChoose.card1Description"
                    defaultValue="Certified professionals with years of experience in hearing care"
                    as="span"
                    multiline
                  />
                </p>
              </CardContent>
            </Card>
            <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up animation-delay-100 cursor-pointer">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 transition-all duration-300 group-hover:bg-secondary/20 group-hover:scale-110">
                  <Shield className="h-6 w-6 text-secondary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  <EditableText contentKey="home.whyChoose.card2Title" defaultValue="Trustworthy Solutions" as="span" />
                </h3>
                <p className="text-muted-foreground">
                  <EditableText
                    contentKey="home.whyChoose.card2Description"
                    defaultValue="We offer reliable and effective hearing solutions backed by scientific research."
                    as="span"
                    multiline
                  />
                </p>
              </CardContent>
            </Card>
            <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up animation-delay-200 cursor-pointer">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                  <Heart className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  <EditableText contentKey="home.whyChoose.card3Title" defaultValue="Customer Satisfaction" as="span" />
                </h3>
                <p className="text-muted-foreground">
                  <EditableText
                    contentKey="home.whyChoose.card3Description"
                    defaultValue="Our goal is to ensure you are completely satisfied with our services."
                    as="span"
                    multiline
                  />
                </p>
              </CardContent>
            </Card>
            <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up animation-delay-300 cursor-pointer">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Users className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  <EditableText contentKey="home.whyChoose.card4Title" defaultValue="Community Support" as="span" />
                </h3>
                <p className="text-muted-foreground">
                  <EditableText
                    contentKey="home.whyChoose.card4Description"
                    defaultValue="Join our community of satisfied patients and share your hearing journey."
                    as="span"
                    multiline
                  />
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="product-section" className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Our Complete Hearing Solutions Range
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive range of six featured devices, accessories, and maintenance kits.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up cursor-pointer bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="flex flex-1 flex-col p-8 bg-white">
                  <h3 className="mb-2 text-xl font-bold group-hover:text-primary transition-colors text-foreground">
                    {product.name}
                  </h3>
                  <p className="mb-5 flex-1 text-base text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mt-auto">
                    <Button asChild variant="link" className="p-0 text-primary group/btn text-base font-semibold">
                      <Link href={product.slug.includes('products') ? `/${product.slug}` : `/products/hearing-aid-brands/signia/${product.slug}`}>
                        See More
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="overflow-hidden bg-gradient-to-r from-primary to-secondary transition-all duration-300 hover:shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="mx-auto max-w-3xl text-center text-primary-foreground">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  <EditableText contentKey="home.hearingTest.title" defaultValue="Free Hearing Test" as="span" />
                </h2>
                <p className="mb-6 text-lg opacity-90">
                  <EditableText
                    contentKey="home.hearingTest.subtitle"
                    defaultValue="Assess your hearing health with our free, quick, and painless test."
                    as="span"
                    multiline
                  />
                </p>
                <ul className="mb-8 inline-flex flex-col gap-2 text-left">
                  <li className="flex items-center gap-2 animate-fade-in-up">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>
                      <EditableText contentKey="home.hearingTest.feature1" defaultValue="Accurate Results" as="span" />
                    </span>
                  </li>
                  <li className="flex items-center gap-2 animate-fade-in-up animation-delay-100">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>
                      <EditableText
                        contentKey="home.hearingTest.feature2"
                        defaultValue="Personalized Recommendations"
                        as="span"
                      />
                    </span>
                  </li>
                  <li className="flex items-center gap-2 animate-fade-in-up animation-delay-200">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>
                      <EditableText contentKey="home.hearingTest.feature3" defaultValue="No Obligation" as="span" />
                    </span>
                  </li>
                </ul>
                <div>
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Link href="/hearing-test">
                      <EditableText contentKey="home.hearingTest.ctaButton" defaultValue="Take Test Now" as="span" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Our Partners</h2>
          <div className="mx-auto max-w-4xl space-y-8">
            <p className="text-center text-lg text-muted-foreground">
              At Al Barakat Hearing Centers, we are proud to collaborate with some of the world's leading innovators in hearing technology. Our strategic partnerships reflect our commitment to delivering exceptional care, advanced solutions, and internationally recognized quality to our patients across Saudi Arabia.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 w-full overflow-hidden group">
                    <Image
                      src="/Signia_soundwave-logo_1200x630.jpg"
                      alt="Signia hearing aid technology"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h4 className="text-lg font-bold">Signia Technology</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="mb-4 text-center text-2xl font-bold">Signia – Global Leader in Hearing Innovation</h3>
                    <p className="text-center text-muted-foreground">
                      As an authorized partner of Signia, we offer access to one of the industry's most advanced hearing aid portfolios. Signia's cutting-edge technologies—such as Integrated Xperience, Augmented Xperience, Own Voice Processing (OVP™), and AI-driven sound processing enable us to provide patients with exceptional clarity, natural sound, and personalized performance in every environment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 w-full overflow-hidden group">
                    <Image
                      src="/rexton-logo-yellow-2000x1500px.webp"
                      alt="Rexton hearing aid technology"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h4 className="text-lg font-bold">Rexton Technology</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                        <Shield className="h-8 w-8 text-secondary" />
                      </div>
                    </div>
                    <h3 className="mb-4 text-center text-2xl font-bold">Rexton – Trusted, Reliable, and Durable Solutions</h3>
                    <p className="text-center text-muted-foreground">
                      Our collaboration with Rexton allows us to deliver robust, dependable hearing solutions designed for daily performance and long-term reliability. With a strong reputation for durability, ease of use, and value, Rexton devices support individuals seeking effective technology they can trust in any condition.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4 text-center text-2xl font-bold">A Commitment to Excellence Through Collaboration</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">International-quality hearing aids and accessories.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Advanced diagnostic and fitting technologies.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Certified service, programming, and maintenance.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <HearingNewsCarousel />

      <footer className="border-t bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-start"> 
            <div>
              <h4 className="mb-4 text-sm font-semibold invisible">
                  <EditableText contentKey="footer.placeholderTitle" defaultValue="Placeholder" as="span" />
              </h4>
              <div className="relative h-20 w-70 mb-1 mr-4">
                  <Image
                      src="/images/logofinal.png"
                      alt="Al-Barakat Hearing Care Center Logo"
                      fill
                      className="object-contain"
                  />
              </div>
            </div>

            <div>
  <h4 className="mb-4 text-sm font-semibold">
    <EditableText contentKey="footer.quickLinksTitle" defaultValue="Quick Links" as="span" />
  </h4>
  <ul className="space-y-2 text-sm">
    <li>
      <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
    </li>
    <li>
      <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link>
    </li>
    <li>
      <a 
        href="#product-section" 
        onClick={handleFooterScroll}
        className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        Products
      </a>
    </li>
    <li>
      <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
    </li>
    {/* سطر الكارير الجديد هنا */}
    <li>
      <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link>
    </li>
  </ul>
</div>
            
            <div>
              <h4 className="mb-4 text-sm font-semibold">
                <EditableText contentKey="footer.resourcesTitle" defaultValue="Resources" as="span" />
              </h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/hearing-test" className="text-muted-foreground hover:text-foreground transition-colors">Hearing Test</Link></li>
                <li><Link href="/hearing-health" className="text-muted-foreground hover:text-foreground transition-colors">Hearing Health</Link></li>
                <li><Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
                <li><Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 text-sm font-semibold">
                <EditableText contentKey="footer.contactTitle" defaultValue="Contact" as="span" />
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>{content.contact.phone}</li>
                <li>{content.contact.email}</li>
                <li>{content.contact.hours}</li>
              </ul>

              <div className="flex items-center gap-4 mt-6">
                <a href="https://api.whatsapp.com/send/?phone=9668001248882" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110"><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg></a>
                <a href="https://www.linkedin.com/company/albarakat-hearing-care/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110"><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                <a href="https://x.com/BarakatHearing" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110"><svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg></a>
                <a href="https://www.instagram.com/albarakathearing" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110"><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
                <a href="https://www.facebook.com/BarakatHearingCareCenters" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110"><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://www.youtube.com/@albarakathearingcare" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={showAddBrandDialog} onOpenChange={setShowAddBrandDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Brand</DialogTitle>
            <DialogDescription>Add a new trusted brand to your website</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="brandName">Brand Name</Label>
              <Input
                id="brandName"
                value={newBrand.name}
                onChange={(e) => setNewBrand({ ...newBrand, name: e.target.value })}
                placeholder="Enter brand name"
              />
            </div>
            <div>
              <Label htmlFor="brandDescription">Description</Label>
              <Textarea
                id="brandDescription"
                value={newBrand.description}
                onChange={(e) => setNewBrand({ ...newBrand, description: e.target.value })}
                placeholder="Enter brand description"
              />
            </div>
            <div>
              <Label htmlFor="brandLogo">Logo URL</Label>
              <Input
                id="brandLogo"
                value={newBrand.logo}
                onChange={(e) => setNewBrand({ ...newBrand, logo: e.target.value })}
                placeholder="Enter logo URL (optional)"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddBrandDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddBrand}>Add Brand</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}

function BannerSection() {
  // هنا المصفوفة بيبقى فيها كل صورة كـ Object عادي
  // السويبر هيعرض صورة واحدة بس في كل سلايد
  const slides = [
    { id: 1, src: "/images/newbranch.png", alt: "New Branch" },
    { id: 2, src: "/images/bannerfinal.png", alt: "Special Offer" }, // الصورة الأصلية اللي بعتها
    { id: 3, src: "/images/حي الروضة.png", alt: "New Branch" },

  ];

  return (
    <section className="w-full bg-white pt-10 pb-8">
      <div className="container mx-auto max-w-7xl px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10} // مسافة صغيرة جداً بين السلايدات
          slidesPerView={1} // صورة واحدة بس في كل مرة
          loop={true}
          autoHeight={true} // أهم خاصية: السويبر بيغير طوله حسب طول الصورة اللي معروضة
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          // شلنا الـ height الثابتة خالص، وخليناه بس rounded
          className="rounded-2xl overflow-hidden shadow-lg" 
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              {/* أهم تعديل هنا: object-contain لعرض الصورة كاملة */}
              {/* و max-h-[80vh] عشان الصورة متبقاش طويلة جداً على الشاشة (مثلاً 80% من طول الشاشة) */}
              <div className="relative w-full h-auto flex items-center justify-center bg-gray-100/50">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  // object-contain: الصورة كاملة هتظهر جوه الـ container
                  className="w-auto h-auto max-w-full max-h-[80vh] object-contain transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}