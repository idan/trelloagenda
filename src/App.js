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
        <div className="mw6 center h-100">
          <Route path='/authcallback' component={AuthCallback} />
          <Route exact path='/' component={Home} />
        </div>
      </Router>

    )
  }
}

export default App
