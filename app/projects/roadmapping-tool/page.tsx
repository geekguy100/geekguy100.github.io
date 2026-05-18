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

export const metadata = getProjectMetdata("roadmapping-tool")

export default function RoadmappingToolPage() {
  return (
    <Project>
      <ProjectIntro>
        <ProjectTitle>Roadmapping Web App</ProjectTitle>
        <div className="space-y-2">
          <ProjectDescription>
            Took ownership of a project planning / roadmap development application. The application was developed to
            streamline NASA engineers' roadmap development efforts and has since been used for that purpose.
          </ProjectDescription>
          <ProjectDescription>
            The application was originally developed in Unity, but after coming onto the project and reviewing the
            requirements, I decided it was best to transition it to a web application. This made the application more
            accessible, allowed me to bring on additional team members, and allowed us to leverage the ever-growing
            ecosystem of packages available for web applications.
          </ProjectDescription>
          <ProjectDescription className="italic">
            Please note that, unfortunately, no photos or videos of my work are available publicly.
          </ProjectDescription>
        </div>
      </ProjectIntro>

      <ProjectRoles>
        <ProjectRole>
          <ProjectRoleHeader>Development Team Lead</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Kickstarted the application's transition from a Unity desktop application to a React application.
              <Responsibilities>
                <Responsibility>
                  At the time, I did not know much about web development. I took it upon myself to learn React and
                  TypeScript to bring the next iteration of the project to life.
                </Responsibility>
              </Responsibilities>
            </Responsibility>
            <Responsibility>
              Hosted weekly progress reports with the customer and standups with the development team.
            </Responsibility>
            <Responsibility>
              Maintained the project's Jira board and Confluence for meeting notes and developer documentation.
            </Responsibility>
            <Responsibility>
              Conducted thorough code reviews, mentoring the juniors on the team about best practices along the way.
            </Responsibility>
          </Responsibilities>
        </ProjectRole>

        <ProjectRole>
          <ProjectRoleHeader>Frontend Developer</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>Utilized React, React Router, shadcn/ui, and Vite to develop the frontend.</Responsibility>
            <Responsibility>
              Utilized the{" "}
              <Link href="https://swr.vercel.app/" target="_blank" className="underline">
                swr package
              </Link>{" "}
              and custom hooks to streamline working with remote data, caching, and preventing duplicated requests.
            </Responsibility>
            <Responsibility>
              Extended an existing Gantt chart library to provide support for additional features our project required.
            </Responsibility>
          </Responsibilities>
        </ProjectRole>

        <ProjectRole>
          <ProjectRoleHeader>Database Development</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Worked with colleageus to formalize a PostgreSQL database schema to store roadmaps, tasks, and the
              relationships between them.
            </Responsibility>
            <Responsibility>
              Created multiple PostgreSQL views and functions to support translating other customers' data to our
              application's schema.
            </Responsibility>
          </Responsibilities>
        </ProjectRole>
      </ProjectRoles>
    </Project>
  )
}
