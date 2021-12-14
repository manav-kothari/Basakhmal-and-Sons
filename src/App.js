import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/MainPages/Home";
import CategoryScreen from "./pages/MainPages/CategoryScreen";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./components";
import "./styles.css";
import ContactScreen from "./pages/MainPages/ContactScreen";
import AboutScreen from "./pages/MainPages/AboutScreen";
import WaterPumps from "./pages/CategoryPages/WaterPumps";
import Pipes from "./pages/CategoryPages/Pipes";
import WaterTanksandFittings from "./pages/CategoryPages/WaterTankandFitting";
import ControlPanelandSwitchgear from "./pages/CategoryPages/ControlPanelandSwitchgear";
import Automobiles from "./pages/CategoryPages/Automobiles";
import FoodProcessing from "./pages/CategoryPages/FoodProcessing";
import PowerTools from "./pages/CategoryPages/PowerTools";
import WeldingMachinesandStanddrill from "./pages/CategoryPages/WeldingMachineandstandDrill";
import GardenTools from "./pages/CategoryPages/GardenTools";
import ManualSprayer from "./pages/CategoryPages/ManualSprayer";
import BatterySprayer from "./pages/CategoryPages/BatterySprayer";
import PowerSprayers from "./pages/CategoryPages/PowerSprayers";
import AgriculturalMachine from "./pages/CategoryPages/AgriculturalMachine";
import PortableWaterPumps from "./pages/CategoryPages/PortableWaterPumps";
import DripIrrigation from "./pages/CategoryPages/DripIrrigation";
import HandToolsandLifter from "./pages/CategoryPages/HandToolsandLifter";
import PaintingTools from "./pages/CategoryPages/PaintingTools";
import CablesandWires from "./pages/CategoryPages/CablesandWires";
import VBelts from "./pages/CategoryPages/VBelts";
import ConstructionRelated from "./pages/CategoryPages/ConstructionRelated";
import Gensets from "./pages/CategoryPages/Gensets";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catalog" exact component={CategoryScreen} />
        <Route path="/contact" exact component={ContactScreen} />
        <Route path="/about" exact component={AboutScreen} />
        <Route path="/waterpumps" exact component={WaterPumps} />
        <Route path="/pipes" exact component={Pipes} />
        <Route
          path="/watertanksandfittings"
          exact
          component={WaterTanksandFittings}
        />
        <Route
          path="/controlpanelandswitchgear"
          exact
          component={ControlPanelandSwitchgear}
        />
        <Route path="/automobiles" exact component={Automobiles} />
        <Route path="/foodprocessing" exact component={FoodProcessing} />
        <Route path="/powertools" exact component={PowerTools} />
        <Route
          path="/weldingmachineandstanddrill"
          exact
          component={WeldingMachinesandStanddrill}
        />
        <Route path="/gardentools" exact component={GardenTools} />
        <Route path="/manualsprayers" exact component={ManualSprayer} />
        <Route path="/batterysprayers" exact component={BatterySprayer} />
        <Route path="/powersprayers" exact component={PowerSprayers} />
        <Route
          path="/agriculturalmachine"
          exact
          component={AgriculturalMachine}
        />
        <Route
          path="/portablewaterpumps"
          exact
          component={PortableWaterPumps}
        />
        <Route path="/dripirrigation" exact component={DripIrrigation} />
        <Route
          path="/handtoolsandlifters"
          exact
          component={HandToolsandLifter}
        />
        <Route path="/paintingtools" exact component={PaintingTools} />
        <Route path="/cablesandwires" exact component={CablesandWires} />
        <Route path="/vbelts" exact component={VBelts} />
        <Route
          path="/constructionrelated"
          exact
          component={ConstructionRelated}
        />
        <Route path="/gensets" exact component={Gensets} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
