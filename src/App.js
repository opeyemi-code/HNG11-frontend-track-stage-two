import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import * as Icon from "react-bootstrap-icons";
import Home from "./components/Home";
import Cart from "./components/Cart";
// import PreviewOrder from "./components/PreviewOrder";
import ShippingAddress from "./components/ShippingAddress";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ShippingAddress" element={<ShippingAddress />} />
        {/* <Route path="/sign-up" element={<Signup />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
