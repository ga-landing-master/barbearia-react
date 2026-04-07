import { business } from '@/data/content'
import { AtSign } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-[#0A0704]">
      <div className="mx-8 stitch-line opacity-15" />
      <div className="py-12">
        <div className="max-w-5xl mx-auto px-8 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl text-primary font-black italic">
                Dom
              </span>
              <span className="text-primary/30 text-[8px]">★</span>
              <span className="text-[10px] font-medium tracking-[0.15em] text-cream/25 italic">
                Navalha, couro & blues desde 2023
              </span>
            </div>

            <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer"
              className="text-cream/25 hover:text-primary transition-colors" aria-label="Instagram">
              <AtSign className="w-5 h-5" />
            </a>

            <p className="text-[10px] font-semibold text-cream/15 tracking-wider uppercase">
              &copy; {new Date().getFullYear()} {business.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
