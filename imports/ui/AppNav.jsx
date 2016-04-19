import React from 'react';
// import AppBar from 'material-ui/lib/app-bar';
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
          />
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
