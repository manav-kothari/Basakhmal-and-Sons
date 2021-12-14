import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import com from "../../images/products/17.Painting tools/1.Complete range of Paint gun.jpeg";
import pen from "../../images/products/17.Painting tools/2.Pen Gun.jpg";
import pai from "../../images/products/17.Painting tools/3.Paint Zoom Electric.jpg";
import ele from "../../images/products/17.Painting tools/4.Electric Paint Gun.jpeg";
import min from "../../images/products/17.Painting tools/5.Mini Air Compressor.jpg";

const PaintingTools = () => {
  return (
    <div>
      <h2 className="heading text-center">Painting Tools:</h2>
      <Row className="p-0 m-0">
        <CardComponent name="Complete Range of Paint Gun" image={com} />
        <CardComponent name="Pen Gun" image={pen} />
        <CardComponent name="Paint Zoom Electric" image={pai} />
        <CardComponent name="Electric Paint Gun" image={ele} />
        <CardComponent name="Mini Air Compressor" image={min} />
      </Row>
    </div>
  );
};

export default PaintingTools;
