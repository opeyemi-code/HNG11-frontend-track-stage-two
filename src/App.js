import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ChangeShippingAddress from "./components/ChangeShippingAddress";
import PreviewOrder from "./components/PreviewOrder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/PreviewOrder" element={<PreviewOrder />} />
        <Route
          path="/ChangeShpinngAddress"
          element={<ChangeShippingAddress />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
