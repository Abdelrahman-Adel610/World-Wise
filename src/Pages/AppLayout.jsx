import Map from "../Components/Map.jsx";
import Sidebar from "../Components/Sidebar.jsx";
import MapProvider from "../context/MapContext.jsx";
import styles from "./AppLayout.module.css";
export default function AppLayout() {
  return (
    <div className={styles.app}>
      <MapProvider>
        <Sidebar />
        <Map />
      </MapProvider>
    </div>
  );
}
