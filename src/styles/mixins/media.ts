import {css, ThemedCssFunction} from 'styled-components'

const screen = {
  SCREEN_MD_MIN: 1200,
  SCREEN_SM_MIN: 769
}

const sizes: {[key: string]: number} = {
  desktop: screen.SCREEN_MD_MIN,
  tablet: screen.SCREEN_SM_MIN
}

type Media = {
  desktop: ThemedCssFunction<void>
  tablet: ThemedCssFunction<void>
}

const media: any = Object.keys(sizes).reduce((accumulator, label) => {
  return {
    ...accumulator,
    [label]: (args: TemplateStringsArray) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(args)};
      }
    `
  }
}, {})

export default media
