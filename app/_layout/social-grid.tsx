"use client"
import { ButtonGroup } from "@/components/ui/button-group"
import type { PropsWithChildren } from "react"
import { SocialIcons } from "./social-icons"
import { MotionDiv } from "@/components/motion-primitives"
import { stagger } from "motion"

export function SocialGrid() {
  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: stagger(0.1) }}
      className="flex justify-center sm:items-center sm:justify-normal"
    >
      <DesktopSocialGrid>
        <SocialIcons />
      </DesktopSocialGrid>
      <MobileSocialGrid>
        <SocialIcons />
      </MobileSocialGrid>
    </MotionDiv>
  )
}

function DesktopSocialGrid({ children }: PropsWithChildren) {
  return <div className="hidden sm:grid sm:grid-cols-2 sm:gap-4">{children}</div>
}

function MobileSocialGrid({ children }: PropsWithChildren) {
  return <ButtonGroup className="pb-2 sm:hidden sm:pb-0">{children}</ButtonGroup>
}
