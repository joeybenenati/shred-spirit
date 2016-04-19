import React, { Component } from 'react';
import Header from './Header'
import { Button } from 'react-bootstrap'
import { Router, Route, Link } from 'react-router'

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='container'>
          <h1>Welcome!</h1>
          <p>Our mission is to help everyone become their best self, physically, spiritually, and emotionally. We combine the best of cutting edge diet and exercise information with holistic and spiritual practices to focus on the whole package, not just one aspect. Join us and leverage our cutting edge tools and information to help you along your path to achieving your goals.</p>
          <Link className='btn-red btn btn-lg' role='button' to="/login">Login</Link>
          <Link className='btn-red btn btn-lg' role='button' to="/signup">Sign Up</Link>
        </div>
      </div>
    )
  }
}