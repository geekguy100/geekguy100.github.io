"use client"
import { SectionTitle } from "@/components/section-title"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import type { CustomComponentPropsWithRef, PropsWithChildren } from "react"
import { childSlideInProps, containerSlideInProps } from "@/lib/animation"

export function ProjectRoles({ title, children }: PropsWithChildren & { title?: string }) {
  return (
    <article>
      <SectionTitle>{title ?? "My Roles"}</SectionTitle>
      <div className="flex flex-col gap-2 text-left">{children}</div>
    </article>
  )
}

export function ProjectRole({ children }: PropsWithChildren) {
  return <div>{children}</div>
}

export function ProjectRoleHeader({ className, children, ...props }: CustomComponentPropsWithRef<typeof motion.h4>) {
  return (
    <motion.h4 className={cn("underline", className)} {...props}>
      {children}
    </motion.h4>
  )
}

export function ProjectRoleResponsibilities({
  className,
  children,
  ...props
}: CustomComponentPropsWithRef<typeof motion.ul>) {
  return (
    <motion.ul
      className={cn("list-disc [&_ul]:ml-4 [&_ul]:list-[circle]", className)}
      {...containerSlideInProps}
      {...props}
    >
      {children}
    </motion.ul>
  )
}

export function ProjectRoleResponsibility(props: CustomComponentPropsWithRef<typeof motion.li>) {
  return <motion.li {...childSlideInProps} {...props} />
}
