import { $, IComponent, DomElement, ExcelComponent, Emitter, ExcelComponentOptions } from '@core'
import { IExcelOptions } from './model/types/excel'

export class Excel {
  $el: DomElement

  components: IComponent[] = []

  excelComponents: ExcelComponent[] = []

  emitter = new Emitter()

  constructor(selector: string, options: IExcelOptions) {
    this.$el = $(selector)
    this.components = options.components
  }

  getRoot() {
    const $root = $.create('div', 'excel')

    const componentOptions: ExcelComponentOptions = {
      emitter: this.emitter,
    }

    this.excelComponents = this.components.map(Component => {
      const $el = $.create('div', Component.className)

      const component = new Component($el, componentOptions)
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

  destroy() {
    this.excelComponents.forEach(component => component.destroy())
  }
}
