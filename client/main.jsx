import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
 
import '../imports/startup/accounts-config.js'; 
import App_old from '../imports/ui/App_old.jsx';
import App from '../imports/ui/App.jsx';
import Welcome from '../imports/ui/welcome/Welcome.jsx';
import Login from '../imports/ui/auth/Login.jsx';
import Signup from '../imports/ui/auth/Signup.jsx'
import User from '../imports/ui/user/User.jsx'
 
Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome}/>
        <Route path="login" component={Login}/>
        <Route path="signup" component={Signup}/>
        <Route path="user/:id" component={User}/>
      </Route>
    </Router>
  ), document.getElementById('app'))
});
