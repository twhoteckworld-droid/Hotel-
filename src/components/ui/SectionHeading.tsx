import { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface Props {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeading({ eyebrow, title, description, align = 'center', light = false, className }: Props) {
  return (
    <div className={cn('max-w-3xl', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      {eyebrow && <span className="eyebrow block mb-4">{eyebrow}</span>}
      <h2 className={cn('font-serif font-light text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05]', light ? 'text-ivory' : 'text-forest')}>{title}</h2>
      {description && <p className={cn('mt-5 text-base sm:text-lg leading-relaxed', light ? 'text-ivory/75' : 'text-charcoal/70')}>{description}</p>}
      <div className={cn('mt-6 h-px w-16 bg-gold', align === 'center' ? 'mx-auto' : '')} />
    </div>
  )
}
