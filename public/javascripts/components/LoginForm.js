import { CLASS_NAME, LOGIN_FORM_CLASS } from '../utils/Constants'
import { templateToElement } from '../utils/HtmlGenerator'
import '../../stylesheets/components/loginForm.scss'

import Board from './Board'
import ActivityCard from './ActivityCard'
import { fetchActivityCard, checkAuthApi, loginApi } from '../api/index'

export default class LoginForm {
  constructor() {
    this.$target = ''

    this.init()
  }

  async init() {
    const isAuth = await this.checkAuth()

    if (!isAuth) {
      this.setElements()
      this.render()
      this.bindEvent()
    }
  }

  async checkAuth() {
    const [data, status] = await checkAuthApi()

    if (data) {
      new Board(data)
      this.getActivityCard()

      return true
    } else if (status === 404) {
      return false
    }

    alert('에러가 발생하였습니다.')
    return false
  }

  async getActivityCard() {
    try {
      const allCardActivitys = await fetchActivityCard()

      allCardActivitys.forEach((cardActivity) => {
        new ActivityCard(cardActivity)
      })
    } catch (e) {
      console.log(e)
    }
  }

  setElements() {
    const template = `
      <div id='login-page'>
        <div class='login-container'>
          <div class='title'>Welcome</div>
          <input type='text' placeholder='Username' class='${LOGIN_FORM_CLASS.USERNAME_INPUT}'/>
          <div class='${LOGIN_FORM_CLASS.LOGIN_BTN} ${CLASS_NAME.UNACTIVE}'>Login</div>
        </div>
      </div>
    `

    this.$target = templateToElement(template)
    this.$usernameInput = this.$target.querySelector(
      `.${LOGIN_FORM_CLASS.USERNAME_INPUT}`
    )
    this.$loginBtn = this.$target.querySelector(
      `.${LOGIN_FORM_CLASS.LOGIN_BTN}`
    )
  }

  render() {
    document.body.appendChild(this.$target)
  }

  bindEvent() {
    this.$usernameInput.addEventListener(
      'input',
      this.setActiveLoginBtn.bind(this)
    )
    this.bindEnterEvent = this.enterKeyDown.bind(this)
    this.$usernameInput.addEventListener('keydown', this.bindEnterEvent)
    this.$loginBtn.addEventListener('click', this.sendLoginRequest.bind(this))
  }

  setActiveLoginBtn() {
    const isActive = this.$usernameInput.value !== ''

    if (isActive) {
      this.$loginBtn.classList.remove(CLASS_NAME.UNACTIVE)
      return
    }

    this.$loginBtn.classList.add(CLASS_NAME.UNACTIVE)
  }

  enterKeyDown(e) {
    if (e.keyCode == 13) {
      this.sendLoginRequest()
    }
  }

  async sendLoginRequest() {
    if (this.$loginBtn.classList.contains(CLASS_NAME.UNACTIVE)) return

    const username = this.$usernameInput.value
    if (username === '') return

    const [data, status] = await loginApi(username)

    if (status === 200) {
      new Board(data)
      this.getActivityCard()
      this.removeTarget()
      return
    } else if (status === 404) {
      alert('사용자 인증이 실패하였습니다.')
      return
    }

    // unexcepted error
    alert('에러가 발생하였습니다. 잠시 후 다시 시도해주세요.')
  }

  removeTarget() {
    this.$target.remove()
  }
}
