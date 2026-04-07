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
      {/* Deep midnight blue */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071018] via-[#0B1622] to-[#0E1A2B]" />

      {/* Leather cross-stitch texture */}
      <div className="absolute inset-0 leather-texture" />

      {/* Warm ambient glow — like a neon sign */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />

      {/* Decorative lines — like guitar strings */}
      <div className="absolute top-0 right-[20vw] w-px h-[70vh] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent" />
      <div className="absolute top-0 right-[22vw] w-px h-[50vh] bg-gradient-to-b from-cream/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-12 text-center">
        {/* Location — vintage tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 border border-primary/30 px-5 py-2 mb-10"
        >
          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">
            São Paulo — Consolação
          </span>
        </motion.div>

        {/* Title — elegant serif, not screaming */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display leading-[0.9] mb-2"
          style={{ fontSize: 'var(--text-hero)' }}
        >
          <span className="text-cream italic">Barbearia</span>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-display font-black leading-[0.9] mb-8"
          style={{ fontSize: 'var(--text-hero)' }}
        >
          <span className="text-primary">Dom</span>
        </motion.h1>

        {/* Ornamental divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="w-12 h-px bg-primary/40" />
          <span className="w-2 h-2 border border-primary/60 rotate-45" />
          <span className="w-12 h-px bg-primary/40" />
        </motion.div>

        {/* Tagline — warm, not aggressive */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl font-semibold tracking-[0.08em] text-cream/70 italic mb-14"
        >
          {business.tagline}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-[#0B1622] px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-cream transition-all duration-300 w-full sm:w-auto text-center"
          >
            Agendar Horário
          </a>
          <a
            href="#servicos"
            className="border border-cream/30 text-cream px-10 py-4 text-sm font-semibold tracking-[0.15em] uppercase hover:border-primary hover:text-primary transition-all duration-300 w-full sm:w-auto text-center"
          >
            Nossos Serviços
          </a>
        </motion.div>
      </div>

      {/* Bottom ornament */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/60 hover:text-primary transition-colors"
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
