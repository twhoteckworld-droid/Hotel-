import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { hotel, navLinks } from '../../data/hotel'
import { cn } from '../../utils/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const solid = scrolled || open

  return (
    <>
      <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-500', solid ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-forest/5' : 'bg-transparent')}>
        <div className="container-lux flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="flex flex-col leading-none">
            <span className={cn('font-serif text-xl sm:text-2xl tracking-wide transition-colors', solid ? 'text-forest' : 'text-ivory')}>{hotel.name}</span>
            <span className={cn('text-[8px] uppercase tracking-ultra mt-1 transition-colors', solid ? 'text-gold' : 'text-ivory/70')}>Shimla · Est. 1999</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <NavLink key={link.href} to={link.href} className={({ isActive }) => cn('relative text-[11px] font-medium uppercase tracking-widest transition-colors pb-1', solid ? 'text-forest/80 hover:text-forest' : 'text-ivory/90 hover:text-ivory', isActive && (solid ? 'text-forest' : 'text-ivory'))}>
                {({ isActive }) => (<>{link.label}{isActive && <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold" />}</>)}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/booking" className={cn('inline-flex items-center px-6 py-3 text-[10px] font-semibold uppercase tracking-ultra transition-all', solid ? 'bg-forest text-ivory hover:bg-forest-dark' : 'bg-gold text-forest hover:bg-gold-dark hover:text-ivory')}>Book Your Stay</Link>
          </div>

          <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className={cn('lg:hidden transition-colors', solid ? 'text-forest' : 'text-ivory')}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-forest lg:hidden">
            <motion.nav initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="flex flex-col items-center justify-center h-full gap-7 px-8">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + i * 0.05 }}>
                  <NavLink to={link.href} className={({ isActive }) => cn('font-serif text-3xl tracking-wide transition-colors', isActive ? 'text-gold' : 'text-ivory hover:text-gold')}>{link.label}</NavLink>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-4">
                <Link to="/booking" className="btn-gold">Book Your Stay</Link>
              </motion.div>
              <div className="absolute bottom-10 text-center text-ivory/60 text-xs tracking-widest">{hotel.location}</div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
