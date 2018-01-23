import {css} from 'styled-components'
import * as variables from '../variables'

const fade = () => {
  return css`
    &.fade-enter {
      opacity: 0.01;
    }
    &.fade-enter.fade-enter-active {
      opacity: 1;
      transition: opacity ${variables.fadeIn.duration}s ease-in;
    }
    &.fade-leave {
      opacity: 1;
    }
    &.fade-leave.fade-leave-active {
      opacity: 0.01;
      transition: opacity 300ms ease-in;
    }
  `
}

export default fade
