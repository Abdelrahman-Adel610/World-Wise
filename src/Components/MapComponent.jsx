import { useEffect } from "react";
import { useMap } from "react-leaflet";
import useMapContext from "../Hooks/useMapContext";
import { useNavigate } from "react-router-dom";
import { useGeolocation } from "../Hooks/useGeolocation";

export default function MapComponent({ resetUserPosition }) {
  const map = useMap();
  const navigate = useNavigate();
  const { position, setPosition } = useMapContext();
  useEffect(() => {
    map.flyTo(position, 6);
  }, [position, map]);
  useEffect(() => {
    map.addEventListener("click", (e) => {
      setPosition(e.latlng);
      resetUserPosition();
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    });
  }, [map, navigate, resetUserPosition, setPosition]);
  return <div></div>;
}
