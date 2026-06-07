import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(amount)
}

export function calculatePrice(width: number, height: number, days: number): number {
  const squareMeters = width * height
  const pricePerMeter = 100000
  return squareMeters * pricePerMeter * days
}

export function calculateSquareMeters(width: number, height: number): number {
  return width * height
}

export function videoPath(filename: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  return basePath ? `${basePath}/videos/${filename}` : `/videos/${filename}`
}

export const VIDEO_FILES = [
  "giant-led-billboard-3.mp4",
  "giant-led-billboard.mp4",
  "giant-led-billboard-1.mp4",
  "giant-led-billboard-2.mp4",
]
