import type { Variants } from "motion"
import { type motion } from "motion/react"
import type { CustomComponentPropsWithRef } from "react"

export const slideInVariants = {
  hidden: { opacity: 0, translateX: -50 },
  visible: (index: number = 0) => ({
    opacity: 1,
    translateX: 0,
    transition: { delay: 0.05 * index },
  }),
} satisfies Variants

export function slideInProps(index: number = 0, once: boolean = true) {
  return {
    initial: "hidden",
    whileInView: "visible",
    variants: slideInVariants,
    custom: index,
    viewport: { once },
  } satisfies CustomComponentPropsWithRef<typeof motion.div>
}
