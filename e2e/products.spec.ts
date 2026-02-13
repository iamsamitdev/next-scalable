import { test, expect } from "@playwright/test"

test.describe("Products Page — URL State", () => {
  test("should display products page", async ({ page }) => {
    await page.goto("/admin/products")
    await expect(page.getByText("สินค้า")).toBeVisible()
  })

  test("should search products and update URL", async ({ page }) => {
    await page.goto("/admin/products")

    await page.fill('input[type="search"]', "iPhone")

    // รอ URL เปลี่ยน
    await page.waitForURL(/search=/)

    // ตรวจสอบว่า URL มี search param
    expect(page.url()).toContain("search=iPhone")
  })

  test("should persist search after page reload", async ({ page }) => {
    await page.goto("/admin/products?search=iPhone&category=Electronics")

    // ตรวจสอบว่า Filter ยังคงอยู่หลัง reload
    await page.reload()
    expect(page.url()).toContain("search=iPhone")
    expect(page.url()).toContain("category=Electronics")
  })
})