import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/epilogue.css';
import epilogue from '../../images/Epilogue.png';
import Key from '../Key/Key';

class Epilogue extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="epilogue">
        <Key />
        <br />
        <h3>Epilogue</h3>
        <img className="epilogue-img" src={epilogue} alt="epilogue" />
        <br />
        <Link to="/Chapter5" className="previous-page-button">
          Chapter 5
        </Link>
        <br />
      </div>
    );
  }
}

export default Epilogue;
