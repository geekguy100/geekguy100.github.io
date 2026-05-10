import { ProjectDescription, ProjectIntro, ProjectTitle } from "../_components/project-intro"
import { getProjectMetdata } from "@/lib/helpers"
import {
  ProjectRole,
  ProjectRoleHeader,
  ProjectRoleResponsibilities as Responsibilities,
  ProjectRoleResponsibility as Responsibility,
  ProjectRoles,
} from "../_components/project-roles"
import { Project } from "../_components/project-wrapper"
import Link from "next/link"

export const metadata = getProjectMetdata("unreal-cesium")

export default function UnrealCesiumPage() {
  return (
    <Project>
      <ProjectIntro>
        <ProjectTitle>Cislunar Space Visualization Tool</ProjectTitle>
        <ProjectDescription>
          This project was my first dive into Unreal Engine. It involved using NASA's SPICE toolkit (via the
          NASA-acknowledged{" "}
          <Link
            className="underline"
            href="https://www.fab.com/listings/8b599b16-39bf-41bd-9ea5-3d1f70d45d06"
            target="_blank"
          >
            MaxQ Spaceflight Toolkit
          </Link>{" "}
          plugin) to propagate satellites and the{" "}
          <Link className="underline" href="https://cesium.com/platform/cesium-for-unreal/" target="_blank">
            Cesium for Unreal Engine
          </Link>{" "}
          plugin to present realistic Earth and Moon Actors.
        </ProjectDescription>
        <ProjectDescription>
          Additionally, data from other internal tools were fed into the application to add ground stations and landers
          onto the surfaces of the Earth and Moon.
        </ProjectDescription>
        <ProjectDescription>
          This application was a contribution to the larger{" "}
          <Link
            className="underline"
            target="_blank"
            href="https://aerospace.org/article/simulating-cislunar-space-why-experts-want-construct-digital-moon"
          >
            Aerospace Cislunar Modeling Environment (ACME)
          </Link>{" "}
          project.
        </ProjectDescription>
        <ProjectDescription className="ml-4 italic">
          Please note that, unfortunately, no photos or videos are available publicly
        </ProjectDescription>
      </ProjectIntro>

      {/* TODO: Add in a "what i'd do differently" */}
      {/* TODO: Add in a what I learned / takeaways */}
      {/* TODO: Add some of the UE features I used (DataAssets, Interfaces, etc.) */}
      <ProjectRoles>
        <ProjectRole>
          <ProjectRoleHeader>Solo Developer</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>3C's - Camera, controls, character</Responsibility>

            <Responsibility>
              Created application lifecycle
              <Responsibilities>
                <Responsibility>Loaders to ingest data from different sources</Responsibility>
                <Responsibility>
                  Factories to create commands that spawned and initialized Actors of different types, depending on the
                  ingested data
                </Responsibility>
              </Responsibilities>
            </Responsibility>

            <Responsibility>
              UI to display date and time of the simulation
              <Responsibilities>
                <Responsibility>Support for speeding up, slowing down, and rewinding the simulation</Responsibility>
              </Responsibilities>
            </Responsibility>

            <Responsibility>Support for displaying orbit trails of satellites</Responsibility>

            <Responsibility>
              Utilized the MaxQ Spaceflight Toolkit plugin to accurately position and orient the Earth and Moon
              according to the date and time of the simulation
            </Responsibility>

            <Responsibility>Participated in final presentation to over 30 people</Responsibility>
          </Responsibilities>
        </ProjectRole>
      </ProjectRoles>
    </Project>
  )
}
