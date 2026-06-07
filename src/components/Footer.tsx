"use client"

import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, ArrowUp } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const quickLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Calculadora", href: "#calculadora" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer id="contacto" className="relative pt-24 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 gradient-radial" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue to-violet flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">EDU</span>
                <span className="text-gradient">LED</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Tecnología LED profesional para eventos inolvidables. Alquiler, instalación y venta de pantallas LED gigantes HD.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-electric-blue/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Servicios</h3>
            <ul className="space-y-3">
              <li className="text-gray-500 text-sm">Pantallas para Conciertos</li>
              <li className="text-gray-500 text-sm">Eventos Corporativos</li>
              <li className="text-gray-500 text-sm">Publicidad Exterior</li>
              <li className="text-gray-500 text-sm">Streaming y Broadcast</li>
              <li className="text-gray-500 text-sm">Instalaciones a Medida</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <Phone size={16} className="mt-0.5 text-electric-blue flex-shrink-0" />
                <span>+56 9 1234 5678</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <Mail size={16} className="mt-0.5 text-electric-blue flex-shrink-0" />
                <span>contacto@eduled.cl</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <MapPin size={16} className="mt-0.5 text-electric-blue flex-shrink-0" />
                <span>Santiago, Chile</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} EDULED. Todos los derechos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-electric-blue/50 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
