import { useNavigate, useParams } from "react-router-dom";
import { formatDate } from "../Utilities/utilities";
import styles from "./City.module.css";
import useFetch from "../Hooks/useFetch";
import Spinner from "./Spinner";
import Button from "./Button";
import { useCitiesContext } from "../Hooks/useCitiesContext";
import { useEffect } from "react";
import useMapContext from "../Hooks/useMapContext";
import { useLocationFormURL } from "../Hooks/useLocationFormURL";
function City() {
  const { cityId: id } = useParams();
  const { data, isLoading } = useFetch(`http://localhost:8000/cities/${id}`);
  const { lat, lng } = useLocationFormURL();
  const navigate = useNavigate();
  const { emoji, cityName, notes, date } = data || {};
  const { setActiveCity } = useCitiesContext();
  const { setPosition } = useMapContext();
  useEffect(() => {
    if (isFinite(lat) && isFinite(lng) && lat) setPosition([lat, lng]);
  }, [lat, lng, setPosition]);

  useEffect(
    function () {
      if (id) {
        setActiveCity(id);
      }
    },
    [id, setActiveCity]
  );

  if (isLoading) return <Spinner />;
  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <Button
          type="back"
          onClick={() => {
            navigate(-1);
          }}
        >
          &larr; Back
        </Button>
      </div>
    </div>
  );
}

export default City;
