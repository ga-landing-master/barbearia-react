import { AnimateOnView } from '@/components/AnimateOnView'
import { business } from '@/data/content'
import { MapPin, Clock, Phone, AtSign } from 'lucide-react'

export function Contato() {
  const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`

  return (
    <section id="contato" className="relative py-32 md:py-40">
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <AnimateOnView type="fade-up" className="text-center mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Contato
          </span>
          <h2
            className="font-display tracking-wider text-foreground"
            style={{ fontSize: 'var(--text-2xl)' }}
          >
            VENHA NOS <span className="text-primary">VISITAR</span>
          </h2>
        </AnimateOnView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info cards */}
          <AnimateOnView type="slide-left">
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg tracking-wider text-foreground mb-1">
                    Endereço
                  </h3>
                  <p className="text-muted-foreground">{business.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg tracking-wider text-foreground mb-1">
                    Horário
                  </h3>
                  <p className="text-muted-foreground">{business.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg tracking-wider text-foreground mb-1">
                    WhatsApp
                  </h3>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    Clique para conversar
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors shrink-0">
                  <AtSign className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg tracking-wider text-foreground mb-1">
                    Instagram
                  </h3>
                  <a
                    href={business.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    {business.instagram}
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnView>

          {/* Map placeholder */}
          <AnimateOnView type="slide-right">
            <div className="bg-surface border border-white/5 aspect-video lg:aspect-auto lg:h-full min-h-[300px] flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="text-center z-10">
                <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-4">
                  Incorpore o Google Maps aqui
                </p>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-wider uppercase text-primary hover:text-primary-light transition-colors"
                >
                  Ver no Google Maps →
                </a>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  )
}
