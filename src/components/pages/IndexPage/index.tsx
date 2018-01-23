import * as React from 'react'
import styled from 'styled-components'
import Todolist from '../../../containers/Todolist'

const View = styled.div``

type Props = {}

export default class IndexPage extends React.Component<Props, {}> {

  render() {
    return (
      <View>
        <Todolist />
      </View>
    )
  }
}

