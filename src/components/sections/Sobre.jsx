import { motion } from 'framer-motion'
import { AnimateOnView } from '@/components/AnimateOnView'
import { business } from '@/data/content'
import * as Icons from 'lucide-react'

export function Sobre() {
  return (
    <section id="sobre" className="relative py-32 md:py-40 bg-bg-alt leather-bg">
      <div className="absolute top-0 left-8 right-8 stitch-line opacity-20" />

      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <AnimateOnView type="slide-left">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary/50 text-[10px]">★</span>
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary/70">
                  Sobre nós
                </span>
                <span className="text-primary/50 text-[10px]">★</span>
              </div>
              <h2 className="font-display text-cream italic mb-1" style={{ fontSize: 'var(--text-2xl)' }}>
                Cadeira de couro,
              </h2>
              <h2 className="font-display text-primary font-black mb-8" style={{ fontSize: 'var(--text-2xl)' }}>
                blues no som.
              </h2>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-px bg-primary/30" />
                <span className="w-2 h-2 border border-primary/40 rotate-45" />
                <span className="text-primary/50 text-[10px]">★</span>
                <span className="w-2 h-2 border border-primary/40 rotate-45" />
                <span className="w-12 h-px bg-primary/30" />
              </div>
              <p className="text-cream/45 leading-loose text-lg mb-10">
                {business.description}
              </p>
            </AnimateOnView>

            <AnimateOnView type="fade-up" delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {business.stats.map((stat) => (
                  <div key={stat.label} className="text-center border border-primary/10 bg-surface px-3 py-5 overflow-hidden">
                    <span className="font-display text-3xl md:text-4xl text-primary block mb-2 font-black">
                      {stat.value}
                    </span>
                    <div className="w-4 h-px bg-primary/30 mx-auto mb-2" />
                    <span className="text-[9px] font-semibold tracking-wider uppercase text-cream/35 leading-tight block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateOnView>
          </div>

          <div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {business.diferenciais.map((item) => {
                const Icon = Icons[item.icon] || Icons.Star
                return (
                  <motion.div
                    key={item.title}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="bg-surface border border-primary/8 p-6 group hover:border-primary/25 transition-all duration-300 relative"
                  >
                    {/* Corner ornament */}
                    <span className="absolute top-2 right-3 text-primary/15 text-[8px]">★</span>
                    <Icon className="w-7 h-7 text-primary/70 mb-4 group-hover:text-primary transition-colors" />
                    <h3 className="font-display text-xl text-cream mb-2 font-bold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-cream/35 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
