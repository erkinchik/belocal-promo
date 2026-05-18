import { ReactNode } from 'react'
import clsx from 'clsx'

export function Section({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={clsx('py-14 sm:py-20 md:py-[120px]', className)}>
      <div className="mx-auto max-w-[1240px] px-5 md:px-7">{children}</div>
    </section>
  )
}

export function Wrap({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={clsx('mx-auto max-w-[1240px] px-5 md:px-7', className)}>{children}</div>
  )
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.16em] text-brand">
      <span className="inline-block h-px w-[18px] bg-brand" />
      {children}
    </span>
  )
}
