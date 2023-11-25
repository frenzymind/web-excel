import { DomElement } from '@core'

export class TableSelection {
  static SELECTED_CELL = 'selected'

  group: DomElement[]

  current: DomElement = null

  constructor() {
    this.group = []
  }

  select($el: DomElement) {
    this.clearGroup()

    this.group.push($el)
    this.current = $el

    $el.focus().addClass(TableSelection.SELECTED_CELL)
  }

  selectGroup($group: DomElement[] = []) {
    this.clearGroup()

    this.group = $group
    this.group.forEach($el => $el.addClass(TableSelection.SELECTED_CELL))
  }

  clearGroup() {
    this.group.forEach($el => $el.removeClass(TableSelection.SELECTED_CELL))

    this.group = []
  }
}
