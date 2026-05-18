"use client"
import { MotionDiv } from "@/components/motion-primitives"
import { NavigationButton } from "@/components/nav-button"
import { childFadeInVariants } from "@/lib/animation"
import { LocalDownload, type EmbeddedDemoProps } from "./play-project"
import { useScreenBreakpoint } from "@/hooks/use-mobile"
import { useCallback, useState } from "react"

export function EmbeddedProject({ children, itchLink, ...props }: EmbeddedDemoProps) {
  const [bp, setBp] = useState<number>(1024)
  const screenTooSmall = useScreenBreakpoint(bp)

  const setBreakpoint = useCallback((wrapper: HTMLDivElement | null) => {
    if (wrapper === null) return
    const iframe = wrapper.querySelector("iframe")
    if (iframe === null) return
    setBp(iframe.clientWidth + 100)
  }, [])

  return (
    <MotionDiv variants={childFadeInVariants} className="flex flex-col items-center gap-2">
      {!screenTooSmall && (
        <div ref={setBreakpoint} className="max-lg:hidden">
          {children}
        </div>
      )}
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
