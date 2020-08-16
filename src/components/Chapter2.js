import React from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import '../css/Chapter2.css';
import chapter2 from '../images/Chapter2.png';
import { Link } from 'react-router-dom';
import Key from './Key';

class Chapter2 extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
}

  render() {
    return <div className="chapter2">
      <Key />
      <br />
      <h3>Chapter 2</h3>
      <TransformWrapper>
        <TransformComponent>
          <img className="chapter2-img" src={chapter2} alt="chapter2" />
        </TransformComponent>
      </TransformWrapper>
      <br />
      <Link to="/Chapter1" className="previous-page-button">Chapter 1</Link>
      <Link to="/Chapter3" className="next-page-button">Chapter 3</Link>
      <br />
    </div>
  }
}

export default Chapter2;
