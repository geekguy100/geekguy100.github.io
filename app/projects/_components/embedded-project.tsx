"use client"
import { MotionDiv } from "@/components/motion-primitives"
import { NavigationButton } from "@/components/nav-button"
import { childFadeInVariants } from "@/lib/animation"
import { LocalDownload, type EmbeddedDemoProps } from "./play-project"
import { useScreenBreakpoint } from "@/hooks/use-mobile"

export function EmbeddedProject({ children, itchLink, ...props }: EmbeddedDemoProps) {
  const screenTooSmall = useScreenBreakpoint(1024)
  return (
    <MotionDiv variants={childFadeInVariants} className="flex flex-col items-center gap-2">
      {!screenTooSmall && <div className="overflow-scroll max-lg:hidden">{children}</div>}
      <LocalDownload {...props}>
        {itchLink && (
          <NavigationButton newTab href={itchLink}>
            Play on Itch.io
          </NavigationButton>
        )}
      </LocalDownload>
    </MotionDiv>
  )
}
