import { DomElement, ExcelComponent } from '@core'
import { resizeHandler } from '@src/components/table/table.resize'
import { createTable, isResizeable } from '@src/shared/lib/table'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root: DomElement) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    })
  }

  onMousedown(event: Event) {
    if (isResizeable(event)) {
      resizeHandler(this.$root, event)
    }
  }

  toHTML() {
    return createTable(20)
  }
}
