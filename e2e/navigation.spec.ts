import { test, expect } from "@playwright/test"

test.describe("Front Page Navigation", () => {
  test("should display home page", async ({ page }) => {
    await page.goto("/")
    await expect(page).toHaveTitle(/Smart Store|ระบบจัดการคลังสินค้า/)
  })

  test("should navigate to about page", async ({ page }) => {
    await page.goto("/")
    await page.click('a[href="/about"]')
    await page.waitForURL("/about")
    await expect(page.getByText("เกี่ยวกับเรา")).toBeVisible()
  })

  test("should navigate to contact page", async ({ page }) => {
    await page.goto("/")
    await page.click('a[href="/contact"]')
    await page.waitForURL("/contact")
    await expect(page.getByText("ติดต่อเรา")).toBeVisible()
  })

  test("should navigate to service page", async ({ page }) => {
    await page.goto("/")
    // Services อาจอยู่ใน dropdown menu
    await page.goto("/service")
    await expect(page.getByText("บริการ")).toBeVisible()
  })

  test("should show 404 for non-existent page", async ({ page }) => {
    await page.goto("/non-existent-page")
    await expect(page.getByText("404")).toBeVisible()
  })
})

test.describe("Admin Page Navigation", () => {
  test("should display admin dashboard", async ({ page }) => {
    await page.goto("/admin/dashboard")
    await expect(page.getByText("แดชบอร์ด")).toBeVisible()
  })

  test("should navigate to products page", async ({ page }) => {
    await page.goto("/admin/dashboard")
    await page.click('a[href="/admin/products"]')
    await page.waitForURL("/admin/products")
    await expect(page.getByText("สินค้า")).toBeVisible()
  })

  test("should show sidebar navigation items", async ({ page }) => {
    await page.goto("/admin/dashboard")
    // ตรวจสอบเมนูใน Sidebar (Desktop)
    await expect(page.getByText("แดชบอร์ด")).toBeVisible()
    await expect(page.getByText("สินค้า")).toBeVisible()
    await expect(page.getByText("หมวดหมู่")).toBeVisible()
    await expect(page.getByText("สต็อก")).toBeVisible()
    await expect(page.getByText("รายงาน")).toBeVisible()
    await expect(page.getByText("ตั้งค่า")).toBeVisible()
  })
})