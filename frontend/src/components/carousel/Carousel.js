import React from "react";
import { Carousel } from "antd";
import residance1 from "../../images/residance1.png";
import residance2 from "../../images/residance2.png";
import residance3 from "../../images/residance3.png";
import group1 from "../../images/Group-1.png";
import "./Carousel.css";
export const ResidanceCarousel = () => {
  return (
    <>
    <Carousel className="carousel" autoplay>
      <div className="silde1">
        <img src={residance1} className="slide1" alt="2" />
        <h1 className="slider-text">ikri dwira</h1>
      </div>
      <div>
        <img src={residance2} className="slide1" alt="2" />
        <h1 className="slider-text">ikri dwira</h1>


      </div>
      <div>
        <img src={residance3} className="slide1" alt="2" />
        <h1 className="slider-text">ikri dwira</h1>

      </div>
    </Carousel>
    <img src={group1} className="cover-img" alt="1" />

    </>
    
  );
};
