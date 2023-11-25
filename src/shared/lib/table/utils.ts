import { DomElement } from '@core'
import { ICell } from '@core/model/types/core'

export function isResizeable(event: Event) {
  const _target = event.target as HTMLElement

  if (_target.dataset.resize) {
    return true
  }

  return false
}

export function isCell(event: Event) {
  return (event.target as HTMLElement).dataset.type === 'cell'
}

export function range(start: number, end: number) {
  if (start > end) {
    // eslint-disable-next-line no-param-reassign
    ;[end, start] = [start, end]
  }

  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
}

export function matrix($target: DomElement, $current: DomElement) {
  const current = $current.id(true)
  const target = $target.id(true)

  const cols = range(current.col, target.col)
  const rows = range(current.row, target.row)

  const ids = cols.reduce<string[]>((acc, col) => {
    rows.forEach(row => acc.push(`${row}:${col}`))

    return acc
  }, [])

  return ids
}

export function nextSelector(key: string, { col: _col, row: _row }: ICell) {
  let col = _col
  let row = _row

  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row++
      break

    case 'Tab':
    case 'ArrowRight':
      col++
      break

    case 'ArrowLeft':
      col--
      break

    case 'ArrowUp':
      row--
      break

    default:
      break
  }

  return `[data-id="${row}:${col}"]`
}
