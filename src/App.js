import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Routes from './components/Routes';

function App() {
  return (
    <div className="App">
      <div className="Site-content">
        <header className="App-header">
          <p>
            Across the Grooves Walkthrough
          </p>
        </header>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
