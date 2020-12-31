import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Home from './Home'
import AuthCallback from './AuthCallback'

function App() {
    return (
      <Router>
        <div className="mw6 center h-100">
          <Route path='/authcallback' component={AuthCallback} />
          <Route exact path='/' component={Home} />
        </div>
      </Router>

    )
}

export default App;
