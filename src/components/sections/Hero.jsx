import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { business } from '@/data/content'

export function Hero() {
  const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Pure black */}
      <div className="absolute inset-0 bg-black" />

      {/* Industrial grid — heavy lines */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,204,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,204,0,0.6) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Caution stripe — top */}
      <div className="absolute top-0 left-0 right-0 h-2 caution-stripe-thin" />

      {/* Heavy diagonal slash marks */}
      <div className="absolute top-20 right-[12vw] w-[3px] h-[60vh] bg-gradient-to-b from-primary via-primary/20 to-transparent origin-top rotate-12" />
      <div className="absolute top-20 right-[14vw] w-[3px] h-[40vh] bg-gradient-to-b from-primary/40 to-transparent origin-top rotate-12" />

      <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-12 text-center">
        {/* Location tag — industrial badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="inline-flex items-center gap-3 bg-primary px-5 py-2 mb-10"
        >
          <span className="w-2 h-2 bg-black" />
          <span className="text-xs font-black tracking-[0.25em] uppercase text-black">
            São Paulo — Consolação
          </span>
        </motion.div>

        {/* MASSIVE title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-display leading-[0.82] tracking-wider mb-2"
          style={{ fontSize: 'var(--text-hero)' }}
        >
          <span className="text-white">BARBEARIA</span>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-display leading-[0.82] tracking-wider mb-6"
          style={{ fontSize: 'var(--text-hero)' }}
        >
          <span className="text-primary">DOM</span>
        </motion.h1>

        {/* Caution stripe divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-40 h-[6px] caution-stripe-thin mx-auto mb-8"
        />

        {/* Tagline — bold, industrial */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-xl md:text-2xl font-extrabold tracking-[0.1em] uppercase text-white mb-14"
        >
          {business.tagline}
        </motion.p>

        {/* CTA — hard industrial buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-black px-12 py-5 text-sm font-black tracking-[0.2em] uppercase hover:bg-white transition-all duration-150 hover:scale-105 w-full sm:w-auto text-center"
          >
            Agendar Agora
          </a>
          <a
            href="#servicos"
            className="border-3 border-primary text-primary px-12 py-[18px] text-sm font-extrabold tracking-[0.2em] uppercase hover:bg-primary hover:text-black transition-all duration-150 hover:scale-105 w-full sm:w-auto text-center"
            style={{ borderWidth: '3px' }}
          >
            Ver Serviços
          </a>
        </motion.div>
      </div>

      {/* Caution stripe — bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 caution-stripe-thin" />

      {/* Scroll indicator */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.a>
    </section>
  )
}
