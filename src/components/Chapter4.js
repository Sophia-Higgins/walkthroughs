import React from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import '../css/Chapter4.css';
import chapter4 from '../images/Chapter4.png';
import { Link } from 'react-router-dom';
import Key from './Key';

class Chapter4 extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
}

  render() {
    return <div className="chapter4">
      <Key />
      <br />
      <h3>Chapter 4</h3>
      <TransformWrapper>
        <TransformComponent>
          <img className="chapter4-img" src={chapter4} alt="chapter4" />
        </TransformComponent>
      </TransformWrapper>
      <br />
      <Link to="/Chapter3" className="previous-page-button">Chapter 3</Link>
      <br />
    </div>
  }
}

export default Chapter4;
