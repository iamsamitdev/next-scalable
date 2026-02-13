import { describe, it, expect } from "vitest"
import { cn } from "./utils"

// ฟังก์ชันเพิ่มเติมที่จะ Test
function formatPrice(price: number): string {
  return `฿${price.toLocaleString()}`
}

function calculateDiscount(price: number, percent: number): number {
  return price - (price * percent) / 100
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Test cn() utility ที่มีอยู่แล้วในโปรเจ็กต์
describe("cn (class merge utility)", () => {
  it("should merge class names", () => {
    expect(cn("px-4", "py-2")).toBe("px-4 py-2")
  })

  it("should handle conflicting Tailwind classes", () => {
    expect(cn("px-4", "px-6")).toBe("px-6")
  })

  it("should handle conditional classes", () => {
    const isActive = true
    expect(cn("text-sm", isActive && "font-bold")).toBe("text-sm font-bold")
  })
})

// Tests สำหรับ formatPrice
describe("formatPrice", () => {
  it("should format price with ฿ symbol", () => {
    expect(formatPrice(1000)).toBe("฿1,000")
  })

  it("should handle zero", () => {
    expect(formatPrice(0)).toBe("฿0")
  })

  it("should handle large numbers", () => {
    expect(formatPrice(1000000)).toBe("฿1,000,000")
  })
})

// Tests สำหรับ calculateDiscount
describe("calculateDiscount", () => {
  it("should calculate 10% discount", () => {
    expect(calculateDiscount(1000, 10)).toBe(900)
  })

  it("should calculate 50% discount", () => {
    expect(calculateDiscount(200, 50)).toBe(100)
  })

  it("should return same price for 0% discount", () => {
    expect(calculateDiscount(500, 0)).toBe(500)
  })
})

// Tests สำหรับ isValidEmail
describe("isValidEmail", () => {
  it("should return true for valid email", () => {
    expect(isValidEmail("test@example.com")).toBe(true)
  })

  it("should return false for invalid email", () => {
    expect(isValidEmail("invalid-email")).toBe(false)
  })

  it("should return false for empty string", () => {
    expect(isValidEmail("")).toBe(false)
  })
})