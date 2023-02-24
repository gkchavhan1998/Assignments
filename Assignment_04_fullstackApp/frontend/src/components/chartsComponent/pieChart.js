import React, { useState, useEffect, useRef } from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

function PieChrt(props) {
  const dataFetchedRef = useRef(false);
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  const data02 = [
    { name: "Group A", value: 2400 },
    { name: "Group B", value: 4567 },
    { name: "Group C", value: 1398 },
    { name: "Group D", value: 9800 },
    { name: "Group E", value: 3908 },
    { name: "Group F", value: 4800 },
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
        console.log("RESULT -- ", result);
      });
    // console.log("in useeffect end");
  });
  return (
    <>
      <PieChart
        width={props.details.chrt_width}
        height={props.details.chrt_height}
      >
        <Pie
          dataKey="value"
          isAnimationActive={props.details.isAnimationActive}
          data={data01}
          cx={props.details.cx1}
          cy={props.details.cy1}
          innerRadius={props.details.in_radius}
          outerRadius={props.details.out_radius}
          fill={props.details.fill1}
          label
        />
        <Pie
          dataKey="value"
          isAnimationActive={props.details.isAnimationActive}
          data={data02}
          cx={props.details.cx2}
          cy={props.details.cy2}
          innerRadius={props.details.in_radius}
          outerRadius={props.details.out_radius}
          fill={props.details.fill2}
          label
        />
        <Tooltip />
      </PieChart>
    </>
  );
}

export default PieChrt;
