import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { PricingSection } from "@/components/PricingSection"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <PricingSection />
      <footer className="py-8 text-center text-sm text-gray-400">
        Lolka.app — бот, который делает чат живым.{" "}
        <span className="font-medium text-white">Подключи за пару кликов.</span>
      </footer>
    </main>
  )
}