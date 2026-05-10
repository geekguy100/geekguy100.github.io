"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCallback, type ComponentProps, type MouseEvent, type ReactNode } from "react"

export type NavButtonProps = {
  href: string
  children: ReactNode
} & Omit<ComponentProps<typeof Button>, "asChild" | "children"> & { newTab?: boolean }

export function NavigationButton({ href, children, onClick, newTab = false, ...props }: NavButtonProps) {
  const clickCallback = useCallback(
    (ev: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      onClick?.(ev)
      if (newTab) return

      // If we were able to smooth scroll, prevent default behavior
      // or else the scroll will be instant.
      if (trySmoothScroll(href)) {
        ev.preventDefault()
      }
    },
    [href, onClick, newTab]
  )

  return (
    <Button {...props} onClick={clickCallback} asChild>
      <Link target={newTab ? "_blank" : undefined} href={href}>
        {children}
      </Link>
    </Button>
  )
}

function trySmoothScroll(href: string): boolean {
  const id = getAnchorId(href)
  if (id === null) return false

  const target = document.getElementById(id)
  if (!target) return false
  target.scrollIntoView({ behavior: "smooth" })
  return true
}

function getAnchorId(href: string) {
  const index = href.indexOf("#")
  if (index < 0) return null

  return href.slice(index + 1)
}
