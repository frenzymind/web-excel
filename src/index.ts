import { Header } from '@src/components/header/Header'
import './styles/index.scss'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { foo } from '@src/core/model/types/core'
import { Excel } from '@src/components/excel/Excel'
import { Formula } from '@src/components/formula/Formula'
import { Table } from '@src/components/table/Table'
import { Toolbar } from '@src/components/toolbar/Toolbar'

const excel = new Excel('#root', {
  components: [Header, Toolbar, Formula, Table],
})

excel.render()
