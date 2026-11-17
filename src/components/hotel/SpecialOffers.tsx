import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useHotel } from '../../context/HotelContext'
import { SectionHeading } from '../ui/SectionHeading'
export function SpecialOffers() {
  const { offers } = useHotel()
  return (
    <section className="py-24 sm:py-32 bg-beige/40"><div className="container-lux">
      <SectionHeading eyebrow="Exclusive Offers" title={<>Stay <span className="italic text-gold">Longer</span>, Unwind Deeper</>} description="Curated packages for weekends, romantics, families, and those who wish they never had to leave." />
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer, i) => (
          <motion.div key={offer.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative overflow-hidden aspect-[16/10] flex">
            <img src={offer.image} alt={offer.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/70 to-forest/20" />
            <div className="relative p-8 sm:p-10 flex flex-col justify-between w-full max-w-md">
              <div><div className="flex items-center gap-3 mb-3"><span className="text-[9px] uppercase bg-gold text-forest px-2.5 py-1 font-semibold">{offer.badge}</span><span className="text-[10px] uppercase text-gold">{offer.discount}</span></div>
                <h3 className="font-serif text-3xl text-ivory">{offer.title}</h3><p className="mt-4 text-sm text-ivory/75 max-w-xs">{offer.description}</p></div>
              <Link to="/offers" className="inline-flex items-center gap-2 text-[10px] uppercase text-gold hover:text-ivory transition self-start mt-6">View Offer <ArrowUpRight size={14} /></Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div></section>
  )
}
