import { DomElement } from '@core/lib/dom'
import { Emitter } from '@core'
import { ExcelComponent } from '../../ExcelComponent'

export type DomEvent = keyof HTMLElementEventMap
export interface ExcelComponentOptions {
  name?: string
  listeners?: DomEvent[]
  emitter?: Emitter
}

export type IComponent = { new ($root: DomElement, options: ExcelComponentOptions): ExcelComponent; className: string }

export type AbstractDomListener = {
  [k in keyof HTMLElementEventMap as `on${Capitalize<k>}`]?: (event: HTMLElementEventMap[k]) => void
}

export type ICell = { row: number; col: number }

export const foo = 42 as const
