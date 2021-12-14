import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import ful from "../../images/products/16.Hand Tools & Lifter/1.Full Range of Hand tools.jpg";
import cha from "../../images/products/16.Hand Tools & Lifter/2.Chain pully.png";
import pip from "../../images/products/16.Hand Tools & Lifter/3.Pipe Vice.jpg";
import tab from "../../images/products/16.Hand Tools & Lifter/4.Table vice.jpg";
import chap from "../../images/products/16.Hand Tools & Lifter/5.Chain Pana.jpg";

const HandToolsandLifter = () => {
  return (
    <div>
      <h2 className="heading text-center">Hand tools and Lifters:</h2>
      <Row className="p-0 m-0">
        <CardComponent name="Full Range of Hand Tools" image={ful} />
        <CardComponent name="Chain Pully" image={cha} />
        <CardComponent name="Pipe Vice" image={pip} />
        <CardComponent name="Table vice" image={tab} />
        <CardComponent name="Chain Pana" image={chap} />
      </Row>
    </div>
  );
};

export default HandToolsandLifter;
