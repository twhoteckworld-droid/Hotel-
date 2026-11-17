import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, Users, BedDouble, Search, Minus, Plus } from 'lucide-react'
import { useBooking } from '../../context/BookingContext'
import { useNotify } from '../../context/NotificationContext'
import { cn } from '../../utils/cn'
function todayISO(offset = 0) { const d = new Date(); d.setDate(d.getDate() + offset); return d.toISOString().split('T')[0] }
export function BookingSearch() {
  const { search, setSearch } = useBooking(); const { notify } = useNotify(); const navigate = useNavigate(); const [openGuest, setOpenGuest] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!search.checkIn || !search.checkOut) { notify('Please select dates.', 'error'); return }
    if (new Date(search.checkOut) <= new Date(search.checkIn)) { notify('Invalid dates.', 'error'); return }
    notify('Searching...', 'info'); setTimeout(() => navigate('/rooms'), 400)
  }
  return (
    <section id="booking-widget" className="relative -mt-20 z-20 pb-20">
      <div className="container-lux">
        <form onSubmit={handleSubmit} className="bg-ivory shadow-lux border border-forest/10 p-5 sm:p-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="lg:col-span-1"><label className="eyebrow block mb-2">Check-in</label><div className="relative"><Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-forest/50" /><input type="date" min={todayISO()} value={search.checkIn} onChange={(e) => setSearch({ checkIn: e.target.value })} className="input-lux pl-9 text-xs" /></div></div>
          <div className="lg:col-span-1"><label className="eyebrow block mb-2">Check-out</label><div className="relative"><Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-forest/50" /><input type="date" min={search.checkIn || todayISO(1)} value={search.checkOut} onChange={(e) => setSearch({ checkOut: e.target.value })} className="input-lux pl-9 text-xs" /></div></div>
          <div className="lg:col-span-2 relative">
            <label className="eyebrow block mb-2">Guests</label>
            <button type="button" onClick={() => setOpenGuest((v) => !v)} className="input-lux text-left flex items-center justify-between text-xs"><span className="flex items-center gap-2"><Users size={14} className="text-forest/50" />{search.adults} Adult{search.adults > 1 ? 's' : ''}{search.children > 0 && ` · ${search.children} Child`}</span><span className="text-forest/40 text-[10px]">▼</span></button>
            {openGuest && (<><div className="fixed inset-0 z-10" onClick={() => setOpenGuest(false)} /><div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-2xl border border-forest/10 p-5 z-20 space-y-4">
              {[{ key: 'adults', label: 'Adults', min: 1, max: 6 }, { key: 'children', label: 'Children', min: 0, max: 4 }, { key: 'rooms', label: 'Rooms', min: 1, max: 4 }].map(({ key, label, min, max }) => (
                <div key={key} className="flex items-center justify-between"><span className="text-sm">{label}</span><div className="flex items-center gap-3">
                  <button type="button" onClick={() => setSearch({ [key]: Math.max(min, search[key as keyof typeof search] as number - 1) })} className="w-8 h-8 border flex items-center justify-center"><Minus size={13} /></button>
                  <span className="w-6 text-center text-sm">{search[key as keyof typeof search]}</span>
                  <button type="button" onClick={() => setSearch({ [key]: Math.min(max, search[key as keyof typeof search] as number + 1) })} className="w-8 h-8 border flex items-center justify-center"><Plus size={13} /></button>
                </div></div>
              ))}<button type="button" onClick={() => setOpenGuest(false)} className="w-full text-[10px] uppercase border py-2.5 hover:bg-forest hover:text-ivory transition">Done</button></div></>)}
          </div>
          <div className="lg:col-span-1"><label className="eyebrow block mb-2">Rooms</label><div className="relative"><BedDouble size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-forest/50" /><input type="number" min={1} max={4} value={search.rooms} onChange={(e) => setSearch({ rooms: Math.max(1, Number(e.target.value) || 1) })} className="input-lux pl-9 text-xs" /></div></div>
          <div className="lg:col-span-1 flex items-end"><button type="submit" className={cn('btn-primary w-full')}><Search size={14} /> Search</button></div>
        </form>
      </div>
    </section>
  )
}
