import { AnimateOnView } from '@/components/AnimateOnView'
import { business } from '@/data/content'
import { MapPin, Clock, Phone, AtSign } from 'lucide-react'

export function Contato() {
  const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`

  return (
    <section id="contato" className="relative py-32 md:py-40 leather-texture">
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <AnimateOnView type="fade-up" className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
            Contato
          </span>
          <h2 className="font-display text-cream" style={{ fontSize: 'var(--text-2xl)' }}>
            <span className="italic">Cola na </span>
            <span className="text-primary font-black">Dom</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="w-12 h-px bg-primary/40" />
            <span className="w-2 h-2 border border-primary/60 rotate-45" />
            <span className="w-12 h-px bg-primary/40" />
          </div>
        </AnimateOnView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimateOnView type="slide-left">
            <div className="space-y-5">
              {[
                { Icon: MapPin, title: 'Endereço', value: business.address },
                { Icon: Clock, title: 'Horário', value: business.hours },
                { Icon: Phone, title: 'WhatsApp', value: 'Clique para conversar', href: waLink },
                { Icon: AtSign, title: 'Instagram', value: business.instagram, href: business.instagramUrl },
              ].map(({ Icon, title, value, href }) => (
                <div key={title} className="flex items-start gap-5 group bg-surface border border-primary/10 p-5 hover:border-primary/30 transition-all duration-300">
                  <div className="border border-primary/30 p-2.5 shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-cream mb-1 font-bold">
                      {title}
                    </h3>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-cream transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-cream/50">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnView>

          <AnimateOnView type="slide-right">
            <div className="bg-surface border border-primary/10 aspect-video lg:aspect-auto lg:h-full min-h-[300px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent" />
              <div className="text-center z-10">
                <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-4" />
                <p className="text-sm text-cream/30 font-semibold mb-4">Google Maps aqui</p>
                <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-wider uppercase text-primary hover:text-cream transition-colors">
                  Abrir no Maps →
                </a>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  )
}
