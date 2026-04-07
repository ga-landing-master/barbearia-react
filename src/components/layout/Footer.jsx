import { business } from '@/data/content'
import { AtSign } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl tracking-wider text-primary">
              DOM
            </span>
            <span className="w-px h-5 bg-white/20" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Barbearia
            </span>
          </div>

          {/* Social */}
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <AtSign className="w-5 h-5" />
          </a>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {business.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
