import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor'

export default User = React.createClass({
  getInitialState() {
    return {
      profile: Meteor.user().profile
    }
  },

  render() {
    var firstName = this.state.profile.first_name
    return (
      <h1>Hi, {firstName}!</h1>
    )
  }
})