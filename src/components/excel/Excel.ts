import { IComponent } from '@core/index'
import { IExcelOptions } from './model/types/excel'

export class Excel {
  $el: HTMLElement

  components: IComponent[] = []

  constructor(selector: string, options: IExcelOptions) {
    this.$el = document.querySelector(selector)
    this.components = options.components
  }

  getRoot() {
    const $root = document.createElement('div')

    this.components.forEach(Component => {
      const component = new Component()
      $root.insertAdjacentHTML('beforeend', component.toHTML())
    })

    return $root
  }

  render() {
    this.$el.append(this.getRoot())
  }
}
