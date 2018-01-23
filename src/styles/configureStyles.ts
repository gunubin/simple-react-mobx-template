import {injectGlobal} from 'styled-components'
import normalize from '../styles/mixins/normalize'
import reset from '../styles/mixins/reset'

/**
 * configureStyles
 */
export default function configureStyles() {
  injectGlobal`
    ${normalize}
    ${reset}
  `
}
