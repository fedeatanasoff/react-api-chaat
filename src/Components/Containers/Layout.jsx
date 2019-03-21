import React, { Component } from "react";
// import logo from "./logo.svg";
import Header from "../Header/Header";
import UsuariosTabla from "../Usuarios/UsuariosTabla";
import RoomChat from "../RoomChat/RoomChat";
import PublicChat from "../PublicChat/PublicChat";
import EnterChat from "../EnterChat/EnterChat";
import { Route, Switch } from "react-router-dom";
import "../../App.css";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={UsuariosTabla} />
            <Route path="/enterchat" exact component={EnterChat} />
            <Route path="/roomchat" component={RoomChat} />
            <Route path="/chat" component={PublicChat} />
          </Switch>
        </div>
        <div className="container" />
      </React.Fragment>
    );
  }
}

export default Layout;
