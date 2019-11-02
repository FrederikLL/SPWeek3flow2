import React from 'react';
import logo from './logo.svg';
import './App.css';
import upper, {text1,text2, text3} from "./file1";

function importz(){
  return (
    <div>
      <p>{upper("uppercase")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default importz;
