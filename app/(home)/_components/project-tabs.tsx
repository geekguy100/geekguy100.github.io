import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookIcon, HouseIcon, SatelliteIcon } from "lucide-react"
import { ShowcasePiece, type ShowcasePieceProps } from "@/components/showcase-piece"
import { content } from "@/misc/showcase.json"
import { SteamIcon } from "@/components/icons/brand-icons"
import type { ReactNode } from "react"
import type { ShowcasePiece as ShowcasePieceType } from "@/types"
import { JarIcon } from "@/components/icons/lab-icons"
import Link from "next/link"

export type Section = "university" | "aerospace" | "personal"
export interface ProjectTabProps {
  onTabChanged?(value: Section): void
  defaultValue: Section
}

export function ProjectTabs({ onTabChanged, defaultValue }: ProjectTabProps) {
  return (
    <Tabs defaultValue={defaultValue} onValueChange={onTabChanged as (value: string) => void}>
      <TabsList className="mx-auto w-full">
        <TabsTrigger value="university">
          <BookIcon />
          University
        </TabsTrigger>
        <TabsTrigger value="aerospace">
          <SatelliteIcon />
          Aerospace
        </TabsTrigger>
        <TabsTrigger value="personal">
          <HouseIcon />
          Personal
        </TabsTrigger>
      </TabsList>
      <TabsContent value="university">
        <UniversityProjects />
      </TabsContent>
      <TabsContent value="aerospace">
        <AerospaceProjects />
      </TabsContent>
      <TabsContent value="personal">
        <PersonalProjects />
      </TabsContent>
    </Tabs>
  )
}

function UniversityProjects() {
  return <GeneralPiece section="university" />
}

function AerospaceProjects() {
  return <GeneralPiece section="aerospace" />
}

function PersonalProjects() {
  return <GeneralPiece section="personal" />
}

function GeneralPiece({ section }: { section: Section }) {
  const pieces = (content as ShowcasePieceType[])
    .filter((piece) => piece.section === section)
    .map((piece) => <ShowcasePiece key={piece.id} icon={getPieceIcon(piece)} {...piece} />)

  if (section === "aerospace") {
    return (
      <>
        {pieces}
        <div className="text-base [&_h5]:font-bold [&_ul]:ml-4 [&>div]:mb-4">
          <p className="mb-2">
            While I wait for more details I would like to discuss to be approved for public release, here are some
            high-level overviews of work I did. Please note that no photos or videos are publicly released for these
            projects. Thank you for understanding.
          </p>
          <div>
            <h5>Project Phantom</h5>
            <p>
              Project Phantom is a set of Unity applications that aim to allow on-site "explorers" and off-site
              scientists to communicate in real-time using messages placed in mixed reality. The off-site scientists can
              access a model of an explorer's surrounding environment via a web application and use their keyboard and
              mouse to navigate the scene and place messages, acting as a "phantom".
            </p>
            <ul>
              <li>
                I was responsible for re-designing the application from the ground up to support mobile devices in
                addition to the web application for the remote scientists to use.
              </li>
              <li>
                My efforts resulted in the project lead{" "}
                <Link
                  href="https://aerospace.org/article/aerospace-engineer-braves-arctic-support-next-chapter-space-exploration"
                  target="_blank"
                  className="underline"
                >
                  bringing the project to Devon Island, Canada, in a simulated space mission.
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Cislunar Space Visualization Application</h5>
            <p>
              Contributed to the corporation's{" "}
              <Link
                href="https://aerospace.org/article/simulating-cislunar-space-why-experts-want-construct-digital-moon"
                target="_blank"
                className="underline"
              >
                cislunar modeling environment
              </Link>{" "}
              by developing an extensible Unreal Engine application to visualize satellites, ground stations, and
              landers.
            </p>
            <ul>
              <li>
                Loaded data from both internal and external tools, emphasizing the use of design patterns such as the
                strategy pattern, command pattern, and the template method pattern.
              </li>
              <li>
                Encouraged futher flexibility and rapid iteration through the use of DataAssets to quickly test
                different values on-the-fly.
              </li>
            </ul>
          </div>

          <div>
            <h5>Collaborative Roadmap Creator</h5>
            <p>
              Took ownership of a collaborative roadmap development web application to streamline customers' project
              planning and roadmap development efforts.
            </p>
            <ul>
              <li>Hosted weekly progress reports with the customer and standups with the development team.</li>
              <li>
                Maintained the project's Jira board. Used Confluence to take meeting notes and write developer
                documentation.
              </li>
              <li>
                Conducted thorough code reviews, mentoring interns and the team as a whole about best practices along
                the way.
              </li>
              <li>Developed the frontend using React, Typescript, and shadcn/ui.</li>
              <li>
                Developed the database using PostgreSQL, using views and functions to support translating customer
                schemas to fit our application's.
              </li>
            </ul>
          </div>

          <div>
            <h5>Multiplayer Satellite Viewer</h5>
            <p>
              Contributed to the development of a multiplayer Unity virtual reality application that serves as an
              educational app to help engineers visualize satellite CAD models in digital environments.
            </p>
            <ul>
              <li>Added support for multiplayer.</li>
              <li>Added more user-friendly player controls.</li>
              <li>Hosted weekly standups with the development team.</li>
              <li>Instructed colleagues about the fundamentals of networked video game applications.</li>
            </ul>
          </div>
        </div>
      </>
    )
  }

  return pieces.length > 0 ? pieces : <p className="text-center">There's nothing here yet</p>
}

function getPieceIcon({ id, misc }: ShowcasePieceProps): ReactNode | undefined {
  if (id === "disastergolf") return <SteamIcon />
  if (misc === "gameJam") return <JarIcon />
  return undefined
}
