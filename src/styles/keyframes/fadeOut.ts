import fade from './fade'

export const fadeOut = () => {
  return fade({from: 1, to: 0})
}

export default fadeOut
