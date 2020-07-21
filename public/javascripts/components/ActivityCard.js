import { templateToElement } from '../utils/HtmlGenerator'
import '../../stylesheets/components/sidebar.scss'
import { CARD_ACTIVITY_TEMPLATE, SIDEBAR_ID } from '../utils/Constants'

let sampleData = {
  id: 1,
  content: {
    action: 'moved',
    from_column: '작업중',
    to_column: '작업완료',
    card_title: 'some card',
  },
  created_at: '2020-01-09',
  user_name: 'jopro',
  category: 'card',
}

export default class ActivityCard {
  constructor({ content, time }) {
    this.$target = ''
    this.content = content
    this.time = time
    this.$activityColumn = ''
    this.init()
  }

  init() {
    this.content = this.transferHTML(sampleData, CARD_ACTIVITY_TEMPLATE.UPDATED)
    this.setElements()
  }

  setElements() {
    const template = `
      <div id="activity__card">
        <div class="content">${this.content}</div>
        <div class="time">${this.timeForamt()}</div>
      </div>
    `
    this.$activityColumn = document.querySelector(
      `#${SIDEBAR_ID.ACTIVITY_COLUMN}`
    )
    this.$target = templateToElement(template)
    this.$activityColumn.prepend(this.$target)
  }

  timeForamt() {
    const oldSecond = this.time.getTime() / 1000
    const currentSecond = new Date().getTime() / 1000
    const timediff = currentSecond - oldSecond
    const timeString = `${timediff.toFixed(0)} seconds ago`
    return timeString
  }

  transferHTML(data, template) {
    template = template.replace('$username', data.user_name)
    for (let key in data.content) {
      let value = data.content[key]
      template = template.replace('$' + key, value)
    }
    return template
  }
}
