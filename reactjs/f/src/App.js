// import logo from './logo.svg';
import './App.css';
// import Fprops from './fun/Fprops'
// import { useState } from 'react';
import Life from './cls/Life'
function App() {

  
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      {/* <Fprops name="Arvind" email={"arvin@gmail.com"} other={{city:'Loni',District:"Ghazibad"}}></Fprops> */}
      <Life></Life>

      {/* <button onClick={changeVal}></button> */}
    </div>
  );
}

export default App;
