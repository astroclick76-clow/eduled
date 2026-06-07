"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Calculator, MessageCircle } from "lucide-react"
import { videoPath } from "@/lib/utils"

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative py-32 sm:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster=""
        >
          <source src={videoPath("giant-led-billboard-3.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black/95 via-deep-black/80 to-deep-black/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-deep-black" />
        <div className="absolute inset-0 bg-grid-large opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-sm text-gray-300 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            ¿Listo para tu evento?
          </motion.span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Convierte tu evento en
            <br />
            <span className="text-gradient text-glow">una experiencia épica</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo nuestras pantallas LED pueden transformar
            tu próximo evento en algo inolvidable.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#calculadora"
              className="group relative px-10 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-electric-blue to-violet text-white overflow-hidden transition-all duration-300 neon-glow hover:scale-105 flex items-center gap-2"
            >
              <Calculator size={20} />
              Solicitar Presupuesto
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/541155551234"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-4 rounded-full text-lg font-semibold glass text-white border border-white/10 hover:border-green-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle size={20} className="text-green-400" />
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
