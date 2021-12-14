import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import rea from "../../images/products/13.Agricultural Machine/1.Reaper.jpg";
import pow from "../../images/products/13.Agricultural Machine/2.Power triller.jpg";
import min from "../../images/products/13.Agricultural Machine/3.Mini Weeder.jpeg";
import cha from "../../images/products/13.Agricultural Machine/4.Chaff Cutter.jpg";

const AgriculturalMachine = () => {
  return (
    <div>
      <h2 className="heading text-center">Garden Tools:</h2>
      <Row className="p-0 m-0">
        <CardComponent name="Reaper" image={rea} />
        <CardComponent name="Power Triller" image={pow} />
        <CardComponent name="Mini Weeder" image={min} />
        <CardComponent name="Chaff Cutter" image={cha} />
      </Row>
    </div>
  );
};

export default AgriculturalMachine;
