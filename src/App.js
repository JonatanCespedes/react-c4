import React, { useState } from 'react'; 
import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import StatefullComponent from './Components/StatefullComponent';
import Events from './Components/Events';
import Hooks from './Components/Hooks';


function App() {

  const [ title, setTitle ] = useState('');

  document.title = `${title}`

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
        <input onChange={(e) => { setTitle(e.target.value)}}/>
        <hr/>
        <FunctionComponent name="Jona"/>
        <hr/>
        <StatefullComponent/>
        <hr/>
        <Events/>
        <hr/>
        <Hooks setTitle={setTitle} title={title}/>
      </header>
    </div>
  );
}

export default App;
