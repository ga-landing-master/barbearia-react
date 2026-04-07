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
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnView type="fade-up" className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Serviços
          </span>
          <h2
            className="font-display tracking-wider text-foreground"
            style={{ fontSize: 'var(--text-2xl)' }}
          >
            O QUE <span className="text-primary">OFERECEMOS</span>
          </h2>
        </AnimateOnView>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {business.services.map((service) => {
            const Icon = Icons[service.icon] || Icons.Star
            return (
              <motion.div key={service.title} variants={item}>
                <Card className="bg-surface border-white/5 hover:border-primary/30 transition-all duration-300 group h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="font-display text-2xl text-primary">
                        {service.price}
                      </span>
                    </div>
                    <h3 className="font-display text-xl tracking-wider text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <AnimateOnView type="fade-up" delay={0.3} className="text-center mt-12">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 font-bold text-sm tracking-[0.2em] uppercase hover:bg-primary-light transition-colors"
          >
            Agende pelo WhatsApp
          </a>
        </AnimateOnView>
      </div>
    </section>
  )
}
