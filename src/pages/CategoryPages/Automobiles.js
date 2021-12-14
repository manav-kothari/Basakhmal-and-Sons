import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import ser from "../../images/products/5.Automobiles/1.Servicing Machine.jpg";
import sir from "../../images/products/5.Automobiles/2.Air Compressor.jpg";
import por from "../../images/products/5.Automobiles/3.Portable Car Washer.jpg";
import wet from "../../images/products/5.Automobiles/4.Wet and Dry Vaccum Cleaner.jpg";
import pne from "../../images/products/5.Automobiles/5.Pneumatic Tools.jpg";
import gre from "../../images/products/5.Automobiles/6.Greece bucket.jpg";
import pu from "../../images/products/5.Automobiles/7.PU Pipes.jpeg";
import all from "../../images/products/5.Automobiles/8.All types of AC motors.jpg";
import foa from "../../images/products/5.Automobiles/9.Foam Gun.jpg";

const Automobiles = () => {
  return (
    <div>
      <h2 className="heading text-center">Automobiles:</h2>
      <Row className="p-0 m-0">
        <CardComponent name="Servicing Machine" image={ser} />
        <CardComponent name="Air Compressor" image={sir} />
        <CardComponent name="Portable Car Washer" image={por} />
        <CardComponent name="Wet and Dry Vaccum Cleaner" image={wet} />
        <CardComponent name="Pneumatic Tools" image={pne} />
        <CardComponent name="Greece bucket" image={gre} />
        <CardComponent name="PU Pipes" image={pu} />
        <CardComponent name="All types of AC Motors" image={all} />
        <CardComponent name="Foam Gun" image={foa} />
      </Row>
    </div>
  );
};

export default Automobiles;
