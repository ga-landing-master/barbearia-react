import { motion } from 'framer-motion'
import { business } from '@/data/content'

export function BannerCTA() {
  const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Bold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-light" />

      {/* Heavy diagonal stripes */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(0,0,0,0.4) 15px, rgba(0,0,0,0.4) 16px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display tracking-wider text-black mb-2"
          style={{ fontSize: 'var(--text-2xl)' }}
        >
          CHEGA DE CORTE
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display tracking-wider text-white mb-6"
          style={{ fontSize: 'var(--text-2xl)' }}
        >
          MEIA-BOCA.
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-20 h-[3px] bg-black mx-auto mb-6"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-black/70 text-lg font-semibold mb-10 max-w-xl mx-auto"
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
          className="inline-block bg-black text-primary px-12 py-5 font-black text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-200 hover:scale-105"
        >
          Fale Conosco
        </motion.a>
      </div>
    </section>
  )
}
