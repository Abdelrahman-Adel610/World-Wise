/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
export default function CityList({ cities }) {
  console.log(cities);
  if (!cities?.length)
    return (
      <Message
        message={
          "You don't have any city yet, choose your first city via choosing the city on the map"
        }
      />
    );
  return (
    <ul className={styles.cityList}>
      {cities?.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
