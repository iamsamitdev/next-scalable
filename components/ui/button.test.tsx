import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { Button } from "./button"

describe("Button", () => {
  it("should render button with text", () => {
    render(<Button>คลิกเลย</Button>)
    expect(screen.getByText("คลิกเลย")).toBeInTheDocument()
  })

  it("should render different variants", () => {
    const { rerender } = render(<Button variant="default">Default</Button>)
    expect(screen.getByText("Default")).toHaveClass("bg-primary")

    rerender(<Button variant="destructive">Delete</Button>)
    expect(screen.getByText("Delete")).toHaveClass("bg-destructive")

    rerender(<Button variant="outline">Outline</Button>)
    expect(screen.getByText("Outline")).toHaveClass("border")

    rerender(<Button variant="ghost">Ghost</Button>)
    expect(screen.getByText("Ghost")).toHaveClass("hover:bg-accent")
  })

  it("should render different sizes", () => {
    const { rerender } = render(<Button size="sm">Small</Button>)
    expect(screen.getByText("Small")).toHaveClass("h-8")

    rerender(<Button size="lg">Large</Button>)
    expect(screen.getByText("Large")).toHaveClass("h-10")
  })

  it("should handle click events", () => {
    let clicked = false
    render(<Button onClick={() => (clicked = true)}>Click Me</Button>)
    fireEvent.click(screen.getByText("Click Me"))
    expect(clicked).toBe(true)
  })

  it("should be disabled when disabled prop is set", () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByText("Disabled")).toBeDisabled()
  })
})