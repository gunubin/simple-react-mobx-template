import {css} from 'styled-components'

const clearFix = () => {
  return css`
    &::before,
    &::after {
      content: ' ';
      display: table;
    }
    &::after {
      clear: both;
    }
  `
}

export default clearFix
