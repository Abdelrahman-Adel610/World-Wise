import { useCitiesContext } from "../Hooks/useCitiesContext";
import styles from "./CountriesList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
export default function CountriesList() {
  const { cities, isLoading } = useCitiesContext();
  const countries =
    cities?.reduce((acc, crnt) => {
      if (acc.findIndex((c) => c.country === crnt.country) !== -1) return acc;
      else return [...acc, { country: crnt.country, emoji: crnt.emoji }];
    }, []) || [];
  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => {
        return <CountryItem country={country} key={i} />;
      })}
    </ul>
  );
}
