import "promise/polyfill"
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Root from './containers/Root'
import {Provider} from 'mobx-react';
import createStores from './infra/createStores'
import configureStyles from './styles/configureStyles'

const stores = createStores()
const rootElement = document.getElementById('root')

configureStyles()

const render = (Component: React.ComponentClass) => {
  ReactDOM.render(
    <AppContainer>
      <Provider {...stores}>
        <Component/>
      </Provider>
    </AppContainer>,
    rootElement
  )
}

render(Root)

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept(() => render(Root))
  }
}
