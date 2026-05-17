export type Mutatable<T> = { -readonly [K in keyof T]: Mutatable<T[K]> }
