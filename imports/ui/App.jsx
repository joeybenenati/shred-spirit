import React, { Component, PropTypes } from 'react';
import Welcome from './welcome/Welcome.jsx'
import { Meteor } from 'meteor/meteor'

export default class App extends Component {
  
  render() {
    return (
      <div>

        {this.props.children}
      </div>
    )
  }
}