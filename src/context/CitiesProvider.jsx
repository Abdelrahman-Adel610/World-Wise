/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import useFetch from "../Hooks/useFetch";

export const CitiesContext = createContext();
export function CitiesProvider({ children }) {
  const { data: cities, isLoading } = useFetch("http://localhost:8000/cities");
  const [activeCity, setActiveCity] = useState(null);
  return (
    <CitiesContext.Provider
      value={{
        cities: cities,
        isLoading: isLoading,
        activeCity,
        setActiveCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
