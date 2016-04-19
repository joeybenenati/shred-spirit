import React from 'react';
import { Router, Route, Link } from 'react-router'
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default AppNav = React.createClass({
  getInitialState() {
    return {
      open: false
    }
  },

  handleToggle(){
    this.setState({open: !this.state.open})
  },

  handleClose(){
    this.setState({open: false})
  },

  render() {
    return (
      <div>
        <mui.LeftNav
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        > 
          <mui.MenuItem onTouchTap={this.handleClose}>
            <Link to="/user/dashboard">Dashboard</Link>
          </mui.MenuItem>
          <mui.MenuItem onTouchTap={this.handleClose}>Body Measurements</mui.MenuItem>
          <mui.MenuItem onTouchTap={this.handleClose}>Exercise Log</mui.MenuItem>
          <mui.MenuItem onTouchTap={this.handleClose}>Exercise List</mui.MenuItem>
          <mui.MenuItem onTouchTap={this.props.handleLogout}>Logout</mui.MenuItem>
        </mui.LeftNav>
        <header>
          <mui.AppBar
            title="shredded spirit"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            className='navbar'
            onLeftIconButtonTouchTap={this.handleToggle}
          />
        </header>
      </div>
      
    )
  }
})
