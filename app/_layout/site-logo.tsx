"use client"
import { MotionDiv } from "@/components/motion-primitives"
import HatLogo from "@/public/hat.png"
import Image from "next/image"

export function SiteLogo() {
  return (
    <div className="flex flex-col items-center justify-center sm:items-end">
      <MotionDiv
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ scale: { type: "spring", visualDuration: 0.25, bounce: 0.8 } }}
      >
        <Image unoptimized width={175} src={HatLogo} alt="A black hat with wings" className={`-my-6 sm:my-0`} />
      </MotionDiv>

      <ConstructionBanner />
    </div>
  )
}

function ConstructionBanner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 24"
      stroke="black"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute left-2 size-60 -rotate-45 max-sm:-top-2"
    >
      <defs>
        <pattern id="star" viewBox="0,0,5,5" width="20%" height="100%">
          <line x1={0} y1={-3} x2={10} y2={20} />
        </pattern>
      </defs>
      <rect x="2" y="6" width="24" height="8" rx="1" fill="yellow" />
      <rect x="2" y="6" width="24" height="8" rx="1" stroke="none" fill="url(#star)" />
      <text x={5} y={13} strokeWidth="0.25" stroke="black" fill="white" style={{ font: "8px sans-serif" }}>
        W.I.P
      </text>
    </svg>
  )
}
