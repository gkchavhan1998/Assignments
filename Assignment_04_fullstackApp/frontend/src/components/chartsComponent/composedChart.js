import React, { useState, useEffect, useRef } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ComposedChrt(props) {
  const dataFetchedRef = useRef(false);
  const [composedChartData, setComposedChartData] = useState([]);
  const [xAxisDataKey, setXAxisDataKey] = useState("");
  const [composedChartDataKey, setcomposedChartDataKey] = useState([]);

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
        setComposedChartData(result);
        setXAxisDataKey(Object.keys(result[0])[0]); //this code will give variable name of 1st value of 1st object from entore array-of-object
        for (let i = 1; i < Object.keys(result[0]).length; i++) {
          composedChartDataKey.push(Object.keys(result[0])[i]);
        }
      });
    // console.log("in useeffect end");
  });

  console.log("CHART DATA : --- ", composedChartData);
  console.log("x-axis DATA : --- ", xAxisDataKey);
  console.log("composed chart data key: -- ", composedChartDataKey);

  return (
    <>
      {composedChartDataKey.map((item) => {
        return (
          <div key={item}>
            {/* for every iteration of this map we are returning this div... so we are amking a list. So, Each child in a list should have a unique "key" prop */}
            <ResponsiveContainer
              width={props.details.rc_width}
              height={props.details.rc_height}
              aspect={props.details.rc_aspect}
            >
              <ComposedChart
                width={props.details.rc_width}
                height={props.details.rc_aspect}
                data={composedChartData}
                margin={{
                  top: props.details.m_top,
                  right: props.details.m_right,
                  left: props.details.m_left,
                  bottom: props.details.m_bottom,
                }}
              >
                <CartesianGrid strokeDasharray={props.details.cg_sdash} />
                <XAxis
                  dataKey={xAxisDataKey}
                  scale={props.details.compChart_Scale}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey={item}
                  fill={props.details.chart_fill}
                  barSize={props.details.bar_size}
                />
                <Line
                  type={props.details.chart_type}
                  dataKey={item}
                  stroke={props.details.chart_stroke}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        );
      })}
    </>
  );
}

export default ComposedChrt;
