"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react"

const mediaItems = [
  { type: "image" as const, emoji: "🎪", title: "Concierto Masivo", desc: "Pantalla LED gigante en estadio" },
  { type: "image" as const, emoji: "🎬", title: "Producción Audiovisual", desc: "Set de grabación con fondo LED" },
  { type: "image" as const, emoji: "🏢", title: "Evento Corporativo", desc: "Presentación empresarial premium" },
  { type: "image" as const, emoji: "🎵", title: "Festival de Música", desc: "Escenario principal con pantallas LED" },
  { type: "image" as const, emoji: "📢", title: "Publicidad Exterior", desc: "Valla publicitaria digital HD" },
  { type: "image" as const, emoji: "🎭", title: "Teatro y Escenografía", desc: "Fondo LED para producción teatral" },
  { type: "image" as const, emoji: "🌃", title: "Instalación Nocturna", desc: "Pantalla LED en evento nocturno" },
  { type: "image" as const, emoji: "🏟️", title: "Evento Deportivo", desc: "Pantalla gigante en estadio deportivo" },
  { type: "image" as const, emoji: "✨", title: "Activación Comercial", desc: "Experiencia interactiva con pantallas LED" },
]

const videoFiles = [
  "/videos/giant-led-billboard-1.mp4",
  "/videos/giant-led-billboard-2.mp4",
  "/videos/giant-led-billboard-3.mp4",
  "/videos/giant-led-billboard.mp4",
]

function GalleryItem({
  item,
  index,
  onOpen,
}: {
  item: (typeof mediaItems)[0]
  index: number
  onOpen: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const sizes = [
    "md:row-span-2 md:col-span-2",
    "md:row-span-1 md:col-span-1",
    "md:row-span-1 md:col-span-1",
    "md:row-span-1 md:col-span-1",
    "md:row-span-2 md:col-span-1",
    "md:row-span-1 md:col-span-1",
    "md:row-span-1 md:col-span-2",
    "md:row-span-1 md:col-span-1",
    "md:row-span-1 md:col-span-1",
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${sizes[index]} aspect-[4/3] md:aspect-auto`}
      onClick={onOpen}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dark-gray to-deep-black flex items-center justify-center">
        <span className="text-6xl sm:text-7xl transition-transform duration-500 group-hover:scale-110">
          {item.emoji}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="text-white font-semibold text-lg">{item.title}</h3>
        <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
      </div>
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      </div>
    </motion.div>
  )
}

function VideoCarousel() {
  const [current, setCurrent] = useState(0)

  return (
    <div className="relative rounded-2xl overflow-hidden bg-dark-gray aspect-video group">
      <video
        key={current}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={videoFiles[current]} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <Play size={16} className="text-white" />
        <span className="text-white text-sm font-medium">Video Demo {current + 1}</span>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-2">
        {videoFiles.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-electric-blue w-6" : "bg-white/30"
            }`}
          />
        ))}
      </div>
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + videoFiles.length) % videoFiles.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={20} className="text-white" />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % videoFiles.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={20} className="text-white" />
      </button>
    </div>
  )
}

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="galeria" className="relative py-24 sm:py-32 overflow-hidden">
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
            Galería Visual
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-white">Impacto </span>
            <span className="text-gradient text-glow">Visual</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Explora nuestros proyectos y el poder de las pantallas LED en acción.
          </p>
        </motion.div>

        <div className="mb-12">
          <VideoCarousel />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {mediaItems.map((item, i) => (
            <GalleryItem key={i} item={item} index={i} onOpen={() => openLightbox(i)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              onClick={() => setLightboxOpen(false)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl w-full aspect-video rounded-2xl overflow-hidden bg-dark-gray flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-9xl">{mediaItems[selectedIndex].emoji}</span>
            </motion.div>
            <div className="absolute bottom-8 text-center text-white">
              <h3 className="text-xl font-semibold">{mediaItems[selectedIndex].title}</h3>
              <p className="text-gray-400">{mediaItems[selectedIndex].desc}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
