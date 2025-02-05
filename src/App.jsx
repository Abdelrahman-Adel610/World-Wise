import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Pricing from "./Pages/Pricing";
import Product from "./Pages/Product";
import "./index.css";
import Homepage from "./Pages/Homepage";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import AppLayout from "./Pages/AppLayout";
import CityList from "./Components/CityList";

import CountriesList from "./Components/CountriesList";
import Form from "./Components/Form";
import City from "./Components/City";
import { CitiesProvider } from "./context/CitiesContext";
import { FakeAuthProvider } from "./context/FakeAuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <>
      <FakeAuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />}></Route>
            <Route path="Pricing" element={<Pricing />} />
            <Route path="Product" element={<Product />} />
            <Route path="Login" element={<Login />} />
            <Route
              path="App"
              element={
                <CitiesProvider>
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                </CitiesProvider>
              }
            >
              <Route index element={<Navigate to={"cities"} replace />} />
              <Route path="cities" element={<CityList />} />
              <Route path="countries" element={<CountriesList />} />
              <Route path="cities/:cityId" element={<City />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </FakeAuthProvider>
    </>
  );
}

export default App;
