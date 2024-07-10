import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { AddProducts } from "./addPrducts/AddProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="/addproducts" Component={AddProducts}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
