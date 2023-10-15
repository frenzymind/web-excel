import { $, DomElement } from '@core'

export function resizeHandler($root: DomElement, event: Event) {
  const _target = event.target as HTMLElement

  const $resizer = $(_target)
  const $parent = $resizer.closest('[data-type="resizable"]')
  const coords = $parent.getCoords()
  const type = $resizer.data.resize

  const sideProp = type === 'col' ? 'bottom' : 'right'
  const sidePropsValue = type === 'col' ? '-100vh' : '-100vw'

  let value: string

  $resizer.css({ opacity: '1', [sideProp]: sidePropsValue })

  document.onmousemove = (e: MouseEvent) => {
    if (type === 'col') {
      const delta = e.pageX - coords.right
      value = `${coords.width + delta}px`

      $resizer.css({ right: `${-delta}px` })
    } else {
      const delta = e.pageY - coords.bottom
      value = `${coords.height + delta}px`

      $resizer.css({ bottom: `${-delta}px` })
    }
  }

  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null

    if (type === 'col') {
      const cells = $root.findAll(`[data-col="${$parent.data.col}"]`)

      $parent.css({ width: value })

      cells.forEach(el => {
        el.style.width = `${value}`
      })
    } else {
      $parent.css({ height: value })
    }

    $resizer.css({ opacity: '0', bottom: '0', right: '0' })
  }
}
