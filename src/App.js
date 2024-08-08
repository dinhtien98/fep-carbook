import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cars from "./pages/cars/Cars";
import Carsingle from "./pages/car-single/Carsingle";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/carsingle/:id" element={<Carsingle/>}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
