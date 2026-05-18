import { getProjectMetdata } from "@/lib/helpers"
import { PlayProject } from "../_components/play-project"
import { ProjectIntro, ProjectTitle, ProjectDescription } from "../_components/project-intro"
import { Project } from "../_components/project-wrapper"
import { SectionTitle } from "@/components/section-title"
import {
  ProjectRole,
  ProjectRoleHeader,
  ProjectRoleResponsibilities as Responsibilities,
  ProjectRoleResponsibility as Responsibility,
  ProjectRoles,
} from "../_components/project-roles"
import Link from "next/link"
import JamResults from "@/misc/peace-fighter-results.png"
import { PopupImage } from "@/components/popup-image"
import { MotionParagraph } from "@/components/motion-primitives"
import { childFadeInVariants, childSlideInVariants } from "@/lib/animation"

export const metadata = getProjectMetdata("peace-fighter")

export default function PeaceFighterPage() {
  return (
    <Project>
      <ProjectIntro>
        <ProjectTitle>Peace Fighter</ProjectTitle>
        <div className="space-y-2">
          <ProjectDescription>
            Peace Fighter was my team's submission to the{" "}
            <Link className="underline" href="https://itch.io/jam/gmtk-2023/rate/2157432" target="_blank">
              Game Maker's Toolkit Game Jam 2023
            </Link>
            .
          </ProjectDescription>
          <ProjectDescription>
            The theme of this jam was <span className="font-bold">Roles Reversed</span> and was developed in 48 hours.
          </ProjectDescription>
          <ProjectDescription>
            Instead of participating in a bar fight, you play as the audience and are trying to prevent the fighters
            from knocking each other out.
          </ProjectDescription>
          <ProjectDescription>
            My team and I were excited to see we placed <span className="font-bold">#774</span> in the creativity
            category ✨.
          </ProjectDescription>
        </div>
      </ProjectIntro>
      <PlayProject type="embed" downloadLink="" githubLink="" itchLink="https://geekguy100.itch.io/peace-fighter">
        <iframe src="https://itch.io/embed-upload/8270982?color=3f2832" allowFullScreen width="1000" height="700" />
      </PlayProject>
      <article>
        <SectionTitle>Jam Results</SectionTitle>
        <PopupImage
          width={320}
          height={218}
          src={JamResults}
          alt="The overall results of Peace Fighter in GMTK 2023"
          title="Jam Results"
          className="mx-auto"
        />
        <MotionParagraph variants={childFadeInVariants} className="text-center italic">
          Ranked from 20 ratings
        </MotionParagraph>
      </article>
      <ProjectRoles>
        <ProjectRole>
          <ProjectRoleHeader>Programming</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>Responsible for enemy AI state machine</Responsibility>
            <Responsibility>Mouse interactions</Responsibility>
            <Responsibility>Other programming related tasks</Responsibility>
          </Responsibilities>
        </ProjectRole>
      </ProjectRoles>
    </Project>
  )
}
