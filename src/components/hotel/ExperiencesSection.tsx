import { motion } from 'framer-motion'
import { UtensilsCrossed, Flower2, Waves, Trees, Wine, Crown } from 'lucide-react'
import { useHotel } from '../../context/HotelContext'
import { SectionHeading } from '../ui/SectionHeading'

const iconMap = { UtensilsCrossed, Flower2, Waves, Trees, Wine, Crown } as const

export function ExperiencesSection() {
  const { experiences } = useHotel()

  return (
    <section className="py-24 sm:py-32 bg-forest text-ivory">
      <div className="container-lux">
        <SectionHeading light eyebrow="Curated Experiences" title={<>Moments Crafted<br />for the <span className="italic text-gold">Discerning</span></>} description="From private dining in the cedar forest to spa rituals drawn from Himalayan traditions — every experience is composed around you." />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => {
            const Icon = iconMap[exp.icon as keyof typeof iconMap] ?? Crown
            return (
              <motion.div key={exp.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative overflow-hidden aspect-[4/5] cursor-pointer">
                <img src={exp.image} alt={exp.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="w-11 h-11 border border-gold/40 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:border-gold transition-all"><Icon size={18} className="text-gold group-hover:text-forest transition-colors" /></div>
                  <h3 className="font-serif text-2xl">{exp.title}</h3>
                  <p className="text-ivory/70 text-sm mt-2 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
