import { ExcelComponent } from '../../ExcelComponent'

export type IComponent = { new (...args: unknown[]): ExcelComponent; className: string }

export type DomEvent = keyof WindowEventMap
export interface ExcelComponentOptions {
  name: string
  listeners: DomEvent[]
}

export const foo = 42 as const
