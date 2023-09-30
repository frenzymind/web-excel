import { DomElement, ExcelComponent } from '@core'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root: DomElement) {
    super($root, {
      name: 'Formula',
      listeners: ['click'],
    })
  }

  toHTML(): string {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event: Event) {
    console.log('Formula: onInput', event)
  }
}
