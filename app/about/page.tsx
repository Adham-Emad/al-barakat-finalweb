import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Heart, Users, Award, Target, CheckCircle, Stethoscope, Headphones, Sparkles, Building2, Globe, Handshake, Zap, Shield } from "lucide-react"

const screenshotImage = "/Screenshot 2025-12-06 at 11.18.30 PM.png"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <MainNavigation />

      {/* Hero Banner Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&q=80"
            alt="Modern medical facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="mb-8 flex justify-center">
              <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full bg-white/20 backdrop-blur-sm p-4">
                <Image
                  src="/images/albarakal-logo (1).png"
                  alt="Al Barakat Logo"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold drop-shadow-lg md:text-5xl lg:text-6xl">
              ABOUT US
            </h1>
            <h2 className="mb-4 text-2xl font-semibold drop-shadow-md md:text-3xl lg:text-4xl">
              Al Barakat Hearing Care
            </h2>
            <p className="mb-6 text-xl font-medium drop-shadow-md md:text-2xl">
              Your Trusted Hearing Care Partner Across Saudi Arabia
            </p>
            <p className="text-lg md:text-xl">
              Your Hearing… Our Commitment
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/booking">Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="relative h-64 w-full mb-12 md:h-80 overflow-hidden">
            <Image
              src="/Screenshot 2025-12-06 at 11.18.30 PM.png"
              alt="Al Barakat Hearing Care"
              fill
              className="object-cover"
            />
          </div>
          <div className="mx-auto max-w-4xl space-y-6 text-lg text-muted-foreground">
            <p>
              At Al Barakat Hearing Centers, we believe that better hearing means a better quality of life. For more than 30 years, we have supported thousands of individuals and families across the Kingdom of Saudi Arabia with professional hearing assessments, advanced hearing aid technology, and personalized care.
            </p>
            <p>
              We specialize in hearing aids, diagnostic hearing tests, tinnitus management, and hearing solutions for adults and children, offering the most advanced technologies from global leaders manufactures such as Signia and Rexton.
            </p>
            <p>
              Our centers are designed to be warm, welcoming, and patient-friendly, combining medical expertise with comfort and privacy to give every client the best hearing experience possible.
            </p>
            <p className="text-xl font-semibold text-foreground">
              When you visit us, you're not just a patient
            </p>
            <p className="text-xl font-semibold text-primary">
              You are a partner on a journey toward better hearing.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Our Story</h2>
            <div className="mb-8 relative h-96 w-full md:h-[500px] rounded-xl overflow-hidden shadow-2xl group">
              <Image
                src="/2024-03-27.jpg"
                alt="Al Barakat Hearing Care Center - Our building"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-lg">30+ Years of Excellence</h3>
                <p className="text-lg md:text-xl opacity-95 drop-shadow-md">Serving communities across Saudi Arabia</p>
              </div>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                We began with a simple idea:
              </p>
              <p className="text-xl font-semibold text-foreground">
                Make high-quality hearing care accessible, professional, and friendly for every community in Saudi Arabia.
                </p>
                <p>
                Over the years, we have expanded our services, updated our technology, and welcomed thousands of clients from children experiencing their first hearing test to seniors rediscovering the joy of conversation.
                </p>
                <p>
                What has never changed is our commitment to care.
                We listen first to understand your needs, lifestyle, and concerns then we build a solution that fits you perfectly.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">What Makes Us Different?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Headphones className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-3 text-center text-xl font-semibold">We Listen Before We Treat</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Your hearing challenges, habits, comfort, and expectations guide everything we do.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <Zap className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="mb-3 text-center text-xl font-semibold">We Use World-Class Technology</h3>
                <p className="text-center text-sm text-muted-foreground">
                  We partner with Signia and Rexton, two of the strongest hearing aid brands globally.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Artificial intelligence sound processing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Rechargeable technology
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Bluetooth connectivity
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Invisible and comfortable designs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <Handshake className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="mb-3 text-center text-xl font-semibold">We Support You at Every Step</h3>
                <p className="text-center text-sm text-muted-foreground">
                  From the first hearing test to fine tuning your hearing aids, we are always here with follow-ups, guidance, and friendly care.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-3 text-center text-xl font-semibold">We Believe in Long-Term Relationships</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Most of our clients stay with us for many years, becoming part of the Al Barakat family.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">COMPANY PROFILE</h2>
            <p className="mb-6 text-center text-xl font-semibold">
              Al Barakat Hearing Centers – Kingdom of Saudi Arabia
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-2xl font-bold">Introduction</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Al Barakat Hearing Centers is a leading provider of advanced audiology services and hearing-care solutions across the Kingdom of Saudi Arabia. Since our establishment, we have been committed to enhancing communication, confidence, and quality of life for individuals experiencing hearing loss. Our organization combines clinical expertise, evidence-based practices, and the latest hearing technologies to deliver comprehensive, reliable, and patient-centered care.
                  </p>
                  <p>
                    We specialize in diagnostic hearing assessments, hearing aid dispensing, tinnitus management, pediatric audiology, and long-term hearing wellness programs. Through a network of modern centers, professional staff, and trusted global partnerships, Al Barakat Hearing Centers continue to set high standards in hearing healthcare across KSA.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-bold">Who We Are</h3>
                <div className="mb-6 flex justify-center">
                  <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
                    <Image
                      src="/Screenshot 2025-12-07 at 12.46.49 AM.png"
                      alt="Modern hearing aid technology"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Al Barakat Hearing Centers is an audiology focused healthcare provider dedicated to offering accurate diagnostics, personalized hearing solutions, and professional follow-up care. Our team consists of licensed audiologists, hearing aid specialists, and experienced support staff who prioritize clinical excellence, professional ethics, and client satisfaction.
                  </p>
                  <p>
                    We proudly represent and distribute advanced hearing aid technologies from Signia and Rexton, two internationally recognized brands known for innovation, durability, and superior sound performance.
                  </p>
                  <p className="font-semibold text-foreground">Each Al Barakat Hearing Center is equipped with:</p>
                  <ul className="ml-6 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Soundproof testing rooms complying with international audiology standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Advanced diagnostic equipment for complete hearing evaluations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Digital hearing aid programming systems for accurate fitting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Comfortable client areas designed to ensure privacy and ease</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>Full-service laboratory for hearing aid cleaning, repairs, and maintenance</span>
                    </li>
                  </ul>
                  <p>
                    Our operational model ensures high-quality service delivery and consistent standards across all branches in the Kingdom.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-bold">Future Vision</h3>
                <p className="text-muted-foreground">
                  Al Barakat Hearing Centers aims to expand its service network, introduce advanced digital care solutions, and strengthen its role in community hearing health. We are committed to continuous innovation and the development of accessible, high-quality hearing-care services for all individuals throughout Saudi Arabia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">MISSION & VISION</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-4 text-center text-2xl font-bold">Mission</h3>
                <p className="text-center text-muted-foreground">
                  Our mission at Al Barakat Hearing Centers is to provide exceptional hearing-health services through a combination of expert clinical care, advanced diagnostic methods, and state-of-the-art hearing aid solutions. We are committed to creating a supportive, patient-focused environment where each individual receives customized care designed to restore confidence, communication, and quality of life.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <Sparkles className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="mb-4 text-center text-2xl font-bold">Vision</h3>
                <p className="text-center text-muted-foreground">
                  Our vision is to lead the hearing-care industry in Saudi Arabia by offering premium, innovative, and reliable hearing solutions that meet international standards. We aim to expand accessibility, enhance patient education, and continuously invest in professional development to ensure our centers remain the first choice for hearing excellence in the region.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Partners */}
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
                    <div className="mb-4 flex justify-center">
                      
                    </div>
                    <h3 className="mb-4 text-center text-2xl font-bold">Signia – Global Leader in Hearing Innovation</h3>
                    <p className="text-center text-muted-foreground">
                      As an authorized partner of Signia, we offer access to one of the industry's most advanced hearing aid portfolios. Signia's cutting-edge technologies—such as Integrated Xperience, Augmented Xperience, Own Voice Processing (OVP™), and AI-driven sound processing enable us to provide patients with exceptional clarity, natural sound, and personalized performance in every environment.
                      This partnership ensures our patients benefit from the latest breakthroughs in premium hearing care.
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
                
                  </div>
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                        <Shield className="h-8 w-8 text-secondary" />
            </div>
            </div>
                    <h3 className="mb-4 text-center text-2xl font-bold">Rexton – Trusted, Reliable, and Durable Solutions</h3>
                    <p className="text-center text-muted-foreground">
                      Our collaboration with Rexton allows us to deliver robust, dependable hearing solutions designed for daily performance and long-term reliability. With a strong reputation for durability, ease of use, and value, Rexton devices support individuals seeking effective technology they can trust in any condition.
                      Through this partnership, we ensure every patient receives solutions that balance practicality, quality, and comfort.
                    </p>
            </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4 text-center text-2xl font-bold">A Commitment to Excellence Through Collaboration</h3>
                <p className="mb-4 text-center text-muted-foreground">
                  By partnering with globally recognized leaders in hearing technology, Al Barakat Hearing Centers is able to offer:
                </p>
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
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Continuous updates on the latest global innovations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Enhanced patient outcomes supported by proven technology.</span>
                  </li>
                </ul>
                <p className="mt-4 text-center text-muted-foreground">
                  These partnerships strengthen our ability to deliver comprehensive, high-standard hearing care, ensuring that each patient receives solutions that meet both medical needs and everyday lifestyle expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

   

      {/* Careers */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Careers</h2>
            <p className="text-lg text-muted-foreground">
              At Al Barakat Hearing Centers, we believe that exceptional hearing care begins with exceptional people. Our team is made up of talented, dedicated professionals who share one mission: to improve lives through better hearing. As we continue to expand across the Kingdom of Saudi Arabia, we are always looking for passionate individuals who want to grow, innovate, and make a meaningful impact.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us for Career Opportunities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Experience the Al-Barakat Difference</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Join thousands of satisfied patients who have improved their hearing and quality of life with our expert care.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/booking">Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Al-Barakat Hearing Care Centers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
