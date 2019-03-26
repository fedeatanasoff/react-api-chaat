import React, { Component } from "react";
import Header from "../Header/Header";
import Chat from "../Usuarios/Chat";
import { Route, Switch } from "react-router-dom";
import "../../App.css";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Chat} />
            {/* <Route path="/enterchat" exact component={EnterChat} /> */}
          </Switch>
        </div>
        <div className="container" />
      </React.Fragment>
    );
  }
}

export default Layout;
