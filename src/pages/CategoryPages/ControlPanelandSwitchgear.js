import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import con from "../../images/products/4.Control Panel & Switchgear/1.Control Panels.jpg";
import sta from "../../images/products/4.Control Panel & Switchgear/2.Starters.jpg";
import aut from "../../images/products/4.Control Panel & Switchgear/3.Auto Switches.webp";
import mcb from "../../images/products/4.Control Panel & Switchgear/4.MCB's.jpg";
import wat from "../../images/products/4.Control Panel & Switchgear/5.Water level controller.jpg";
import oil from "../../images/products/4.Control Panel & Switchgear/6.Oil Starter & Star Delta.jpg";
import spa from "../../images/products/4.Control Panel & Switchgear/7.Spare parts.jpeg";

const ControlPanelandSwitchgear = () => {
  return (
    <div>
      <h2 className="heading text-center">Control Panel and Switchgear:</h2>
      <Row className="p-0 m-0">
        <CardComponent name="Control Panels" image={con} />
        <CardComponent name="Starters" image={sta} />
        <CardComponent name="Auto Switches" image={aut} />
        <CardComponent name="MCB's" image={mcb} />
        <CardComponent name="Water Level Controller" image={wat} />
        <CardComponent name="Oil Starter & Star Delta" image={oil} />
        <CardComponent name="Spare Parts" image={spa} />
      </Row>
    </div>
  );
};

export default ControlPanelandSwitchgear;
