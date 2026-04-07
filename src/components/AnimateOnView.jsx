import { motion } from 'framer-motion'

const variants = {
  'fade-up': { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
  'fade-in': { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  'slide-left': { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  'slide-right': { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
  'scale-in': { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
}

export function AnimateOnView({ children, type = 'fade-up', delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      variants={variants[type]}
    >
      {children}
    </motion.div>
  )
}
