import { business } from '@/data/content'
import { AtSign } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-primary/10 py-12 bg-[#071018]">
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl text-primary font-black">
              Dom
            </span>
            <span className="w-px h-4 bg-primary/20" />
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-cream/30 italic">
              Navalha & Blues desde 2023
            </span>
          </div>

          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/30 hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <AtSign className="w-5 h-5" />
          </a>

          <p className="text-[10px] font-semibold text-cream/20 tracking-wider uppercase">
            &copy; {new Date().getFullYear()} {business.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
