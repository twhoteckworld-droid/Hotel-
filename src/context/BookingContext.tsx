import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import type { SearchQuery } from '../types'

interface BookingCtx {
  search: SearchQuery
  setSearch: (s: Partial<SearchQuery>) => void
}

const defaultSearch: SearchQuery = { checkIn: '', checkOut: '', adults: 2, children: 0, rooms: 1 }
const BookingContext = createContext<BookingCtx | undefined>(undefined)
const KEY = 'gh_search'

export function BookingProvider({ children }: { children: ReactNode }) {
  const [search, setSearchState] = useState<SearchQuery>(() => {
    if (typeof window === 'undefined') return defaultSearch
    try {
      const raw = localStorage.getItem(KEY)
      return raw ? { ...defaultSearch, ...JSON.parse(raw) } : defaultSearch
    } catch { return defaultSearch }
  })

  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(search)) }, [search])
  const setSearch = (s: Partial<SearchQuery>) => setSearchState((prev) => ({ ...prev, ...s }))

  return <BookingContext.Provider value={{ search, setSearch }}>{children}</BookingContext.Provider>
}

export const useBooking = () => {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used inside BookingProvider')
  return ctx
}
