import { SectionTitle } from "@/components/section-title"
import { cn } from "@/lib/utils"
import type { PropsWithChildren } from "react"

export function ProjectIntro({ children }: PropsWithChildren) {
  return <div>{children}</div>
}

export function ProjectTitle({ children }: PropsWithChildren) {
  return <SectionTitle className="capitalize">{children}</SectionTitle>
}

export function ProjectDescription({ className, children }: PropsWithChildren & { className?: string }) {
  return <p className={cn("text-left", className)}>{children}</p>
}
