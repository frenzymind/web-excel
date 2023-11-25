import { DomElement } from '@core/lib/dom'
import { ExcelComponentOptions } from '@core/model/types/core'
import { Emitter } from '@core/Emitter'
import { DomListener } from './DomListener'

export class ExcelComponent extends DomListener {
  name = ''

  private emmiter: Emitter

  private unsubscribers: Function[] = []

  constructor($root: DomElement, options: ExcelComponentOptions) {
    super($root, options?.listeners)

    this.name = options?.name || ''
    this.emmiter = options.emitter

    this.prepare()
  }

  // tune component before init
  prepare() {}

  // template of component
  toHTML() {
    return ''
  }

  // notify listeners of event
  $emit(event: string, ...args: unknown[]) {
    this.emmiter.emit(event, ...args)
  }

  // Subscribe for event
  $on(event: string, fn: Function) {
    const unsub = this.emmiter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  // component initialization
  init() {
    this.initDOMListeners()
  }

  // component remove
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
