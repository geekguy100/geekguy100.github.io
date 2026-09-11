"use client"

import "highlight.js/styles/atom-one-dark-reasonable.min.css"
import hljs from "highlight.js/lib/core"
import { useEffect, useRef } from "react"
import { motion, type Variants } from "motion/react"
import { childSlideInVariants } from "@/lib/animation"
import type { LanguageFn } from "highlight.js"
import { cn } from "@/lib/utils"

export interface CodeBlockProps {
  children: string
  language: LanguageFn
  className?: string
  variants?: Variants
}

export function CodeBlock({ className, language, children, variants }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement | null>(null)
  const isHighlighted = useRef<boolean>(false)
  const languageName = language.name

  useEffect(() => {
    if (!codeRef.current || isHighlighted.current) return
    registerLanguage(languageName, language)
    hljs.highlightElement(codeRef.current)
    isHighlighted.current = true
  }, [languageName, language])

  return (
    <motion.pre variants={variants ?? childSlideInVariants} className={cn("size-full overflow-auto", className)}>
      <code ref={codeRef} className={`language-${languageName}`}>
        {children}
      </code>
    </motion.pre>
  )
}

function registerLanguage(languageName: string, language: LanguageFn) {
  if (hljs.getLanguage(languageName)) return
  hljs.registerLanguage(languageName, language)
}
