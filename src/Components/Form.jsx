// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useState } from "react";

import styles from "./Form.module.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import useFetchCity from "../Hooks/useFetchCity";
import { useLocationFormURL } from "../Hooks/useLocationFormURL";
import Message from "./Message";
import Spinner from "./Spinner";

export function convertToEmoji(countryCode) {
  if (!countryCode) return;
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const { lat, lng } = useLocationFormURL();
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const {
    city: { countryCode, countryName, locality: cityName },
    isLoading,
  } = useFetchCity(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  );

  const navigate = useNavigate();
  if (isLoading) return <Spinner />;
  if (!countryCode)
    return <Message message={"Invalid place Please select another place"} />;
  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">{cityName}</label>
        <input
          id="cityName"
          // onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{convertToEmoji(countryCode)}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <Button
          type="back"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          &larr; Back
        </Button>
      </div>
    </form>
  );
}

export default Form;
