import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Recipe from './Recipe/Recipe';
import Newsfeed from '../containers//Newsfeed/Newsfeed';

const Root = () => (
  <Switch>
    <Route path="/profile" component={Profile} />
    <Route path="/recipe" component={Recipe} />
    <Route path="/newsfeed" component={Newsfeed} />
    <Route path="/" component={Home} />
  </Switch>
)


export default Root
