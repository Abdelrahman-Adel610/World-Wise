/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import { data } from "react-router-dom";

export const CitiesContext = createContext();

export function CitiesProvider({ children }) {
  const {
    data: cities,
    isLoading,
    setData: setCities,
  } = useFetch("http://localhost:8000/cities");
  const [activeCity, setActiveCity] = useState(null);
  const [isCreating, setIscreating] = useState(false);
  async function AddCity(city) {
    try {
      setIscreating(true);
      const req = await fetch("http://localhost:8000/cities", {
        method: "POST",
        body: JSON.stringify(city),
      });
      const resp = await req.json();
      setCities((cities) => [...cities, resp]);
    } catch (err) {
      console.error(err.message);
    } finally {
      setIscreating(false);
    }
  }
  async function deleteCity(id) {
    const resp = await fetch(`http://localhost:8000/cities/${id}`, {
      method: "DELETE",
    });
    const data = await resp.json();
    console.log(data);
    const newCities = cities.filter((city) => city.id !== id);
    setCities(newCities);
  }
  return (
    <CitiesContext.Provider
      value={{
        cities: cities,
        isLoading: isLoading,
        activeCity,
        setActiveCity,
        AddCity,
        isCreating,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
