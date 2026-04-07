import { motion } from 'framer-motion'
import { AnimateOnView } from '@/components/AnimateOnView'
import { business } from '@/data/content'
import * as Icons from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function Servicos() {
  const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`

  return (
    <section id="servicos" className="relative py-32 md:py-40">
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <AnimateOnView type="fade-up" className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
            Serviços
          </span>
          <h2
            className="font-display tracking-wider text-white"
            style={{ fontSize: 'var(--text-2xl)' }}
          >
            NA DOM TEM <span className="text-primary">TUDO</span>
          </h2>
          <div className="w-16 h-[3px] bg-primary mx-auto mt-6" />
        </AnimateOnView>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {business.services.map((service) => {
            const Icon = Icons[service.icon] || Icons.Star
            return (
              <motion.div key={service.title} variants={item}>
                <Card className="bg-surface border-l-4 border-l-primary border-t-0 border-r-0 border-b-0 hover:bg-primary/5 transition-all duration-200 group h-full rounded-none">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-5">
                      <div className="bg-primary/15 p-3 group-hover:bg-primary/25 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="font-display text-3xl text-primary">
                        {service.price}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl tracking-wider text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <AnimateOnView type="fade-up" delay={0.3} className="text-center mt-16">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-black px-12 py-5 font-black text-sm tracking-[0.2em] uppercase hover:bg-white transition-all duration-200 hover:scale-105"
          >
            Agendar pelo WhatsApp
          </a>
        </AnimateOnView>
      </div>
    </section>
  )
}
