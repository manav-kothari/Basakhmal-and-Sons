import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import two from "../../images/products/11.Battery Sprayers/1.2 in 1 Battery Sprayer.png";
import por from "../../images/products/11.Battery Sprayers/2.Portable Battery Sprayer.jpg";
import mis from "../../images/products/11.Battery Sprayers/3.Mist Blower.jpg";
import spa from "../../images/products/11.Battery Sprayers/4.Spare Parts of Battery Sprayer.jpg";

const BatterySprayer = () => {
  return (
    <div>
      <h2 className="heading text-center">Garden Tools:</h2>
      <Row className="p-0 m-0">
        <CardComponent name="2 in 1 Battery Sprayer" image={two} />
        <CardComponent name="Portable Battery Sprayer" image={por} />
        <CardComponent name="Mist Blower" image={mis} />
        <CardComponent name="Spare Parts of Battery Sprayer" image={spa} />
      </Row>
    </div>
  );
};

export default BatterySprayer;
