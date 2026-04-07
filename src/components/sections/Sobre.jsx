import { motion } from 'framer-motion'
import { AnimateOnView } from '@/components/AnimateOnView'
import { business } from '@/data/content'
import * as Icons from 'lucide-react'

export function Sobre() {
  return (
    <section id="sobre" className="relative py-32 md:py-40 bg-bg-alt leather-texture">
      {/* Warm top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <AnimateOnView type="slide-left">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
                Sobre nós
              </span>
              <h2 className="font-display text-cream mb-2" style={{ fontSize: 'var(--text-2xl)' }}>
                <span className="italic">Onde o corte</span>
              </h2>
              <h2 className="font-display text-primary font-black mb-8" style={{ fontSize: 'var(--text-2xl)' }}>
                encontra o blues.
              </h2>
              {/* Ornamental divider */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-px bg-primary/40" />
                <span className="w-1.5 h-1.5 border border-primary/60 rotate-45" />
                <span className="w-6 h-px bg-primary/40" />
              </div>
              <p className="text-cream/60 leading-loose text-lg mb-10">
                {business.description}
              </p>
            </AnimateOnView>

            {/* Stats */}
            <AnimateOnView type="fade-up" delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {business.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <span className="font-display text-4xl md:text-5xl text-primary block mb-1 font-black">
                      {stat.value}
                    </span>
                    <span className="w-6 h-px bg-primary/30 block mx-auto mb-2" />
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-cream/40">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateOnView>
          </div>

          {/* Diferenciais */}
          <div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
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
                    className="bg-blues/30 border border-primary/10 p-6 group hover:border-primary/30 hover:bg-blues/50 transition-all duration-300"
                  >
                    <Icon className="w-7 h-7 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-display text-xl text-cream mb-2 font-bold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-cream/40 leading-relaxed">
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
