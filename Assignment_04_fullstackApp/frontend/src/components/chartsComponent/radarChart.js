import React, { useState, useEffect, useRef } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

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
  console.log("RADAR DATA: --- ", chartData);
  console.log("radar ploar angle DATA: --- ", polarAngleAxisDataKey);
  console.log("radar data key DATA: --- ", radarDataKey);

  return (
    <>
      <ResponsiveContainer
        width={props.details.rc_width}
        height={props.details.rc_height}
        aspect={props.details.rc_aspect}
      >
        <RadarChart
          cx={props.details.cx}
          cy={props.details.cy}
          outerRadius={props.details.outer_Radius}
          data={chartData}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey={polarAngleAxisDataKey} />
          <PolarRadiusAxis
            angle={props.details.polr_r_axis_angle}
            domain={props.details.polr_r_axis_domain}
          />
          {/* domain={[0, 120]}  it is to give scale to radar graph*/}
          <Tooltip />
          {radarDataKey.map((item) => {
            return (
              <Radar
                //   name={item}
                dataKey={item}
                stroke={props.details.stroke}
                fill={props.details.fill}
                // activeDot={{ r: props.details.dot_rad }}
                key={item}
                fillOpacity={props.details.fillOpacity}
              />
            );
          })}
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
}

export default RadarChrt;
