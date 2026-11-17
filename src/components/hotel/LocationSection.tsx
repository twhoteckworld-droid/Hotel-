import { MapPin, Mountain, Camera, Utensils, Train } from 'lucide-react'
import { hotel } from '../../data/hotel'
const attractions = [
  { icon: Mountain, name: 'The Ridge & Mall Road', distance: '0.5 km' }, { icon: Camera, name: 'Jakhoo Temple', distance: '2.3 km' }, { icon: Train, name: 'Kalka–Shimla Railway', distance: '3.1 km' }, { icon: Utensils, name: 'Heritage Cafés', distance: '0.8 km' },
]
export function LocationSection() {
  return (
    <section className="py-24 sm:py-32 bg-ivory"><div className="container-lux"><div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div><span className="eyebrow">Location</span><h2 className="mt-4 font-serif text-4xl sm:text-5xl text-forest">In the Heart of<br />the <span className="italic text-gold">Himalayas</span></h2><div className="mt-6 h-px w-16 bg-gold" />
        <p className="mt-8 text-charcoal/70">Tucked just above Shimla's iconic Mall Road, {hotel.name} is both close to everything and serenely apart.</p>
        <div className="mt-6 flex items-start gap-3"><MapPin size={18} className="text-gold shrink-0 mt-0.5" /><p className="text-sm">{hotel.address}</p></div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">{attractions.map(({ icon: Icon, name, distance }) => (<div key={name} className="flex items-center gap-3 p-4 bg-white border"><Icon size={20} className="text-gold shrink-0" /><div><p className="text-sm truncate">{name}</p><p className="text-[10px] uppercase text-charcoal/50">{distance}</p></div></div>))}</div>
      </div>
      <div className="relative aspect-square lg:aspect-[4/5] bg-forest/5 overflow-hidden"><iframe title="Map" src="https://www.openstreetmap.org/export/embed.html?bbox=77.16%2C31.09%2C77.20%2C31.12&layer=mapnik" className="w-full h-full border-0 grayscale opacity-80" loading="lazy" /><div className="absolute top-4 left-4 bg-ivory px-4 py-3 shadow-card"><p className="text-[9px] uppercase text-gold">Find Us</p><p className="font-serif text-lg text-forest">The Ridge, Shimla</p></div></div>
    </div></div></section>
  )
}
