import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import por from "../../images/products/21.Gensets/1.Portable Generator.jpg";
import dis from "../../images/products/21.Gensets/2.Diesel Generators.jpeg";

const Gensets = () => {
  return (
    <div>
      <h2 className="heading text-center">Gensets:</h2>
      <Row className="p-0 m-0">
        <CardComponent name="Portable Generator" image={por} />
        <CardComponent name="Diesel Generators" image={dis} />
      </Row>
    </div>
  );
};

export default Gensets;
