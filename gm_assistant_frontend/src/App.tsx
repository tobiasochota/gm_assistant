import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import Header from './header';
import RegionChooser from './components/region-chooser';
import ChatDialog from './components/chat-dialog';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      <RegionChooser />

      <ChatDialog />
    </div>
    
  );
}

export default App;
