import { useContext } from "react";
import { MapContext } from "../context/MapContext";

export default function useMapContext() {
  return useContext(MapContext);
}
