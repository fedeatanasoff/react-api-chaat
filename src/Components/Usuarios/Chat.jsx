import React, { Component } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:5000");
import "./Chat.css";

let random = Math.floor(Math.random() * 5) + 1;

class Chat extends Component {
  state = {};

  componentDidMount() {}

  componentWillMount() {}

  render() {
    return <div>usuarios</div>;
  }
}

export default Chat;
