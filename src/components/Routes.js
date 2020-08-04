import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import App from '../App';
import Intro from './Intro';
import Chapter1 from './Chapter1';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={App} />
        <Route path="/Intro" component={Intro} />
        <Route path="/Chapter1" component={Chapter1} />
      </Router>
    )
  }
}