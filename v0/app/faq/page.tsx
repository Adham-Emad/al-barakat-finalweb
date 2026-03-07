import type { Metadata } from "next"
import FAQClientPage from "./faq-client"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Barakat Hearing Care",
  description: "Find answers to common questions about hearing aids, hearing loss, and our services.",
}

export default function FAQPage() {
  return <FAQClientPage />
}
