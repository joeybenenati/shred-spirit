import React, { Component, PropTypes } from 'react';
import { ButtonToolbar, Button, Navbar, Nav, NavItem} from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (
     
        <header className='intro-header'>
          <div className='container'>
            <div className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>
              <div className='site-heading'>
                <h1>shredded spirit</h1>
              </div>
            </div>
          </div>
        </header>
   
    )
  }
}
