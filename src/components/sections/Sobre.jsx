import { motion } from 'framer-motion'
import { AnimateOnView } from '@/components/AnimateOnView'
import { business } from '@/data/content'
import * as Icons from 'lucide-react'

export function Sobre() {
  return (
    <section id="sobre" className="relative py-32 md:py-40 bg-bg-alt">
      {/* Top accent — thick gold line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — text */}
          <div>
            <AnimateOnView type="slide-left">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
                Quem somos
              </span>
              <h2
                className="font-display tracking-wider text-white mb-2"
                style={{ fontSize: 'var(--text-2xl)' }}
              >
                AQUI NÃO TEM
              </h2>
              <h2
                className="font-display tracking-wider text-primary mb-8"
                style={{ fontSize: 'var(--text-2xl)' }}
              >
                FRESCURA.
              </h2>
              <div className="w-16 h-[3px] bg-primary mb-8" />
              <p className="text-white/70 leading-loose text-lg mb-10">
                {business.description}
              </p>
            </AnimateOnView>

            {/* Stats row */}
            <AnimateOnView type="fade-up" delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {business.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <span className="font-display text-4xl md:text-5xl text-primary block mb-1">
                      {stat.value}
                    </span>
                    <div className="w-8 h-[2px] bg-primary/50 mx-auto mb-2" />
                    <span className="text-[11px] font-bold tracking-wider uppercase text-white/50">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateOnView>
          </div>

          {/* Right — diferenciais */}
          <div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {business.diferenciais.map((item) => {
                const Icon = Icons[item.icon] || Icons.Star
                return (
                  <motion.div
                    key={item.title}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="bg-surface border-l-4 border-primary p-6 group hover:bg-primary/10 transition-all duration-200"
                  >
                    <Icon className="w-7 h-7 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-display text-xl tracking-wider text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
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
