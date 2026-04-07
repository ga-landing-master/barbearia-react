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
      {/* Dark leather background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0704] via-[#120C06] to-[#1E1510]" />

      {/* Leather texture */}
      <div className="absolute inset-0 leather-bg" />

      {/* Warm glow — like a lamp in a saloon */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/4 blur-[150px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-rust/5 blur-[100px] rounded-full" />

      {/* Stitch lines — top */}
      <div className="absolute top-8 left-8 right-8 stitch-line opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-12 text-center">
        {/* Western ornamental header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="w-16 h-px bg-primary/30" />
          <span className="text-primary text-xs">★</span>
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary/70">
            São Paulo — Consolação
          </span>
          <span className="text-primary text-xs">★</span>
          <span className="w-16 h-px bg-primary/30" />
        </motion.div>

        {/* Title — massive serif, dramatic */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display leading-[0.85] mb-0"
          style={{ fontSize: 'var(--text-hero)' }}
        >
          <span className="text-cream italic font-normal">Barbearia</span>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-display leading-[0.85] font-black mb-8"
          style={{ fontSize: 'calc(var(--text-hero) * 1.15)' }}
        >
          <span className="text-primary">DOM</span>
        </motion.h1>

        {/* Western ornamental divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="w-16 h-px bg-primary/40" />
          <span className="text-primary/60 text-[10px]">★</span>
          <span className="w-3 h-3 border-2 border-primary/40 rotate-45" />
          <span className="text-primary/60 text-[10px]">★</span>
          <span className="w-16 h-px bg-primary/40" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl text-cream/50 italic mb-16 max-w-lg mx-auto"
        >
          {business.tagline}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-[#120C06] px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-cream transition-all duration-300 w-full sm:w-auto text-center"
          >
            Agendar Horário
          </a>
          <a
            href="#servicos"
            className="border border-cream/20 text-cream/70 px-10 py-4 text-sm font-semibold tracking-[0.15em] uppercase hover:border-primary hover:text-primary transition-all duration-300 w-full sm:w-auto text-center"
          >
            Ver Serviços
          </a>
        </motion.div>
      </div>

      {/* Stitch lines — bottom */}
      <div className="absolute bottom-8 left-8 right-8 stitch-line opacity-30" />

      {/* Scroll */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-primary/40 hover:text-primary transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </section>
  )
}
