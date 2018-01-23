import {css} from 'styled-components'
import transition from '../transition'

const fade = (isShow: boolean) => {
  return css`
    ${transition({property: 'opacity'})};
    opacity: ${isShow ? 1 : 0};
  `
}

export default fade
