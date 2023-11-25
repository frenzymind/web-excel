import { $, DomElement, ExcelComponent, ExcelComponentOptions } from '@core'
import { TABLE_CELL_SELECTED, TABLE_INPUT } from '@src/components/table/model/constants/events'
import { FORMULA_DONE, FORMULA_INPUT } from './model/constants/events'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  $formula: DomElement

  constructor($root: DomElement, options: ExcelComponentOptions) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options,
    })
  }

  init(): void {
    super.init()

    this.$formula = this.$root.find('#formula')

    this.$on(TABLE_CELL_SELECTED, ($cell: DomElement) => {
      this.$formula.text($cell.text())
    })

    this.$on(TABLE_INPUT, ($cell: DomElement) => {
      this.$formula.text($cell.text())
    })
  }

  toHTML(): string {
    return `
      <div class="info">fx</div>
      <div id="formula" class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event: InputEvent) {
    this.$emit(FORMULA_INPUT, $(event.target as HTMLInputElement).text())
  }

  onKeydown(event: KeyboardEvent) {
    const keys = ['Enter', 'Tab']

    if (keys.includes(event.key)) {
      event.preventDefault()
      event.stopPropagation()

      this.$emit(FORMULA_DONE)
    }
  }
}
