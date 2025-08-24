"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
}

export function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  const controls = useAnimation()
  const ref = useRef(null)
const inView = useInView(ref, { once: true, threshold: 0.1 } as any)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  )
}
