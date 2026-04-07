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
    <section id="depoimentos" className="relative py-32 md:py-40 bg-bg-alt">
      <div className="absolute top-0 left-0 right-0 h-2 caution-stripe-thin" />

      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <AnimateOnView type="fade-up" className="text-center mb-20">
          <div className="bg-primary inline-block px-3 py-1 mb-6">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-black">
              Depoimentos
            </span>
          </div>
          <h2
            className="font-display tracking-wider text-white"
            style={{ fontSize: 'var(--text-2xl)' }}
          >
            QUEM VEM, <span className="text-primary">VOLTA.</span>
          </h2>
          <div className="w-24 h-[6px] caution-stripe-thin mx-auto mt-6" />
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
              <Card className="bg-black border-t-[6px] border-t-primary border-l-0 border-r-0 border-b-0 h-full rounded-none">
                <CardContent className="p-8 flex flex-col h-full">
                  <Quote className="w-10 h-10 text-primary mb-4" />
                  <p className="text-white/80 leading-relaxed mb-6 flex-1 text-lg font-medium">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t-2 border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary flex items-center justify-center">
                        <span className="font-display text-black text-lg font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-white">
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
