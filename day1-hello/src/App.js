import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Student.js'
import Students from './Student.js';
import Bootcamp from './Bootcamp.js';
import students from './students.json';

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
      <Students firstName ="Fábio"/>
      <Bootcamp data = "Web Dev"/>
      {students.map((student)=>
        <Students firstName = {student.firstname}/>)}
    </div>
  );
}

export default App;
