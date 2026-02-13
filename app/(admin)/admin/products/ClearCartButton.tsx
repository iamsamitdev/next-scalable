"use client"

import { useCartStore } from "@/stores/useCartStore"

export default function ClearCartButton() {
  return (
    <div>
        <button className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        onClick={() => useCartStore.getState().clearCart()}>
          ล้างตะกร้าสินค้า
        </button>
    </div>
  )
}
