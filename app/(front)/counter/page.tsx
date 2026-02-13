"use client"

import  useCounterStore  from "@/stores/useCounterStore"

export default function CounterPage() {

  const { count, inc, dec } = useCounterStore()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <button onClick={inc} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">Increment</button>
        <p className="text-xl my-4">Count: {count}</p>
        <button onClick={dec} className="px-4 py-2 bg-red-500 text-white rounded">Decrement</button>
    </div>
  )
}
