import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import func2url from "../../backend/func2url.json"

interface LeadModalProps {
  open: boolean
  onClose: () => void
  title?: string
}

export function LeadModal({ open, onClose, title = "Оставить заявку" }: LeadModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setLoading(true)
    setError("")
    try {
      const res = await fetch(func2url["send-lead"], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim() }),
      })
      if (!res.ok) throw new Error("Ошибка отправки")
      setSent(true)
    } catch {
      setError("Не удалось отправить заявку. Попробуйте ещё раз.")
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setName("")
      setPhone("")
      setSent(false)
      setError("")
    }, 300)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
          <motion.div
            className="relative z-10 w-full max-w-md rounded-2xl border border-red-800/30 bg-gray-950/95 p-8 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {sent ? (
              <div className="flex flex-col items-center gap-4 py-4 text-center">
                <span className="text-4xl">✅</span>
                <h3 className="font-heading text-2xl font-bold text-white">Заявка принята!</h3>
                <p className="text-gray-400">Мы свяжемся с вами в ближайшее время и уточним детали.</p>
                <button
                  onClick={handleClose}
                  className="mt-2 rounded-xl bg-red-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-red-700 transition-colors"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm mb-6">Оставьте контакты — свяжемся и уточним детали заказа.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-gray-400">Имя</label>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-red-600 transition-colors"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-gray-400">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="rounded-xl border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-red-600 transition-colors"
                      required
                    />
                  </div>
                  {error && <p className="text-red-400 text-sm">{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 rounded-xl bg-gradient-to-r from-red-500 to-red-700 px-6 py-3 font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {loading ? "Отправляем..." : "Отправить заявку"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
