"use client"

import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      ></motion.div>
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      ></motion.div>
    </>
  )
}
