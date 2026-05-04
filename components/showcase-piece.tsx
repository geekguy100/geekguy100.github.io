import type { ProjectDetails } from "@/app/projects/_context/project-context"
import Image from "next/image"
import Link from "next/link"

export function ShowcasePiece({ title, shortDescriptions, id, img }: ProjectDetails) {
  return (
    <Link href={`/projects/${id}`}>
      <article className="flex gap-4 rounded-md p-6 outline-primary hover:outline-3">
        <Image
          className="object-contain"
          unoptimized
          src={img}
          width={300}
          height={160}
          alt={`Thumbnail for content titled "${title}"`}
        />
        <div className="flex flex-col">
          <h3>{title}</h3>
          {shortDescriptions.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
        </div>
      </article>
    </Link>
  )
}
