import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Intro from './Intro';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Intro" component={Intro} />
      <Route exact path="/Chapter1" component={Chapter1} />
      <Route exact path="/Chapter2" component={Chapter2} />
      <Route exact path="/Chapter3" component={Chapter3} />
    </Switch>
  );
}

export default Routes;