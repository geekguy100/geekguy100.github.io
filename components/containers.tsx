import { cn } from "@/lib/utils"
import type { ComponentProps, HTMLAttributes } from "react"

const COMMON_CLASSNAME: HTMLAttributes<"article">["className"] = "site-section flex flex-col p-6 *:lg:mx-48"

export function Article({ className, ...props }: ComponentProps<"article">) {
  return <article className={cn(COMMON_CLASSNAME, className)} {...props} />
}
