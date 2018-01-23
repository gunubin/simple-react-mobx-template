import * as React from 'react'
import styled from 'styled-components'

const View = styled.div``

export type Props = {
  title: string,
  isComplete: boolean,
}

export default class Todo extends React.Component<Props, {}> {

  render() {
    const {title} = this.props
    return (
      <View>
        {title}
      </View>
    )
  }
}

