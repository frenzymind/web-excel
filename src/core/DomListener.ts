import { DomElement } from '@core/lib/dom'
import { DomEvent } from './model/types/core'

export class DomListener {
  listeners: DomEvent[]

  constructor(
    private $root: DomElement,
    listeners: DomEvent[] = [],
  ) {
    if (!this.$root) {
      throw new Error('No root element provided in DomListener constructor')
    }

    this.listeners = listeners
  }

  initDOMListeners() {
    console.log(this.listeners)
  }

  removeDOMListeners() {}
}
