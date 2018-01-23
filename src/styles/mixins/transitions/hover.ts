import {css} from 'styled-components'
import transition from '../transition'

const hover = () => {
  return css`
    ${transition({property: 'opacity'})};
    &:hover {
      opacity: 0.8;
    }
  `
}

export default hover
