import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'

export default NavBar = React.createClass({
  render() {
    return (
      <Navbar inverse>
      <Navbar.Header>
      <Navbar.Toggle /> 
      <Navbar.Brand className="brand">
        shredded spirit
      </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse >
      <Navbar.Text>
        something
      </Navbar.Text>
      <Navbar.Text>
        something
      </Navbar.Text>
      <Navbar.Text>
        something
      </Navbar.Text>
        <Navbar.Text pullRight onClick={this.logout}>
          Logout
        </Navbar.Text>
      </Navbar.Collapse>
      </Navbar>
    )
  } 
})

