import { Sparkles, Sun, Diamond, Bird, Activity, Zap, Circle } from "lucide-react"

const partners = [
  { name: "GameZone", icon: Sparkles },
  { name: "PixelHub", icon: Sun },
  { name: "ChatVerse", icon: Diamond },
  { name: "NeonClub", icon: Bird },
  { name: "StreamPulse", icon: Activity },
  { name: "VibeServer", icon: Zap },
  { name: "MetaCrew", icon: Circle },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {partners.map((partner) => (
        <div key={partner.name} className="flex items-center gap-2 text-gray-500">
          <partner.icon className="h-4 w-4" />
          <span className="text-sm font-medium">{partner.name}™</span>
        </div>
      ))}
    </section>
  )
}