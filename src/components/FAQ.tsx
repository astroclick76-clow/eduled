"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "¿Qué tipo de pantallas LED ofrecen?",
    a: "Ofrecemos pantallas LED de última generación para interiores y exteriores, con resoluciones desde HD hasta 4K, brillo adaptable y tamaños personalizados. Trabajamos con las mejores marcas del mercado.",
  },
  {
    q: "¿Cuánto tiempo toma la instalación?",
    a: "Dependiendo del tamaño y complejidad, una instalación estándar puede tomar entre 2 a 6 horas. Proyectos más grandes pueden requerir planificación anticipada. Siempre coordinamos contigo para minimizar tiempos.",
  },
  {
    q: "¿Ofrecen soporte técnico durante el evento?",
    a: "Sí, incluimos soporte técnico especializado durante todo tu evento. Nuestro equipo está presente para garantizar que todo funcione perfectamente de principio a fin.",
  },
  {
    q: "¿Cuál es el costo por metro cuadrado?",
    a: "Nuestro precio base es de $100.000 CLP por metro cuadrado por día. El costo final depende de la resolución, tipo de pantalla, duración del evento y servicios adicionales.",
  },
  {
    q: "¿Hacen instalaciones en todo Chile?",
    a: "Sí, realizamos instalaciones en todo el territorio nacional. Tenemos cobertura desde Arica hasta Punta Arenas, con equipos de instalación en las principales ciudades.",
  },
  {
    q: "¿Qué mantenimiento requieren las pantallas LED?",
    a: "Nuestras pantallas LED requieren mantenimiento mínimo. Nosotros nos encargamos del mantenimiento preventivo y correctivo. Solo necesitas proporcionar alimentación eléctrica estable.",
  },
  {
    q: "¿Puedo comprar pantallas LED en lugar de alquilar?",
    a: "Sí, ofrecemos venta de pantallas LED para empresas que requieren soluciones permanentes. Consulta con nuestro equipo para precios y configuraciones personalizadas.",
  },
  {
    q: "¿Cómo solicito una cotización?",
    a: "Puedes usar nuestra calculadora de presupuesto en esta página, llamarnos o escribirnos por WhatsApp. Te responderemos en menos de 24 horas con una cotización detallada.",
  },
]

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass-card rounded-xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="text-white font-medium pr-4">{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} className="text-electric-blue" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 gradient-radial" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-widest uppercase text-gray-500 font-mono">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-white">Preguntas </span>
            <span className="text-gradient text-glow">Frecuentes</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
