import Map from "../Components/Map.jsx";
import Sidebar from "../Components/Sidebar.jsx";
import styles from "./AppLayout.module.css";
export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}
