import React from 'react';
import '../css/Intro.css';
import key from '../images/Key.png';
import chapter1 from '../images/Chapter1.png';

class Chapter1 extends React.Component {
  render() {
    return <div className="chapter1">
      <p>Chapter 1 is where the decision trees start to get much more complicated!</p>
      <h4 className="key-header">Key:</h4>
      <img className="key-img" src={key} alt="key" />
      <br />
      <h3>Chapter 1</h3>
      <img className="chapter1-img" src={chapter1} alt="chapter1" />
    </div>
  }
}

export default Chapter1;
