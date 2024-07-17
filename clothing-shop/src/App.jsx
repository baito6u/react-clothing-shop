import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { AddProducts } from "./components/addPrducts/AddProducts";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/addproducts" Component={AddProducts} />
    </Routes>
  );
}

export default App;
