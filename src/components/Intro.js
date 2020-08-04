import React from 'react';
import '../css/Intro.css';
import key from '../images/Key.png';
import intro from '../images/Intro.png';

class Intro extends React.Component {
  render() {
    return <div className="intro">
      <p>Across the Grooves is an interactive graphic novel indie game created by Nova-box and is available on Steam or the Nintendo Switch. Throughout the game, the different choices you make will affect the achievements and sometimes dialogue options that become available later on in the game. </p>
      <p>Often there will be two dialog options for you to choose from. Each option corresponds to one of four symbols: the Spiral, the Flower, Lightning or the Skull. I have used the key below to highlight which dialogue option relates to which symbol. This will become important when trying to attain certain achievements.</p>
      <p>There are 6 chapters overall for this game. I have created some decision trees for the dialogue options using the free version of Sketchboard.io and this walkthrough is a work in progress.</p>
      <h5 className="key-header">Key:</h5>
      <img className="key-img" src={key} alt="key" />
      <br />
      <h3>Intro</h3>
      <img className="intro-img" src={intro} alt="intro" />
      <br />
      {/* <Link to="/Chapter1" className="next-page-button" variant="primary" size="lg">Chapter 1</Link> */}
      <br />
    </div>
  }
}

export default Intro;
