import {keyframes} from 'styled-components'

const Axis = {
  X: 'X',
  Y: 'Y'
}

type Props = {
  from: number
  to: number
}

type TranslateProps = Props & {
  axis: 'X' | 'Y' // todo: 型
  origin: string
}

const translate = ({
  axis = 'X',
  from = 0,
  origin = 'top',
  to = 100
}: TranslateProps) => {
  return keyframes`
    0% {
      transform: translate${axis}(${from}%); /* stylelint-disable-line function-name-case */
      transform-origin: ${origin};
    }

    100% {
      transform: translate${axis}(${to}%); /* stylelint-disable-line function-name-case */
      transform-origin: ${origin};
    }
  `
}

export const translateDownIn = () =>
  translate({
    axis: 'Y',
    from: -100,
    origin: 'top',
    to: 0
  })

export const translateUpOut = () =>
  translate({
    axis: 'Y',
    from: 0,
    origin: 'top',
    to: -100
  })

export const translateDownOut = () =>
  translate({
    axis: 'Y',
    from: 0,
    origin: 'bottom',
    to: 100
  })

export const translateUpIn = () =>
  translate({
    axis: 'Y',
    from: 100,
    origin: 'bottom',
    to: 0
  })

export const translateLeftIn = () =>
  translate({
    axis: 'X',
    from: -100,
    origin: 'left',
    to: 0
  })


export default translate
