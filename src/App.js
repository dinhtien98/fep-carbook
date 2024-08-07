import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cars from "./pages/cars/Cars";
import Carsingle from "./pages/car-single/Carsingle";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/carsingle/:id" element={<Carsingle/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
