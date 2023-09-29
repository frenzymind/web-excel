type Selector = string | HTMLElement
export class Dom {
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
}

export function $(selector: Selector) {
  return new Dom(selector)
}

$.create = (tagName: string, classes = '') => {
  const el = document.createElement(tagName)

  if (classes) {
    el.classList.add(classes)
  }

  return $(el)
}
