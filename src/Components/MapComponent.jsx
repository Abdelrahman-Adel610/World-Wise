import { useEffect } from "react";
import { useMap } from "react-leaflet";
import useMapContext from "../Hooks/useMapContext";
import { useNavigate } from "react-router-dom";

export default function MapComponent({ resetUserPosition }) {
  const map = useMap();
  const navigate = useNavigate();
  const { position } = useMapContext();
  useEffect(() => {
    map.flyTo(position, 6);
  }, [position, map]);
  useEffect(() => {
    map.addEventListener("click", (e) => {
      resetUserPosition();
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    });
  }, [map, navigate, resetUserPosition]);
  return <div></div>;
}
