"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Music,
  Building2,
  Megaphone,
  Theater,
  Radio,
  Clapperboard,
  Monitor,
  Ruler,
} from "lucide-react"

const services = [
  {
    icon: Music,
    title: "Pantallas LED para Conciertos",
    desc: "Pantallas gigantes HD para escenarios, festivales y giras musicales con impacto visual inolvidable.",
    gradient: "from-electric-blue to-cyan-neon",
  },
  {
    icon: Building2,
    title: "Eventos Corporativos",
    desc: "Soluciones LED premium para lanzamientos, conferencias, ferias y eventos empresariales de alto nivel.",
    gradient: "from-violet to-electric-blue",
  },
  {
    icon: Megaphone,
    title: "Publicidad Exterior",
    desc: "Vallas publicitarias LED digitales para campañas outdoor con máxima visibilidad e impacto.",
    gradient: "from-cyan-neon to-electric-blue",
  },
  {
    icon: Theater,
    title: "Escenarios y Escenografía",
    desc: "Instalaciones LED personalizadas para producciones teatrales, televisivas y espectáculos en vivo.",
    gradient: "from-electric-blue to-violet",
  },
  {
    icon: Radio,
    title: "Streaming y Transmisiones",
    desc: "Pantallas de alta calidad para streaming en vivo, broadcast y producciones audiovisuales.",
    gradient: "from-violet to-cyan-neon",
  },
  {
    icon: Clapperboard,
    title: "Producción Audiovisual",
    desc: "Equipamiento LED profesional para sets de grabación, estudios y producciones cinematográficas.",
    gradient: "from-cyan-neon to-violet",
  },
  {
    icon: Monitor,
    title: "Pantallas Indoor / Outdoor",
    desc: "Soluciones LED para interiores y exteriores con alta resistencia y brillo adaptable.",
    gradient: "from-violet to-electric-blue",
  },
  {
    icon: Ruler,
    title: "Instalaciones a Medida",
    desc: "Diseño e instalación de pantallas LED gigantes personalizadas para cualquier tipo de evento o espacio.",
    gradient: "from-electric-blue to-cyan-neon",
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-card rounded-2xl p-6 sm:p-8 h-full cursor-default">
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
        >
          <service.icon className="w-full h-full text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
          {service.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
        <div className="mt-5 pt-5 border-t border-white/5">
          <a
            href="#calculadora"
            className="text-sm font-medium text-electric-blue hover:text-cyan-neon transition-colors flex items-center gap-1"
          >
            Solicitar cotización
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}
      />
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="servicios" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-radial-violet" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-widest uppercase text-gray-500 font-mono">
            Nuestros Servicios
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-white">Soluciones LED </span>
            <span className="text-gradient text-glow">Profesionales</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Desde conciertos masivos hasta eventos corporativos, ofrecemos la
            mejor tecnología LED del mercado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
