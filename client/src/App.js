import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <input placeholder="name" />
            <input placeholder="password" />
            <button onClick={() => console.log("Kenny loggins in")}>
              Login
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
