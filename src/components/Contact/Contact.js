import React from "react";
import { Col, Row } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineFieldTime, AiOutlineMail } from "react-icons/ai";
import { ContactContainer } from "./Contact.elements";

const Contact = () => {
  return (
    <ContactContainer className="py-2">
      <h2 className="text-light text-center heading py-2">Contact Us:</h2>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.033249530248!2d81.5427006148779!3d20.70887438617248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2f286e443d6f5b%3A0x208e6bf4bc69d6ea!2sBasakh%20Mal%20and%20Sons!5e0!3m2!1sen!2sin!4v1632247474708!5m2!1sen!2sin"
        width="600"
        height="450"
        className="maps"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <div className="my-3 text-dark contact">
        <Row className="m-0 p-0">
          <Col sm={12} md={12} lg={3} xl={3} className="my-1">
            <span className="subheading pt-2">
              <GoLocation /> LANDMARK:{" "}
            </span>
            <span className="contacttext">
              Ratnabandha Chowk, Near Shivaji Statue, Dhamtari, Chhattisgarh
              493773
            </span>
          </Col>
          <Col sm={12} md={12} lg={3} xl={3} className="my-1">
            <span className="subheading">
              <FiPhoneCall /> Phone:{" "}
            </span>
            <span className="contacttext">
              9770148889, 9425204789, 9993195268
            </span>
          </Col>
          <Col sm={12} md={12} lg={3} xl={3} className="my-1">
            <span className="subheading">
              <AiOutlineFieldTime size="22" /> Opening Hours:
            </span>
            <span className="contacttext">
              {" "}
              Everyday from 9:30 am to 8:00 pm
            </span>
          </Col>
          <Col sm={12} md={12} lg={3} xl={3} className="my-1">
            <span className="subheading">
              <AiOutlineMail size="22" /> Email:
            </span>
            <span className="contacttext"> basakhmalsons.dmt@gmail.com</span>
          </Col>
        </Row>
      </div>
    </ContactContainer>
  );
};

export default Contact;
