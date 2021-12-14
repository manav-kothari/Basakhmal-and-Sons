import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import pet from "../../images/products/9.Garden Tools/1.Petrol Chainsaw.jpg";
import ele from "../../images/products/9.Garden Tools/2.Electric Chainsaw.jpeg";
import hed from "../../images/products/9.Garden Tools/3.Hedge Trimmer.jpg";
import bru from "../../images/products/9.Garden Tools/4.Brush cutter.jpg";
import ear from "../../images/products/9.Garden Tools/5.Earth Auger (Hole Drigger).jpg";
import el from "../../images/products/9.Garden Tools/6.Electric Lawnmower.jpg";
import man from "../../images/products/9.Garden Tools/7.Manual Lawnmower.webp";
import pl from "../../images/products/9.Garden Tools/8.Petrol Lawnmower.jpg";
import sec from "../../images/products/9.Garden Tools/9.Secateurs.jpg";

const GardenTools = () => {
  return (
    <div>
      <h2 className="heading text-center">Garden Tools:</h2>
      <Row className="p-0 m-0">
        <CardComponent name="Petrol Chainsaw" image={pet} />
        <CardComponent name="Electric Chainsaw" image={ele} />
        <CardComponent name="Hedge Trimmer" image={hed} />
        <CardComponent name="Brush Cutter" image={bru} />
        <CardComponent name="Earth Auger (Hole Drigger)" image={ear} />
        <CardComponent name="Electric Lawnmower" image={el} />
        <CardComponent name="Manual Lawnmower" image={man} />
        <CardComponent name="Petrol Lawnmower" image={pl} />
        <CardComponent name="Secateurs" image={sec} />
      </Row>
    </div>
  );
};

export default GardenTools;
