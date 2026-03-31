import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"
import { LeadModal } from "@/components/lead-modal"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="home" className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <AnimatedBackground variant="gradient" color="rgba(220, 38, 38, 0.08)" secondaryColor="rgba(75, 85, 99, 0.08)" />

      <div className="container px-6 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <ScrollReveal>
            <motion.div
              className="flex flex-col justify-center space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="space-y-4" variants={itemVariants}>
                <h1 className="text-4xl font-heading font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                  <span className="gradient-text">Шевроны с DTF печатью</span>
                  <br />
                  <span className="text-foreground">и вышивкой на заказ</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 opacity-70">
                  Любой принт — DTF печать или вышивка. Своё производство, помощь с макетом и отправка в тот же день. Работаем от 10 штук — без задержек и посредников.
                </p>
              </motion.div>

              <motion.div className="flex flex-col gap-6 sm:flex-row sm:items-center" variants={itemVariants}>
                <GradientButton
                  glowAmount={5}
                  className="px-6 py-2.5 text-base"
                  gradientFrom="from-red-500"
                  gradientTo="to-red-700"
                  onClick={() => setModalOpen(true)}
                >
                  <span className="flex items-center">
                    Заказать бесплатный образец
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </span>
                </GradientButton>

                <MagneticButton className="neumorphic-button">
                  <a href="#features" className="px-6 py-2.5 block">
                    Как это работает
                  </a>
                </MagneticButton>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <p className="text-sm text-muted-foreground flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  Более 500 выполненных заказов — от 10 до 1000+ штук
                </p>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <SpotlightCard className="relative h-[450px] w-full overflow-hidden rounded-xl border glassmorphic-card p-1 border-glow-red">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-gray-900/20 z-10"></div>
              <div className="relative z-20 h-full w-full rounded-xl bg-gradient-to-br from-red-950/50 to-gray-950/50 p-6 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="col-span-2 h-24 rounded-xl bg-red-800/20 border border-red-800/30 flex flex-col items-center justify-center glassmorphic-inner-card"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(220, 38, 38, 0.3)" }}
                  >
                    <span className="font-heading text-2xl text-white tracking-tight">⚡ 1–2 дня</span>
                    <span className="text-xs text-gray-400 mt-1">срок изготовления</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="h-32 rounded-xl bg-gray-800/20 border border-gray-800/30 flex flex-col items-center justify-center glassmorphic-inner-card"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(75, 85, 99, 0.3)" }}
                  >
                    <span className="font-heading text-white tracking-tight text-lg">от 10 шт</span>
                    <span className="text-xs text-gray-400 mt-1">минимальный заказ</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="h-32 rounded-xl bg-red-900/20 border border-red-900/30 flex flex-col items-center justify-center glassmorphic-inner-card"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(220, 38, 38, 0.3)" }}
                  >
                    <span className="font-heading text-white tracking-tight text-lg">свой цех</span>
                    <span className="text-xs text-gray-400 mt-1">без посредников</span>
                  </motion.div>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </div>

      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} title="Заказать бесплатный образец" />
    </section>
  )
}
