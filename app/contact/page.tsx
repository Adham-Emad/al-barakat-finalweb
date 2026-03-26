"use client"

import type React from "react"
import { useState } from "react"
import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { BranchesShowcase } from "@/components/branches-showcase"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // تعريف حالة البيانات في الفورم
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  // دالة تحديث القيم عند الكتابة
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // دالة إرسال الإيميل
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        // تفريغ الفورم بعد النجاح
        setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" })
        // إعادة زرار الإرسال لحالته بعد 5 ثواني
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Connection error. Please check your internet.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We're here to help. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          required 
                          placeholder="John" 
                          value={formData.firstName}
                          onChange={(e) => handleChange("firstName", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          required 
                          placeholder="Doe" 
                          value={formData.lastName}
                          onChange={(e) => handleChange("lastName", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        placeholder="john.doe@example.com" 
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+966 XX XXX XXXX" 
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input 
                        id="subject" 
                        required 
                        placeholder="How can we help you?" 
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        required 
                        placeholder="Tell us more about your inquiry..." 
                        rows={5} 
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting || submitted}>
                      {isSubmitting ? (
                        "Sending..."
                      ) : submitted ? (
                        "Message Sent!"
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Get in Touch</h2>
                <p className="text-muted-foreground">
                  We're committed to providing exceptional hearing care. Contact us through any of our branches or use
                  the form to send us a message.
                </p>
              </div>

              <Card className="bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-semibold">Emergency Support</h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    For urgent hearing aid repairs or technical support:
                  </p>
                  <p className="text-lg font-semibold text-primary">+9668001248882</p>
                  <p className="mt-2 text-xs text-muted-foreground">Available 24/7</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Our Branches</h2>
            <p className="text-muted-foreground">Visit any of our locations for personalized hearing care solutions</p>
          </div>
          <BranchesShowcase />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center text-sm text-muted-foreground">
          </div>
        </div>
      </footer>
    </div>
  )
}