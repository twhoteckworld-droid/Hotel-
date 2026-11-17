import { createContext, useContext, ReactNode } from 'react'
import { hotel } from '../data/hotel'
import { rooms } from '../data/rooms'
import { experiences } from '../data/experiences'
import { offers } from '../data/offers'
import { testimonials, gallery, faqs } from '../data/testimonials'

const ctxValue = { hotel, rooms, experiences, offers, testimonials, gallery, faqs }
const HotelContext = createContext<typeof ctxValue | undefined>(undefined)

export function HotelProvider({ children }: { children: ReactNode }) {
  return <HotelContext.Provider value={ctxValue}>{children}</HotelContext.Provider>
}

export const useHotel = () => {
  const ctx = useContext(HotelContext)
  if (!ctx) throw new Error('useHotel must be used inside HotelProvider')
  return ctx
}
