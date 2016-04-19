import React, { Component, PropTypes } from 'react';
import { Input, Button } from 'react-bootstrap'
import { Meteor } from 'meteor/meteor'
import User from '../user/User.jsx'

export default Login = React.createClass({
  getInitialState() {
    return {
      email: '',
      password: '',
      authError: ''
    }
  },

  handleChange(e) {
    var newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState)
  },

  handleSubmit(e) {
    e.preventDefault();
    Meteor.loginWithPassword(this.state.email, this.state.password, (err, res) => {
      if (err) {
        console.log('ERROR: ', err)
        this.setState({authError: 'Incorrect email or password'})
      } else {
        this.props.history.push('/user');
      }
    })
  },

  render() {
    return (
      <div className='auth-container'>
        <div className="site-heading logo">
          <h1>shredded spirit</h1>
        </div>
        <div className="login-block">
            <h1>Login</h1>
            <p>{this.state.authError}</p>
            <form>
              <Input type="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" name="email" refs='email'/>
              <Input type="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" name="password" refs='password' />
              <Button  type='submit' block onClick={this.handleSubmit} >Login</Button>
            </form>
        </div>
      </div>
    )
  }
})