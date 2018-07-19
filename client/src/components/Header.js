import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/findFriends">Find Friends</Link>
    <Link to="/cardCollection">Card Collection</Link>
    <Link to="/appComponent">App Component</Link>
  </div>
)

export default Header
