export type UnknownObject = Record<string, unknown> | { [key: string]: unknown }

export type HTMLElementEvent<T extends HTMLElement, K extends Event> = K & {
  target: T
}
