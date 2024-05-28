import { Route, Routes } from "react-router-dom";
import { Home } from "./Views/Home";
import { Carrito } from "./Views/Carrito";
import { PizzaDetail } from "./Views/PizzaDetail";
import Menu from "./Context/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pizza/:id" element={<PizzaDetail />} />
      </Routes>
    </>
  );
}

export default App;
