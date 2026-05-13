"use client"
import { SectionTitle } from "@/components/section-title"
import { slideInProps } from "@/lib/animation"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import type { PropsWithChildren } from "react"

export function ProjectIntro({ children }: PropsWithChildren) {
  return <div>{children}</div>
}

export function ProjectTitle({ children }: PropsWithChildren) {
  return (
    <SectionTitle {...slideInProps(0)} className="capitalize">
      {children}
    </SectionTitle>
  )
}

export function ProjectDescription({ className, children }: PropsWithChildren & { className?: string }) {
  return (
    <motion.p {...slideInProps(1)} className={cn("text-left", className)}>
      {children}
    </motion.p>
  )
}
