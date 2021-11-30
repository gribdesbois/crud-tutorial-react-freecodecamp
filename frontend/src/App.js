import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
/* import Delete from './components/Delete' */

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className='main-header'>React Crud Operations</h2>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div style={{ marginTop: 20 }} >
          <Route exact path='/read' component={Read} />
        </div>

        <Route path='/update' component={Update} />
      </div>
    </Router>
  )
}

export default App
