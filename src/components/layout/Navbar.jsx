import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { business } from '@/data/content'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#120C06]/95 backdrop-blur-md border-b border-primary/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-8 md:px-12 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="font-display text-3xl text-primary font-black italic">
            Dom
          </span>
          <span className="hidden sm:block w-px h-5 bg-primary/20" />
          <span className="hidden sm:block text-[10px] font-semibold tracking-[0.25em] uppercase text-cream/40">
            Barbearia
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-wider uppercase text-cream/40 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-[#120C06] px-6 py-2.5 text-xs font-bold tracking-wider uppercase hover:bg-cream transition-all duration-300"
          >
            Agendar
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-cream p-2" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#120C06]/98 backdrop-blur-md border-b border-primary/10 overflow-hidden"
          >
            <div className="px-8 py-8 flex flex-col gap-5">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}
                  className="text-lg font-semibold tracking-wider uppercase text-cream/50 hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
              <a href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`}
                target="_blank" rel="noopener noreferrer"
                className="bg-primary text-[#120C06] px-6 py-4 text-center font-bold tracking-wider uppercase mt-2 hover:bg-cream transition-colors">
                Agendar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
