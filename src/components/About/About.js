import React from "react";
import { Col, Row } from "react-bootstrap";
import img from "../../images/owner.jpeg";
import { AboutContainer } from "./About.elements";

const About = () => {
  return (
    <AboutContainer>
      <h3 className="heading text-center text-light pt-3">About Us:</h3>

      <Row className="py-3 mx-0 p-0 ">
        {/* <h1 className="mx-auto heading2 text-center text-light mb-3">
          <span>
            <u>Basakhmal and Sons</u>
          </span>
        </h1> */}
        <Col sm={12} md={12} lg={6} xl={6}>
          <img src={img} alt="" className="text-center mx-auto abtimg" />
          <div className="text-center text-light mt-2">
            <span className="subheading">
              <b>Mr. Raj Kumar Kukreja</b>
            </span>
            <br />
            <span>
              <small>(Owner)</small>
            </span>
          </div>
        </Col>

        <Col sm={12} md={12} lg={6} xl={6}>
          <div className="text-light mx-auto center mt-3">
            <div className="mx-1">
              <span className="text-light contacttext">
                <b>Basakhmal and Sons</b> was established on 13 December 1957 at
                Ratna bandha chowk, Dhamtari (C.G). Since 64 years, we had
                served farmers & other agriculture fields. We deal in all types
                of Submersible Pumps, Open well, Monoblock pumps, and
                Selfpriming pumps.
                <br />
                <br />
                At Basakhmal and Sons we offer products solutions catering to
                every consumer need for water transfer, be it domestic water
                pumping for mid or high rises, pressure boosting systems,
                agricultural and submersible water pumping solutions.
                <br />
                <br />
                The values that have guided since its foundations are: the
                quality of the pumps and of their materials, the competence,
                availability that meets the customer’s needs and the constant
                desire to offer the best service in terms of price/quality and
                delivery of the pumps.
                <br />
                <br />
                Satisfying the need of our customers is the eternal pursuit of
                Basakhmal and Sons.
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </AboutContainer>
  );
};

export default About;
