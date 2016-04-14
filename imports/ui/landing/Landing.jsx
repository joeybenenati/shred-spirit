import React, { Component } from 'react';
import Header from './Header'
import { Button } from 'react-bootstrap'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='container'>
          <h1>Welcome!</h1>
          <p>Our mission is to help everyone become their best self, physically, spiritually, and emotionally. We combine the best of cutting edge diet and exercise information with holistic and spiritual practices to focus on the whole package, not just one aspect. Join us and leverage our cutting edge tools and information to help you along your path to achieving your goals.</p>
          
            
              <button className='btn-red btn btn-lg' >LOGIN</button>

              <button className='btn-red btn btn-lg' >SIGN UP</button>
        </div>
      </div>
    )
  }
}