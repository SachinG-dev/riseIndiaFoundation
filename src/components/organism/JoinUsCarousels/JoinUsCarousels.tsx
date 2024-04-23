import React from "react";
import Carousel from "react-bootstrap/Carousel";

export function JoinUsCarousels() {
  const images = [
    "https://nest.ngo/images/banner2.jpg",
    "https://nest.ngo/images/banner3.jpg",
    "https://www.cry.org/wp-content/themes/cry/images/approach-main-banner-1.jpg",
  ];
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={image} />
          {/* You can customize the Carousel.Caption as per your requirement */}
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
