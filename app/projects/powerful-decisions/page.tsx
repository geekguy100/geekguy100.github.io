import { getProjectMetdata } from "@/lib/helpers"
import { ProjectIntro, ProjectTitle, ProjectDescription } from "../_components/project-intro"
import { Project } from "../_components/project-wrapper"
import { ProjectGameplay } from "../_components/project-gameplay"
import {
  ProjectRole,
  ProjectRoleHeader,
  ProjectRoleResponsibilities as Responsibilities,
  ProjectRoleResponsibility as Responsibility,
  ProjectRoles,
} from "../_components/project-roles"

export const metadata = getProjectMetdata("powerful-decisions")

export default function PowerfulDecisions() {
  return (
    <Project>
      <ProjectIntro>
        <ProjectTitle>POWERful Decisions</ProjectTitle>
        <div className="space-y-2">
          <ProjectDescription>
            POWERful Decisions is an educational game made for the Peoria Park District to teach about the smart grid
            electricity system. The work was commissioned by the Peoria Park District through my teacher, David Abzug,
            and created over the course of a semester.
          </ProjectDescription>
          <ProjectDescription>A total of eleven people worked on this project.</ProjectDescription>
        </div>
      </ProjectIntro>
      <ProjectGameplay
        content={[
          {
            src: "/powerful-decisions.mp4",
            title: "POWERful Decisions Gameplay",
            mimeType: "video/mp4",
          },
        ]}
      />
      <ProjectRoles>
        <ProjectRole>
          <ProjectRoleHeader>Core Gameplay Programmer</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Created logic for character reactions based on how the player's stats changed after selecting an answer.
            </Responsibility>
            <Responsibility>
              Interaction system utilizing the strategy pattern
              <Responsibilities>
                <Responsibility>Analytics displayed in-game so players can compare answers</Responsibility>
                <Responsibility>Data parsed from JSON</Responsibility>
              </Responsibilities>
            </Responsibility>
            <Responsibility>
              Contributed to stat tracking system that determined the outcome of the player's company
            </Responsibility>
          </Responsibilities>
        </ProjectRole>
      </ProjectRoles>
    </Project>
  )
}
