'use client'

import { motion } from 'framer-motion'
import { Wrap } from './ui/Section'

export function Wordmark() {
  return (
    <section className="pb-12 pt-6 text-center sm:pb-20 sm:pt-10">
      <Wrap>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="m-0 flex items-baseline justify-center gap-1 text-[clamp(80px,18vw,240px)] font-extrabold leading-[0.85] tracking-[-0.05em] text-ink"
          style={{ marginBottom: '4px' }}
        >
          <span>be</span>
          <span className="font-italic-serif text-brand">local</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-italic-serif text-[clamp(22px,2.4vw,32px)] tracking-tight text-brand"
        >
          anywhere in the world.
        </motion.p>
      </Wrap>
    </section>
  )
}
