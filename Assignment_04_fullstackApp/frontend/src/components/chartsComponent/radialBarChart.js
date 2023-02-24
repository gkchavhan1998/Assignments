import React, { useState, useEffect, useRef } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function RadialBarChrt(props) {
  const dataFetchedRef = useRef(false);
  const [radBarChartData, setRadBarChartData] = useState([]);
  const [radBarChartDataKey, setRadBarChartDataKey] = useState([]);
  const data = [
    {
      name: "18-24",
      uv: 31.47,
      pv: 2400,
      fill: "#8884d8",
    },
    {
      name: "25-29",
      uv: 26.69,
      pv: 4567,
      fill: "#83a6ed",
    },
    {
      name: "30-34",
      uv: 15.69,
      pv: 1398,
      fill: "#8dd1e1",
    },
    {
      name: "35-39",
      uv: 8.22,
      pv: 9800,
      fill: "#82ca9d",
    },
    {
      name: "40-49",
      uv: 8.63,
      pv: 3908,
      fill: "#a4de6c",
    },
    {
      name: "50+",
      uv: 2.63,
      pv: 4800,
      fill: "#d0ed57",
    },
    {
      name: "unknow",
      uv: 6.67,
      pv: 4800,
      fill: "#ffc658",
    },
  ];

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
  return (
    <>
      {radBarChartDataKey.map((item) => {
        return (
          <div key={item}>
            {/* for every iteration of this map we are returning this div... so we are amking a list. So, Each child in a list should have a unique "key" prop */}

            <ResponsiveContainer width="100%" height="100%" aspect={3}>
              <RadialBarChart
                cx={props.details.cx}
                cy={props.details.cy}
                innerRadius={props.details.inner_Radius}
                outerRadius={props.details.outer_Radius}
                barSize={props.details.bar_size}
                data={radBarChartData}
              >
                <Tooltip />
                <RadialBar
                  minAngle={props.details.radBar_minAngl}
                  label={{
                    position: props.details.radBar_labelPos,
                    fill: props.details.radBar_fill,
                  }}
                  background
                  clockWise
                  dataKey={item}
                />
                <Legend
                  iconSize={props.details.legend_iconSize}
                  layout={props.details.legend_layout}
                  verticalAlign={props.details.legend_verAlign}
                  wrapperStyle={props.details.legend_wrapperStyle}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        );
      })}
    </>
  );
}

export default RadialBarChrt;
