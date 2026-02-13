import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email("อีเมลไม่ถูกต้อง"),
  password: z.string().min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"),
})

export const registerSchema = z.object({
  fullname: z.string().min(2, "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร"),
  username: z.string().min(3, "Username ต้องมีอย่างน้อย 3 ตัวอักษร"),
  email: z.string().email("อีเมลไม่ถูกต้อง"),
  password: z.string().min(8, "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"),
  password_confirmation: z.string(),
  tel: z.string().regex(/^0[0-9]{8,9}$/, "เบอร์โทรไม่ถูกต้อง"),
  role: z.enum(["user", "admin"]),
}).refine((data) => data.password === data.password_confirmation, {
  message: "รหัสผ่านไม่ตรงกัน",
  path: ["password_confirmation"],
})

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
