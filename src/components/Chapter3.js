import React from 'react';
import '../css/Chapter3.css';
import chapter3Start from '../images/Chapter3Start.png';
import chapter3StrawberryFields from '../images/Chapter3StrawberryFields.png';
import chapter3SidecarVinyl from '../images/Chapter3SidecarVinyl.png';
import chapter3YardSaleRecords from '../images/Chapter3YardSaleRecords.png';
import chapter3Main from '../images/Chapter3Main.png';
import chapter3SidecarOptions from '../images/Chapter3SidecarOptions.png';
import chapter3Eddie from '../images/Chapter3Eddie.png';
import { Link } from 'react-router-dom';
import Key from './Key';

class Chapter3 extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
}

  render() {
    return <div className="chapter3">
      <p>Chapter 3 starts with two options, either going to Sidecar Vinyl Record Store or Strawberry Fields record store.</p>
      <Key />
      <br />
      <h3>Chapter 3</h3>
      <img className="chapter3-img" src={chapter3Start} alt="chapter3Start" />
      <h3>Chapter 3 Strawberry Fields option</h3>
      <img className="chapter3-img" src={chapter3StrawberryFields} alt="chapter3StrawberryFields" />
      <p>If you chose Strawberry Fields record store as your first dialogue option choice, then you will be given the option to either return to Yard Sale Records or go to Sidecar Vinyl.</p>
      <br />
      <h3>Chapter 3 Sidecar Vinyl option</h3>
      <img className="chapter3-img" src={chapter3SidecarVinyl} alt="chapter3SidecarVinyl" />
      <p>If you chose Sidecar Vinyl record store as your first dialogue option choice, then you will be given the option to either return to Yard Sale Records or go to Strawberry Fields.</p>
      <br />
      <h3>Chapter 3 Yard Sale Records</h3>
      <img className="chapter3-img" src={chapter3YardSaleRecords} alt="chapter3YardSaleRecords" />
      <p>If you chose Yard Sale Records as your second option, you will be given the option to go visit the other record store that you did not choose as your first option. Or you can choose to stay at Yard Sale Records.</p>
      <br />
      <h3>Chapter 3 Main</h3>
      <p>This dialogue tree happens no matter which record stores you choose to visit.</p>
      <img className="chapter3-img" src={chapter3Main} alt="chapter3Main" />
      <p>If you chose to visit Sidecar Vinyl and chose the options that led Didier to give you his number, the following two options become available, otherwise you will move onto the next chapter.</p>
      <img className="chapter3-img" src={chapter3SidecarOptions} alt="chapter3SidecarOptions" />
      <p>If you choose to call Didier, or you gave the name of your hotel to Didier in the Sidecar Vinyl dialogue options, then the following options become available.</p>
      <img className="chapter3-img" src={chapter3Eddie} alt="chapter2Eddie" />
      <br />
      <Link to="/Chapter2" className="previous-page-button">Chapter 2</Link>
      <Link to="/Chapter4" className="next-page-button">Chapter 4</Link>
      <br />
    </div>
  }
}

export default Chapter3;
