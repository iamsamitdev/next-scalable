import type { Metadata } from "next";
// import Products from './products'
// import ProductFilter from "./ProductFilter";
import ProductFilters from "./ProductFilters";

export const metadata: Metadata = {
    title: "สินค้า | จัดการคลังสินค้า",
    description: "สินค้า - จัดการคลังสินค้า",
    keywords: ["สินค้า", "จัดการคลังสินค้า", "Smart Store", "ร้านค้า", "สินค้า", "บริการ"],
    openGraph: {
        title: "สินค้า | จัดการคลังสินค้า",
        description: "สินค้า - จัดการคลังสินค้า",
        url: "https://smartstore.com/admin/products",
        siteName: "Smart Store",
    },
    twitter: {
        card: "summary_large_image",
        title: "สินค้า | จัดการคลังสินค้า",
        description: "สินค้า - จัดการคลังสินค้า",
        images: ["https://smartstore.com/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://smartstore.com/admin/products",
    },
}

// ข้อมูลสินค้าจำลอง (ในอนาคตจะดึงจาก Database)
const mockProducts = [
  { id: 1, name: "iPhone 16 Pro", category: "Electronics", price: 45900, stock: 25 },
  { id: 2, name: "MacBook Air M4", category: "Electronics", price: 42900, stock: 15 },
  { id: 3, name: "เสื้อยืด Premium", category: "Clothing", price: 590, stock: 100 },
  { id: 4, name: "React Design Patterns", category: "Books", price: 890, stock: 50 },
  { id: 5, name: "ข้าวหอมมะลิ 5kg", category: "Food", price: 259, stock: 200 },
  { id: 6, name: "ลูกฟุตบอล Adidas", category: "Sports", price: 1290, stock: 30 },
]

type Props = {
  searchParams: Promise<{
    search?: string
    category?: string
    sort?: string
    order?: string
    page?: string
  }>
}

async function ProductsPage({searchParams}: Props) {

  const params = await searchParams

  // Server Component อ่านค่าจาก URL ได้เลย!
  let filtered = mockProducts

  // Filter by search
  if (params.search) {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(params.search!.toLowerCase())
    )
  }

  // Filter by category
  if (params.category) {
    filtered = filtered.filter((p) => p.category === params.category)
  }

  // Sort
  const sortKey = (params.sort || "id") as keyof typeof mockProducts[0]
  const order = params.order || "asc"
  filtered.sort((a, b) => {
    if (order === "asc") return a[sortKey] > b[sortKey] ? 1 : -1
    return a[sortKey] < b[sortKey] ? 1 : -1
  })

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📦 สินค้า</h1>

      {/* Client Component จัดการ URL State */}
      <ProductFilters />

      {/* Server Component อ่าน URL State แล้ว Render ข้อมูล */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">ชื่อสินค้า</th>
              <th className="px-4 py-3 text-left">หมวดหมู่</th>
              <th className="px-4 py-3 text-right">ราคา</th>
              <th className="px-4 py-3 text-right">สต็อก</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((product) => (
              <tr key={product.id} className="border-t border-border">
                <td className="px-4 py-3">{product.id}</td>
                <td className="px-4 py-3 font-medium">{product.name}</td>
                <td className="px-4 py-3">{product.category}</td>
                <td className="px-4 py-3 text-right">฿{product.price.toLocaleString()}</td>
                <td className="px-4 py-3 text-right">{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        แสดง {filtered.length} จาก {mockProducts.length} รายการ
      </p>
    </div>
  )
}

export default ProductsPage