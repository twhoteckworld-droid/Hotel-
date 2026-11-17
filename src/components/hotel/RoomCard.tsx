import { Link } from 'react-router-dom'
import { Maximize, Users, BedDouble, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Room } from '../../types'
import { StarRating } from '../ui/StarRating'

export function RoomCard({ room, index = 0 }: { room: Room; index?: number }) {
  return (
    <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.08 }} className="group bg-white border border-forest/8 overflow-hidden flex flex-col hover:shadow-lux transition-shadow duration-500">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={room.images[0]} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        <div className="absolute top-4 left-4 bg-ivory/95 px-3 py-1.5"><p className="text-[9px] uppercase tracking-ultra text-forest font-semibold">{room.category}</p></div>
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-forest/90 text-ivory px-2.5 py-1">
          <StarRating rating={room.rating} size={11} />
          <span className="text-[10px] ml-0.5">{room.rating}</span>
        </div>
      </div>

      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        <h3 className="font-serif text-2xl text-forest leading-tight">{room.name}</h3>
        <p className="text-sm text-charcoal/60 mt-2 line-clamp-2">{room.shortDescription}</p>

        <div className="grid grid-cols-3 gap-3 mt-5 py-4 border-y border-forest/8">
          <div className="flex items-center gap-1.5 text-xs text-charcoal/70"><Maximize size={14} className="text-gold shrink-0" /><span>{room.size} sq.ft.</span></div>
          <div className="flex items-center gap-1.5 text-xs text-charcoal/70"><Users size={14} className="text-gold shrink-0" /><span>{room.capacity} Guests</span></div>
          <div className="flex items-center gap-1.5 text-xs text-charcoal/70"><BedDouble size={14} className="text-gold shrink-0" /><span className="truncate">{room.beds}</span></div>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {room.amenities.slice(0, 3).map((a) => (<span key={a} className="text-[10px] px-2 py-1 bg-forest/5 text-charcoal/60">{a}</span>))}
        </div>

        <div className="mt-auto pt-6 flex items-end justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-ultra text-charcoal/50">From</p>
            <p className="font-serif text-2xl text-forest">₹{room.price.toLocaleString()}<span className="text-xs text-charcoal/50 font-sans">/night</span></p>
          </div>
          <div className="flex gap-2">
            <Link to={`/rooms/${room.id}`} className="text-[10px] uppercase tracking-widest text-forest border-b border-forest/30 pb-0.5 hover:border-gold hover:text-gold transition">Details</Link>
            <Link to={`/booking?room=${room.id}`} className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-gold hover:text-gold-dark">Book <ArrowRight size={11} /></Link>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
