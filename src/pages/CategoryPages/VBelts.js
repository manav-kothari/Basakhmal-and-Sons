import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import aand from "../../images/products/19.V Belts/1.A & B types all Vbelts.jpg";

const VBelts = () => {
  return (
    <div className="page">
      <h2 className="heading text-center">V Belts:</h2>
      <Row className="p-0 m-0">
        <CardComponent name="A & B types all Vbelts" image={aand} />
      </Row>
    </div>
  );
};

export default VBelts;
