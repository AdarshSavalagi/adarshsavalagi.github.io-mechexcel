import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About';
import Service from "./Pages/Service";
import TempPage from "./Pages/temp";
import Hottapping from "./Pages/ServiceDescription/Hottapping";
import LineStopping from "./Pages/ServiceDescription/LineStopping";
import ColdCutting from "./Pages/ServiceDescription/ColdCutting";
import CatalystHandling from "./Pages/ServiceDescription/CatalystHandling";
import CrudeOilTankCleaning from "./Pages/ServiceDescription/CrudeOilTankCleaning";
import Pigging from "./Pages/ServiceDescription/Pigging";
import VaccumTanker from "./Pages/ServiceDescription/VaccumTanker";
import Manufacturing from "./Pages/ServiceDescription/Manufacturing";
import PipelinePigging from "./Pages/ServiceDescription/PipelinePigging";
function App() {

  return (
    <>  
      <Router>
        <Navbar />
        <Routes>
          <Route path="/adarshsavalagi.github.io-mechexcel/"  element={<HomePage />} />
          <Route path="/adarshsavalagi.github.io-mechexcel/about"  element={ <About/>} />
          <Route path="/adarshsavalagi.github.io-mechexcel/service"  element={ <Service/>} />
          {/* Hot tapping */}
          <Route exact path="/adarshsavalagi.github.io-mechexcel/service/hottapping"  element={ <Hottapping/>} />
          <Route exact path="/adarshsavalagi.github.io-mechexcel/service/linestopping"  element={ <LineStopping/>} />
          <Route exact path="/adarshsavalagi.github.io-mechexcel/service/coldcutting"  element={ <ColdCutting/>} />
          <Route exact path="/adarshsavalagi.github.io-mechexcel/service/pipelinepigging"  element={ <PipelinePigging/>} />
          <Route exact path="/adarshsavalagi.github.io-mechexcel/service/catalysthandling"  element={ <CatalystHandling />} />
          <Route exact path="/adarshsavalagi.github.io-mechexcel/service/crudeoilcleaning"  element={ <CrudeOilTankCleaning />} />
          <Route exact path="/adarshsavalagi.github.io-mechexcel/service/pigging"  element={ <Pigging/>} />
          <Route exact path="/adarshsavalagi.github.io-mechexcel/service/vaccumtanker"  element={ <VaccumTanker/>} />
          <Route exact path="/adarshsavalagi.github.io-mechexcel/service/manufacturing"  element={ <Manufacturing/>} />
          {/* testing pages */}
          <Route path="/adarshsavalagi.github.io-mechexcel/test"  element={ <TempPage/>} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
