import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor'
import NavBar from '../Navbar.jsx'
import AppNav from '../AppNav.jsx'

export default User = React.createClass({

  render() {
    return (
      <div>
        <AppNav/>
        {/*<NavBar/>*/}
        <h1>Hi, {/*this.state.firstName*/}!</h1>
      </div>
    )
  }
})