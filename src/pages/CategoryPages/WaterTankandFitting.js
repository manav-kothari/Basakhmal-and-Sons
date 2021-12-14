import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import tank from "../../images/products/3.Water tank & Fittings/1.Water tanks.png";
import gi from "../../images/products/3.Water tank & Fittings/2.GI fittings.jpg";
import com from "../../images/products/3.Water tank & Fittings/3.Complete Range of Bath fittings.jpg";

const WaterTanksandFittings = () => {
  return (
    <div>
      <h2 className="heading text-center">Water Tank & Fittings:</h2>
      <Row className="p-0 m-0">
        <CardComponent name="Water Tanks" image={tank} />
        <CardComponent name="GI Fittings" image={gi} />
        <CardComponent name="Complete Range of Bath Fittings" image={com} />
      </Row>
    </div>
  );
};

export default WaterTanksandFittings;
