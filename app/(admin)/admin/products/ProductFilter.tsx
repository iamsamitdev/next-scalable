"use client"

import { useQueryState } from "nuqs"

export default function ProductFilter() {
  // ใช้เหมือน useState แต่ค่าเก็บใน URL!
  const [search, setSearch] = useQueryState("search", {
    defaultValue: "",
    shallow: false,  // trigger Server Component re-render
  })

  return (
    <input
      type="search"
      placeholder="🔍 ค้นหาสินค้า..."
      value={search}
      onChange={(e) => setSearch(e.target.value || null)}
      className="max-w-sm px-4 py-2 border border-border rounded-md bg-background text-foreground"
    />
  )
}