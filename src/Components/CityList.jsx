import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCitiesContext } from "../Hooks/useCitiesContext";
import Spinner from "./Spinner";
export default function CityList() {
  const { cities, isLoading } = useCitiesContext();
  console.log(cities);
  if (isLoading) return <Spinner />;
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
