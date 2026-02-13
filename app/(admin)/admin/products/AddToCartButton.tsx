"use client"

import { useCartStore } from "@/stores/useCartStore"

type Props = {
  product: {
    id: number
    name: string
    price: number
  }
}

export default function AddToCartButton({ product }: Props) {
  const addItem = useCartStore((state) => state.addItem)

  return (
    <button
      className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      onClick={() => addItem(product)}
    >
      เพิ่มลงตะกร้า
    </button>
  )
}
