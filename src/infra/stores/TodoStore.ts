import {action, observable} from 'mobx'


export default class TodoStore {
  isComplete: boolean

  @observable title = ''

  constructor(title: string) {
    this.title = title
  }

  @action toggleComplete = (): void => {
    this.isComplete = !this.isComplete
  }
}
