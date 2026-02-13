import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import { ThemeToggleSimple } from "./theme-toggle"

// Mock useTheme hook
vi.mock("@/contexts/theme-context", () => ({
  useTheme: vi.fn(() => ({
    theme: "light",
    setTheme: vi.fn(),
    actualTheme: "light",
  })),
}))

describe("ThemeToggleSimple", () => {
  it("should render toggle button", () => {
    render(<ThemeToggleSimple />)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  })

  it("should have accessible name", () => {
    render(<ThemeToggleSimple />)
    const button = screen.getByRole("button")
    expect(button).toHaveAttribute("aria-label")
  })
})