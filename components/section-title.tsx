"use client"
import { containerSlideInVariants } from "@/lib/animation"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import type { ComponentProps } from "react"

export const SECTION_MARGIN_BOTTOM = "mb-1"
export function SectionTitle({ children, className, ...props }: ComponentProps<typeof motion.h3>) {
  return (
    <motion.h3
      variants={containerSlideInVariants}
      {...props}
      className={cn(`${SECTION_MARGIN_BOTTOM} text-center`, className)}
    >
      {children}
    </motion.h3>
  )
}
