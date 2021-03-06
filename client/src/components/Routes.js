import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import CardCollection from './CardCollection'
import FindFriends from './FindFriends'
import Home from './Home'
import AppComponent from './AppComponent'


class Routes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path="/findFriends" component={FindFriends} />
        <Route exact path="/cardCollection" component={CardCollection} />
        <Route exact path="/appComponent" component={AppComponent} />
        <Route component = { Home } />
      </Switch>
    )
  }
}

export default Routes
