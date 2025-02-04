import { useContext } from "react";
import { CitiesContext } from "../context/CitiesContext";

export function useCitiesContext() {
  return useContext(CitiesContext);
}
