import PureClient from "./PureClient"

export const metadata = {
  title: "Signia Pure Hearing Aids | Al-Barakat",
  description: "Discover Signia Pure lineup - premium hearing aids with advanced technology and natural sound quality.",
  alternates: {
    canonical: "https://al-barakat.com/products/hearing-aid-brands/signia/pure",
  },
  openGraph: {
    title: "Signia Pure - Premium Hearing Aids",
    description: "Experience brilliant hearing with Signia Pure RIC and 312 models",
    url: "https://al-barakat.com/products/hearing-aid-brands/signia/pure",
    type: "website",
  },
}

export default function PurePage() {
  return <PureClient />
}