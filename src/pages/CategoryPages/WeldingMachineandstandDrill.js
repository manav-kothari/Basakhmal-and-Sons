import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import por from "../../images/products/8.Welding Machine & Stand drill/1.Portable Welding Machine.jpg";
import com from "../../images/products/8.Welding Machine & Stand drill/2.Commercial Welding Machine.jpg";
import ind from "../../images/products/8.Welding Machine & Stand drill/3.Industrial Welding Machine.jpg";
import sta from "../../images/products/8.Welding Machine & Stand drill/4.Stand Drill.jpg";

const WeldingMachinesandStanddrill = () => {
  return (
    <div>
      <h2 className="heading text-center">
        Welding Machines and Stand Drills:
      </h2>
      <Row className="p-0 m-0">
        <CardComponent name="Portable Welding Machine" image={por} />
        <CardComponent name="Commercial Welding Machine" image={com} />
        <CardComponent name="Industrial Welding Machine" image={ind} />
        <CardComponent name="Stand Drill" image={sta} />
      </Row>
    </div>
  );
};

export default WeldingMachinesandStanddrill;
