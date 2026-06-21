import { Blocks, ArrowUpRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const commands = [
  { cmd: "/play", info: "Включить музыку в голосовом канале", code: "Музыка", color: "bg-violet-600" },
  { cmd: "/ban", info: "Заблокировать нарушителя", code: "Модерация", color: "bg-rose-600" },
  { cmd: "/rank", info: "Показать уровень участника", code: "Активность", color: "bg-teal-600" },
  { cmd: "/meme", info: "Случайный мем в чат", code: "Развлечения", color: "bg-amber-600" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Blocks className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Сотни команд из коробки</h3>
      <p className="mb-4 text-sm text-gray-400">Музыка, модерация, игры и уровни — всё работает сразу после подключения бота</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {commands.map((command, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${command.color} text-white text-xs font-mono`}>
                /
              </div>
              <div>
                <p className="text-sm font-medium text-white font-mono">{command.cmd}</p>
                <p className="text-xs text-gray-500">{command.info}</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">{command.code}</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-white hover:bg-[#1f1f1f] mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Своя команда
        </Button>
      </div>
    </div>
  )
}