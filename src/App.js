import React from "react";

import styles from "./App.module.css";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
const App = () => {
  return (
    <div className={styles.container}>
      <CountryPicker />
      <Cards />
      <Chart />
    </div>
  );
};

export default App;
