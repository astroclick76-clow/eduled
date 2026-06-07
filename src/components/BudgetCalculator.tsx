"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Calculator,
  Mail,
  User,
  Phone,
  Maximize2,
  CalendarDays,
  Tag,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { formatCurrency, calculatePrice, calculateSquareMeters } from "@/lib/utils"

const eventTypes = [
  "Concierto",
  "Evento Corporativo",
  "Festival",
  "Publicidad",
  "Streaming",
  "Producción Audiovisual",
  "Evento Deportivo",
  "Otro",
]

export default function BudgetCalculator() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [step, setStep] = useState<"email" | "calculator" | "result">("email")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    width: 4,
    height: 3,
    eventType: "Concierto",
    days: 1,
  })
  const [submitted, setSubmitted] = useState(false)

  const sqMeters = calculateSquareMeters(formData.width, formData.height)
  const totalPrice = calculatePrice(formData.width, formData.height, formData.days)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.email) {
      setStep("calculator")
    }
  }

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    const data = { ...formData, totalPrice, sqMeters }
    console.log("Budget data saved:", data)
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("eduled_lead", JSON.stringify(data))
      } catch {}
    }
    setStep("result")
    setSubmitted(true)
  }

  const handleSubmitLead = () => {
    const data = { ...formData, totalPrice, sqMeters }
    console.log("Lead submitted:", data)
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("eduled_lead_submitted", JSON.stringify(data))
      } catch {}
    }
  }

  return (
    <section id="calculadora" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 gradient-radial" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-widest uppercase text-gray-500 font-mono">
            Calculadora de Presupuesto
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-white">Calcula tu </span>
            <span className="text-gradient text-glow">Presupuesto</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Ingresa las medidas de tu pantalla y obtén un presupuesto estimado al instante.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {step === "email" && (
              <motion.div
                key="email"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="glass-card rounded-3xl p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue to-violet p-3">
                      <Mail className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Comienza tu Cotización
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Ingresa tu correo para acceder a la calculadora
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleEmailSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Correo Electrónico *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tu@email.com"
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/50 transition-all"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl text-base font-semibold bg-gradient-to-r from-electric-blue to-violet text-white hover:scale-[1.02] transition-all duration-300 neon-glow flex items-center justify-center gap-2"
                    >
                      Acceder a la Calculadora
                      <ArrowRight size={18} />
                    </button>
                  </form>

                  <p className="mt-4 text-center text-xs text-gray-500">
                    Tus datos están seguros. No compartimos información.
                  </p>
                </div>
              </motion.div>
            )}

            {step === "calculator" && (
              <motion.div
                key="calculator"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
              >
                <form onSubmit={handleCalculate}>
                  <div className="glass-card rounded-3xl p-8 sm:p-10 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                      <Calculator size={22} className="text-electric-blue" />
                      Configura tu pantalla
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Nombre</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Tu nombre"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue/50 transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Teléfono (opcional)</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+54 11 5555-1234"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue/50 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Ancho (metros)</label>
                        <div className="relative">
                          <Maximize2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                          <input
                            type="number"
                            min={1}
                            max={50}
                            step={0.5}
                            value={formData.width}
                            onChange={(e) => setFormData({ ...formData, width: parseFloat(e.target.value) || 1 })}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-electric-blue/50 transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Alto (metros)</label>
                        <div className="relative">
                          <Maximize2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                          <input
                            type="number"
                            min={1}
                            max={50}
                            step={0.5}
                            value={formData.height}
                            onChange={(e) => setFormData({ ...formData, height: parseFloat(e.target.value) || 1 })}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-electric-blue/50 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Tipo de Evento</label>
                        <div className="relative">
                          <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                          <select
                            value={formData.eventType}
                            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white appearance-none focus:outline-none focus:border-electric-blue/50 transition-all"
                          >
                            {eventTypes.map((t) => (
                              <option key={t} value={t} className="bg-dark-gray">
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Días de Alquiler</label>
                        <div className="relative">
                          <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                          <input
                            type="number"
                            min={1}
                            max={30}
                            value={formData.days}
                            onChange={(e) => setFormData({ ...formData, days: parseInt(e.target.value) || 1 })}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-electric-blue/50 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Metros cuadrados:</span>
                        <span className="text-white font-semibold">{sqMeters} m²</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-2">
                        <span className="text-gray-400">Precio por m²/día:</span>
                        <span className="text-white font-semibold">{formatCurrency(100000)}</span>
                      </div>
                      <div className="h-px bg-white/5 my-3" />
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 font-medium">Total estimado:</span>
                        <span className="text-xl font-bold text-gradient-cyan text-glow-cyan">
                          {formatCurrency(totalPrice)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-base font-semibold bg-gradient-to-r from-electric-blue to-violet text-white hover:scale-[1.02] transition-all duration-300 neon-glow flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Recibir Presupuesto
                  </button>
                </form>
              </motion.div>
            )}

            {step === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="glass-card rounded-3xl p-8 sm:p-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    ¡Presupuesto Enviado!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Hemos recibido tus datos. Te contactaremos pronto con un presupuesto detallado.
                  </p>

                  <div className="max-w-sm mx-auto p-5 rounded-xl bg-white/5 border border-white/5 text-left space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Cliente:</span>
                      <span className="text-white">{formData.name || formData.email}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Pantalla:</span>
                      <span className="text-white">{formData.width} × {formData.height} m</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Área:</span>
                      <span className="text-white">{sqMeters} m²</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Evento:</span>
                      <span className="text-white">{formData.eventType}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Días:</span>
                      <span className="text-white">{formData.days}</span>
                    </div>
                    <div className="h-px bg-white/10 my-2" />
                    <div className="flex justify-between">
                      <span className="text-gray-300 font-semibold">Total:</span>
                      <span className="text-xl font-bold text-gradient-cyan text-glow-cyan">
                        {formatCurrency(totalPrice)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmitLead}
                    className="mt-6 px-8 py-3.5 rounded-xl text-base font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 mx-auto"
                  >
                    <CheckCircle size={18} />
                    Confirmar Solicitud
                  </button>
                  <p className="mt-4 text-xs text-gray-500">
                    Tus datos han sido guardados. Te responderemos a la brevedad.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
