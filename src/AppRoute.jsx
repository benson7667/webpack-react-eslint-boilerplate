import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './home'
import About from './about'

const AppRoute = () => (
  <Router>
    <Route component={Home} exact path="/" />
    <Route component={About} path="/about" />
  </Router>
)

export default AppRoute
