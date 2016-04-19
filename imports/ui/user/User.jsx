import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor'
import AppNav from '../AppNav.jsx'

export default User = React.createClass({

  logoutUser() {
    Meteor.logout( () => {
      this.props.history.push('/login');
    })    
  },

  componentDidMount() {
    this.props.history.push('/user/dashboard');
  },

  render() {
    return (
      <div>
        <AppNav handleLogout={this.logoutUser} />
        <h1>User</h1>
        {this.props.children}
      </div>
    )
  }
})