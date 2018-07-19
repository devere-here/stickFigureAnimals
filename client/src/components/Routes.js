import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'


class Routes extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/link1" component={Login} />
        <Route path="/link2" component={Signup} />
        <Route component = { Login } />
      </Switch>
    )
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default Routes
