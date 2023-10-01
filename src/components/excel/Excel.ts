import { $, IComponent, DomElement, ExcelComponent } from '@core'
import { IExcelOptions } from './model/types/excel'

export class Excel {
  $el: DomElement

  components: IComponent[] = []

  excelComponents: ExcelComponent[] = []

  constructor(selector: string, options: IExcelOptions) {
    this.$el = $(selector)
    this.components = options.components
  }

  getRoot() {
    const $root = $.create('div', 'excel')

    this.excelComponents = this.components.map(Component => {
      const $el = $.create('div', Component.className)

      const component = new Component($el)
      $el.html(component.toHTML())

      $root.append($el)

      return component
    })

    return $root
  }

  render() {
    this.$el.append(this.getRoot())
    this.excelComponents.forEach(component => component.init())
  }
}
