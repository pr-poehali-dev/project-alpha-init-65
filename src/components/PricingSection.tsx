import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Попробуй бота без ограничений по времени",
    features: [
      "До 1 сервера",
      "50 команд в день",
      "Базовая модерация",
      "Музыкальный плеер",
    ],
    cta: "Начать бесплатно",
    href: "#",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "299",
    description: "Для активных сообществ с расширенными возможностями",
    features: [
      "До 10 серверов",
      "Безлимитные команды",
      "Расширенная модерация",
      "Система уровней и наград",
      "Рассылки участникам",
      "Приоритетная поддержка",
    ],
    cta: "Попробовать Pro",
    href: "#",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "999",
    description: "Для крупных сообществ и бизнеса",
    features: [
      "Неограниченные серверы",
      "API доступ",
      "Кастомные команды",
      "Выделенный сервер бота",
      "Персональный менеджер",
      "SLA гарантии",
    ],
    cta: "Связаться с нами",
    href: "#",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section className="px-4 md:px-8 py-16" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Простые и честные тарифы
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Начните бесплатно — платите только тогда, когда вырастете
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 flex flex-col border ${
                plan.highlighted
                  ? "bg-violet-600/10 border-violet-500"
                  : "bg-[#141414] border-[#262626]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
                    Популярный
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}₽</span>
                  {plan.price !== "0" && (
                    <span className="text-gray-400 mb-1">/мес</span>
                  )}
                  {plan.price === "0" && (
                    <span className="text-gray-400 mb-1">навсегда</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className={`h-4 w-4 flex-shrink-0 ${plan.highlighted ? "text-violet-400" : "text-gray-500"}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href={plan.href} target="_blank" rel="noopener noreferrer">
                <Button
                  className={`w-full rounded-full ${
                    plan.highlighted
                      ? "bg-violet-600 hover:bg-violet-700 text-white"
                      : "bg-[#252525] text-gray-300 hover:bg-[#2a2a2a] hover:text-white"
                  }`}
                >
                  {plan.cta}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
