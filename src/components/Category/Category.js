import React from "react";
import { Row } from "react-bootstrap";
// import { CategoryContainer } from "./Category.elements";
import CategoryCardComponent from "./CategoryCardComponent";
import pump from "../../images/category/pumps.jpeg";
import pipe from "../../images/category/pipe.png";
import watertank from "../../images/category/watertank.png";
import controlpanel from "../../images/category/controlpanel.jpg";
import automobile from "../../images/category/automobile.jpg";
import food from "../../images/category/food.jpg";
import powertool from "../../images/category/powertool.jpeg";
import welding from "../../images/category/welding.jpg";
import garden from "../../images/category/garden.jpg";
import manualsprayer from "../../images/category/manualsprayer.jpg";
import batterysprayer from "../../images/category/batterysprayer.jpg";
import powersprayer from "../../images/category/powersprayer.jpg";
import agriculture from "../../images/category/agriculture.jpg";
import portablewaterpump from "../../images/category/portablewaterpump.jpg";
import drip from "../../images/category/drip.jpeg";
import handtool from "../../images/category/handtool.jpg";
import painting from "../../images/category/painting.jpeg";
import cable from "../../images/category/cable.jpg";
import vbelt from "../../images/category/vbelt.jpg";
import construction from "../../images/category/construction.jpg";
import genset from "../../images/category/genset.jpg";

const Category = () => {
  return (
    <div style={{ background: "#f5f5f5" }}>
      <div className="center pt-2">
        <h4 className="heading text-center text-dark">Catalog:</h4>
      </div>
      <Row className="m-0 p-0 pb-3">
        <CategoryCardComponent
          name="Water Pumps"
          image={pump}
          link="/waterpumps"
        />
        <CategoryCardComponent name="Pipes" image={pipe} link="/pipes" />
        <CategoryCardComponent
          name="Water Tank & Fittings"
          image={watertank}
          link="/watertanksandfittings"
        />
        <CategoryCardComponent
          name="Control Panel & Switch Gear"
          image={controlpanel}
          link="/controlpanelandswitchgear"
        />
        <CategoryCardComponent
          name="Automobiles"
          image={automobile}
          link="/automobiles"
        />
        <CategoryCardComponent
          name="Food Processinsg"
          image={food}
          link="/foodprocessing"
        />
        <CategoryCardComponent
          name="Power Tools"
          image={powertool}
          link="/powertools"
        />
        <CategoryCardComponent
          name="Welding Machine & Stand drill"
          image={welding}
          link="/weldingmachineandstanddrill"
        />
        <CategoryCardComponent
          name="Garden Tools"
          image={garden}
          link="/gardentools"
        />
        <CategoryCardComponent
          name="Manual Sprayers"
          image={manualsprayer}
          link="/manualsprayers"
        />
        <CategoryCardComponent
          name="Battery Sprayers"
          image={batterysprayer}
          link="/batterysprayers"
        />
        <CategoryCardComponent
          name="Power Sprayers"
          image={powersprayer}
          link="/powersprayers"
        />
        <CategoryCardComponent
          name="Agricultural Machines"
          image={agriculture}
          link="/agriculturalmachine"
        />
        <CategoryCardComponent
          name="Portable Water Pumps"
          image={portablewaterpump}
          link="/portablewaterpumps"
        />
        <CategoryCardComponent
          name="Drip Irrigation and Sprikle Pipes"
          image={drip}
          link="/dripirrigation"
        />
        <CategoryCardComponent
          name="Hand Tools & Lifters"
          image={handtool}
          link="/handtoolsandlifters"
        />
        <CategoryCardComponent
          name="Painting Tools"
          image={painting}
          link="/paintingtools"
        />
        <CategoryCardComponent
          name="Cables & Wires"
          image={cable}
          link="/cablesandwires"
        />
        <CategoryCardComponent name="V Belts" image={vbelt} link="/vbelts" />
        <CategoryCardComponent
          name="Construction Related"
          image={construction}
          link="/constructionrelated"
        />
        <CategoryCardComponent name="Gensets" image={genset} link="/gensets" />
      </Row>
    </div>
  );
};

export default Category;
