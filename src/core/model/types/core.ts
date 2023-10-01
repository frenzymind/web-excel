import { ExcelComponent } from '../../ExcelComponent'

export type IComponent = { new (...args: unknown[]): ExcelComponent; className: string }

export type DomEvent = keyof HTMLElementEventMap
export interface ExcelComponentOptions {
  name: string
  listeners: DomEvent[]
}

export type AbstractDomListener = {
  [k in keyof HTMLElementEventMap as `on${Capitalize<k>}`]?: (event: HTMLElementEventMap[k]) => void
}

export const foo = 42 as const
