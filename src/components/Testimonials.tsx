"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const testimonials = [
  {
    quote:
      "La calidad de las pantallas LED superó todas nuestras expectativas. El impacto visual fue increíble y nuestros asistentes quedaron maravillados.",
    author: "Carlos Mendoza",
    role: "Director de Producción",
    company: "Festival Vive Latino",
  },
  {
    quote:
      "Profesionalismo absoluto. La instalación fue impecable y el resultado visual transformó completamente nuestro evento corporativo.",
    author: "María Fernanda Ruiz",
    role: "Gerente de Marketing",
    company: "Empresas Copec",
  },
  {
    quote:
      "La mejor tecnología LED que hemos usado. La definición y el brillo de las pantallas hiceron que nuestra transmisión en vivo se viera espectacular.",
    author: "Andrés Parra",
    role: "Director Audiovisual",
    company: "Mega TV",
  },
  {
    quote:
      "Contratamos pantallas para nuestro festival y fue la mejor decisión. El equipo fue súper profesional y el resultado, simplemente espectacular.",
    author: "Valentina Soto",
    role: "Productora de Eventos",
    company: "Bizarro Producciones",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
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
            Testimonios
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-white">Lo que dicen </span>
            <span className="text-gradient text-glow">nuestros clientes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card rounded-2xl p-8 relative"
            >
              <div className="absolute top-6 right-6 text-5xl font-serif text-electric-blue/20 leading-none">
                &quot;
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-blue to-violet flex items-center justify-center text-white font-semibold text-lg">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.author}</p>
                  <p className="text-gray-500 text-xs">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
