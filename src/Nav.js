import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div>
        <ul className="navBar">
          <li>Home</li>
          <li>Small Worlds</li>
          <li>Urban Space</li>
          <li>Botanicals</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default Nav;
