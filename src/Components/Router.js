import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Auth from '../Routers/Auth';
import Feed from '../Routers/Feed';
import PropTypes from "prop-types";
//false
const LoggedOutRouter = () => (
  <>
    <Route exact path="/" component={Auth}/> 
  </>
);

//true
const LoggedInRouter = () => (
  <>
    <Route exact path="/" component={Feed}/>
  </>
);

const Root = ({isLoggedIn}) => (
  <Router>
    <Switch>
      {isLoggedIn ? <LoggedInRouter/> : <LoggedOutRouter/>}
    </Switch>
  </Router>
);

// 이거 반드시 써줘야 버그를 쉽게 잡을 수 있다.\
// propTypes를 적어줘서 isLoggedIn이 object 로 넘어온다는것을 잡아낼 수 있었다.!!!!!
Root.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};
export default Root;