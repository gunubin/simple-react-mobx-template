import * as React from 'react'
import {inject, observer} from 'mobx-react'
import View, {Props} from '../../components/organisms/Todolist'
import {Stores} from '../../types'
import {compose} from 'recompose'

export default compose(
  inject((stores: Stores): Props => {
      return {
        store: stores.todosStore
      }
    }
  ),
  observer,
)(View)
