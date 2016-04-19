import React, { Component, PropTypes } from 'react';
import { Input, Button } from 'react-bootstrap'
import { Accounts } from 'meteor/accounts-base'


export default Signup = React.createClass({
  getInitialState() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConf: '',
      signupError: ''
    }
  },

  handleChange(e) {
    var newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState)
  },

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password !== this.state.passwordConf) {
      this.setState({passwordConf: 'passwords do not match.'})
      return;
    }
    Accounts.createUser({
      email: this.state.email,
      password: this.state.password,
      profile: {
        first_name: this.state.firstName,
        last_name: this.state.lastName
      }
    }, err => {
      if (err) {
        console.log('ERROR: ', err)
        this.setState({signupError: err})
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
            <h1>Sign Up</h1>
            <p>{this.state.signupError}</p>
            <p>{this.state.passwordConf}</p>
            <form>
              <Input type="text" onChange={this.handleChange} value={this.state.firstName} placeholder="First Name" name="firstName"/>
              <Input type="text" onChange={this.handleChange} value={this.state.lastName} placeholder="Last Name" name="lastName"/>
              <Input type="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" name="email"/>
              <Input type="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" name="password" />
              <Input type="password" onChange={this.handleChange} value={this.state.passwordConf} placeholder=" Confirm Password" name="passwordConf" />
              <Button  type='submit' block onClick={this.handleSubmit} >Sign Up</Button>
            </form>
        </div>
      </div>
    )
  }
})