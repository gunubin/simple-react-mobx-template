import {keyframes} from 'styled-components'

type Props = {
  from: number
  to: number
}

const fade = ({from = 0, to = 1}: Props) => {
  return keyframes`
    0% {
      opacity: ${from};
    }

    100% {
      opacity: ${to};
    }
  `
}

export default fade
