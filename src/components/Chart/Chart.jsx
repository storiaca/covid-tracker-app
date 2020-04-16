import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";

const Chart = (props) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchDailyData();

      setDailyData(data);

      fetchAPI();
    };
  }, []);

  return (
    <div>
      <h2>Chart</h2>
    </div>
  );
};

export default Chart;
