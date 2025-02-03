import { useContext } from "react";
import { CitiesContext } from "../context/CitiesProvider";

export function useCitiesContext() {
  return useContext(CitiesContext);
}
