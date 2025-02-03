/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const MapContext = createContext();
export default function MapProvider({ children }) {
  const [position, setPosition] = useState([30, 30]);
  return (
    <MapContext.Provider value={{ position, setPosition }}>
      {children}
    </MapContext.Provider>
  );
}
