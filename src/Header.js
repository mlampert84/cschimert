import React, { Component } from "react";
import "./Header.css";
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="name">Catharina Schimert</div>
        <div className="title">Photography</div>
        <Nav />
      </div>
    );
  }
}

export default Header;
