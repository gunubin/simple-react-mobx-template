import * as React from 'react'
import styled from 'styled-components'

const View = styled.div``

export type Props = {
  children: React.Component
}

const Contact: React.SFC<{}> = (props: Props) => {
  return (
    <View>
      {props.children}
    </View>
  )
}

export default Contact

