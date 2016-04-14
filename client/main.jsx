import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
 
import '../imports/startup/accounts-config.js'; 
import App_old from '../imports/ui/App_old.jsx';
import App from '../imports/ui/App.jsx'
 
Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  ), document.getElementById('app'))
});
