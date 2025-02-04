/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";

export const CitiesContext = createContext();
const initialState = {
  cities: [],
  activeCity: {},
  isLoading: false,
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };
    case "city/added":
      return {
        ...state,
        activeCity: action.payload.id,
        isLoading: false,
        cities: [...state.cities, action.payload],
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };
    case "setActive":
      return { ...state, activeCity: action.payload };
    case "error":
      return { ...state, isLoading: false, error: action.payload };
  }
}

export function CitiesProvider({ children }) {
  const [{ activeCity, isLoading, cities }, dispatch] = useReducer(
    reducer,
    initialState
  );
  function setActiveCity(id) {
    dispatch({ type: "setActive", payload: id });
  }
  useEffect(() => {
    const ctrl = new AbortController();
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        const req = await fetch("http://localhost:8000/cities", {
          method: "GET",
          signal: ctrl.signal,
        });
        const data = await req.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch (err) {
        dispatch({ type: "error", payload: err.message });
      }
    }
    fetchCities();
    return () => ctrl.abort();
  }, []);
  async function AddCity(city) {
    try {
      dispatch({ type: "loading" });
      const req = await fetch("http://localhost:8000/cities", {
        method: "POST",
        body: JSON.stringify(city),
      });
      const resp = await req.json();
      dispatch({ type: "city/added", payload: resp });
    } catch (err) {
      dispatch({ type: "error", payload: err.message });
    }
  }
  async function deleteCity(id) {
    try {
      dispatch({ type: "loading" });
      const resp = await fetch(`http://localhost:8000/cities/${id}`, {
        method: "DELETE",
      });
      await resp.json();
      dispatch({ type: "city/deleted", payload: id });
    } catch (err) {
      dispatch({ type: "error", payload: err.message });
    }
  }
  return (
    <CitiesContext.Provider
      value={{
        cities: cities,
        isLoading: isLoading,
        activeCity,
        setActiveCity,
        AddCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
