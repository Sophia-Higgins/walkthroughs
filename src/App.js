import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Across the Grooves Walkthrough
        </p>
      </header>
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
