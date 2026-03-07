 "use client"

import { MainNavigation } from "@/components/main-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from 'next/image'

export default function ChargingSolutionsPage() {

  const portableChargers = [
    {
      name: "Pure Portable Charger",
      description: "Pocket-sized case with integrated power bank that can provide up to three full charges. LEDs show hearing aid and bank status.",
      compatible: "Pure Charge&Go IX, CROS Pure Charge&Go IX, Pure Charge&Go AX, CROS Pure Charge&Go AX",
      image: "/images/Portable1-Charger-Pure_with-Pure-ChGo-IX_1920x1080.webp",
    },
    {
      name: "Styletto IX/AX Charger",
      description: "Elegant pocket-sized charging case matching Styletto design. Power bank can fully charge up to five times. Qi wireless charging supported.",
      compatible: "Styletto IX, CROS Styletto IX, Styletto AX, CROS Styletto AX",
      image: "/images/Portable2-Charger-Styletto_with-Styletto-IX_1920x1080.webp",
    },
    {
      name: "Active IX Charger",
      description: "Pocket-sized charger with integrated power bank providing up to three full charges. LEDs indicate status. Qi wireless supported.",
      compatible: "Active IX / Active Pro IX",
      image: "/images/Portable3-Charger-Active_perspective_with-Active-IX_LED-on_1920x1080.webp",
    },
    {
      name: "Silk Charger",
      description: "Pocket-sized charger that provides up to four additional charges. LEDs show status and supports wireless charging (Qi).",
      compatible: "Silk Charge&Go IX",
      image: "/images/Portable4-Charger-Silk_with-Silk-ChGo-IX-out_LED-on_shadow_1920x1080.webp",
    },
    {
      name: "Portable Charger Insio CIC",
      description: "Pocket-sized charging case for custom in-canal devices. LEDs indicate status. Can be charged wirelessly.",
      compatible: "Insio Charge&Go CIC IX",
      image: "/images/Portable5-Charger-Insio-CIC_LED-on_1920x1080.webp",
    },
  ]

  const desktopChargers = [
    {
      name: "Desktop Charger Pure",
      description: "Small desktop charger with LEDs indicating status. Plugs into USB adapter.",
      compatible: "Pure Charge&Go IX family, Pure Charge&Go AX family",
      image: "/images/Desktop-Charger١-Pure_with-Pure-ChGo-IX_1920x1080.webp",
    },
    {
      name: "Desktop Charger Motion M",
      description: "Compact desktop charger with LED status indicators.",
      compatible: "Motion Charge&Go M IX",
      image: "/images/Desktop2-Charger-Motion-M_1920x1080.webp",
    },
    {
      name: "Desktop Charger Motion P",
      description: "Desktop charger with LED indicators for each hearing aid.",
      compatible: "Motion Charge&Go P IX, Motion Charge&Go P X",
      image: "/images/Desktop3-Charger-Motion-P_with-Motion-ChGo-P-X_1920x1080.webp",
    },
    {
      name: "Desktop Charger Motion SP",
      description: "Desktop charger with status LEDs.",
      compatible: "Motion Charge&Go SP IX, Motion Charge&Go SP X",
      image: "/images/Desktop4-Charger-Motion-SP_with-Motion-ChGo-SP-X_1920x1080.webp",
    },
    {
      name: "Desktop Charger Insio AX",
      description: "Contactless charger for custom hearing aids. No specific placement needed.",
      compatible: "Insio Charge&Go AX",
      image: "/images/Desktop5-Charger-Insio-AX_open_LED-on_1920x1080.webp",
    },
    {
      name: "Multi Charger",
      description: "Desktop charger compatible with a range of rechargeable hearing aids.",
      compatible: "Pure & Motion families plus Orion Charge&Go",
      image: "/images/Multi-Charger6_stand_45-angle_1920x1080.webp",
    },
    {
      name: "Inductive Charger II",
      description: "Charger with protective lid, fast charging, and drying function via inductive charging.",
      compatible: "Motion Charge&Go X",
      image: "/images/Inductive7-Charger-II_open_closed_1920x1080.webp",
    },
    {
      name: "Inductive Charger E",
      description: "Inductive desktop charger compatible with Motion Charge&Go X (performance levels 1 & 2).",
      compatible: "Motion Charge&Go X",
      image: "/images/Inductive8-Charger-E_front_1920x1080.webp",
    },
  ]

  const dryCleanChargers = [
    {
      name: "Dry&Clean Charger Pure",
      description: "Charges, dries, and offers UVC sanitizing technology in ~15 minutes.",
      compatible: "Pure Charge&Go IX family, Pure Charge&Go AX family",
      image: "/images/Dry-Clean-Charger-Pure_closed_LED_1920x1080.webp",
      brand: "Signia"
    },
    {
      name: "Dry&Clean Charger Styletto",
      description: "Drying and UVC sanitizing while charging.",
      compatible: "Styletto IX, Styletto AX",
      image: "/images/Dry-Clean-Charger-Pure_closed_LED_1920x1080.webp",
      brand: "Signia"
    },
    {
      name: "Dry&Clean Charger Motion P",
      description: "Charging with drying and UVC sanitizing technology.",
      compatible: "Motion Charge&Go P IX, Motion Charge&Go P X",
      image: "/images/Dry-Clean-Charger-Pure_closed_LED_1920x1080.webp",
      brand: "Signia"
    },
    {
      name: "Dry&Clean Charger Motion SP",
      description: "Drying and sanitizing while charging with LED indicators.",
      compatible: "Motion Charge&Go SP IX, Motion Charge&Go SP X",
      image: "/images/Dry-Clean-Charger-Pure_closed_LED_1920x1080.webp",
      brand: "Signia"
    },
  ]

  const rextonChargers = [
    {
      name: "Rexton BiCore Portable Charger",
      description: "Pocket-sized portable charger with power bank for on-the-go charging.",
      compatible: "BiCore Charge&Go family",
      image: "/images/Portable1-Charger-Pure_with-Pure-ChGo-IX_1920x1080.webp",
      brand: "Rexton"
    },
    {
      name: "Rexton BiCore Desktop Charger",
      description: "Desktop charging solution with LED status indicators.",
      compatible: "BiCore Charge&Go hearing aids",
      image: "/images/Rexton-Reach-80-Hearing-Aid-charging-case.webp",
      brand: "Rexton"
    },
  ]

  const batteries = [
    {
      name: "Signia Hearing Aid Batteries",
      description: "Premium zinc-air batteries for non-rechargeable Signia hearing aids. Available in sizes 10, 312, 13, and 675.",
      sizes: "Size 10, 312, 13, 675",
      image: "/images/battery11.jpeg",
      brand: "Signia"
    },
    
  ]

  const accessories = [
    {
      name: "Signia TV Sound",
      description: "Stream sound directly from your TV to your Signia hearing aids via Bluetooth. Enjoy television with crystal-clear audio.",
      image: "/images/tvsound.jpeg",
      brand: "Signia"
    },
    {
      name: "Signia Remote Controls",
      description: "Convenient remote control for easy volume and program adjustments without touching your hearing aids.",
      image: "/images/miniPocket_Keyring_1920x1080.jpg",
      brand: "Signia"
    },
    
    {
      name: "Signia Protective Cases",
      description: "Durable protective cases to keep your hearing aids safe from damage and moisture.",
      image: "/images/Signia-JEWEL-CASE-MODULAR-SIGNIA-PREMIUM-WHTE-21014461.avif",
      brand: "Signia"
    },
  ]

  return (
    <div className="min-h-screen">


      <MainNavigation />
      <div className="relative w-full h-[400px] md:h-[600px]">
  <Image
    src="/images/Silk-IXqqq_bouldering_charger-in-hands_1920x400.webp" // Replace with your actual banner image
    alt="Hearing Aids Banner"
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
    
  </div>
</div>
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-r from-primary/10 to-secondary/10 py-12 md:py-20 text-center">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Signia Charging Solutions</h1>
          <p className="text-lg text-muted-foreground">
  Our state‑of‑the‑art rechargeable hearing aids come with a variety of charging solutions — portable, desktop, and Dry & Clean chargers to suit every need.
</p>

        </div>
      </section>

      {/* Portable Chargers */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-semibold text-center">Portable Chargers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portableChargers.map((item, i) => (
              <Card key={i} className="group overflow-hidden transition-all hover:shadow-xl">
                <img src={item.image} alt={item.name} className="h-64 w-full object-cover group-hover:scale-105 transition-transform"/>
                <CardContent>
                  <h3 className="mb-2 text-xl font-bold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <p className="text-sm font-semibold">Compatible with: {item.compatible}</p>
                  <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                    <Link href="/booking">Try The Charging Solution</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop Chargers */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-semibold text-center">Desktop Chargers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {desktopChargers.map((item, i) => (
              <Card key={i} className="group overflow-hidden transition-all hover:shadow-xl">
                <img src={item.image} alt={item.name} className="h-64 w-full object-cover group-hover:scale-105 transition-transform"/>
                <CardContent>
                  <h3 className="mb-2 text-xl font-bold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <p className="text-sm font-semibold">Compatible with: {item.compatible}</p>
                  <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                    <Link href="/booking">Try The Charging Solution</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dry & Clean Chargers */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-semibold text-center">Dry & Clean Chargers (Signia)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dryCleanChargers.map((item, i) => (
              <Card key={i} className="group overflow-hidden transition-all hover:shadow-xl">
 <Image
  src={item.image}
  alt={item.name}
  width={400}
  height={400}
  className="h-64 w-full object-cover transition-transform group-hover:scale-105"
/>
                <CardContent>
                  <h3 className="mb-2 text-xl font-bold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <p className="text-sm font-semibold">Compatible with: {item.compatible}</p>
                  <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                    <Link href="/booking">Try The Charging Solution</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rexton Chargers */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-semibold text-center">Rexton Chargers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rextonChargers.map((item, i) => (
              <Card key={i} className="group overflow-hidden transition-all hover:shadow-xl">
                <img src={item.image} alt={item.name} className="h-64 w-full object-cover transition-transform group-hover:scale-105"/>
                <CardContent>
                  <h3 className="mb-2 text-xl font-bold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <p className="text-sm font-semibold">Compatible with: {item.compatible}</p>
                  <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                    <Link href="/booking">Try The Charging Solution</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Batteries */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-semibold text-center">Hearing Aid Batteries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {batteries.map((item, i) => (
              <Card key={i} className="group overflow-hidden transition-all hover:shadow-xl">
                <img src={item.image} alt={item.name} className="h-64 w-full object-cover transition-transform group-hover:scale-105"/>
                <CardContent>
                  <h3 className="mb-2 text-xl font-bold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <p className="text-sm font-semibold">Available Sizes: {item.sizes}</p>
                  <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                    <Link href="/booking">Order Batteries</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Accessories */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-3xl font-semibold text-center">Hearing Aid Accessories</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Enhance your hearing aid experience with our complete range of accessories including TV Sound streaming, remote controls, cleaning kits, and protective cases.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accessories.map((item, i) => (
              <Card key={i} className="group overflow-hidden transition-all hover:shadow-xl">
                <img src={item.image} alt={item.name} className="h-64 w-full object-cover transition-transform group-hover:scale-105"/>
                <CardContent>
                  <h3 className="mb-2 text-xl font-bold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <p className="text-sm text-slate-500">Brand: {item.brand}</p>
                  <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                    <Link href="/booking">Get Accessory</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
