import React, { Component } from "react";
import "./Header.css";
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="name">
          <b>catharina schimert</b>
        </div>
        <div className="title">photography</div>
        <Nav
          navFields={this.props.navFields}
          activeNavField={this.props.activeNavField}
          handleNavClick={this.props.handleNavClick}
        />
      </div>
    );
  }
}

export default Header;
