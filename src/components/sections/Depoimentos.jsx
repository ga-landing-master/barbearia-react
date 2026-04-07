import { motion } from 'framer-motion'
import { AnimateOnView } from '@/components/AnimateOnView'
import { business } from '@/data/content'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}

export function Depoimentos() {
  return (
    <section id="depoimentos" className="relative py-24 md:py-32 bg-bg-alt">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnView type="fade-up" className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Depoimentos
          </span>
          <h2
            className="font-display tracking-wider text-foreground"
            style={{ fontSize: 'var(--text-2xl)' }}
          >
            O QUE NOSSOS <span className="text-primary">CLIENTES DIZEM</span>
          </h2>
        </AnimateOnView>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {business.testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={item}>
              <Card className="bg-surface border-white/5 h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-foreground leading-relaxed mb-6 flex-1">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="font-display text-primary text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </span>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
