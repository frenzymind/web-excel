import { $, DomElement, ExcelComponent, ExcelComponentOptions } from '@core'
import { FORMULA_DONE, FORMULA_INPUT } from '@src/components/formula'
import { TableSelection } from '@src/components/table/TableSelection'
import { TABLE_CELL_SELECTED, TABLE_INPUT } from '@src/components/table/model/constants/events'
import { resizeHandler } from '@src/components/table/table.resize'
import { createTable, isResizeable } from '@src/shared/lib/table'
import { isCell, matrix, nextSelector } from '@src/shared/lib/table/utils'
import { HTMLElementEvent } from '@src/shared/types/helps'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  selection: TableSelection

  constructor($root: DomElement, options: ExcelComponentOptions) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input'],
      ...options,
    })
  }

  prepare(): void {
    this.selection = new TableSelection()
  }

  init(): void {
    super.init()

    const $cell = this.$root.find('[data-id="0:0"]')
    this.selectCell($cell)

    this.$on(FORMULA_INPUT, (text: string) => {
      this.selection.current.text(text)
    })

    this.$on(FORMULA_DONE, () => {
      this.selection.current.focus()
    })
  }

  onMousedown(event: HTMLElementEvent<HTMLElement, MouseEvent>) {
    if (isResizeable(event)) {
      resizeHandler(this.$root, event)
    } else if (isCell(event)) {
      const $target = $(event.target)

      if (event.shiftKey) {
        const $cells = matrix($target, this.selection.current).map(id => this.$root.find(`[data-id="${id}"]`))

        this.selection.selectGroup($cells)
      } else {
        this.selection.select($target)
      }
    }
  }

  onKeydown(event: KeyboardEvent) {
    const keys = ['Enter', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp']

    const { key } = event

    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault()
      event.stopPropagation()

      const id = this.selection.current.id(true)

      const $next = this.$root.find(nextSelector(key, id))

      if ($next.isExist) {
        this.selectCell($next)
      }
    }
  }

  onInput(event: HTMLElementEvent<HTMLInputElement, Event>) {
    this.$emit(TABLE_INPUT, $(event.target))
  }

  toHTML() {
    return createTable(20)
  }

  selectCell($cell: DomElement) {
    this.selection.select($cell)
    this.$emit(TABLE_CELL_SELECTED, $cell)
  }
}
