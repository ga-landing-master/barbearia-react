import { motion } from 'framer-motion'
import { AnimateOnView } from '@/components/AnimateOnView'
import { business } from '@/data/content'
import * as Icons from 'lucide-react'

export function Sobre() {
  return (
    <section id="sobre" className="relative py-32 md:py-40 bg-bg-alt">
      {/* Caution stripe top */}
      <div className="absolute top-0 left-0 right-0 h-2 caution-stripe-thin" />

      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — text */}
          <div>
            <AnimateOnView type="slide-left">
              <div className="bg-primary inline-block px-3 py-1 mb-6">
                <span className="text-xs font-black tracking-[0.3em] uppercase text-black">
                  Quem somos
                </span>
              </div>
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
              <div className="w-20 h-[6px] caution-stripe-thin mb-8" />
              <p className="text-white/70 leading-loose text-lg font-medium mb-10">
                {business.description}
              </p>
            </AnimateOnView>

            {/* Stats */}
            <AnimateOnView type="fade-up" delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {business.stats.map((stat) => (
                  <div key={stat.label} className="text-center bg-surface p-4 border-t-4 border-t-primary">
                    <span className="font-display text-4xl md:text-5xl text-primary block mb-1">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-extrabold tracking-wider uppercase text-white/50">
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
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
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
                    className="bg-black border-l-[6px] border-primary p-6 group hover:bg-primary/10 transition-all duration-150"
                  >
                    <div className="bg-primary w-10 h-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-black" />
                    </div>
                    <h3 className="font-display text-xl tracking-wider text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed font-medium">
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
