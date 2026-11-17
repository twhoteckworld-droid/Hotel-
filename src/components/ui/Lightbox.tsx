import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  images: { image: string; caption: string }[]
  index: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ images, index, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] bg-charcoal/95 flex items-center justify-center p-4" onClick={onClose}>
          <button onClick={onClose} className="absolute top-6 right-6 text-ivory/70 hover:text-ivory"><X size={28} /></button>
          <button onClick={(e) => { e.stopPropagation(); onPrev() }} className="absolute left-4 sm:left-8 text-ivory/70 hover:text-ivory"><ChevronLeft size={40} /></button>
          <button onClick={(e) => { e.stopPropagation(); onNext() }} className="absolute right-4 sm:right-8 text-ivory/70 hover:text-ivory"><ChevronRight size={40} /></button>
          <motion.div key={index} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={images[index].image} alt={images[index].caption} className="w-full max-h-[80vh] object-contain" />
            <p className="text-center text-ivory/80 mt-4 font-serif text-xl">{images[index].caption}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
