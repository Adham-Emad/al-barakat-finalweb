import SilkClient from "./SilkClient"

export const metadata = {
  title: "Signia Silk Hearing Aids | Al-Barakat",
  description: "Discover Signia Silk X and Silk Charge&Go IX - ultra-discreet hearing aids with advanced technology.",
  alternates: {
    canonical: "https://al-barakat.com/products/hearing-aid-brands/signia/silk",
  },
  openGraph: {
    title: "Signia Silk - Ultra-Discreet Hearing Aids",
    description: "Experience nearly invisible hearing with Silk X and Silk Charge&Go IX",
    url: "https://al-barakat.com/products/hearing-aid-brands/signia/silk",
    type: "website",
  },
}

export default function SilkPage() {
  return <SilkClient />
}