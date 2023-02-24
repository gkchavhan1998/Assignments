import React, { useState, useEffect, useRef } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

function LineChrt(props) {
  const dataFetchedRef = useRef(false);
  const [chartData, setChartData] = useState([]);
  const [xAxisDataKey, setXAxisDataKey] = useState("");
  const [lineDataKey, setLineDataKey] = useState([]);

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
        // console.log("menu items : ", result);
        setChartData(result);
        setXAxisDataKey(Object.keys(result[0])[0]); //this code will give variable name of 1st value of 1st object from entore array-of-object

        for (let i = 1; i < Object.keys(result[0]).length; i++) {
          lineDataKey.push(Object.keys(result[0])[i]);
        }
      });
    // console.log("in useeffect end");
  });
  // console.log("CHART DATA: --- : ", chartData);
  // console.log("xaxis NAME : -- : ", xAxisDataKey);
  // console.log("line DATAKEY : ---", lineDataKey);
  return (
    <>
      <ResponsiveContainer
        width={props.details.rc_width}
        aspect={props.details.rc_aspect}
      >
        <LineChart
          data={chartData}
          width={props.details.chart_width}
          height={props.details.chart_height}
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

          {lineDataKey.map((item) => {
            return (
              <Line
                type={props.details.chart_type}
                dataKey={item}
                stroke={props.details.chart_stroke}
                activeDot={{ r: props.details.dot_rad }}
                key={item}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default LineChrt;
