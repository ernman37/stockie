import React from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import ExampleButton from '../components/ExampleButton';
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
