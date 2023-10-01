// TODO: Ability to add extra columns
const CODES = {
  A: 65,
  Z: 90,
} as const

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows: string[] = []

  const cols = new Array<string>(colsCount).fill('').map(toChar).map(toColumn).join('')
  rows.push(createRow(cols))

  for (let i = 0; i < rowsCount; i++) {
    const row = new Array<string>(colsCount).fill('').map(toCell).join('')
    rows.push(createRow(row, String(i + 1)))
  }

  return rows.join('')
}

function createRow(content: string, index: string = '') {
  return `
      <div class="row">
          <div class="row-info">${index}</div>
          <div class="row-data">${content}</div>
      </div>
      `
}

function toColumn(col: string) {
  return `<div class="column">${col}</div>`
}

function toCell() {
  return `<div class="cell" contenteditable></div>`
}

function toChar(_: string, index: number) {
  return String.fromCharCode(CODES.A + index)
}
