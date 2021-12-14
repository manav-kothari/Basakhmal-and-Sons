import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import comp from "../../images/products/15.Drip Irrigation/1.Complete Solution Drip Irrigation.jpeg";
import two from "../../images/products/15.Drip Irrigation/2.Rain Gun Penuguin.jpeg";
import three from "../../images/products/15.Drip Irrigation/3.Rain Gun Prime.jpeg";
import four from "../../images/products/15.Drip Irrigation/4.Sprinkle Pipes.jpeg";
import five from "../../images/products/15.Drip Irrigation/5.Sprinkle Fittings.jpeg";
import six from "../../images/products/15.Drip Irrigation/6.Sprinkle Nozzels.jpeg";
import seven from "../../images/products/15.Drip Irrigation/7.Drip Fittings.jpeg";
import eight from "../../images/products/15.Drip Irrigation/8.Drip Pipes.jpeg";

const DripIrrigation = () => {
  return (
    <div className="">
      <h2 className="heading text-center">
        Drip Irrigation and Sprikle Pipes:
      </h2>
      <Row className="p-0 m-0">
        <CardComponent name="Complete Solution Drip Irrigation" image={comp} />
        <CardComponent name="Rain Gun Penuguin" image={two} />
        <CardComponent name="Rain Gun Prime" image={three} />
        <CardComponent name="Sprinkle Pipes" image={four} />
        <CardComponent name="Sprinkle Fittings" image={five} />
        <CardComponent name="Sprinkle Nozzels" image={six} />
        <CardComponent name="Drip Fittings" image={seven} />
        <CardComponent name="Drip Pipes" image={eight} />
      </Row>
    </div>
  );
};

export default DripIrrigation;
