import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Intro from '../Intro/Intro';
import Chapter1 from '../Chapter1/Chapter1';
import Chapter2 from '../Chapter2/Chapter2';
import Chapter3 from '../Chapter3/Chapter3';
import Chapter4 from '../Chapter4/Chapter4';
import Chapter5 from '../Chapter5/Chapter5';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Intro" component={Intro} />
      <Route exact path="/Chapter1" component={Chapter1} />
      <Route exact path="/Chapter2" component={Chapter2} />
      <Route exact path="/Chapter3" component={Chapter3} />
      <Route exact path="/Chapter4" component={Chapter4} />
      <Route exact path="/Chapter5" component={Chapter5} />
    </Switch>
  );
};

export default Routes;
