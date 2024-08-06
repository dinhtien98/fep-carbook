import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cars from "./pages/cars/Cars";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
