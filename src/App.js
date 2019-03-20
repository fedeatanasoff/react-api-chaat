import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./Components/Header/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <h2>hello friend desde react</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
