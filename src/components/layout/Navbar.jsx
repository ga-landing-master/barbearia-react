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
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b-2 border-primary/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-8 md:px-12 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="font-display text-4xl tracking-wider text-primary">
            DOM
          </span>
          <span className="hidden sm:block w-[2px] h-7 bg-primary/50" />
          <span className="hidden sm:block text-[10px] font-bold tracking-[0.3em] uppercase text-white/60">
            Barbearia
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold tracking-wider uppercase text-white/60 hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-black px-6 py-2.5 text-xs font-black tracking-wider uppercase hover:bg-white transition-all duration-200 hover:scale-105"
          >
            Agendar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-b-2 border-primary/20 overflow-hidden"
          >
            <div className="px-8 py-8 flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-bold tracking-wider uppercase text-white/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-black px-6 py-4 text-center font-black tracking-wider uppercase mt-2 hover:bg-white transition-colors"
              >
                Agendar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
