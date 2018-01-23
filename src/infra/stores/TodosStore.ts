import {action, computed, observable} from 'mobx'
import TodoStore from './TodoStore'


// モデルクラスがmobxに依存してしまう
export default class TodosStore {

  @observable todos: TodoStore[] = [
    new TodoStore('test1'),
    new TodoStore('test2'),
    new TodoStore('test3'),
  ]

  @action addTodo = (text: string): void => {
    if (!text) {
      return
    }
    this.todos.push(new TodoStore(text))
  }

  @computed get count(): number {
    return this.todos.length
  }

}
