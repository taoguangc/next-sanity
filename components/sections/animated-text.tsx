'use client'

import { motion } from 'framer-motion'

export default function AnimatedText() {
  const container = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }
  const child = {
    hidden: {
      opacity: 0,
      y: 100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <motion.main
      variants={container}
      initial='hidden'
      animate='visible'
      className='overflow-hidden'
    >
      <motion.h1 variants={child} className='mb-4 text-4xl font-bold leading-snug tracking-wider md:mb-8 md:text-6xl xl:text-8xl'>
        让您的网站
      </motion.h1>
      <motion.h1 variants={child} className='text-white text-stroke inline-block text-3xl font-bold leading-snug tracking-wider md:mb-20 md:text-5xl xl:text-7xl'>
        动静结合，
      </motion.h1>
      <motion.h1 variants={child} className='inline-block text-3xl font-bold leading-snug tracking-wider md:mb-20 md:text-5xl xl:text-7xl'>
        适合最新标准
      </motion.h1>
    </motion.main>
  )
}
