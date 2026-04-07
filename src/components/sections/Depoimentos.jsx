import { motion } from 'framer-motion'
import { AnimateOnView } from '@/components/AnimateOnView'
import { business } from '@/data/content'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }
const item = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }

export function Depoimentos() {
  return (
    <section id="depoimentos" className="relative py-32 md:py-40 bg-bg-alt leather-bg">
      <div className="absolute top-0 left-8 right-8 stitch-line opacity-15" />

      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <AnimateOnView type="fade-up" className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-primary/50 text-[10px]">★</span>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary/70">
              Depoimentos
            </span>
            <span className="text-primary/50 text-[10px]">★</span>
          </div>
          <h2 className="font-display text-cream" style={{ fontSize: 'var(--text-2xl)' }}>
            <span className="italic font-normal">Quem vem, </span>
            <span className="text-primary font-black">volta.</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="w-12 h-px bg-primary/30" />
            <span className="w-2 h-2 border border-primary/30 rotate-45" />
            <span className="text-primary/40 text-[10px]">★</span>
            <span className="w-2 h-2 border border-primary/30 rotate-45" />
            <span className="w-12 h-px bg-primary/30" />
          </div>
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
              <Card className="bg-surface border border-primary/8 h-full relative">
                <span className="absolute top-3 right-3 text-primary/10 text-[8px]">★</span>
                <CardContent className="p-8 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-cream/60 leading-relaxed mb-6 flex-1 text-lg italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-primary/8">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 border border-primary/30 flex items-center justify-center">
                        <span className="font-display text-primary text-base font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-cream/70">
                        {testimonial.name}
                      </span>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
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
