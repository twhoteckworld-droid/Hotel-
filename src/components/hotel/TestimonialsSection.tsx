import { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useHotel } from '../../context/HotelContext'
import { SectionHeading } from '../ui/SectionHeading'
import { StarRating } from '../ui/StarRating'
export function TestimonialsSection() {
  const { testimonials } = useHotel(); const [index, setIndex] = useState(0); const current = testimonials[index]
  return (
    <section className="py-24 sm:py-32 bg-beige/40"><div className="container-lux">
      <SectionHeading eyebrow="Guest Stories" title={<>Words From<br />Our <span className="italic text-gold">Guests</span></>} />
      <div className="mt-14 max-w-4xl mx-auto relative"><Quote size={54} className="mx-auto text-gold/30" strokeWidth={1} />
        <AnimatePresence mode="wait"><motion.div key={current.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center px-4 sm:px-16">
          <p className="mt-6 font-serif text-xl sm:text-2xl text-forest italic">"{current.text}"</p>
          <div className="mt-8 flex items-center justify-center gap-4"><img src={current.avatar} alt={current.name} className="w-14 h-14 rounded-full object-cover border-2 border-gold" /><div className="text-left"><p className="font-serif text-lg text-forest">{current.name}</p><p className="text-xs text-charcoal/50">{current.location}</p><div className="mt-1"><StarRating rating={current.rating} size={11} /></div></div></div>
        </motion.div></AnimatePresence>
        <div className="mt-10 flex items-center justify-center gap-6"><button onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 border flex items-center justify-center hover:bg-forest hover:text-ivory"><ChevronLeft size={16} /></button><div className="flex gap-2">{testimonials.map((_, i) => (<button key={i} onClick={() => setIndex(i)} className={`h-1.5 transition-all ${i === index ? 'w-8 bg-gold' : 'w-1.5 bg-forest/20'}`} />))}</div><button onClick={() => setIndex((i) => (i + 1) % testimonials.length)} className="w-10 h-10 border flex items-center justify-center hover:bg-forest hover:text-ivory"><ChevronRight size={16} /></button></div>
      </div>
    </div></section>
  )
}
