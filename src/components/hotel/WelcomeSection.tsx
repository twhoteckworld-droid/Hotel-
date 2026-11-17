import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { hotel } from '../../data/hotel'
export function WelcomeSection() {
  return (
    <section className="py-24 sm:py-32 bg-ivory"><div className="container-lux"><div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-6 relative"><div className="relative">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80" alt="Welcome" className="w-full aspect-[4/5] object-cover shadow-lux" loading="lazy" />
        <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-forest text-ivory p-6 sm:p-8 max-w-[200px]"><p className="font-serif text-4xl text-gold">25</p><p className="text-[10px] uppercase mt-1">Years of Legacy</p></div>
      </div></motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }} className="lg:col-span-6 lg:pl-8">
        <span className="eyebrow">Welcome to</span><h2 className="mt-4 font-serif text-4xl text-forest">A Sanctuary Above<br />the Clouds.</h2><div className="mt-6 h-px w-16 bg-gold" />
        <p className="mt-8 text-charcoal/70">Perched high above Shimla's heritage Mall Road, {hotel.name} has welcomed discerning travellers for over two decades.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-10 border-t border-forest/10">{hotel.stats.map((s) => (<div key={s.label}><p className="font-serif text-2xl text-forest">{s.value}</p><p className="text-[9px] uppercase mt-1">{s.label}</p></div>))}</div>
        <Link to="/about" className="btn-outline mt-10">Explore Our Story</Link>
      </motion.div>
    </div></div></section>
  )
}
