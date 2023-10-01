/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-classes-per-file */
import { DomElement } from '@core/lib/dom'
import { capitalize } from '@src/shared/lib/strings'
import { AbstractDomListener, DomEvent } from './model/types/core'

export class DomListener {
  listeners: DomEvent[]

  constructor(
    public $root: DomElement,
    listeners: DomEvent[] = [],
  ) {
    if (!this.$root) {
      throw new Error('No root element provided in DomListener constructor')
    }

    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener) as keyof AbstractDomListener

      if (!(this as any)[method]) {
        throw new Error(`Methos ${method} is not implemented in ${(this as any).name} component`)
      }

      ;(this as any)[method] = (this as any)[method].bind(this)

      this.$root.on(listener, (this as any)[method])
    })
  }

  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      this.$root.off(listener, (this as any)[method])
    })
  }
}

function getMethodName(eventName: DomEvent): keyof AbstractDomListener {
  return capitalize(eventName, 'on') as keyof AbstractDomListener
}
