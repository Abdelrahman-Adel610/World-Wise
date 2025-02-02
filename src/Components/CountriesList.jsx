/* eslint-disable react/prop-types */
import styles from "./CountriesList.module.css";
import CountryItem from "./CountryItem";
export default function CountriesList({ cities }) {
  const countries =
    cities?.reduce((acc, crnt) => {
      if (acc.findIndex((c) => c.country === crnt.country) !== -1) return acc;
      else return [...acc, { country: crnt.country, emoji: crnt.emoji }];
    }, []) || [];
  console.log(countries);

  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => {
        return <CountryItem country={country} key={i} />;
      })}
    </ul>
  );
}
