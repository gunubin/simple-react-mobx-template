import * as React from 'react'
import styled from 'styled-components'
import Todo from '../../molecules/Todo'
import TodosStore from '../../../infra/stores/TodosStore'

const View = styled.div``

// store? inject使うなら ?が必須
export type Props = {
  store?: TodosStore
}

const Todolist: React.SFC<Props> = props => {
  const {store} = props
  // store! にしないと TS2532: Object is possibly 'undefined'. でおこ
  const items = store!.todos.map((todo, index) => {
    return <Todo key={index} title={todo.title} isComplete={true}/>
  })
  return (
    <View>
      todo数: {store!.count}
      <div onClick={() => store!.addTodo('test')}>add todo</div>

      {items}
    </View>
  )
}

export default Todolist



