import { getProjectMetdata } from "@/lib/helpers"
import { ProjectIntro, ProjectTitle, ProjectDescription } from "../_components/project-intro"
import { Project } from "../_components/project-wrapper"
import { SectionTitle } from "@/components/section-title"

import { MotionArticle } from "@/components/motion-primitives"
import { ElectronOverlayCodeCarousel } from "./_components/electron-overlay-code-carousel"

export const metadata = getProjectMetdata("electron-overlay")

export default function ElectronUiOverlay() {
  return (
    <Project>
      <ProjectIntro>
        <ProjectTitle>Electron UI Overlay for Unity Applications</ProjectTitle>
        <div className="space-y-2">
          <ProjectDescription>
            This project allows an Electron application to serve as a user interface to a Unity application. The
            Electron application acts as an overlay to the Unity application, matching its width, height, and window
            state (minimized, focused, etc.).
          </ProjectDescription>
          <ProjectDescription>
            The repository is a monorepo that holds the Next.js user interface application and the Electron application.
            The Next.js application's static assets are exported during a build, and the Electron application serves
            them.
          </ProjectDescription>
          <ProjectDescription>
            The Electron application and the Unity application communicate over a{" "}
            <span className="font-bold">named pipe</span>. Type-safe hooks were written to make the developer experience
            of sending and receiving data easier. <span className="font-bold">InterOp</span> with native Windows
            libraries was used to observe the state of the Unity application's window. Changes in its state were
            forwarded to the Electron app so it can match it.
          </ProjectDescription>
          <ProjectDescription>
            The Unity application makes use of <span className="font-bold">attributes</span> and{" "}
            <span className="font-bold">IL postprocessing</span> to handle sending and receivng data from the Electron
            application.
          </ProjectDescription>

          <ProjectDescription>Development is still on-going.</ProjectDescription>
        </div>
      </ProjectIntro>

      <MotionArticle>
        <SectionTitle>Code Snippets</SectionTitle>
        <ElectronOverlayCodeCarousel />
      </MotionArticle>
    </Project>
  )
}
