import './styles/index.scss'
import { Excel } from '@src/components/excel/Excel'
import { Header } from '@src/components/header/Header'
import { Toolbar } from '@src/components/toolbar/Toolbar'
import { Formula } from '@src/components/formula/Formula'
import { Table } from '@src/components/table/Table'

const excel = new Excel('#root', {
  components: [Header, Toolbar, Formula, Table],
})

excel.render()
