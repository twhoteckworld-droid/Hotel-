import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

type Variant = 'primary' | 'gold' | 'outline' | 'ghost'
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: Variant }

const variants: Record<Variant, string> = {
  primary: 'btn-primary',
  gold: 'btn-gold',
  outline: 'btn-outline',
  ghost: 'btn-ghost-ivory',
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = 'primary', className, children, ...rest }, ref) => (
    <button ref={ref} className={cn(variants[variant], className)} {...rest}>{children}</button>
  )
)
Button.displayName = 'Button'
