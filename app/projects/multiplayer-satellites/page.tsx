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

export const metadata = getProjectMetdata("multiplayer-satellites")

export default function MultiplayerSatellitesPage() {
  return (
    <Project>
      <ProjectIntro>
        <ProjectTitle>Multiplayer Satellite Viewer</ProjectTitle>
        <div className="space-y-2">
          <ProjectDescription>
            Contributed to the development of a multiplayer virtual reality Unity application. The application is
            intended to serve as an educational app to help engineers visualize CAD models in a virtual construction bay
            and provide guidance as to how the satellites are assembled.
          </ProjectDescription>
          <ProjectDescription className="italic">
            Please note that, unfortunately, no photos or videos of my work are available publicly.
          </ProjectDescription>
        </div>
      </ProjectIntro>

      <ProjectRoles>
        <ProjectRole>
          <ProjectRoleHeader>Unity Developer</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Added multiplayer support to the application using the{" "}
              <Link href="https://fish-networking.gitbook.io/docs" target="_blank" className="underline">
                FishNet Unity package
              </Link>
              .
              <Responsibilities>
                <Responsibility>
                  Created a suite of ScriptableObjects that hooked into XR Interaction Toolkit events to test different
                  methods of handling ownership.
                </Responsibility>
              </Responsibilities>
            </Responsibility>
            <Responsibility>
              Built on top of Unity's XR Interaction Toolkit to create tools users can pick up and use such as power
              drills and screw drivers.
            </Responsibility>
            <Responsibility>
              Utilized{" "}
              <Link
                href="https://docs.unity3d.com/Packages/com.unity.industry.toolkit@3.3/manual/index.html"
                target="_blank"
                className="underline"
              >
                Unity Asset Transformer
              </Link>{" "}
              to bring CAD models into Unity, perform optimizations, and add components using the Asset Transform's Rule
              Engine.
            </Responsibility>
            <Responsibility>
              Created custom Editor window using Unity's UI Toolkit to search through a CAD model's metadata.
            </Responsibility>
          </Responsibilities>
        </ProjectRole>
      </ProjectRoles>
    </Project>
  )
}
