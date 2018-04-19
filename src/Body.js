import React, { Component } from "react";
import PhotoViewer from "./PhotoViewer";
import "./Body.css";

class Body extends Component {
  render() {
    return (
      <div className="body-container">
        <PhotoViewer />
      </div>
    );
  }
}

export default Body;
