import { AnimateOnView } from '@/components/AnimateOnView'
import { business } from '@/data/content'
import { MapPin, Clock, Phone, AtSign } from 'lucide-react'

export function Contato() {
  const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`

  return (
    <section id="contato" className="relative py-32 md:py-40 bg-black">
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <AnimateOnView type="fade-up" className="text-center mb-20">
          <div className="bg-primary inline-block px-3 py-1 mb-6">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-black">
              Contato
            </span>
          </div>
          <h2
            className="font-display tracking-wider text-white"
            style={{ fontSize: 'var(--text-2xl)' }}
          >
            COLA NA <span className="text-primary">DOM</span>
          </h2>
          <div className="w-24 h-[6px] caution-stripe-thin mx-auto mt-6" />
        </AnimateOnView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimateOnView type="slide-left">
            <div className="space-y-6">
              {[
                { Icon: MapPin, title: 'Endereço', value: business.address },
                { Icon: Clock, title: 'Horário', value: business.hours },
                { Icon: Phone, title: 'WhatsApp', value: 'Clique para conversar', href: waLink },
                { Icon: AtSign, title: 'Instagram', value: business.instagram, href: business.instagramUrl },
              ].map(({ Icon, title, value, href }) => (
                <div key={title} className="flex items-start gap-5 group bg-[#111] p-5 border-l-[6px] border-primary hover:bg-primary/5 transition-all duration-150">
                  <div className="bg-primary w-10 h-10 flex items-center justify-center shrink-0">
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
                        className="text-primary font-bold hover:text-white transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white/60 font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnView>

          <AnimateOnView type="slide-right">
            <div className="bg-[#111] border-2 border-primary/20 aspect-video lg:aspect-auto lg:h-full min-h-[300px] flex items-center justify-center relative overflow-hidden">
              <div className="text-center z-10">
                <div className="bg-primary w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-black" />
                </div>
                <p className="text-sm text-white/40 font-bold mb-4">
                  Google Maps aqui
                </p>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-black tracking-wider uppercase text-primary hover:text-white transition-colors"
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
