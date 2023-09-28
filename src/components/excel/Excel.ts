import { $, IComponent } from '@core'
import { IExcelOptions } from './model/types/excel'

export class Excel {
  $el: HTMLElement

  components: IComponent[] = []

  constructor(selector: string, options: IExcelOptions) {
    this.$el = document.querySelector(selector)
    this.components = options.components
  }

  getRoot() {
    const $root = $.create('div', 'excel')

    this.components.forEach(Component => {
      const $el = $.create('div', Component.className)

      const component = new Component($el)
      $el.innerHTML = component.toHTML()

      $root.append($el)
    })

    return $root
  }

  render() {
    this.$el.append(this.getRoot())
  }
}
