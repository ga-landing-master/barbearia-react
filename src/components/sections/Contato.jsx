import { AnimateOnView } from '@/components/AnimateOnView'
import { business } from '@/data/content'
import { MapPin, Clock, Phone, AtSign } from 'lucide-react'

export function Contato() {
  const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`

  return (
    <section id="contato" className="relative py-32 md:py-40">
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <AnimateOnView type="fade-up" className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
            Contato
          </span>
          <h2
            className="font-display tracking-wider text-white"
            style={{ fontSize: 'var(--text-2xl)' }}
          >
            COLA NA <span className="text-primary">DOM</span>
          </h2>
          <div className="w-16 h-[3px] bg-primary mx-auto mt-6" />
        </AnimateOnView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <AnimateOnView type="slide-left">
            <div className="space-y-8">
              {[
                { Icon: MapPin, title: 'Endereço', value: business.address },
                { Icon: Clock, title: 'Horário', value: business.hours },
                { Icon: Phone, title: 'WhatsApp', value: 'Clique para conversar', href: waLink },
                { Icon: AtSign, title: 'Instagram', value: business.instagram, href: business.instagramUrl },
              ].map(({ Icon, title, value, href }) => (
                <div key={title} className="flex items-start gap-5 group">
                  <div className="bg-primary p-3 shrink-0">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wider text-white mb-1">
                      {title}
                    </h3>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:text-white transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white/60">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnView>

          {/* Map placeholder */}
          <AnimateOnView type="slide-right">
            <div className="bg-surface border-2 border-white/10 aspect-video lg:aspect-auto lg:h-full min-h-[300px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="text-center z-10">
                <MapPin className="w-14 h-14 text-primary/40 mx-auto mb-4" />
                <p className="text-sm text-white/40 font-semibold mb-4">
                  Google Maps aqui
                </p>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold tracking-wider uppercase text-primary hover:text-white transition-colors"
                >
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
