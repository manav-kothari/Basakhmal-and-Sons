import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import por from "../../images/products/12.Power Sprayers/1.Portable 4 Stroke Sprayer.jpg";
import eng from "../../images/products/12.Power Sprayers/2.Engine Operated Sprayer.jpg";
import big from "../../images/products/12.Power Sprayers/3.Big Engine Operated Sprayer.jpg";
import ele from "../../images/products/12.Power Sprayers/4.Electric Sprayer.jpg";
import engm from "../../images/products/12.Power Sprayers/5.Engine Operated Mini Sprayer.jpg";
import htp from "../../images/products/12.Power Sprayers/6.HTP.jpg";
import hon from "../../images/products/12.Power Sprayers/7.Honda Power Sprayer.jpg";
import vari from "../../images/products/12.Power Sprayers/8.Varities of Spray Guns.jpg";
import pow from "../../images/products/12.Power Sprayers/9.Power Sprayer Hose.jpg";
import ful from "../../images/products/12.Power Sprayers/10.Full Range Of Spare Parts.jpg";

const PowerSprayers = () => {
  return (
    <div>
      <h2 className="heading text-center">Power Sprayers:</h2>
      <Row className="p-0 m-0">
        <CardComponent name="Portable 4 Stroke Sprayer" image={por} />
        <CardComponent name="Engine Operated Sprayer" image={eng} />
        <CardComponent name="Big Engine Operated Sprayer" image={big} />
        <CardComponent name="Electric Sprayer.jpg" image={ele} />
        <CardComponent name="Engine Operated Mini Sprayer" image={engm} />
        <CardComponent name="HTP" image={htp} />
        <CardComponent name="Honda Power Sprayer" image={hon} />
        <CardComponent name="Varities of Spray Guns" image={vari} />
        <CardComponent name="Power Sprayer Hose" image={pow} />
        <CardComponent name="Full Range Of Spare Parts" image={ful} />
      </Row>
    </div>
  );
};

export default PowerSprayers;
