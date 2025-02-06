import { lazy, Suspense } from "react";
import { CitiesProvider } from "./context/CitiesContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { FakeAuthProvider } from "./context/FakeAuthContext";
import "./index.css";
import CityList from "./Components/CityList";
import CountriesList from "./Components/CountriesList";
import ProtectedRoute from "./Components/ProtectedRoute";
import SpinnerFullPage from "./Components/SpinnerFullPage";
const Pricing = lazy(() => import("./Pages/Pricing"));
const Product = lazy(() => import("./Pages/Product"));
const Homepage = lazy(() => import("./Pages/Homepage"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));
const Login = lazy(() => import("./Pages/Login"));
const AppLayout = lazy(() => import("./Pages/AppLayout"));
const City = lazy(() => import("./Components/City"));
const Form = lazy(() => import("./Components/Form"));

function App() {
  return (
    <>
      <FakeAuthProvider>
        <Suspense fallback={<SpinnerFullPage />}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Homepage />} />
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
        </Suspense>
      </FakeAuthProvider>
    </>
  );
}

export default App;
