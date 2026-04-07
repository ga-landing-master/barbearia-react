import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { business } from '@/data/content'

export function WhatsAppFloat() {
  const waLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
      aria-label="WhatsApp"
    >
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="bg-[#25D366] text-white p-4 shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-shadow"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.div>
    </motion.a>
  )
}
