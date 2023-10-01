import { DomElement } from '@core/lib/dom'
import { ExcelComponentOptions } from '@core/model/types/core'
import { DomListener } from './DomListener'

export class ExcelComponent extends DomListener {
  name = ''

  constructor($root: DomElement, options: ExcelComponentOptions) {
    super($root, options?.listeners)

    this.name = options?.name || ''
  }

  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
  }
}
