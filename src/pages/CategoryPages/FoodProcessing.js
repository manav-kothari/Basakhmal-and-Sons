import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import minr from "../../images/products/6.Food Processing/1.Mini Rice Mill.jpg";
import mina from "../../images/products/6.Food Processing/2.Mini Atta Chakki.jpg";
import hom from "../../images/products/6.Food Processing/3.Home Use Flour Mill.jpg";
import two from "../../images/products/6.Food Processing/4.2in1 Pulvarizer.jpg";
import gre from "../../images/products/6.Food Processing/5.Greavy Machine.jpg";
import wg from "../../images/products/6.Food Processing/6.Wet Grinder.jpg";
import wgb from "../../images/products/6.Food Processing/7.Wet Grinder Big.jpeg";
import jui from "../../images/products/6.Food Processing/8.Juicer Machine.jpg";
import mat from "../../images/products/6.Food Processing/9.Mathni Machine.jpg";
import oil from "../../images/products/6.Food Processing/10.Oil Extraction Machine.jpg";
import sjim from "../../images/products/6.Food Processing/11.Sugarcane Juice Machine Imported.jpg";
import sjin from "../../images/products/6.Food Processing/12.Sugarcane juice Machine Indian.jpg";
import ice from "../../images/products/6.Food Processing/13.Ice Crusher Machine.jpg";
import bar from "../../images/products/6.Food Processing/14.Barf Gola Machine.jpg";
import chi from "../../images/products/6.Food Processing/15.Chicken Dressing Machine.jpg";
import don from "../../images/products/6.Food Processing/16.Dona Pattal Making Machine.jpg";

const FoodProcessing = () => {
  return (
    <div>
      <h2 className="heading text-center">Food Processing:</h2>
      <Row className="p-0 m-0">
        <CardComponent name="Mini Rice Mill" image={minr} />
        <CardComponent name="Mini Atta Chakki" image={mina} />
        <CardComponent name="Home Use Flour Mill" image={hom} />
        <CardComponent name="2in1 Pulvarizer" image={two} />
        <CardComponent name="Greavy Machine" image={gre} />
        <CardComponent name="Wet Grinder" image={wg} />
        <CardComponent name="Wet Grinder Big" image={wgb} />
        <CardComponent name="Juicer Machine" image={jui} />
        <CardComponent name="Mathni Machine" image={mat} />
        <CardComponent name="Oil Extraction Machine" image={oil} />
        <CardComponent name="Sugarcane Juice Machine Imported" image={sjim} />
        <CardComponent name="Sugarcane juice Machine Indian" image={sjin} />
        <CardComponent name="Ice Crusher Machine" image={ice} />
        <CardComponent name="Barf Gola Machine" image={bar} />
        <CardComponent name="Chicken Dressing Machine" image={chi} />
        <CardComponent name="Dona Pattal Making Machine" image={don} />
      </Row>
    </div>
  );
};

export default FoodProcessing;
