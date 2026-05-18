"use client"
import type { CustomComponentPropsWithRef, ReactNode } from "react"
import { Article } from "./containers"
import { SECTION_MARGIN_BOTTOM, SectionTitle } from "./section-title"
import { childFadeInVariants, containerSlideInProps } from "@/lib/animation"

export type ShowcaseSectionProps = Omit<
  CustomComponentPropsWithRef<typeof Article>,
  "children" | "id" | "className"
> & {
  children: ReactNode
} & {
  title: string
  description?: ReactNode
  id?: string
}

export function ArticleWithIntro({ title, description, id, children, ...props }: ShowcaseSectionProps) {
  return (
    <Article {...containerSlideInProps} className="relative" id={id} {...props}>
      <div className={`text-center ${description && SECTION_MARGIN_BOTTOM}`}>
        <SectionTitle variants={childFadeInVariants} className={description !== undefined ? "mb-0" : ""}>
          {title}
        </SectionTitle>
        {typeof description === "string" ? <p>{description}</p> : description}
      </div>
      {children}
    </Article>
  )
}
