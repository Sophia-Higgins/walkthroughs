import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Intro from './Intro';
import Chapter1 from './Chapter1';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Intro" component={Intro} />
      <Route exact path="/Chapter1" component={Chapter1} />
    </Switch>
  );
}

export default Routes;