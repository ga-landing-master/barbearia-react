import { motion } from 'framer-motion'
import { AnimateOnView } from '@/components/AnimateOnView'
import { business } from '@/data/content'
import * as Icons from 'lucide-react'

export function Sobre() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-bg-alt">
      {/* Accent border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <AnimateOnView type="slide-left">
              <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
                Sobre Nós
              </span>
              <h2
                className="font-display tracking-wider text-foreground mb-6"
                style={{ fontSize: 'var(--text-2xl)' }}
              >
                MAIS QUE UMA BARBEARIA.
                <br />
                <span className="text-primary">UM RITUAL.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                {business.description}
              </p>
            </AnimateOnView>

            {/* Stats row */}
            <AnimateOnView type="fade-up" delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {business.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <span className="font-display text-3xl md:text-4xl text-primary block">
                      {stat.value}
                    </span>
                    <span className="text-xs tracking-wider uppercase text-muted-foreground">
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
                    className="bg-surface border border-white/5 p-6 group hover:border-primary/30 transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-display text-xl tracking-wider text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
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
