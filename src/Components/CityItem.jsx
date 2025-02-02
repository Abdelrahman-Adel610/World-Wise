/* eslint-disable react/prop-types */
import styles from "./CityItem.module.css";
import { formatDate } from "../Utilities/utilities";
import { NavLink } from "react-router-dom";
export default function CityItem({
  city: {
    emoji,
    notes,
    date,
    country,
    cityName,
    id,
    position: { lat, lng },
  },
}) {
  return (
    <NavLink
      to={`/App/cities/${id}?lat=${lat}&lng=${lng}`}
      className={styles.cityItem}
    >
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>( {formatDate(date)} )</time>
      <button className={styles.deleteBtn}>&times;</button>
    </NavLink>
  );
}
