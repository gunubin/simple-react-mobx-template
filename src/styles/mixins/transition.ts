import {css} from 'styled-components'
import {ease} from '../'

type TransitionProperty = {
  delay?: number
  duration?: number
  easing?: string
  property?: string
}

const transition = ({
  delay = 0,
  duration = 0.25,
  easing = 'ease' || ease.easeInOutCubic,
  property = 'all'
}: TransitionProperty) => {
  return css`
    transition: ${property} ${duration}s ${easing} ${delay}s;
  `
}

export default transition
