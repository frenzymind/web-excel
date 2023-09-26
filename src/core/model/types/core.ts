import { ExcelComponent } from '@core/ExcelComponent'

export type IComponent = new (...args: unknown[]) => ExcelComponent
