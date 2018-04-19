import React, { Component } from "react";
import Slider from "react-slick";
import "./PhotoViewer.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

import Photo1 from "./Photos/Starfruit_And_Lizard.jpg";
import Photo2 from "./Photos/Pomegranate_And_Hardware.jpg";
import Photo3 from "./Photos/Toy_Girl_With_Dog.jpg";
import Photo4 from "./Photos/Toy_Horses_And_House.jpg";
import Photo5 from "./Photos/Wonder_Boy_Asbury_Park.jpg";

class PhotoViewer extends Component {
  render() {
    var settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        <div>
          <img src={Photo1} alt="Starfruit_And_Lizard" />
        </div>
        <div>
          <img src={Photo2} alt="Pomegranate_and_Hardware" />
        </div>
        <div>
          <img src={Photo3} alt="Toy_Girl_With_Dog" />
        </div>
        <div>
          <img src={Photo4} alt="Toy_Horses_And_House" />
        </div>
        <div>
          <img src={Photo5} alt="Wonder_Boy_Asbury_Park" />
        </div>
      </Slider>
    );
  }
}

export default PhotoViewer;
