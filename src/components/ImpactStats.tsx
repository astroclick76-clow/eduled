"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Ruler, Music, Users, Calendar } from "lucide-react"

const stats = [
  {
    value: 25000,
    suffix: "+",
    label: "Metros Cuadrados Instalados",
    icon: Ruler,
  },
  {
    value: 850,
    suffix: "+",
    label: "Eventos Realizados",
    icon: Music,
  },
  {
    value: 500,
    suffix: "+",
    label: "Clientes Satisfechos",
    icon: Users,
  },
  {
    value: 15,
    suffix: "+",
    label: "Años de Experiencia",
    icon: Calendar,
  },
]

function AnimatedCounter({
  value,
  suffix,
  label,
  icon: Icon,
  index,
}: {
  value: number
  suffix: string
  label: string
  icon: React.ElementType
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const countRef = useRef<HTMLSpanElement>(null)
  const counted = useRef(false)

  if (isInView && !counted.current && countRef.current) {
    counted.current = true
    let current = 0
    const increment = Math.ceil(value / 60)
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        current = value
        clearInterval(timer)
      }
      if (countRef.current) {
        countRef.current.textContent = current.toLocaleString()
      }
    }, 25)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="glass-card rounded-2xl p-8 text-center">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-electric-blue to-violet p-3 mx-auto mb-5">
          <Icon className="w-full h-full text-white" />
        </div>
        <div className="text-4xl sm:text-5xl font-bold text-gradient-cyan text-glow-cyan">
          <span ref={countRef}>0</span>
          <span>{suffix}</span>
        </div>
        <p className="mt-3 text-gray-400 text-sm font-medium">{label}</p>
      </div>
    </motion.div>
  )
}

export default function ImpactStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
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
            Nuestro Impacto
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-white">Cifras que </span>
            <span className="text-gradient text-glow">Hablan</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <AnimatedCounter key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
