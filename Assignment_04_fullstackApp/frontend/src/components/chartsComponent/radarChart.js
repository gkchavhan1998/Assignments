import React, { useState, useEffect, useRef } from "react";
import { RadialChrt } from "re-charts-project";

function RadarChrt(props) {
  const dataFetchedRef = useRef(false);
  const [chartData, setChartData] = useState([]);
  const [polarAngleAxisDataKey, setPolarAngleAxisDataKey] = useState("");
  const [radarDataKey, setRadarDataKey] = useState([]);

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
        setPolarAngleAxisDataKey(Object.keys(result[0])[0]); //this code will give variable name of 1st value of 1st object from entore array-of-object
        for (let i = 1; i < Object.keys(result[0]).length; i++) {
          radarDataKey.push(Object.keys(result[0])[i]);
        }
      });
    // console.log("in useeffect end");
  });

  const radiaChrtProps = {
    chart_data: chartData,
    polar_angle_axis_datakey: polarAngleAxisDataKey,
    radar_datakey: radarDataKey,
    rc_width: "100%",
    rc_height: "100%",
    rc_aspect: 3,
    cx: "50%",
    cy: "50%",
    outer_Radius: "80%",
    polr_r_axis_angle: 30,
    polr_r_axis_domain: [0, 100],
    stroke: "#82ca9d",
    fill: "#82ca9d",
    fillOpacity: 0.6,
  };

  return <>{<RadialChrt details={radiaChrtProps} />}</>;
}

export default RadarChrt;
