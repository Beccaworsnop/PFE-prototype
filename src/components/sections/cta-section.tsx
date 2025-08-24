"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/components/providers/providers"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animatedsection"

export function CTASection() {
  const { t } = useLanguage()

  return (
    <AnimatedSection delay={1.4}>
      <section className="py-16 px-4 bg-blue-600/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-4 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {t("readyToStart")}
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t("joinThousands")}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/signup">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full">
                  {t("signUpNow")}
                </Button>
              </motion.div>
            </Link>
            <Link href="/login">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full bg-transparent"
                >
                  {t("login")}
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  )
}
