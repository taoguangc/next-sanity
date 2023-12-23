'use client'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'

const variants = {
  hidden: { opacity: 0, x: '-100%', y: 0 },
  enter: { opacity: 1, x: 0, y: 0 }
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main variants={variants} initial='hidden' animate='enter' transition={{ type: 'linear', duration: 1 }}>
      <Header />
      {children}
      <Footer />
    </motion.main>
  )
}
