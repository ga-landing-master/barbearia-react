import { business } from '@/data/content'
import { AtSign } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t-2 border-primary/20 py-12">
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="font-display text-3xl tracking-wider text-primary">
              DOM
            </span>
            <span className="w-[2px] h-6 bg-primary/50" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50">
              Desde 2023. Sem firula.
            </span>
          </div>

          {/* Social */}
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <AtSign className="w-5 h-5" />
          </a>

          {/* Copyright */}
          <p className="text-[11px] font-bold text-white/30 tracking-wider uppercase">
            &copy; {new Date().getFullYear()} {business.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
