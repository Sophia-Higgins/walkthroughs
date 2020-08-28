import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Routes from './components/Routes/Routes';

function App() {
  return (
    <div className="App">
      <div className="Site-content">
        <header className="App-header">
          <p>Across the Grooves Walkthrough</p>
        </header>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
