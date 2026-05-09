import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import clsx from 'clsx'

type Variant = 'primary' | 'ghost' | 'dark' | 'light'
type Size = 'md' | 'lg'

const baseClasses =
  'group inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] tracking-tight whitespace-nowrap'

const sizeMap: Record<Size, string> = {
  md: 'h-[42px] px-[18px] text-[14.5px]',
  lg: 'h-[52px] px-6 text-[15.5px]',
}

const variantMap: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-deep shadow-sm shadow-brand/20',
  ghost: 'bg-transparent text-ink hover:bg-black/5',
  dark: 'bg-ink text-white hover:bg-black',
  light: 'bg-white text-ink hover:bg-paper-2',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  withArrow?: boolean
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }
type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string }

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps | AnchorProps>(
  function Button({ variant = 'primary', size = 'md', withArrow, className, children, ...props }, ref) {
    const cls = clsx(baseClasses, sizeMap[size], variantMap[variant], className)
    const content = (
      <>
        {children}
        {withArrow && (
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        )}
      </>
    )
    if ((props as AnchorProps).as === 'a') {
      const { as: _as, ...rest } = props as AnchorProps
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} className={cls} {...rest}>
          {content}
        </a>
      )
    }
    const { as: _as, ...rest } = props as ButtonProps
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={cls} {...rest}>
        {content}
      </button>
    )
  },
)
