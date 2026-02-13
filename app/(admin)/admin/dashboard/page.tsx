import type { Metadata } from "next";
// import Dashboard from "./dashboard"
import { Suspense } from "react"

export const metadata: Metadata = {
    title: "หน้าแดชบอร์ด | จัดการคลังสินค้า",
    description: "หน้าแดชบอร์ด - จัดการคลังสินค้า",
    keywords: ["หน้าแดชบอร์ด", "จัดการคลังสินค้า", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
    openGraph: {
        title: "หน้าแดชบอร์ด | จัดการคลังสินค้า",
        description: "หน้าแดชบอร์ด - จัดการคลังสินค้า",
        url: "https://smartstore.com/admin/dashboard",
        siteName: "Smart Store",
    },
    twitter: {
        card: "summary_large_image",
        title: "หน้าแดชบอร์ด | จัดการคลังสินค้า",
        description: "หน้าแดชบอร์ด - จัดการคลังสินค้า",
        images: ["https://smartstore.com/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://smartstore.com/admin/dashboard",
    },
}

// Static Part (โหลดทันที)
function DashboardHeader() {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-foreground">📊 แดชบอร์ด</h1>
      <p className="text-muted-foreground">ยินดีต้อนรับกลับมา!</p>
    </div>
  )
}

// Dynamic Part (รอ Data)
async function RevenueStats() {
  // จำลองการดึงข้อมูลจาก API/Database (ทำให้ส่วนนี้เป็น Dynamic)
  await new Promise((resolve) => setTimeout(resolve, 2000))
  
  const stats = {
    revenue: 1250000,
    orders: 156,
    products: 89,
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-sm font-medium text-muted-foreground">💰 รายได้</h2>
        <p className="text-3xl font-bold text-foreground">฿{stats.revenue.toLocaleString()}</p>
      </div>
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-sm font-medium text-muted-foreground">📦 คำสั่งซื้อ</h2>
        <p className="text-3xl font-bold text-foreground">{stats.orders}</p>
      </div>
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-sm font-medium text-muted-foreground">🏷️ สินค้า</h2>
        <p className="text-3xl font-bold text-foreground">{stats.products}</p>
      </div>
    </div>
  )
}

// Dynamic Part
async function RecentOrders() {
  await new Promise((resolve) => setTimeout(resolve, 3000)) // จำลองความช้า

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h2 className="text-xl font-semibold mb-4 text-foreground">📦 คำสั่งซื้อล่าสุด</h2>
      <div className="space-y-2">
        <p className="text-muted-foreground">ORD-001: iPhone 16 Pro × 2 — ฿91,800</p>
        <p className="text-muted-foreground">ORD-002: MacBook Air M4 × 1 — ฿42,900</p>
      </div>
    </div>
  )
}

// Loading Skeleton
function StatsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-6 animate-pulse">
          <div className="h-4 bg-muted rounded w-20 mb-2"></div>
          <div className="h-8 bg-muted rounded w-32"></div>
        </div>
      ))}
    </div>
  )
}

function OrdersSkeleton() {
  return (
    <div className="bg-card rounded-lg border border-border p-6 animate-pulse">
      <div className="h-6 bg-muted rounded w-40 mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-full"></div>
        <div className="h-4 bg-muted rounded w-3/4"></div>
      </div>
    </div>
  )
}

function DashboardPage() {
  return (
    <div className="p-6">
      {/* <Dashboard /> */}
      {/* ✅ Static — โหลดทันที */}
      <DashboardHeader />

      {/* ⏳ Dynamic — Streaming */}
      <Suspense fallback={<StatsSkeleton />}>
        <RevenueStats />
      </Suspense>

      <div className="mt-6">
        <Suspense fallback={<OrdersSkeleton />}>
          <RecentOrders />
        </Suspense>
      </div>
    </div>
  )
}

export default DashboardPage