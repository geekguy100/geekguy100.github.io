"use client"

import type { _PdfViewer, PdfViewerProps } from "@/components/pdf-viewing/pdf-viewer"
import { PdfViewer } from "@/components/pdf-viewing/pdf-viewer-lazy"
import { childSlideInVariants } from "@/lib/animation"
import { motion, type HTMLMotionProps } from "motion/react"

export type MotionPdfViewerProps = PdfViewerProps & { containerProps?: HTMLMotionProps<"div"> }
export function MotionPdfViewer({ containerProps, ...props }: MotionPdfViewerProps) {
  return (
    <motion.div {...containerProps} variants={containerProps?.variants ?? childSlideInVariants}>
      <PdfViewer {...props} />
    </motion.div>
  )
}
