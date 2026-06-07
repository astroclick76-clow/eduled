"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Play, Calculator, Image as ImageIcon } from "lucide-react"
import { videoPath, VIDEO_FILES } from "@/lib/utils"

const videos = VIDEO_FILES.map(videoPath)

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length)
    }

    video.addEventListener("ended", handleEnded)
    return () => video.removeEventListener("ended", handleEnded)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videos[currentVideo]
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [currentVideo])

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-deep-black z-10" />

      <video
        ref={videoRef}
        autoPlay
        muted
        loop={false}
        playsInline
        preload="auto"
        className="hero-video"
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src={videos[0]} type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-radial opacity-60" />
        <div className="absolute inset-0 bg-grid-large" />
      </div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs sm:text-sm text-gray-300 border border-white/5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Tecnología LED Profesional
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-5xl mx-auto leading-tight"
        >
          <span className="text-white">Pantallas LED Gigantes</span>
          <br />
          <span className="text-gradient text-glow">
            Para Eventos Inolvidables
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Impacto visual en alta definición para conciertos, festivales, publicidad y
          activaciones comerciales. Convierte tu evento en una experiencia épica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#calculadora"
            className="group relative px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-electric-blue to-violet text-white overflow-hidden transition-all duration-300 neon-glow hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Calculator size={20} />
              Solicitar Presupuesto
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#galeria"
            className="group px-8 py-4 rounded-full text-base font-semibold glass text-white border border-white/10 hover:border-electric-blue/50 transition-all duration-300 flex items-center gap-2"
          >
            <ImageIcon size={20} />
            Ver Proyectos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="text-white/40" size={28} />
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 right-8 flex gap-2">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentVideo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentVideo ? "bg-electric-blue w-6" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
