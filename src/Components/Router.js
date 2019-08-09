import React from 'react';
import PropTypes from "prop-types";
import {Switch, Route} from 'react-router-dom';
import Auth from '../Routers/Auth';
import Feed from '../Routers/Feed';
import Explore from '../Routers/Explore';
import Profile from '../Routers/Profile';
import Search from '../Routers/Search';

//false
const LoggedOutRouter = () => (
  <>
    <Route exact path="/" component={Auth}/> 
  </>
);

//true
const LoggedInRouter = () => (
  <Switch>
    <Route exact path="/" component={Feed}/>
    <Route exact path="/explore" component={Explore}/>
    <Route exact path="/search" component={Search}/>
    <Route path="/:username" component={Profile}/>
  </Switch>
);

const Root = ({isLoggedIn}) => (
  <Switch>
    {isLoggedIn ? <LoggedInRouter/> : <LoggedOutRouter/>}
  </Switch>
);

// 이거 반드시 써줘야 버그를 쉽게 잡을 수 있다.\
// propTypes를 적어줘서 isLoggedIn이 object 로 넘어온다는것을 잡아낼 수 있었다.!!!!!
Root.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};
export default Root;