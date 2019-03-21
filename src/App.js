import React, { Component } from "react";
import Layout from "./Components/Containers/Layout";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
