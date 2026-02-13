"use client"

import { useCartStore } from "@/stores/useCartStore"
import { ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function CartIcon() {
  const items = useCartStore((state) => state.items)
  const [mounted, setMounted] = useState(false)

  // ป้องกัน Hydration Mismatch (เพราะ persist ใช้ localStorage)
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), [])

  const totalItems = mounted ? items.reduce((sum, item) => sum + item.quantity, 0) : 0

  return (
    <Button variant="ghost" size="icon" className="relative">
      <ShoppingCart className="h-5 w-5" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center text-white">
          {totalItems}
        </span>
      )}
    </Button>
  )
}