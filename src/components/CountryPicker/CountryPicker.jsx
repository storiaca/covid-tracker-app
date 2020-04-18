import React, { useState, useEffect } from "react";

import { fetchCountries } from "../../api";

import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountry }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  const optionCountries = fetchedCountries.map((country) => {
    return (
      <option key={country} value={country}>
        {country}
      </option>
    );
  });

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountry(e.target.value)}
      >
        <option value="">Global</option>
        {optionCountries}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
