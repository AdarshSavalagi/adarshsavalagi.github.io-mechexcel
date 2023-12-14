import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import { Counter } from "./reducers/counter";
function App() {

  return (
    <>  
      <Router>
        <Navbar />
        <Routes>
          <Route path="/adarshsavalagi.github.io-mechexcel/"  element={<HomePage />} />
          <Route path="/adarshsavalagi.github.io-mechexcel/about"  element={ <About/>} />
          <Route path="/adarshsavalagi.github.io-mechexcel/test"  element={ <Counter/>} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App