"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import {
  Menu,
  Calendar,
  LogIn,
  Ear,
  Activity,
  Building,
  ChevronRight,
  ChevronDown,
  Home,
  Zap,
  Volume2,
  Grid3x3,
  Tag,
  Battery,
  Mail,
  BookOpen,
  Smartphone
} from "lucide-react"

import { cn } from "@/lib/utils"
import { checkAdminAuth } from "@/lib/admin-auth"
import { EditableText } from "@/components/editable-text"
import { getEditableContent } from "@/lib/inline-content-store"
import { ProductsMegaMenu } from "@/components/products-mega-menu"

export function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [whatsappNumber, setWhatsappNumber] = useState("9668001248882")
  
  // Mobile Menu State
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null)

  useEffect(() => {
    setIsAdmin(checkAdminAuth())
    setWhatsappNumber(getEditableContent("contact.whatsappNumber", "9668001248882"))

    const handleContentUpdate = () => {
      setWhatsappNumber(getEditableContent("contact.whatsappNumber", "9668001248882"))
    }
    window.addEventListener("contentUpdated", handleContentUpdate)
    return () => window.removeEventListener("contentUpdated", handleContentUpdate)
  }, [])

  const toggleMobileSection = (section: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setMobileExpanded(mobileExpanded === section ? null : section)
    setMobileSubExpanded(null) // Reset sub-menus when changing main sections
  }

  const toggleSubSection = (section: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setMobileSubExpanded(mobileSubExpanded === section ? null : section)
  }

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="relative w-52 h-50">
              <Image
                src="/images/logofinal.png"
                alt="Al-Barakat Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xs font-semibold sm:text-sm md:text-base whitespace-nowrap">
              <EditableText contentKey="nav.brandName" defaultValue="" as="span" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1 flex-1 justify-center">
            {/* Your Hearing Health */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-accent/50 group-hover:bg-accent/50">
                <EditableText contentKey="nav.hearingHealthMenu" defaultValue="Your Hearing Health" as="span" />
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full mt-0 w-[900px] bg-white rounded-lg shadow-lg z-50 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <Link href="/hearing-test" className="block bg-blue-100 rounded-lg p-6 hover:bg-blue-200 transition-colors">
                      <div className="text-4xl mb-3">👂</div>
                      <h3 className="text-lg font-bold text-gray-900">Free Hearing Test</h3>
                      <p className="text-sm text-gray-600 mt-2">Take our comprehensive online hearing assessment in just 3 minutes</p>
                    </Link>

                    {/* NEW: Understanding Hearing Test Button with corrected path */}
                    <Link href="/hearing-health/tinnitus" className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-4 rounded-lg hover:bg-slate-100 transition-colors group">
                      <div className="bg-white p-2 rounded-md shadow-sm text-[#00838f] group-hover:scale-110 transition-transform">
                        <Activity className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900">Understanding Hearing Test</h3>
                        <p className="text-xs text-gray-600 mt-0.5">Learn what to expect during your test</p>
                      </div>
                    </Link>
                  </div>
                  <div className="space-y-3">
                    <Link href="/hearing-health/how-we-hear" className="block p-3 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-start gap-3">
                        <span className="text-xl mt-0.5">👂</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">How Hearing Works</h4>
                          <p className="text-sm text-gray-600">Understanding the hearing process</p>
                        </div>
                      </div>
                    </Link>
                    <details className="group/details">
  <summary className="list-none cursor-pointer p-3 rounded-lg hover:bg-gray-100 transition-colors flex items-start justify-between gap-3">
    <div className="flex items-start gap-3">
      <span className="text-xl mt-0.5">🔇</span> {/* أيقونة Hearing Loss */}
      <div>
        <h4 className="font-semibold text-gray-900">Hearing Loss</h4>
        <p className="text-sm text-gray-600">Types, causes, and signs</p>
      </div>
    </div>
    
    {/* السهم اللي هيعرف اليوزر إن دي قائمة */}
    <ChevronDown className="h-5 w-5 text-gray-400 transition-transform duration-300 group-open/details:rotate-180 mt-1" />
  </summary>

  <div className="ml-9 mt-2 space-y-2 text-sm border-l-2 border-gray-100 pl-4">
    <Link href="/hearing-health/hearing-loss/signs-of-hearing-loss" className="block text-gray-600 hover:text-blue-600 py-1 transition-colors">Signs of Hearing Loss</Link>
    <Link href="/hearing-health/hearing-loss/causes-of-hearing-loss" className="block text-gray-600 hover:text-blue-600 py-1 transition-colors">Causes of Hearing Loss</Link>
    <Link href="/hearing-health/hearing-loss/types-of-hearing-loss" className="block text-gray-600 hover:text-blue-600 py-1 transition-colors">Types of Hearing Loss</Link>
    <Link href="/hearing-health/hearing-loss/hearing-loss-in-adults" className="block text-gray-600 hover:text-blue-600 py-1 transition-colors">Hearing loss in adults</Link>
    <Link href="/hearing-health/hearing-loss/hearing-loss-in-child" className="block text-gray-600 hover:text-blue-600 py-1 transition-colors">Hearing loss in Child</Link>
  </div>
</details>

<details className="group/details mt-2">
  <summary className="list-none cursor-pointer p-3 rounded-lg hover:bg-gray-100 transition-colors flex items-start justify-between gap-3">
    <div className="flex items-start gap-3">
      <span className="text-xl mt-0.5">🔔</span> {/* أيقونة Tinnitus */}
      <div>
        <h4 className="font-semibold text-gray-900">Tinnitus</h4>
        <p className="text-sm text-gray-600">Symptoms and relief therapy</p>
      </div>
    </div>
    
    <ChevronDown className="h-5 w-5 text-gray-400 transition-transform duration-300 group-open/details:rotate-180 mt-1" />
  </summary>

  <div className="ml-9 mt-2 space-y-2 text-sm border-l-2 border-gray-100 pl-4">
    <Link href="/hearing-health/tinnitus/symptoms-causes" className="block text-gray-600 hover:text-blue-600 py-1 transition-colors">Symptoms & Causes</Link>
    <Link href="/hearing-health/tinnitus/therapy" className="block text-gray-600 hover:text-blue-600 py-1 transition-colors">Tinnitus Therapy</Link>
  </div>
</details>
                  </div>
                </div>
              </div>
            </div>

            {/* Products & Accessories */}
            <ProductsMegaMenu />

          {/* Company */}
<div className="relative group">
  <button className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-accent/50 group-hover:bg-accent/50">
    <EditableText contentKey="nav.companyMenu" defaultValue="Company" as="span" />
    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
  </button>
  <div className="absolute left-0 top-full mt-0 w-96 bg-white rounded-lg shadow-lg z-50 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 space-y-4">
    <Link href="/about" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex items-start gap-3">
        <span className="text-2xl">🏢</span>
        <div>
          <h4 className="font-semibold text-gray-900">About Us</h4>
          <p className="text-sm text-gray-600">Learn about our mission, values, and commitment to hearing care</p>
        </div>
      </div>
    </Link>
    
    <Link href="/services" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex items-start gap-3">
        <span className="text-2xl">🩺</span>
        <div>
          <h4 className="font-semibold text-gray-900">Services</h4>
          <p className="text-sm text-gray-600">Comprehensive hearing care services by certified audiologists</p>
        </div>
      </div>
    </Link>

    {/* سكشن الـ Careers الجديد */}
    <Link href="/careers" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border-t border-gray-50 pt-4">
      <div className="flex items-start gap-3">
        <span className="text-2xl">💼</span>
        <div>
          <h4 className="font-semibold text-gray-900 uppercase tracking-tight">Careers</h4>
          <p className="text-sm text-gray-600 font-light">Join the Al-Barakat team and build your future with us</p>
        </div>
      </div>
    </Link>
  </div>
</div>

            {/* Contact */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-accent/50 group-hover:bg-accent/50">
                <EditableText contentKey="nav.contactMenu" defaultValue="Contact" as="span" />
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full mt-0 w-96 bg-white rounded-lg shadow-lg z-50 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 space-y-4">
                <Link href="/contact" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Contact Us</h4>
                      <p className="text-sm text-gray-600">Visit our contact page for all locations and details</p>
                    </div>
                  </div>
                </Link>
                <Link href={`https://wa.me/${whatsappNumber}`} target="_blank" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💬</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Call Us on WhatsApp</h4>
                      <p className="text-sm text-gray-600">Chat with us directly: {whatsappNumber}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-accent/50 group-hover:bg-accent/50">
                <EditableText contentKey="nav.resourcesMenu" defaultValue="Resources" as="span" />
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full mt-0 w-96 bg-white rounded-lg shadow-lg z-50 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 space-y-4">
                <Link href="/blog" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📚</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Blog</h4>
                      <p className="text-sm text-gray-600">Latest news, tips, and insights about hearing health</p>
                    </div>
                  </div>
                </Link>
                <Link href="/faq" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">❓</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">FAQ</h4>
                      <p className="text-sm text-gray-600">Frequently asked questions about hearing aids and care</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Actions (Desktop) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex text-foreground hover:bg-accent">
              <Link href="/admin">
                <LogIn className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">
                  <EditableText contentKey="nav.loginButton" defaultValue="Login" as="span" />
                </span>
              </Link>
            </Button>

            <Button size="sm" asChild className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/booking">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">
                  <EditableText contentKey="nav.bookAppointmentButton" defaultValue="Book Appointment" as="span" />
                </span>
              </Link>
            </Button>

            {/* --- NEW PREMIUM MOBILE MENU --- */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="xl:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              
              <SheetContent side="left" className="w-[340px] sm:w-[400px] p-0 border-r-0 bg-[#f8fafc] [&>button]:text-white [&>button]:top-5 [&>button]:right-5 [&>button]:z-50">
                <SheetTitle className="sr-only">Al-Barakat Navigation Menu</SheetTitle>
                {/* Premium Teal Header */}
                <div className="bg-[#00838f] p-6 pt-10 text-white flex items-center relative">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 relative bg-white/10 rounded-full flex items-center justify-center">
                       <Ear className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold leading-tight">Al-Barakat</h2>
                      <p className="text-sm text-white/90 font-light">Hearing Care Centers</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Menu Content Wrapper */}
                <div className="px-4 py-6 space-y-3 overflow-y-auto h-[calc(100vh-100px)]">
                  
                  {/* Home Card */}
                  <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-4 bg-[#eef2f6] p-4 rounded-xl text-slate-800 font-semibold hover:bg-[#e2e8f0] transition-colors">
                    <div className="bg-[#dbeafe] p-2 rounded-lg text-[#00838f]">
                      <Home className="h-5 w-5" />
                    </div>
                    Home
                  </Link>

                  {/* Free Hearing Test Banner */}
                  <Link href="/hearing-test" onClick={() => setIsOpen(false)} className="flex items-center justify-between bg-[#5cb3a4] p-4 rounded-xl text-white font-medium shadow-md hover:bg-[#4ea092] transition-colors mb-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-2.5 rounded-lg border border-white/30">
                        <Activity className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-bold">Free Hearing Test</div>
                        <div className="text-xs text-white/90 font-medium">Take it now - 3 minutes</div>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-white/90" />
                  </Link>

                  {/* 1. Your Hearing Health (Accordion) */}
                  <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <button onClick={(e) => toggleMobileSection('health', e)} className="w-full flex items-center justify-between p-4 text-slate-800 font-semibold hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <Ear className="h-5 w-5 text-[#00838f]" />
                        Your Hearing Health
                      </div>
                      <ChevronDown className={cn("h-5 w-5 text-slate-400 transition-transform", mobileExpanded === 'health' && "rotate-180")} />
                    </button>
                    
                    {/* Health Content */}
                    <div className={cn("bg-[#f8fafc] border-t border-slate-100", mobileExpanded === 'health' ? "block" : "hidden")}>
                      <div className="p-4 space-y-4">
                        <Link href="/hearing-health/how-we-hear" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-slate-700 hover:text-[#00838f]">
                          <div className="w-2 h-2 rounded-full bg-[#00838f]" />
                          How Hearing Works
                        </Link>
                        
                        {/* Nested Hearing Loss */}
                        <div>
                          <button onClick={(e) => toggleSubSection('loss', e)} className="w-full flex items-center justify-between text-slate-800 font-medium">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-[#00838f]" />
                              Hearing Loss
                            </div>
                            <ChevronDown className={cn("h-4 w-4 text-slate-400 transition-transform", mobileSubExpanded === 'loss' && "rotate-180")} />
                          </button>
                          {mobileSubExpanded === 'loss' && (
                            <div className="ml-5 mt-3 pl-4 border-l border-slate-200 space-y-3">
                              <p className="text-xs text-slate-500 mb-2">Types, causes, and signs</p>
                              <Link href="/hearing-health/hearing-loss/signs-of-hearing-loss" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-[#00838f]">Signs of hearing loss</Link>
                              <Link href="/hearing-health/hearing-loss/causes-of-hearing-loss" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-[#00838f]">Causes of hearing loss</Link>
                              <Link href="/hearing-health/hearing-loss/types-of-hearing-loss" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-[#00838f]">Types of hearing loss</Link>
                              
                              {/* Temporarily pointed to main hearing loss page to avoid 404 errors */}
                              <Link href="/hearing-health/hearing-loss/hearing-loss-in-adults" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-[#00838f]">Hearing loss in adults</Link>
                              <Link href="/hearing-health/hearing-loss/hearing-loss-in-child" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-[#00838f]">Hearing loss in Child</Link>
                            </div>
                          )}
                        </div>

                        {/* Nested Tinnitus */}
                        <div>
                          <button onClick={(e) => toggleSubSection('tinnitus', e)} className="w-full flex items-center justify-between text-slate-800 font-medium mt-4">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-[#00838f]" />
                              Tinnitus
                            </div>
                            <ChevronDown className={cn("h-4 w-4 text-slate-400 transition-transform", mobileSubExpanded === 'tinnitus' && "rotate-180")} />
                          </button>
                          {mobileSubExpanded === 'tinnitus' && (
                            <div className="ml-5 mt-3 pl-4 border-l border-slate-200 space-y-3">
                              <p className="text-xs text-slate-500 mb-2">Symptoms and relief therapy</p>
                              <Link href="/hearing-health/tinnitus/symptoms-causes" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-[#00838f]">Symptoms and causes</Link>
                              <Link href="/hearing-health/tinnitus/tinnitus-therapy" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-[#00838f]">Tinnitus therapy</Link>
                            </div>
                          )}
                        </div>

                        {/* Nested Understanding Testing */}
                        <div>
                          <button onClick={(e) => toggleSubSection('testing', e)} className="w-full flex items-center justify-between text-slate-800 font-medium mt-4">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-[#00838f]" />
                              Understanding Hearing Testing
                            </div>
                            <ChevronDown className={cn("h-4 w-4 text-slate-400 transition-transform", mobileSubExpanded === 'testing' && "rotate-180")} />
                          </button>
                          {mobileSubExpanded === 'testing' && (
                            <div className="ml-5 mt-3 pl-4 border-l border-slate-200 space-y-3">
                              {/* Temporarily pointed to main hearing test page to avoid 404 */}
                              <Link href="/hearing-health/tinnitus" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-[#00838f]">Understanding Hearing Testing</Link>
                            </div>
                          )}
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* 2. Products & Accessories (Accordion) */}
                  <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <button onClick={(e) => toggleMobileSection('products', e)} className="w-full flex items-center justify-between p-4 text-slate-800 font-semibold hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <Ear className="h-5 w-5 text-[#00838f]" />
                        Products & Accessories
                      </div>
                      <ChevronDown className={cn("h-5 w-5 text-slate-400 transition-transform", mobileExpanded === 'products' && "rotate-180")} />
                    </button>
                    
                    {/* Products Content */}
                    <div className={cn("bg-[#f8fafc] border-t border-slate-100 p-4", mobileExpanded === 'products' ? "block" : "hidden")}>
                      <p className="text-xs text-slate-500 font-bold tracking-wider mb-4">CATEGORIES</p>
                      
                      <div className="space-y-5">
                        {/* Updated Category Link */}
                        <Link href="/products/category" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-slate-800 font-medium hover:text-[#00838f]">
                          <Grid3x3 className="h-5 w-5 text-[#00838f]" /> Hearing Aid Category
                        </Link>

                        {/* Brands Sub-Accordion */}
                        <div>
                          <button onClick={(e) => toggleSubSection('brands', e)} className="w-full flex items-center justify-between text-slate-800 font-medium">
                            <div className="flex items-center gap-3">
                              <Tag className="h-5 w-5 text-[#00838f]" /> Hearing Aid Brands
                            </div>
                            <ChevronDown className={cn("h-4 w-4 text-slate-400 transition-transform", mobileSubExpanded === 'brands' && "rotate-180")} />
                          </button>
                          {mobileSubExpanded === 'brands' && (
                            <div className="mt-3 bg-[#e6f0f0] p-4 rounded-xl space-y-4">
                              <div>
                                <p className="text-[#00838f] font-semibold mb-2">Signia</p>
                                <div className="space-y-3">
                                  {/* Updated Signia Links */}
                                  <Link href="/products/hearing-aid-brands/signia/pure" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-slate-700 hover:text-[#00838f]"><div className="w-1.5 h-1.5 rounded-full bg-[#00838f]"/> Pure RIC</Link>
                                  <Link href="/products/hearing-aid-brands/signia/styletto-slim-ric" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-slate-700 hover:text-[#00838f]"><div className="w-1.5 h-1.5 rounded-full bg-[#00838f]"/> Styletto Slim RIC</Link>
                                  <Link href="/products/hearing-aid-brands/signia/stylettoix" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-slate-700 hover:text-[#00838f]"><div className="w-1.5 h-1.5 rounded-full bg-[#00838f]"/> Styletto IX</Link>
                                  <Link href="/products/hearing-aid-brands/signia/motion" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-slate-700 hover:text-[#00838f]"><div className="w-1.5 h-1.5 rounded-full bg-[#00838f]"/> Motion</Link>
                                  <Link href="/products/hearing-aid-brands/signia/intuis4" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-slate-700 hover:text-[#00838f]"><div className="w-1.5 h-1.5 rounded-full bg-[#00838f]"/> Intuis 4</Link>
                                  <Link href="/products/hearing-aid-brands/signia/silk" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-slate-700 hover:text-[#00838f]"><div className="w-1.5 h-1.5 rounded-full bg-[#00838f]"/> Silk X</Link>
                                  <Link href="/products/hearing-aid-brands/signia/silkix" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-slate-700 hover:text-[#00838f]"><div className="w-1.5 h-1.5 rounded-full bg-[#00838f]"/> Silk Charge&Go IX</Link>
                                  <Link href="/products/hearing-aid-brands/signia/insiogoax" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-slate-700 hover:text-[#00838f]"><div className="w-1.5 h-1.5 rounded-full bg-[#00838f]"/> Insio Charge&Go AX</Link>
                                </div>
                              </div>
                              <div className="pt-2">
                                <p className="text-[#00838f] font-semibold mb-2">Rexton</p>
                                <div className="space-y-3">
                                  {/* Updated Rexton Links */}
                                  <Link href="/products/hearing-aid-brands/rexton/bi-core-b" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-slate-700 hover:text-[#00838f]"><div className="w-1.5 h-1.5 rounded-full bg-[#00838f]"/> Bi-Core B</Link>
                                  <Link href="/products/hearing-aid-brands/rexton/BICORER-LI" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-slate-700 hover:text-[#00838f]"><div className="w-1.5 h-1.5 rounded-full bg-[#00838f]"/> BICORE R-LI</Link>
                                  <Link href="/products/hearing-aid-brands/rexton/r-312" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-slate-700 hover:text-[#00838f]"><div className="w-1.5 h-1.5 rounded-full bg-[#00838f]"/> BICORE R 312</Link>
                                  <Link href="/products/hearing-aid-brands/rexton/BICOREBLIRUGGED" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-slate-700 hover:text-[#00838f]"><div className="w-1.5 h-1.5 rounded-full bg-[#00838f]"/> BICORE B-LI RUGGED</Link>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Technology Sub-Accordion */}
                        <div>
                          <button onClick={(e) => toggleSubSection('tech', e)} className="w-full flex items-center justify-between text-slate-800 font-medium">
                            <div className="flex items-center gap-3">
                              <Zap className="h-5 w-5 text-[#00838f]" /> Hearing Aid Technology
                            </div>
                            <ChevronDown className={cn("h-4 w-4 text-slate-400 transition-transform", mobileSubExpanded === 'tech' && "rotate-180")} />
                          </button>
                          {mobileSubExpanded === 'tech' && (
                            <div className="mt-3 bg-[#e6f0f0] p-4 rounded-xl space-y-3">
                              {/* Updated Technology Links */}
                              <Link href="/products/hearing-aid-technology/integrated-xperience" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-slate-700 hover:text-[#00838f]"><div className="w-1.5 h-1.5 rounded-full bg-[#00838f]"/> Integrated Xperience</Link>
                              <Link href="/products/hearing-aid-technology/augment-xperience" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-slate-700 hover:text-[#00838f]"><div className="w-1.5 h-1.5 rounded-full bg-[#00838f]"/> Augment Xperience</Link>
                              {/*<Link href="/products/hearing-aid-technology/reach-technology" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-slate-700 hover:text-[#00838f]"><div className="w-1.5 h-1.5 rounded-full bg-[#00838f]"/> REACH Technology</Link>*/}
                              <Link href="/products/hearing-aid-technology/bi-core-technology" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-slate-700 hover:text-[#00838f]"><div className="w-1.5 h-1.5 rounded-full bg-[#00838f]"/> BI-CORE Technology</Link>
                            </div>
                          )}
                        </div>

                        <Link href="/products/tinnitus-solutions" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-slate-800 font-medium hover:text-[#00838f]">
                          <Volume2 className="h-5 w-5 text-[#00838f]" /> Tinnitus Solutions
                        </Link>
                        
                        <Link href="/products/accessories-batteries" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-slate-800 font-medium hover:text-[#00838f]">
                          <Battery className="h-5 w-5 text-[#00838f]" /> Accessories and Batteries
                        </Link>
                        
                        <Link href="/products/connectivity" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-slate-800 font-medium hover:text-[#00838f]">
                          <Smartphone className="h-5 w-5 text-[#00838f]" /> Connectivity
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* 3. Company (Accordion) */}
<div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
  <button onClick={(e) => toggleMobileSection('company', e)} className="w-full flex items-center justify-between p-4 text-slate-800 font-semibold hover:bg-slate-50 transition-colors">
    <div className="flex items-center gap-4">
      <Building className="h-5 w-5 text-[#00838f]" />
      Company
    </div>
    <ChevronRight className={cn("h-5 w-5 text-slate-400 transition-transform", mobileExpanded === 'company' && "rotate-90")} />
  </button>
  <div className={cn("bg-[#f8fafc] border-t border-slate-100", mobileExpanded === 'company' ? "block" : "hidden")}>
    <div className="p-4 space-y-4">
      <Link href="/about" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-slate-700 hover:text-[#00838f]">
        <div className="w-2 h-2 rounded-full bg-[#00838f]" /> About Us
      </Link>
      <Link href="/services" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-slate-700 hover:text-[#00838f]">
        <div className="w-2 h-2 rounded-full bg-[#00838f]" /> Services
      </Link>
      
      {/* السطر الجديد اللي ضفناه للكارير */}
      <Link href="/careers" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-slate-700 hover:text-[#00838f]">
        <div className="w-2 h-2 rounded-full bg-[#00838f]" /> Careers
      </Link>
    </div>
  </div>
</div>

                  {/* 4. Contact (Accordion) */}
                  <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <button onClick={(e) => toggleMobileSection('contact', e)} className="w-full flex items-center justify-between p-4 text-slate-800 font-semibold hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <Mail className="h-5 w-5 text-[#00838f]" />
                        Contact
                      </div>
                      <ChevronRight className={cn("h-5 w-5 text-slate-400 transition-transform", mobileExpanded === 'contact' && "rotate-90")} />
                    </button>
                    <div className={cn("bg-[#f8fafc] border-t border-slate-100", mobileExpanded === 'contact' ? "block" : "hidden")}>
                      <div className="p-4 space-y-4">
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-slate-700 hover:text-[#00838f]">
                          <Mail className="h-4 w-4 text-[#00838f]" /> Contact Page
                        </Link>
                        <Link href={`https://wa.me/${whatsappNumber}`} target="_blank" onClick={() => setIsOpen(false)} className="flex items-start gap-3 text-slate-700 hover:text-[#00838f]">
                          <div className="mt-1"><Volume2 className="h-4 w-4 text-[#00838f]" /></div>
                          <div>
                            <div>WhatsApp</div>
                            <div className="text-sm text-slate-500">+{whatsappNumber}</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* 5. Resources (Accordion) */}
                  <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                    <button onClick={(e) => toggleMobileSection('resources', e)} className="w-full flex items-center justify-between p-4 text-slate-800 font-semibold hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <BookOpen className="h-5 w-5 text-[#00838f]" />
                        Resources
                      </div>
                      <ChevronRight className={cn("h-5 w-5 text-slate-400 transition-transform", mobileExpanded === 'resources' && "rotate-90")} />
                    </button>
                    <div className={cn("bg-[#f8fafc] border-t border-slate-100", mobileExpanded === 'resources' ? "block" : "hidden")}>
                      <div className="p-4 space-y-4">
                        <Link href="/blog" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-slate-700 hover:text-[#00838f]"><BookOpen className="h-4 w-4 text-[#00838f]" /> Blog</Link>
                        <Link href="/faq" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-slate-700 hover:text-[#00838f]"><BookOpen className="h-4 w-4 text-[#00838f]" /> FAQ</Link>
                      </div>
                    </div>
                  </div>

                  {/* Admin Login Bottom Button */}
                  <div className="pt-6 pb-8">
                    <Link href="/admin" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-3 bg-[#eef2f6] p-4 rounded-xl text-slate-800 font-semibold hover:bg-[#e2e8f0] transition-colors border border-slate-200">
                      <LogIn className="h-5 w-5 text-slate-600" />
                      Admin Login
                    </Link>
                  </div>

                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}