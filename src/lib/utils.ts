import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
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
