import { Link } from 'react-router-dom'
import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { hotel } from '../../data/hotel'
export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=2000&q=85" alt="The Grand Himalayan" className="w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/40 to-forest/85" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="container-lux w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.3 }} className="max-w-4xl">
            <p className="eyebrow text-gold mb-6">{hotel.location}</p>
            <h1 className="font-serif font-light text-ivory leading-[0.95] text-5xl sm:text-7xl lg:text-[7rem] tracking-tight">
              Where the<br /><span className="italic text-gold">Mountains</span><br />Meet Luxury.
            </h1>
            <p className="mt-8 max-w-md text-ivory/80 text-base sm:text-lg leading-relaxed">{hotel.tagline}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/rooms" className="btn-gold">Explore Rooms</Link>
              <Link to="/booking" className="btn-ghost-ivory">Book Your Stay</Link>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.a href="#booking-widget" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/70 hover:text-gold transition-colors">
        <span className="text-[9px] uppercase tracking-ultra">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
