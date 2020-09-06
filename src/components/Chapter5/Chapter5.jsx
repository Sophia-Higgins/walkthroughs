import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Link } from 'react-router-dom';
import '../../css/Chapter5.css';
import chapter5 from '../../images/Chapter5.png';
import chapter5Eddie from '../../images/Chapter5Eddie.png';
import chapter5Frank from '../../images/Chapter5Frank.png';
import Key from '../Key/Key';

class Chapter5 extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="chapter5">
        <Key />
        <br />
        <h3>Chapter 5</h3>
        <TransformWrapper>
          <TransformComponent>
            <img className="chapter5-img" src={chapter5} alt="chapter5" />
          </TransformComponent>
        </TransformWrapper>
        <br />
        <p>
          If you choose to help Eddie in Chapter 3 and let him listen to the record, the following dialogue options will
          become available.
        </p>
        <img className="chapter5-img" src={chapter5Eddie} alt="chapter5Eddie" />
        <br />
        <p>
          If you choose to visit Frank and tell him about the record, the following dialogue options will become
          available.
        </p>
        <img className="chapter5-img" src={chapter5Frank} alt="chapter5Frank" />
        <br />
        <Link to="/Epilogue" className="next-page-button">
          Epilogue
        </Link>
        <Link to="/Chapter4" className="previous-page-button">
          Chapter 4
        </Link>
        <br />
      </div>
    );
  }
}

export default Chapter5;
