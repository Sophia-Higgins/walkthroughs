import React from 'react';
import key from '../images/Key.png';
import intro from '../images/Intro.png';

class Intro extends React.Component {
  render() {
    return <div className="intro">
      <p>Across the Grooves is an interactive graphic novel indie game created by Nova-box and is available on Steam or the Nintendo Switch. Throughout the game, the different choices you make will affect the achievements and sometimes dialogue options that become available later on in the game. </p>
      <p>Often there will be two dialog options for you to choose from. Each option corresponds to one of four symbols: the Spiral, the Flower, Lightning or the Skull. I have used the key below to highlight which dialogue option relates to which symbol. This will become important when trying to attain certain achievements.</p>
      <p>There are 6 chapters overall for this game. I have created some decision trees for the dialogue options using the free version of Sketchboard.io and this walkthrough is a work in progress.</p>
      <h4>Key:</h4>
      <img src={key} alt="key" />
      <br />
      <h3>Intro</h3>
      <img src={intro} alt="intro" />
      <p className="Disclaimer">Across the Grooves are trademarks or registered trademarks of Nova-box. This independent site is not connected with or otherwise condoned by the creators and publishers of the Across the Grooves game. </p>
    </div>
  }
}

export default Intro;
