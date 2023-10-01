import { DomElement, ExcelComponent } from '@core'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root: DomElement) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    })
  }

  toHTML(): string {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event: Event) {
    console.log(this.$root)
    console.log('Formula: onInput', (event.target as HTMLInputElement).textContent.trim())
  }

  onClick(event: Event) {
    console.log(this.$root)
    console.log('Formula: onClick', event)
  }
}
