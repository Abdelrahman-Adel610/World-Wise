import { Marker, Popup } from "react-leaflet";

export default function MapMarker({ position, Message }) {
  return (
    <Marker position={position}>
      <Popup>{Message}</Popup>
    </Marker>
  );
}
