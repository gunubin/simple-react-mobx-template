import {css} from 'styled-components'
import animation from '../animation'
import * as keyframes from '../../keyframes'
import * as variables from '../../variables'

const fadeIn = () => {
  return css`
    ${animation({keyframe: keyframes.fadeIn(), duration: variables.fadeIn.duration})};
  `
}

export default fadeIn
