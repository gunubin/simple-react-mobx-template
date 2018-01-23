import * as React from 'react'
import IndexPage from '../components/pages/IndexPage/index'

type Route = {
  component: any,
  exact?: boolean,
  path: string,
}

type Routes = { [key: string]: Route }

const routes: Routes = {
  index: {
    component: () => <IndexPage/>,
    exact: true,
    path: '/',
  }
}

export default routes
