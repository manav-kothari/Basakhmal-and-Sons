import React from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import ang from "../../images/products/7.Power tools/1.Angle Grinder.jpg";
import mar from "../../images/products/7.Power tools/2.Marble Cutter.jpg";
import dri from "../../images/products/7.Power tools/3.Drill Machine.jpg";
import pla from "../../images/products/7.Power tools/4.Planner.jpg";
import rou from "../../images/products/7.Power tools/5.Router.jpg";
import cho from "../../images/products/7.Power tools/6.Chop saw.jpg";
import mit from "../../images/products/7.Power tools/7.Miter saw.jpg";
import ham from "../../images/products/7.Power tools/8.Hammer 2-20, 2-26.jpg";
import dm9 from "../../images/products/7.Power tools/9.Demolition Hammer 11E.jpg";
import dm10 from "../../images/products/7.Power tools/10.Demolition hammer 16kg.jpg";
import wal from "../../images/products/7.Power tools/11.Wall Chaser.jpg";
import ccm from "../../images/products/7.Power tools/12.Core Cutting Machine.jpg";
import con from "../../images/products/7.Power tools/13.Concrete Cutter.jpg";
import cd from "../../images/products/7.Power tools/14.Cordless Drill.jpeg";
import vac from "../../images/products/7.Power tools/14.Vaccum Blower.jpg";
import bel from "../../images/products/7.Power tools/15.Belt Sander.jpg";
import jig from "../../images/products/7.Power tools/16.Jigsaw.jpg";
import pai from "../../images/products/7.Power tools/17.Paint Mixer.jpeg";

const PowerTools = () => {
  return (
    <div>
      <h2 className="heading text-center">Power Tools:</h2>
      <Row className="p-0 m-0">
        <CardComponent name="Angle Grinder" image={ang} />
        <CardComponent name="Marble Cutter" image={mar} />
        <CardComponent name="Drill Machine" image={dri} />
        <CardComponent name="Planner" image={pla} />
        <CardComponent name="Router" image={rou} />
        <CardComponent name="Chop Saw" image={cho} />
        <CardComponent name="Miter Saw" image={mit} />
        <CardComponent name="Hammer" description="- 2-20, 2-26" image={ham} />
        <CardComponent name="Demolition Hammer 11E" image={dm9} />
        <CardComponent name="Demolition Hammer 16kg" image={dm10} />
        <CardComponent name="Wall Chaser" image={wal} />
        <CardComponent name="Core Cutting Machine" image={ccm} />
        <CardComponent name="Concrete Cutter" image={con} />
        <CardComponent name="Cordless Drill" image={cd} />
        <CardComponent name="Vaccum Blower" image={vac} />
        <CardComponent name="Belt Sander" image={bel} />
        <CardComponent name="Jigsaw" image={jig} />
        <CardComponent name="Paint Mixer" image={pai} />
      </Row>
    </div>
  );
};

export default PowerTools;
