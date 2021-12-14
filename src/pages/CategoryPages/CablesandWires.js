import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import all from "../../images/products/18.Cables & Wires/1.All kinds of Copper Cables.jpg";
import alu from "../../images/products/18.Cables & Wires/2.Aluminium Cables.jpg";
import sub from "../../images/products/18.Cables & Wires/3.Submersible Winding Wires.jpg";
import wel from "../../images/products/18.Cables & Wires/4.Welding Cables.jpg";

const CablesandWires = () => {
  return (
    <div>
      <h2 className="heading text-center">Cables and Wires:</h2>
      <Row className="p-0 m-0">
        <CardComponent name="All kinds of Copper Cables" image={all} />
        <CardComponent name="Aluminium Cables" image={alu} />
        <CardComponent name="Submersible Winding Wires" image={sub} />
        <CardComponent name="Welding Cables" image={wel} />
      </Row>
    </div>
  );
};

export default CablesandWires;
