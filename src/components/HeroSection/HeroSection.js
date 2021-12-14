import React, { useEffect } from "react";
import { Button, Carousel, Col, Row } from "react-bootstrap";
import { HeroSec } from "./HeroSection.elements";
import img1 from "../../images/logo1.jpg";
import img2 from "../../images/logo2.jpg";
import shop from "../../images/shop.jpeg";
import f1 from "../../images/f1.jpeg";
import f2 from "../../images/f2.jpeg";
import f3 from "../../images/f3.jpeg";
import f4 from "../../images/f4.jpeg";
import f5 from "../../images/f5.jpeg";
import imgbt from "../../images/imgbt.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <HeroSec>
        <Carousel className="carousel" fade controls={false} indicators={false}>
          <Carousel.Item interval={3000}>
            <img className="d-block carouselimg" src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block carouselimg"
              src={imgbt}
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img className="d-block carouselimg" src={f1} alt="slide" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block carouselimg" src={f2} alt="slide" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block carouselimg" src={shop} alt="slide" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block carouselimg" src={f3} alt="slide" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block carouselimg" src={img2} alt="slide" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block carouselimg" src={f4} alt="slide" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block carouselimg" src={f5} alt="slide" />
          </Carousel.Item>
        </Carousel>
        <Row className="py-3 mx-0 p-0 mobileonly" data-aos="fade-down">
          <Col sm={12} md={12} lg={6} xl={6}>
            <div className="text-light mx-auto center ">
              <div className="mx-1">
                <span className="text-center heading2 my-2">
                  <u>Welcome to Basakhmal and Sons</u>
                </span>
                <span className="text">
                  Basakhmal and Sons was established on 1957 at Ratna bandha
                  chowk, Dhamtari (C.G). Since 64 years, we had served farmers &
                  other agriculture fields. We deal in all types of Submersible
                  Pumps, Open well, Monoblock pumps, and Selfpriming pumps.
                </span>
              </div>
              <a href="/about">
                <Button className="btn-info btn-block text-center text-light mx-1 my-2 px-3">
                  Read More About Us
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </HeroSec>
    </>
  );
};

export default HeroSection;
