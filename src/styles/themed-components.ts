// themed-components.ts
import * as styledComponents from 'styled-components'
import {ThemedStyledComponentsModule} from 'styled-components'

// import { ITheme } from 'theme'; // custom theme

type StyledFunction<T> = styledComponents.ThemedStyledFunction<T, null>

function withProps<T, U extends HTMLElement = HTMLElement>(
  styledFunction: StyledFunction<React.HTMLProps<U>>
): StyledFunction<T & React.HTMLProps<U>> {
  return styledFunction
}

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<null>

export {css, injectGlobal, keyframes, ThemeProvider, withProps}
export default styled
