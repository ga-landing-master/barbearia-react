import { business } from '@/data/content'
import { AtSign } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative">
      <div className="h-2 caution-stripe-thin" />
      <div className="bg-black py-12">
        <div className="max-w-5xl mx-auto px-8 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary px-2 py-0.5">
                <span className="font-display text-2xl tracking-wider text-black">
                  DOM
                </span>
              </div>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/40">
                Desde 2023. Sem firula.
              </span>
            </div>

            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary w-8 h-8 flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Instagram"
            >
              <AtSign className="w-4 h-4 text-black" />
            </a>

            <p className="text-[10px] font-bold text-white/30 tracking-wider uppercase">
              &copy; {new Date().getFullYear()} {business.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
