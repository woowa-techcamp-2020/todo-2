import { templateToElement } from '../utils/HtmlGenerator'
import CardForm from './CardForm'
import { COLUMN_CLASS, CARD_CLASS, EVENT } from '../utils/Constants'
import { emitter } from '../utils/EventEmitter'
import '../../stylesheets/components/column.scss'

export default class Column {
  constructor({ columnTitle, cardCount }) {
    this.columnTitle = columnTitle
    this.cardCount = cardCount
    this.$target = ''

    this.init()
  }
}

Column.prototype.init = function () {
  this.setElements()
  this.render()
  this.bindEvent()
}

Column.prototype.setElements = function () {
  const template = `
    <section class='${COLUMN_CLASS.COLUMN}'>
      <div class='title-bar'>
        <div class='title-wrapper'>
          <div class='${COLUMN_CLASS.CARD_COUNT}'>${this.cardCount}</div>
          <div class='${COLUMN_CLASS.TITLE}'>${this.columnTitle}</div> 
        </div>
        <div class='btn-wrapper'>
          <img class='${COLUMN_CLASS.ADD_BTN}' src='/static/images/plus-btn.svg' alt='add-btn' />
          <img class='${COLUMN_CLASS.REMOVE_BTN}' src='/static/images/remove-btn.svg' alt='remove-btn' />
        </div>
      </div>
      <div class='${COLUMN_CLASS.CARD_FORM_SLOT}'></div>
      <div class='${COLUMN_CLASS.CONTENT_CONTAINER}'></div>
    </section>
  `

  this.$target = templateToElement(template)
  this.$cardCount = this.$target.querySelector(`.${COLUMN_CLASS.CARD_COUNT}`)
}

Column.prototype.render = function () {
  const $columnContainer = document.querySelector(`.${COLUMN_CLASS.CONTAINER}`)
  $columnContainer.appendChild(this.$target)
}

Column.prototype.bindEvent = function () {
  const $cardAddBtn = this.$target.querySelector(`.${COLUMN_CLASS.ADD_BTN}`)
  $cardAddBtn.addEventListener('click', () => {
    this.toggleCardForm()
  })

  emitter.on(EVENT.CHANGE_CARD_COUNT, () => {
    this.setCardCount()
  })
}

Column.prototype.setCardCount = function () {
  const newCardCount = this.$target.querySelectorAll(`.${CARD_CLASS.CARD}`)
    .length
  this.$cardCount.innerHTML = newCardCount
}

Column.prototype.toggleCardForm = function () {
  const $cardFormSlot = this.$target.querySelector(
    `.${COLUMN_CLASS.CARD_FORM_SLOT}`
  )

  if ($cardFormSlot.innerHTML) {
    $cardFormSlot.innerHTML = ''
    return
  }

  const cardForm = new CardForm()
  $cardFormSlot.appendChild(cardForm.$target)
}
