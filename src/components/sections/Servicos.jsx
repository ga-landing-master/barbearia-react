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
    <section id="servicos" className="relative py-32 md:py-40 leather-texture">
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <AnimateOnView type="fade-up" className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
            Serviços
          </span>
          <h2 className="font-display text-cream" style={{ fontSize: 'var(--text-2xl)' }}>
            <span className="italic">O que a </span>
            <span className="text-primary font-black">Dom</span>
            <span className="italic"> oferece</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="w-12 h-px bg-primary/40" />
            <span className="w-2 h-2 border border-primary/60 rotate-45" />
            <span className="w-12 h-px bg-primary/40" />
          </div>
        </AnimateOnView>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {business.services.map((service) => {
            const Icon = Icons[service.icon] || Icons.Star
            return (
              <motion.div key={service.title} variants={item}>
                <Card className="bg-surface border border-primary/10 hover:border-primary/30 transition-all duration-300 group h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-5">
                      <div className="border border-primary/30 p-3 group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-display text-3xl text-primary font-black">
                        {service.price}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl text-cream mb-3 font-bold">
                      {service.title}
                    </h3>
                    <p className="text-sm text-cream/40 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <AnimateOnView type="fade-up" delay={0.3} className="text-center mt-16">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-[#0B1622] px-12 py-4 font-bold text-sm tracking-[0.15em] uppercase hover:bg-cream transition-all duration-300"
          >
            Agendar pelo WhatsApp
          </a>
        </AnimateOnView>
      </div>
    </section>
  )
}
