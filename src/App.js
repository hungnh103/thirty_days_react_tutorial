import { Component } from 'react'
import { BrowserRouter, Route, Switch, } from 'react-router-dom'

import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <NavBar />

          <Switch>
            <Route path='/about' component={About} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
