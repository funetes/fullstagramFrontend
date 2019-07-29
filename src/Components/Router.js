import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Auth from '../Routers/Auth';
import Feed from '../Routers/Feed';

const LoggedInRouter = () => (
    <Route exact path="/" component={Auth}/> 
);
const LoggedOutRouter = () => (
    <Route exact path="/" component={Feed}/>
);

const Root = ({isLoggedIn}) => (
  <Router>
    <Switch>
      {isLoggedIn ? <LoggedOutRouter/> : <LoggedInRouter/>}
    </Switch>
  </Router>
);

export default Root;