import { closeModal } from './components/Modal'
import { toggleSidebar } from './components/SideBar'
import './components/Card'
import './components/CardForm'
import Column from './components/Column'
import './components/DeleteCardModal'
import './components/EditCardModal'
import './components/EditColumnModal'
import './components/Header'
import './components/LoginForm'
import './components/SideBarCard'
import '../stylesheets/common/base.scss'

const columnContainerSelector = '#column-container'

const tempColumns = [
  {
    parentSelector: columnContainerSelector,
    columnTitle: 'To Doooooo!',
    cardCount: 3,
  },
  {
    parentSelector: columnContainerSelector,
    columnTitle: 'In Progess~',
    cardCount: 3,
  },
  {
    parentSelector: columnContainerSelector,
    columnTitle: 'Done!!!',
    cardCount: 3,
  },
]

tempColumns.forEach((column) => {
  new Column(column)
})