import { describe, it, expect } from "vitest"
import { loginSchema, registerSchema } from "./authSchema"

describe("loginSchema", () => {
  it("should validate correct login data", () => {
    const result = loginSchema.safeParse({
      email: "admin@smartstore.com",
      password: "password123",
    })
    expect(result.success).toBe(true)
  })

  it("should reject invalid email", () => {
    const result = loginSchema.safeParse({
      email: "invalid-email",
      password: "password123",
    })
    expect(result.success).toBe(false)
  })

  it("should reject short password", () => {
    const result = loginSchema.safeParse({
      email: "admin@smartstore.com",
      password: "12345",
    })
    expect(result.success).toBe(false)
  })
})

describe("registerSchema", () => {
  it("should validate correct register data", () => {
    const result = registerSchema.safeParse({
      fullname: "สมชาย ใจดี",
      username: "somchai",
      email: "somchai@smartstore.com",
      password: "Password1!",
      password_confirmation: "Password1!",
      tel: "0812345678",
      role: "user",
    })
    expect(result.success).toBe(true)
  })

  it("should reject mismatched passwords", () => {
    const result = registerSchema.safeParse({
      fullname: "สมชาย ใจดี",
      username: "somchai",
      email: "somchai@smartstore.com",
      password: "Password1!",
      password_confirmation: "Different1!",
      tel: "0812345678",
      role: "user",
    })
    expect(result.success).toBe(false)
  })

  it("should reject invalid phone number", () => {
    const result = registerSchema.safeParse({
      fullname: "สมชาย ใจดี",
      username: "somchai",
      email: "somchai@smartstore.com",
      password: "Password1!",
      password_confirmation: "Password1!",
      tel: "123",
      role: "user",
    })
    expect(result.success).toBe(false)
  })
})