import { ShowcasePiece } from "@/components/showcase-piece"
import { SectionWithIntro } from "@/components/section-with-intro"
import { content } from "@/misc/showcase.json"
import type { ProjectDetails } from "../projects/_context/project-context"

export default function ProjectsShowcase() {
  return (
    <SectionWithIntro id="projects" title="Projects" description="The larger projects I worked on throughout my career">
      {(content as ProjectDetails[]).map((piece) => (
        <ShowcasePiece key={piece.id} {...piece} />
      ))}
    </SectionWithIntro>
  )
}
