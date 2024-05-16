import React from 'react';
import '../styles/App.css';
import Header from './Header';
import ExampleButton from './ExampleButton';
import axios from 'axios';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <ExampleButton/>
    </div>
  );
}

export default App;
