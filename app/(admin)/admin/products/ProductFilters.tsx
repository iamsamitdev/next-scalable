"use client"

import { useQueryStates, parseAsInteger, parseAsString, parseAsStringLiteral } from "nuqs"
import { Button } from "@/components/ui/button"

const categories = ["Electronics", "Clothing", "Books", "Food", "Sports"] as const
const sortOptions = ["id", "name", "price", "stock"] as const
const orderOptions = ["asc", "desc"] as const

export default function ProductFilters() {
  // จัดการหลาย Query Params พร้อมกัน
  const [filters, setFilters] = useQueryStates({
    search: parseAsString.withDefault(""),
    category: parseAsString.withDefault(""),
    sort: parseAsStringLiteral(sortOptions).withDefault("id"),
    order: parseAsStringLiteral(orderOptions).withDefault("asc"),
    page: parseAsInteger.withDefault(1),
  }, {
    shallow: false,  // ให้ Server Component re-render
  })

  const handleReset = () => {
    setFilters({
      search: "",
      category: "",
      sort: "id",
      order: "asc",
      page: 1,
    })
  }

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {/* Search */}
      <input
        type="search"
        placeholder="🔍 ค้นหา..."
        value={filters.search}
        onChange={(e) => setFilters({ search: e.target.value || "", page: 1 })}
        className="max-w-xs px-4 py-2 border border-border rounded-md bg-background text-foreground"
      />

      {/* Category Filter */}
      <select
        value={filters.category || "all"}
        onChange={(e) => setFilters({ category: e.target.value === "all" ? "" : e.target.value, page: 1 })}
        className="w-45 px-3 py-2 border border-border rounded-md bg-background text-foreground"
      >
        <option value="all">ทั้งหมด</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Sort */}
      <select
        value={filters.sort}
        onChange={(e) => setFilters({ sort: e.target.value as typeof sortOptions[number] })}
        className="w-37.5 px-3 py-2 border border-border rounded-md bg-background text-foreground"
      >
        <option value="id"># ID</option>
        <option value="name">ชื่อ</option>
        <option value="price">ราคา</option>
        <option value="stock">สต็อก</option>
      </select>

      {/* Order Toggle */}
      <Button
        variant="outline"
        onClick={() => setFilters({ order: filters.order === "asc" ? "desc" : "asc" })}
      >
        {filters.order === "asc" ? "⬆️ น้อย→มาก" : "⬇️ มาก→น้อย"}
      </Button>

      {/* Reset */}
      <Button variant="ghost" onClick={handleReset}>
        🔄 รีเซ็ต
      </Button>
    </div>
  )
}