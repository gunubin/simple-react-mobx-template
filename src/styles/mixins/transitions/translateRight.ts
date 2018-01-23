import {css} from 'styled-components'
import transition from '../transition'

const translateRight = (isShow: boolean) => {
  return css`
    ${transition({property: 'transform'})};
    transform: ${isShow ? 'translateX(0%)' : 'translateX(-100%)'};
  `
}

export default translateRight
