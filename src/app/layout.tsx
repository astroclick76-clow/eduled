import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EDULED | Pantallas LED Gigantes para Eventos Inolvidables",
  description:
    "Alquiler, instalación y venta de pantallas LED gigantes HD para eventos, conciertos, publicidad, festivales, escenarios, streaming y activaciones comerciales. Impacto visual profesional.",
  keywords:
    "pantallas LED, pantallas gigantes, alquiler pantallas LED, eventos, conciertos, publicidad exterior, instalación LED, Chile",
  openGraph: {
    title: "EDULED | Pantallas LED Profesionales",
    description: "Transformamos tu evento en una experiencia épica con pantallas LED gigantes HD.",
    type: "website",
    locale: "es_CL",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
