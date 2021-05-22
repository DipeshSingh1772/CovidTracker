import React from 'react'
import MainPage from './MainPage'
import Header from './Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainState from './MainState'
import Error from './Error'

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/State" component={MainState} />
            <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;