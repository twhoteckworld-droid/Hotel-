import { useMemo, useState } from 'react'
import { Plus } from 'lucide-react'
import { motion } from 'framer-motion'
import { useHotel } from '../../context/HotelContext'
import { SectionHeading } from '../ui/SectionHeading'
import { Lightbox } from '../ui/Lightbox'
import { cn } from '../../utils/cn'
const categories = ['All', 'Rooms', 'Restaurant', 'Exterior', 'Events', 'Experiences']
export function GallerySection() {
  const { gallery } = useHotel(); const [filter, setFilter] = useState('All'); const [lightbox, setLightbox] = useState<number | null>(null)
  const filtered = useMemo(() => (filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)), [filter, gallery])
  return (
    <section className="py-24 sm:py-32 bg-ivory"><div className="container-lux">
      <SectionHeading eyebrow="Gallery" title={<>A Glimpse of<br />the <span className="italic text-gold">Grand</span></>} />
      <div className="mt-10 flex flex-wrap justify-center gap-2">{categories.map((c) => (<button key={c} onClick={() => setFilter(c)} className={cn('px-5 py-2.5 text-[10px] uppercase border transition-all', filter === c ? 'bg-forest text-ivory border-forest' : 'border-forest/20 text-forest/70')}>{c}</button>))}</div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
        {filtered.map((item, i) => (
          <motion.button key={item.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} onClick={() => setLightbox(i)} className={cn('group relative overflow-hidden', i % 5 === 0 ? 'md:row-span-2' : '')}>
            <img src={item.image} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/50 flex items-center justify-center"><Plus size={26} className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity" /></div>
          </motion.button>
        ))}
      </div>
    </div><Lightbox images={filtered} index={lightbox} onClose={() => setLightbox(null)} onPrev={() => setLightbox((p) => (p === null ? null : (p - 1 + filtered.length) % filtered.length))} onNext={() => setLightbox((p) => (p === null ? null : (p + 1) % filtered.length))} /></section>
  )
}
