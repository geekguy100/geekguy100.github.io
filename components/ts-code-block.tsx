"use client"

import "highlight.js/styles/atom-one-dark-reasonable.min.css"
import hljs from "highlight.js/lib/core"
import typescript from "highlight.js/lib/languages/typescript"
import { useEffect, useRef } from "react"

export interface CodeBlockProps {
  children: string
  className?: string
}

hljs.registerLanguage("typescript", typescript)

export function TSCodeBlock({ className, children }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!codeRef.current) return
    hljs.highlightElement(codeRef.current)
  }, [])

  return (
    <pre className={className}>
      <code ref={codeRef} className="language-typescript">
        {children}
      </code>
    </pre>
  )
}
