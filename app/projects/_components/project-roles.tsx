"use client"
import { SectionTitle } from "@/components/section-title"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import type { CustomComponentPropsWithRef, PropsWithChildren, ReactNode } from "react"
import { slideInProps, slideInVariants } from "@/lib/animation"
import React, { createContext, useContext } from "react"

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

// I couldn't get the delayChildren() transition to work with Motion, so I'm taking a less intuitive approach.
// This seems like a hacky approach, but it's interesting nonetheless.
const ListItemContext = createContext<{ index: number } | undefined>(undefined)
export function ProjectRoleResponsibilities({
  className,
  children,
  ...props
}: CustomComponentPropsWithRef<typeof motion.ul>) {
  return (
    <motion.ul className={cn("list-disc [&_ul]:ml-4 [&_ul]:list-[circle]", className)} {...props}>
      {children &&
        React.Children.map(children as ReactNode, (child, i) => {
          return <ListItemContext value={{ index: i }}>{child}</ListItemContext>
        })}
    </motion.ul>
  )
}

export function ProjectRoleResponsibility(props: CustomComponentPropsWithRef<typeof motion.li>) {
  const data = useContext(ListItemContext)
  return <motion.li {...slideInProps(data ? data.index * 3 : 0)} {...props} />
}
