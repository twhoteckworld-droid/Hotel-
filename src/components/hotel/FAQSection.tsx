import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useHotel } from '../../context/HotelContext'
import { SectionHeading } from '../ui/SectionHeading'
export function FAQSection() {
  const { faqs } = useHotel(); const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null)
  return (
    <section className="py-24 sm:py-32 bg-beige/40"><div className="container-lux"><div className="grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4"><SectionHeading align="left" eyebrow="Questions" title={<>Before<br />You <span className="italic text-gold">Arrive</span></>} description="A few things we are often asked." /></div>
      <div className="lg:col-span-8"><div className="divide-y divide-forest/10">{faqs.map((faq) => (
        <div key={faq.id}><button onClick={() => setOpen((o) => (o === faq.id ? null : faq.id))} className="w-full py-5 flex items-start justify-between gap-6 text-left"><span className="font-serif text-lg text-forest">{faq.question}</span><span className="w-8 h-8 border flex items-center justify-center shrink-0">{open === faq.id ? <Minus size={14} /> : <Plus size={14} />}</span></button>
          <AnimatePresence initial={false}>{open === faq.id && (<motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden"><p className="pb-6 text-sm text-charcoal/65 pr-16">{faq.answer}</p></motion.div>)}</AnimatePresence></div>
      ))}</div></div>
    </div></div></section>
  )
}
