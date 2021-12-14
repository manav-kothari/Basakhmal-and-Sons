import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import ele from "../../images/products/20.Construction Related/1.Electric Needle Vibrator.jpg";
import mot from "../../images/products/20.Construction Related/2.Motor Based Vibrator.jpg";
import pla from "../../images/products/20.Construction Related/3.Plate Vibrator.jpg";
import mk from "../../images/products/20.Construction Related/4.MK 12 Vibrator.jpg";
import mix from "../../images/products/20.Construction Related/5.Mixture Machine.jpg";

const ConstructionRelated = () => {
  return (
    <div>
      <h2 className="heading text-center">Construction Related:</h2>
      <Row className="p-0 m-0">
        <CardComponent name="Electric Needle Vibrator" image={ele} />
        <CardComponent name="Motor Based Vibrator" image={mot} />
        <CardComponent name="Plate Vibrator" image={pla} />
        <CardComponent name="MK 12 Vibrator" image={mk} />
        <CardComponent name="Mixture Machine" image={mix} />
      </Row>
    </div>
  );
};

export default ConstructionRelated;
