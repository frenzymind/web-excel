import { DomEvent } from '../model/types/core'

type Selector = string | HTMLElement

class Dom {
  private $el: HTMLElement

  constructor(selector: Selector) {
    if (typeof selector === 'string') {
      this.$el = document.querySelector(selector)
    } else {
      this.$el = selector
    }
  }

  html(html?: string): string | this {
    if (html) {
      this.$el.innerHTML = html
      return this
    }

    return this.$el.outerHTML.trim()
  }

  clear() {
    this.html('')
    return this
  }

  on(eventType: DomEvent, cb: EventListenerOrEventListenerObject) {
    this.$el.addEventListener(eventType, cb)
  }

  off(eventType: DomEvent, cb: EventListenerOrEventListenerObject) {
    this.$el.removeEventListener(eventType, cb)
  }

  append(_node: Dom | HTMLElement) {
    let node = _node

    if (node instanceof Dom) {
      node = node.$el
    }

    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }

    return this
  }

  closest(selector: string) {
    return $(this.$el.closest(selector) as HTMLElement)
  }

  getCoords() {
    return this.$el.getBoundingClientRect()
  }

  get data() {
    return this.$el.dataset
  }

  findAll(selector: string) {
    return this.$el.querySelectorAll<HTMLElement>(selector)
  }

  css(styles: Partial<CSSStyleDeclaration>) {
    Object.assign(this.$el.style, styles)

    return this
  }
}

export type DomElement = Dom

export function $(selector: Selector): DomElement {
  return new Dom(selector)
}

$.create = (tagName: string, classes = ''): DomElement => {
  const el = document.createElement(tagName)

  if (classes) {
    el.classList.add(classes)
  }

  return $(el)
}
