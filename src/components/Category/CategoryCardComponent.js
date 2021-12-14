import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col } from "react-bootstrap";

const CategoryCardComponent = ({ name = "", link = "", image = "" }) => {
  useEffect(() => {
    AOS.init({ duration: 1250 });
  }, []);
  return (
    <>
      <Col sm={12} md={12} lg={3} xl={3}>
        <a href={link}>
          <div data-aos="fade-up" className="catecard my-2">
            <img className="cateimg" src={image} alt="" />
            <span className="text-dark text-center catecardtext">{name}</span>
          </div>
        </a>
      </Col>
    </>
  );
};

export default CategoryCardComponent;
