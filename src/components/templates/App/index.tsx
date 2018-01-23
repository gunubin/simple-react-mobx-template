import * as React from 'react'
import {Route, Switch} from 'react-router-dom'
import routes from '../../../routes'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          {Object.keys(routes).map((key, index) => {
            const route = routes[key]
            return (
              <Route
                component={route.component}
                exact={route.exact}
                key={index}
                path={route.path}
              />
            )
          })}
        </Switch>
      </div>
    )
  }
}

