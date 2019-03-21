import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" exact to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <NavLink className="nav-link" to="/chat">
                  Chat
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/roomchat">
                  Rooms
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  exact
                  to="/"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                >
                  Usuario
                </NavLink>
              </li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search">
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
