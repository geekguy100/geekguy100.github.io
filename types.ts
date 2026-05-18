export type Mutatable<T> = { -readonly [K in keyof T]: Mutatable<T[K]> }
export type ShowcasePiece = {
  title: string
  descriptions: string[]
  img: string
  id: string
  section: "aerospace" | "university" | "personal"
  misc?: "gameJam"
}
