import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Instagram, Facebook, Twitter, Youtube } from './BrandIcons'
import { hotel, navLinks } from '../../data/hotel'

const socials = [
  { icon: Instagram, href: hotel.social.instagram },
  { icon: Facebook, href: hotel.social.facebook },
  { icon: Twitter, href: hotel.social.twitter },
  { icon: Youtube, href: hotel.social.youtube },
]

export function Footer() {
  return (
    <footer className="bg-forest text-ivory pt-20 pb-10">
      <div className="container-lux">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          <div>
            <Link to="/" className="block">
              <h3 className="font-serif text-2xl tracking-wide">{hotel.name}</h3>
              <p className="text-[9px] uppercase tracking-ultra text-gold mt-2">Shimla · Est. 1999</p>
            </Link>
            <p className="mt-6 text-ivory/60 text-sm leading-relaxed max-w-xs">A sanctuary of refined mountain luxury, where colonial heritage meets contemporary elegance.</p>
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" className="w-9 h-9 border border-ivory/20 flex items-center justify-center text-ivory/70 hover:bg-gold hover:text-forest hover:border-gold transition-colors">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-ultra text-gold mb-5">Explore</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (<li key={l.href}><Link to={l.href} className="text-sm text-ivory/70 hover:text-gold transition-colors">{l.label}</Link></li>))}
              <li><Link to="/offers" className="text-sm text-ivory/70 hover:text-gold transition-colors">Special Offers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-ultra text-gold mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-ivory/70">
              <li className="flex gap-3"><MapPin size={16} className="text-gold mt-0.5 shrink-0" /><span>{hotel.address}</span></li>
              <li className="flex gap-3"><Phone size={16} className="text-gold mt-0.5 shrink-0" /><a href={`tel:${hotel.phone}`} className="hover:text-gold">{hotel.phone}</a></li>
              <li className="flex gap-3"><Mail size={16} className="text-gold mt-0.5 shrink-0" /><a href={`mailto:${hotel.email}`} className="hover:text-gold">{hotel.email}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-ultra text-gold mb-5">Newsletter</h4>
            <p className="text-sm text-ivory/60 mb-4 leading-relaxed">Curated offers and stories, delivered slowly.</p>
            <form onSubmit={(e) => { e.preventDefault(); (e.target as HTMLFormElement).reset(); }} className="flex border border-ivory/20 focus-within:border-gold transition-colors">
              <input type="email" required placeholder="your@email.com" className="flex-1 bg-transparent px-3 py-3 text-sm text-ivory placeholder:text-ivory/40 outline-none min-w-0" />
              <button type="submit" className="px-4 bg-gold text-forest text-[10px] font-semibold uppercase tracking-widest hover:bg-gold-dark hover:text-ivory transition-colors">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ivory/40">
          <p>© {new Date().getFullYear()} {hotel.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/faq" className="hover:text-gold">FAQ</Link>
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <Link to="/admin" className="hover:text-gold">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
