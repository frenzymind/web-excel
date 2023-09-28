import { ExcelComponent } from '@src/core/ExcelComponent'

export type IComponent = { new (...args: unknown[]): ExcelComponent; className: string }

export const foo = 42 as const
