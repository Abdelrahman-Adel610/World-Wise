import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer } from "react-leaflet";
import styles from "./Map.module.css";
import { useState } from "react";
import MapMarker from "./MapMarker";
import { useCitiesContext } from "../Hooks/useCitiesContext";
export default function Map() {
  const navigate = useNavigate();
  const [position, setPosition] = useState([30, 30]);
  navigator.geolocation.getCurrentPosition((p) => {
    setPosition([p.coords.latitude, p.coords.longitude]);
  });
  const { cities } = useCitiesContext();
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <MapContainer
        center={position}
        zoom={10}
        scrollWheelZoom={true}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities?.map((city) => (
          <MapMarker
            position={city.position}
            Message={city.notes}
            key={city.id}
          />
        ))}
      </MapContainer>
    </div>
  );
}
