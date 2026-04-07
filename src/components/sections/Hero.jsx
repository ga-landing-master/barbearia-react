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
      {/* Hard black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Visible grid texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,169,97,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,97,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Bold diagonal slash */}
      <div className="absolute top-0 right-[15vw] w-[2px] h-[80vh] bg-gradient-to-b from-primary via-primary/30 to-transparent origin-top rotate-12" />
      <div className="absolute bottom-0 left-[10vw] w-[2px] h-[40vh] bg-gradient-to-t from-primary/50 to-transparent origin-bottom -rotate-12" />

      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-12 text-center">
        {/* Raw location tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-3 border-2 border-primary/50 px-5 py-2 mb-10"
        >
          <span className="w-2.5 h-2.5 bg-primary" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">
            São Paulo — Consolação
          </span>
        </motion.div>

        {/* Massive title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display leading-[0.85] tracking-wider mb-4"
          style={{ fontSize: 'var(--text-hero)' }}
        >
          <span className="text-white">BARBEARIA</span>
          <br />
          <span className="text-primary">DOM</span>
        </motion.h1>

        {/* Horizontal razor line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-32 h-[3px] bg-primary mx-auto mb-6"
        />

        {/* Tagline — bold, not whispered */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-xl md:text-2xl font-bold tracking-[0.15em] uppercase text-white/80 mb-12"
        >
          {business.tagline}
        </motion.p>

        {/* CTA buttons — hard edges, thick borders */}
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
            className="bg-primary text-black px-10 py-4 text-sm font-black tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-200 hover:scale-105 w-full sm:w-auto text-center"
          >
            Agendar Agora
          </a>
          <a
            href="#servicos"
            className="border-2 border-white/40 text-white px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-all duration-200 hover:scale-105 w-full sm:w-auto text-center"
          >
            Ver Serviços
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-7 h-7" />
        </motion.div>
      </motion.a>
    </section>
  )
}
