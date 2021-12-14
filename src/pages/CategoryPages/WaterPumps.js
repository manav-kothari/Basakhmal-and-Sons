import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import sub from "../../images/products/1.Water pumps/1.Submersible pumps -V3,V4,V5,V6.jpg";
import open from "../../images/products/1.Water pumps/2.Openwell pumps (0.5 - 5 Hp).jpg";
import self from "../../images/products/1.Water pumps/3.Self Priming motor (0.5Hp - 1.0Hp).png";
import mono from "../../images/products/1.Water pumps/4.Monoblock pumps (0.5 Hp - 2Hp).jpg";
import sew from "../../images/products/1.Water pumps/5.Sewage Mud pump.jpeg";
import pre from "../../images/products/1.Water pumps/6.Pressure Booster Pump.jpg";
import com from "../../images/products/1.Water pumps/7.Complete Accesories.jpg";

const WaterPumps = () => {
  return (
    <div>
      <h2 className="heading text-center">Water Pumps:</h2>
      <Row className="p-0 m-0">
        <CardComponent
          name="Submersible Pumps"
          description="-V3, V4, V5, V6"
          image={sub}
        />
        <CardComponent
          name="Openwell Pumps"
          description="(0.5 - 5HP)"
          image={open}
        />
        <CardComponent
          name="Self Priming Motor"
          description="(0.5HP - 1.0HP)"
          image={self}
        />
        <CardComponent
          name="Monoblock Pumps"
          description="(0.5 HP - 2HP)"
          image={mono}
        />
        <CardComponent name="Sewage Mud Pumps" description="" image={sew} />
        <CardComponent
          name="Pressure Booster Pumps"
          description=""
          image={pre}
        />
        <CardComponent name="Complete Accesories" description="" image={com} />
      </Row>
    </div>
  );
};

export default WaterPumps;
