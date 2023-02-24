import React, { useState, useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function BarChrt(props) {
  const dataFetchedRef = useRef(false);
  const [chartData, setChartData] = useState([]);
  const [xAxisDataKey, setXAxisDataKey] = useState("");
  const [barDataKey, setBarDataKey] = useState([]);

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
          barDataKey.push(Object.keys(result[0])[i]);
        }
      });
    // console.log("in useeffect end");
  });
  //   console.log("CHART DATA : --- ", chartData);
  //   console.log("x-axis DATA : --- ", xAxisDataKey);
  //   console.log("Bar key DATA : --- ", barDataKey);
  return (
    <div>
      BarChrt
      <ResponsiveContainer width="100%" height="100%" aspect={3}>
        <BarChart
          width={props.details.rc_width}
          height={props.details.rc_aspect}
          data={chartData}
          margin={{
            top: props.details.m_top,
            right: props.details.m_right,
            left: props.details.m_left,
            bottom: props.details.m_bottom,
          }}
        >
          <CartesianGrid strokeDasharray={props.details.cg_sdash} />
          <XAxis dataKey={xAxisDataKey} interval={props.details.x_interval} />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" /> */}

          {barDataKey.map((item) => {
            return (
              <Bar dataKey={item} fill={props.details.chart_fill} key={item} />
            );
          })}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChrt;
