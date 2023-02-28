import React, { useState, useEffect, useRef } from "react";
import { BarChrt } from "re-charts-project";

function BarChart(props) {
  const dataFetchedRef = useRef(false);
  const [chartData, setChartData] = useState([]);
  const [xAxisDataKey, setXAxisDataKey] = useState("");
  const [dataKey, setDataKey] = useState([]);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true; // this is done because useEffect was executing twice.
    // console.log("in useeffect start");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
      }),
    };
    fetch("http://localhost:4000/getprojectdata", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setChartData(result);
        setXAxisDataKey(Object.keys(result[0])[0]); //this code will give variable name of 1st value of 1st object from entore array-of-object
        for (let i = 1; i < Object.keys(result[0]).length; i++) {
          dataKey.push(Object.keys(result[0])[i]);
        }
      });
    // console.log("in useeffect end");
  });

  const barChartProps = {
    chart_data: chartData,
    x_axis_datakey: xAxisDataKey,
    bar_datakey: dataKey,
    rc_width: "100%",
    rc_height: "100%",
    rc_aspect: 3,
    chart_width: 500,
    chart_height: 300,
    m_top: 5,
    m_bottom: 5,
    m_left: 20,
    m_right: 100,
    cg_sdash: "3 3",
    x_interval: "preserveStartEnd",
    chart_fill: "blue",
  };
  return <> {<BarChrt details={barChartProps} />}</>;
}

export default BarChart;
