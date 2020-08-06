import React from 'react';
import '../css/Intro.css';
import key from '../images/Key.png';
import intro from '../images/Intro.png';
import { Link } from 'react-router-dom';

class Intro extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
}

  render() {
    return <div className="intro">
      <h5 className="key-header">Key:</h5>
      <img className="key-img" src={key} alt="key" />
      <br />
      <h3>Intro</h3>
      <img className="intro-img" src={intro} alt="intro" />
      <br />
      <Link to="/" className="previous-page-button">Home</Link>
      <Link to="/Chapter1" className="next-page-button">Chapter 1</Link>
      <br />
    </div>
  }
}

export default Intro;
