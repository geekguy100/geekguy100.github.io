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

export const metadata = getProjectMetdata("project-phantom")

export default function ProjectPhantomPage() {
  return (
    <Project>
      <ProjectIntro>
        <ProjectTitle>Project Phantom</ProjectTitle>
        <div className="space-y-2">
          <ProjectDescription>
            Project Phantom is a set of Unity applications that aim to allow on-site "explorers" and off-site scientists
            communicate in real-time using messages places in mixed reality. The off-site scientists can access a model
            of the explorer's environment via a web application and use their keyboard and mouse to navigate the scene
            and place messages, acting as a "phantom".
          </ProjectDescription>
          <ProjectDescription>
            Project Phantom v1 was only available on the Microsoft Hololens and was developed by a co-worker before my
            arrival at the company. I was responsible for re-designing the application from the ground up to support
            mobile devices in addition to the web application for the remote scientist to use.
          </ProjectDescription>
          <ProjectDescription>
            My efforts resulted in the project lead{" "}
            <Link
              className="underline"
              target="_blank"
              href="https://aerospace.org/article/aerospace-engineer-braves-arctic-support-next-chapter-space-exploration"
            >
              bringing the project to Devon Island, Canada, in a simulated space mission.
            </Link>
          </ProjectDescription>
        </div>
      </ProjectIntro>

      <ProjectRoles>
        <ProjectRole>
          <ProjectRoleHeader>Research</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>Extensive research into mixed reality and Unity's AR packages.</Responsibility>
            <Responsibility>
              Learned about spatial anchors, hologram drifting, and Unity's AR Foundations package.
            </Responsibility>
          </Responsibilities>
        </ProjectRole>
        <ProjectRole>
          <ProjectRoleHeader>Mobile Application</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Used Unity's AR Foundation package to provide support for placing messages on tracked surfaces, raycasting
              into the environment, and marker recognition to find the origin of the playspace.
            </Responsibility>
          </Responsibilities>
        </ProjectRole>
        <ProjectRole>
          <ProjectRoleHeader>Web Application</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Changes for the web application primarily involved adding POV controls and changing how users place
              messages.
            </Responsibility>
          </Responsibilities>
        </ProjectRole>
        <ProjectRole>
          <ProjectRoleHeader>Backend / Database</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Created a WebSocket server using Node.js that allows explorers and scientists to join the same "lobby".
            </Responsibility>
            <Responsibility>
              Used MongoDB to store messages placed by both types of users.
              <Responsibilities>
                <Responsibility>
                  Positions and orientations of explorers are also recorded over time, allowing for later analysis or
                  playback of positions.
                </Responsibility>
              </Responsibilities>
            </Responsibility>
          </Responsibilities>
        </ProjectRole>

        <ProjectRole>
          <ProjectRoleHeader>Future Improvements</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              This project was my first large mixed reality project, and with such a short turnaround time, around 4
              months of development, I've since taken the time to do additional research and review what changes I'd
              make to improve the application.
            </Responsibility>
            <Responsibility>
              Drifting
              <Responsibilities>
                <Responsibility>
                  The drifting of AR messages was very noticable. This occured due to the origin anchor's tracking
                  becoming unstable as the user walked further and further away from it. When an explorer places or
                  moves a message, the position of that message relative to the origin is recorded, but since the origin
                  is not in the correct position, the message's position gets recorded incorrectly. This can cause the
                  message to appear incorrectly for other users in the session. When the origin's tracking stabilizes,
                  the message jumps to an updated position, causing additional issues for the on-site explorers.
                </Responsibility>
                <Responsibility>
                  I began looking into shared anchors on the Microsoft Hololens 2, and unfortunately, Microsoft's Azure
                  Spatial Anchors service has been sunset. However, it's still possible to export spatial anchor data on
                  the Hololens 2. On my own time,{" "}
                  <span className="font-bold">I've been creating my own shared anchor service</span> that makes use of
                  this data to allow multiple on-site explorers to see the same messages. Initial testing has been
                  successful.
                  <Responsibilities>
                    <Responsibility>
                      In the future, it would be great if this data could also be used to place messages on the web
                      app's model of the environment.
                    </Responsibility>
                  </Responsibilities>
                </Responsibility>
              </Responsibilities>
            </Responsibility>
            <Responsibility>
              Setup
              <Responsibilities>
                <Responsibility>
                  If a web app user / phantom wants to participate in the session, a model of the environment the
                  explorers will be in must be provided. We accomplished this using the Scaniverse mobile app to create
                  a splat of the environment. It was then exported as a GLB and imported into the web application. This
                  isn't scalable in the long-term.
                </Responsibility>
                <Responsibility>
                  I came across a research project by Niantic called{" "}
                  <Link className="underline" target="_blank" href="https://nianticlabs.github.io/cocreatar/">
                    CoCreatAR
                  </Link>
                  . This project seems almost identical to how we envisioned Phantom to function.
                  <Responsibilities>
                    <Responsibility>
                      Taking inspiration from this project, I would consider using{" "}
                      <span className="font-bold">publically available location meshes</span>
                      to prevent or reduce the need to manually scan an environment.
                    </Responsibility>
                    <Responsibility>
                      Being able to use{" "}
                      <span className="font-bold">commercial SDKs, such as the Niantic SDK for Unity</span> used in
                      CoCreatAR, would also be a major upgrade. Unfortunately, due to costs, time, and reliance on
                      cloud-based services, solutions like this are often not available for work conducted at aerospace
                      and defense companies.
                    </Responsibility>
                  </Responsibilities>
                </Responsibility>
              </Responsibilities>
            </Responsibility>
          </Responsibilities>
        </ProjectRole>
      </ProjectRoles>
    </Project>
  )
}
