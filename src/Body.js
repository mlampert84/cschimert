import React, { Component } from "react";
import PhotoViewer from "./PhotoViewer";
import "./Body.css";

const ContactInfo = () => (
  <div>
    <h3>Email: cschimert AT gmail DOT com</h3>
  </div>
);

class Body extends Component {
  renderContent() {
    switch (this.props.activeNavField) {
      case "Contact":
        return <ContactInfo />;
      default:
        return <PhotoViewer />;
    }
  }

  render() {
    return <div className="body-container">{this.renderContent()}</div>;
  }
}

export default Body;
