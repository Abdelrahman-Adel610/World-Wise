import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./Pages/Pricing";
import Product from "./Pages/Product";
import "./index.css";
import Homepage from "./Pages/Homepage";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import AppLayout from "./Pages/AppLayout";
import CityList from "./Components/CityList";
import useFetch from "./Hooks/useFetch";
import CountryItem from "./Components/CountryItem";
import CountriesList from "./Components/CountriesList";
import Form from "./Components/Form";
import City from "./Components/City";

function App() {
  const cities = useFetch("http://localhost:8000/cities");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="Pricing" element={<Pricing />} />
          <Route path="Product" element={<Product />} />
          <Route path="Login" element={<Login />} />
          <Route path="App" element={<AppLayout />}>
            <Route index element={<CityList cities={cities} />} />
            <Route path="cities" element={<CityList cities={cities} />} />
            <Route path="cities/:cityId" element={<City />} />
            <Route path="form" element={<Form />} />
            <Route
              path="countries"
              element={<CountriesList cities={cities} />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
