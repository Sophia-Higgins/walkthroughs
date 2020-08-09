import React from 'react';
import '../css/Chapter1.css';
import chapter1 from '../images/Chapter1.png';
import { Link } from 'react-router-dom';
import Key from './Key';

class Chapter1 extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
}

  render() {
    return <div className="chapter1">
      <p>Chapter 1 is where the decision trees start to get much more complicated!</p>
      <Key />
      <br />
      <h3>Chapter 1</h3>
      <img className="chapter1-img" src={chapter1} alt="chapter1" />
      <p>Note: the two options 'Do you think?' or 'I don't think so' will give you a combination of symbols, depending on the symbol options you have chosen up to that point.</p>
      <br />
      <Link to="/Intro" className="previous-page-button">Intro</Link>
      <Link to="/Chapter2" className="next-page-button">Chapter 2</Link>
      <br />
    </div>
  }
}

export default Chapter1;
