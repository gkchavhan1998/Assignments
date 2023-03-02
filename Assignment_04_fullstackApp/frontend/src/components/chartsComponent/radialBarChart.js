import React, { useState, useEffect, useRef } from "react";
// import { RadialBarChrt } from "re-charts-project";
import { RadialBarChrt } from "re-charts-rebuilds";

function RadialBarChart(props) {
  const dataFetchedRef = useRef(false);
  const [radBarChartData, setRadBarChartData] = useState([]);
  const [radBarChartDataKey, setRadBarChartDataKey] = useState([]);

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
        setRadBarChartData(result);
        for (let i = 1; i < Object.keys(result[0]).length; i++) {
          radBarChartDataKey.push(Object.keys(result[0])[i]);
        }
      });
    // console.log("in useeffect end");
  });
  const radialBarChrtProps = {
    radbar_chart_data: radBarChartData,
    radBar_chart_datakey: radBarChartDataKey,
    rc_width: "100%",
    rc_height: "100%",
    rc_aspect: 3,
    cx: "50%",
    cy: "50%",
    outer_Radius: "80%",
    inner_Radius: "10%",
    bar_size: 10,
    radBar_minAngl: 15,
    radBar_labelPos: "insideStart",
    radBar_fill: "#fff",
    legend_iconSize: 10,
    legend_layout: "vertical",
    legend_verAlign: "middle",
    legend_wrapperStyle: {
      top: "50%",
      right: 0,
      transform: "translate(0, -50%)",
      lineHeight: "24px",
    },
  };
  return <> {<RadialBarChrt details={radialBarChrtProps} />}</>;
}

export default RadialBarChart;
