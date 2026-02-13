import { create } from 'zustand'
import { persist, createJSONStorage, devtools } from 'zustand/middleware'

type Store = {
  count: number
  inc: () => void
  dec: () => void
}

const useCounterStore = create<Store>()(
    devtools(
        persist(
            (set) => ({
                count: 0,
                inc: () => set((state) => ({ count: state.count + 1 })),
                dec: () => set((state) => ({ count: state.count - 1 }))
            }),
            {
                name: "counter-storage",
                storage: createJSONStorage(() => sessionStorage), // default is localStorage
            }
        ),
        { name: "counterStore", enabled: true }
  )
)

export default useCounterStore