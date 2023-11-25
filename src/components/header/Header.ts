import { DomElement, ExcelComponent, ExcelComponentOptions } from '@core'

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root: DomElement, options: ExcelComponentOptions) {
    super($root, {
      name: 'Header',
      ...options,
    })
  }

  toHTML(): string {
    return `
    <input type="text" class="input" value="Новая таблица" />

    <div>
      <div class="button">
        <i class="material-icons">delete</i>
      </div>

      <div class="button">
        <i class="material-icons">exit_to_app</i>
      </div>
    </div>
  `
  }
}
