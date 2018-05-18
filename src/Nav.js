import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    const navFields = this.props.navFields.map(field => {
      let activeClass = "";
      if (this.props.activeNavField === field) activeClass += "active";

      return (
        <li
          className={activeClass}
          key={field}
          onClick={() => this.props.handleNavClick(field)}
        >
          {field}
        </li>
      );
    });

    return (
      <div className="navWrapper">
        <ul className="navBar">{navFields}</ul>
      </div>
    );
  }
}

export default Nav;
