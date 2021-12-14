import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import kna from "../../images/products/10.Manual Sprayers/1.Knapsack Sprayer.jpg";
import foo from "../../images/products/10.Manual Sprayers/2.Foot Sprayers.jpg";
import bot from "../../images/products/10.Manual Sprayers/3.Bottle Sprayer.jpeg";
import fiv from "../../images/products/10.Manual Sprayers/4. 5 & 8 ltr Sprayer.jpg";

const ManualSprayer = () => {
  return (
    <div>
      <h2 className="heading text-center">Garden Tools:</h2>
      <Row className="p-0 m-0">
        <CardComponent name="Knapsack Sprayer" image={kna} />
        <CardComponent name="Foot Sprayers" image={foo} />
        <CardComponent name="Bottle Sprayer" image={bot} />
        <CardComponent name="5 & 8 ltr Sprayer" image={fiv} />
      </Row>
    </div>
  );
};

export default ManualSprayer;
