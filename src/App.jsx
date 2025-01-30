import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./Pages/Pricing";
import Product from "./Pages/Product";
import "./index.css";
import Homepage from "./Pages/Homepage";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import AppLayout from "./Pages/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="Pricing" element={<Pricing />}></Route>
          <Route path="Product" element={<Product />}></Route>
          <Route path="Login" element={<Login />}></Route>
          <Route path="App" element={<AppLayout />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
