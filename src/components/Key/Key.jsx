import React from 'react';
import '../../css/Key.css';
import key from '../../images/Key.png';

const Key = () => {
  return (
    <div className="key">
      <h4 className="key-header">Key:</h4>
      <img className="key-img" src={key} alt="key" />
    </div>
  );
};

export default Key;
