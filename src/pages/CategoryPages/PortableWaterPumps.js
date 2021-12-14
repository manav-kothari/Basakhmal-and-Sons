import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import pet from "../../images/products/14.Portable Water pumps/1.Petrol kerosine Operated.jpg";
import mk from "../../images/products/14.Portable Water pumps/2.MK 12 Diesel Operated.jpg";
import fiv from "../../images/products/14.Portable Water pumps/3.5Hp USHA PUMP.jpg";
import lom from "../../images/products/14.Portable Water pumps/4.LOMBARDINI.jpg";
import swe from "../../images/products/14.Portable Water pumps/5.Sweden Made Petrol.jpg";
import min from "../../images/products/14.Portable Water pumps/6.Mini Water pump.jpg";
import imp from "../../images/products/14.Portable Water pumps/7.Imported Water Pump.jpg";

const PortableWaterPumps = () => {
  return (
    <div>
      <h2 className="heading text-center">Portable Water Pumps:</h2>
      <Row className="p-0 m-0">
        <CardComponent name="Petrol kerosine Operated" image={pet} />
        <CardComponent name="MK 12 Diesel Operated" image={mk} />
        <CardComponent name="5Hp USHA Pump" image={fiv} />
        <CardComponent name="LOMBARDINI" image={lom} />
        <CardComponent name="Sweden Made Petrol" image={swe} />
        <CardComponent name="Mini Water Pump" image={min} />
        <CardComponent name="Imported Water Pump" image={imp} />
      </Row>
    </div>
  );
};

export default PortableWaterPumps;
