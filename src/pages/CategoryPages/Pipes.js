import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import pipe from "../../images/products/2.All types of Pipes/1.Pipes Range.png";
import roll from "../../images/products/2.All types of Pipes/2.Full Range of Roll Pipes.jpg";
import gi from "../../images/products/2.All types of Pipes/3.GI pipes.jpg";
import col from "../../images/products/2.All types of Pipes/4.Column Pipes.jpg";
import lap from "../../images/products/2.All types of Pipes/5.Lapeta pipes.jpg";
import gar from "../../images/products/2.All types of Pipes/6.Garden Pipes.jpg";
import bra from "../../images/products/2.All types of Pipes/7.Braided hose pipe.jpeg";
import gipvc from "../../images/products/2.All types of Pipes/8.GI and PVC Casing pipes.jpg";

const Pipes = () => {
  return (
    <div>
      <h2 className="heading text-center">Pipes:</h2>
      <Row className="p-0 m-0">
        <CardComponent name="Pipes Range" image={pipe} />
        <CardComponent name="Full Range of Roll Pipes" image={roll} />
        <CardComponent name="GI pipes" image={gi} />
        <CardComponent name="Coloumn Pipes" image={col} />
        <CardComponent name="Lapeta Pipes" image={lap} />
        <CardComponent name="Garden Pipes" image={gar} />
        <CardComponent name="Braided Hose pipe" image={bra} />
        <CardComponent name="Gi and PVC Casing Pipes" image={gipvc} />
      </Row>
    </div>
  );
};

export default Pipes;
