/* eslint-disable react/prop-types */
import { createContext } from "react";
import useFetch from "../Hooks/useFetch";

export const CitiesContext = createContext();
export function CitiesProvider({ children }) {
  const { data: cities, isLoading } = useFetch("http://localhost:8000/cities");
  return (
    <CitiesContext.Provider value={{ cities: cities, isLoading: isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}
