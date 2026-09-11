"use client"

import "highlight.js/styles/atom-one-dark-reasonable.min.css"
import hljs from "highlight.js/lib/core"
import typescript from "highlight.js/lib/languages/typescript"
import { useEffect, useRef } from "react"
import { motion, type Variants } from "motion/react"
import { childSlideInVariants } from "@/lib/animation"

export interface CodeBlockProps {
  children: string
  className?: string
  variants?: Variants
}

hljs.registerLanguage("typescript", typescript)

export function TSCodeBlock({ className, children, variants }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!codeRef.current) return
    hljs.highlightElement(codeRef.current)
  }, [])

  return (
    <motion.pre variants={variants ?? childSlideInVariants} className={className}>
      <code ref={codeRef} className="language-typescript">
        {children}
      </code>
    </motion.pre>
  )
}
