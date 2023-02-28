import React from "react";
import { PieChrt } from "re-charts-project";

function PieChart(props) {
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

  const pieChartProps = {
    datakey: "value",
    data01: data01,
    data02: data02,
    chrt_width: 1000,
    chrt_height: 400,
    isAnimationActive: false,
    cx1: 200,
    cy1: 200,
    cx2: 500,
    cy2: 200,
    in_radius: 40,
    out_radius: 80,
    fill1: "#8884d8",
    fill2: "#82ca9d",
  };
  return (
    <>{<PieChrt details={pieChartProps} />}</>

    // <>
    //   <PieChart
    //     width={props.details.chrt_width}
    //     height={props.details.chrt_height}
    //   >
    //     <Pie
    //       dataKey="value"
    //       isAnimationActive={props.details.isAnimationActive}
    //       data={data01}
    //       cx={props.details.cx1}
    //       cy={props.details.cy1}
    //       innerRadius={props.details.in_radius}
    //       outerRadius={props.details.out_radius}
    //       fill={props.details.fill1}
    //       label
    //     />
    //     <Pie
    //       dataKey="value"
    //       isAnimationActive={props.details.isAnimationActive}
    //       data={data02}
    //       cx={props.details.cx2}
    //       cy={props.details.cy2}
    //       innerRadius={props.details.in_radius}
    //       outerRadius={props.details.out_radius}
    //       fill={props.details.fill2}
    //       label
    //     />
    //     <Tooltip />
    //   </PieChart>
    // </>
  );
}

export default PieChart;
