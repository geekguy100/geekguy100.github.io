"use client"

import { MotionDiv } from "@/components/motion-primitives"
import { childFadeInVariants } from "@/lib/animation"
import { motion, stagger } from "motion/react"
import { NavigationBar } from "./nav-bar"

export function NameAndNavbar() {
  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: stagger(0.1) }}
      className="flex flex-col items-center justify-center gap-2"
    >
      <div>
        <motion.h1 variants={childFadeInVariants}>Kyle Grenier</motion.h1>
        <motion.h4 variants={childFadeInVariants}>Immersive Technology and Game Developer</motion.h4>
      </div>
      <NavigationBar />
    </MotionDiv>
  )
}
