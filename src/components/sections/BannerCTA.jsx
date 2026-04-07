import { motion } from 'framer-motion'
import { business } from '@/data/content'

export function BannerCTA() {
  const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Warm leather brown gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-dark" />

      {/* Subtle leather texture */}
      <div className="absolute inset-0 leather-texture opacity-50" />

      {/* Warm ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-white/5 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[#0B1622] italic"
          style={{ fontSize: 'var(--text-2xl)' }}
        >
          Chega de corte
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-cream font-black mb-6"
          style={{ fontSize: 'var(--text-2xl)' }}
        >
          meia-boca.
        </motion.h2>
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-10 h-px bg-[#0B1622]/30" />
          <span className="w-2 h-2 border border-[#0B1622]/40 rotate-45" />
          <span className="w-10 h-px bg-[#0B1622]/30" />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#0B1622]/70 text-lg font-semibold mb-10 max-w-xl mx-auto"
        >
          Agenda aberta. Manda a mensagem e garante teu horário.
        </motion.p>
        <motion.a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="inline-block bg-[#0B1622] text-primary px-12 py-4 font-bold text-sm tracking-[0.15em] uppercase hover:bg-cream hover:text-[#0B1622] transition-all duration-300"
        >
          Fale Conosco
        </motion.a>
      </div>
    </section>
  )
}
