import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './App.css'
import Home from './Home'
import AuthCallback from './AuthCallback'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="mw6 center">
          <Route path='/' component={Home} />
          <Route path='/authcallback' component={AuthCallback} />
        </div>
      </Router>

    )
  }
}

export default App
