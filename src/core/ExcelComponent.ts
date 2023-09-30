import { DomElement } from '@core/lib/dom'
import { ExcelComponentOptions } from '@core/model/types/core'
import { DomListener } from './DomListener'

export class ExcelComponent extends DomListener {
  constructor($root: DomElement, options: ExcelComponentOptions) {
    super($root, options?.listeners)
  }

  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }
}
