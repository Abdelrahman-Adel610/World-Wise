import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer } from "react-leaflet";
import styles from "./Map.module.css";
import MapMarker from "./MapMarker";
import { useCitiesContext } from "../Hooks/useCitiesContext";
import useMapContext from "../Hooks/useMapContext";
import MapComponent from "./MapComponent";
import Button from "./Button";
import { useGeolocation } from "../Hooks/useGeolocation";
export default function Map() {
  const { position, setPosition } = useMapContext();

  const { cities } = useCitiesContext();
  console.log(position);
  const {
    isLoading: isLoadingUserPos,
    userPosition,
    getMyPos,
    setUserPositionState,
  } = useGeolocation(setPosition);
  function resetUserPosition() {
    setUserPositionState(null);
  }
  console.log(userPosition);
  return (
    <div className={styles.mapContainer}>
      {!userPosition && (
        <Button type="position" onClick={getMyPos}>
          {isLoadingUserPos ? "Loading..." : "Use my Location"}
        </Button>
      )}
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
        <MapComponent resetUserPosition={resetUserPosition} />
        {cities?.map((city) => (
          <MapMarker
            position={city.position}
            Message={city.notes}
            key={city.id}
          />
        ))}
        <MapMarker position={position} />
      </MapContainer>
    </div>
  );
}
