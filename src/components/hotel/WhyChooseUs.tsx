import { Heart, BedDouble, Mountain, Utensils, Sparkles, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
const reasons = [
  { icon: Heart, title: 'Exceptional Hospitality', text: 'Anticipatory service and a team that remembers details.' },
  { icon: BedDouble, title: 'Premium Accommodation', text: 'Handcrafted interiors, heritage fabrics, and fine linens.' },
  { icon: Mountain, title: 'Mountain Views', text: 'Uninterrupted Himalayan panoramas from every room.' },
  { icon: Utensils, title: 'Fine Dining', text: 'Seasonal menus composed by award-winning chefs.' },
  { icon: Sparkles, title: 'Personalized Services', text: 'Private butlers, curated itineraries, and 24/7 concierge.' },
  { icon: Award, title: 'Recognized Excellence', text: 'Twelve international awards and a 4.9 guest rating.' },
]
export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-ivory"><div className="container-lux">
      <SectionHeading eyebrow="Why Choose Us" title={<>An Address<br />Worth <span className="italic text-gold">Remembering</span></>} />
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {reasons.map((r, i) => { const Icon = r.icon; return (
          <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="text-center sm:text-left">
            <div className="inline-flex w-14 h-14 items-center justify-center border border-gold/30 mb-5"><Icon size={22} className="text-gold" strokeWidth={1.3} /></div>
            <h3 className="font-serif text-xl text-forest">{r.title}</h3><p className="mt-2.5 text-sm text-charcoal/65">{r.text}</p>
          </motion.div>
        )})}
      </div>
    </div></section>
  )
}
