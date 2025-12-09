import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import Header from './header';
import RegionChooser from './components/region-chooser';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      <RegionChooser />
    </div>
    
  );
}

export default App;
