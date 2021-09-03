import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { Layout } from './components/Layout'
import Home from './pages/Home'

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path={['/', '/home']} exact>
            <Home/>
          </Route>
          <Redirect to='/'/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
