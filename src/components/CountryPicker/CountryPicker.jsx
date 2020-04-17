import React, { useState, useEffect } from "react";

import { fetchCountries } from "../../api";

import { NativeSelect, FormControl, StylesProvider } from "@material-ui/core";

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
    <FormControl className={StylesProvider.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountry(e.target.value)}
      >
        <option value="global">Global</option>
        {optionCountries}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
