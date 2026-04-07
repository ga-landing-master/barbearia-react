import { motion } from 'framer-motion'
import { business } from '@/data/content'

export function BannerCTA() {
  const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Warm leather gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
      <div className="absolute inset-0 leather-bg opacity-30" />

      {/* Stitch borders */}
      <div className="absolute top-4 left-8 right-8 stitch-line opacity-20" />
      <div className="absolute bottom-4 left-8 right-8 stitch-line opacity-20" />

      <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="w-12 h-px bg-[#120C06]/20" />
          <span className="text-[#120C06]/40 text-xs">★</span>
          <span className="w-12 h-px bg-[#120C06]/20" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[#120C06] italic font-normal"
          style={{ fontSize: 'var(--text-2xl)' }}
        >
          Chega de corte
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-cream font-black mb-8"
          style={{ fontSize: 'var(--text-2xl)' }}
        >
          meia-boca.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#120C06]/60 text-lg font-medium italic mb-10 max-w-md mx-auto"
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
          className="inline-block bg-[#120C06] text-primary px-12 py-4 font-bold text-sm tracking-[0.15em] uppercase hover:bg-cream hover:text-[#120C06] transition-all duration-300"
        >
          Fale Conosco
        </motion.a>
      </div>
    </section>
  )
}
