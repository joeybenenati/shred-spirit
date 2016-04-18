import React, { Component, PropTypes } from 'react';


export default class Login extends Component {

  render() {
    return (
      <div className='auth-container'>
        <div className="site-heading logo">
          <h1>shredded spirit</h1>
        </div>
        <div className="login-block">
            <h1>Login</h1>
            <input type="email" value="" placeholder="Email" id="email" />
            <input type="password" value="" placeholder="Password" id="password" />
            <button>Login</button>
        </div>
      </div>
    )
  }
}