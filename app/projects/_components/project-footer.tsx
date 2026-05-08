import { cn } from "@/lib/utils"
import Link from "next/link"
import type { ComponentPropsWithoutRef, ReactNode } from "react"

type DefaultProjectFooterProps = { children?: never; href: string }
type CustomProjectFooterProps = { children: ReactNode; href?: never }

export function ProjectFooter({
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<"div">, "children"> & (DefaultProjectFooterProps | CustomProjectFooterProps)) {
  return (
    <div {...props} className={cn("flex flex-col items-center italic", className)}>
      {props.href && (
        <p>
          For a full list of documents, forms, assets, etc., please click{" "}
          <Link href={props.href} target="_blank" className="underline">
            here
          </Link>
          .
        </p>
      )}
      {props.children && props.children}
    </div>
  )
}
