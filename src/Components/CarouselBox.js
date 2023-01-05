import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import hand from "../assets/hand.jpg";
import hand2 from "../assets/hand2.jpg";
export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={hand} alt="Tattoo" />
          <Carousel.Caption>
            <h3>Tattoo</h3>
            <p>Lorem dfdffksm. kdfirjr forest tattoo mkdfkm made </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hand2} alt="Tattoo" />
          <Carousel.Caption>
            <h3>Tattoo</h3>
            <p>Lorem dfdffksm. kdfirjr forest tattoo mkdfkm made </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hand} alt="Tattoo" />
          <Carousel.Caption>
            <h3>Tattoo</h3>
            <p>Lorem dfdffksm. kdfirjr forest tattoo mkdfkm made </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
