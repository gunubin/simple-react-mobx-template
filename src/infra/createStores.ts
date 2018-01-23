import TodosStore from './stores/TodosStore'
import {Stores} from '../types'

export default function createStores(): Stores {
  return {
    todosStore: new TodosStore(),
  }
}
