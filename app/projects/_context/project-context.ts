import { createContext } from "react"

export interface ProjectDetails {
  title: string
  shortDescriptions: string[]
  longDescription: string
  img: string
  id: string
  playProject: EmbeddedDemo | DownloadDemo
}

export type EmbeddedDemo = { type: "embed" } & Omit<LocalDownload, "steamLink">
export type DownloadDemo = { type: "download" } & (LocalDownload | SteamDownload)
export type SteamDownload = { steamLink: string; githubLink?: never; downloadLink?: never }
export type LocalDownload = { githubLink: string; downloadLink: string; steamLink?: never }

export const ProjectContext = createContext<ProjectDetails | undefined>(undefined)
