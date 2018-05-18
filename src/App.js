import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const navFields = ["Home", "Small Worlds", "Contact"];

class App extends Component {
  state = {
    activeNavField: "Home"
  };

  handleNavClick = field => {
    this.setState({ activeNavField: field });
  };

  render() {
    return (
      <div>
        <Header
          navFields={navFields}
          activeNavField={this.state.activeNavField}
          handleNavClick={this.handleNavClick}
        />
        <Body activeNavField={this.state.activeNavField} />
        <Footer />
      </div>
    );
  }
}

export default App;
