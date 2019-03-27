import React, { Component } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:5000");

class Chat extends Component {
  state = {};

  componentDidMount() {}

  componentWillMount() {}

  render() {
    return (
      <div>
        <h2>chat</h2>{" "}
      </div>
    );
  }
}

export default Chat;
