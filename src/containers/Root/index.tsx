import * as React from 'react'
import {Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import App from '../../components/templates/App'

export default class Root extends React.Component {

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route component={App}/>
        </BrowserRouter>
      </div>
    )
  }
}

