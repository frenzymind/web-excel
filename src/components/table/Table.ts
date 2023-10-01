import { ExcelComponent } from '@core'
import { createTable } from '@src/shared/lib/table'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  toHTML() {
    return createTable(20)
  }
}
