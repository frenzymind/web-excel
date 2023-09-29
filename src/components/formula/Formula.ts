import { ExcelComponent } from '@core'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  toHTML(): string {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }
}
