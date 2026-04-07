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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,169,97,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,97,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-px h-[70vh] bg-gradient-to-b from-primary/40 via-primary/10 to-transparent origin-top-right rotate-12 translate-x-[-20vw]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 border border-primary/30 px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 bg-primary rounded-full" />
          <span className="text-xs tracking-[0.3em] uppercase text-primary">
            São Paulo — Consolação
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display leading-[0.9] tracking-wider mb-6"
          style={{ fontSize: 'var(--text-hero)' }}
        >
          <span className="text-foreground">BARBEARIA</span>
          <br />
          <span className="text-primary">DOM</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl tracking-[0.2em] uppercase text-muted-foreground mb-12"
        >
          {business.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-primary-light transition-colors duration-300 w-full sm:w-auto text-center"
          >
            Agende Agora
          </a>
          <a
            href="#servicos"
            className="border border-white/20 text-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase hover:border-primary/50 hover:text-primary transition-all duration-300 w-full sm:w-auto text-center"
          >
            Nossos Serviços
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </section>
  )
}
