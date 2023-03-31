import { RadialBarChrt } from "re-charts-proj";

function RadialBarChart(props) {
  const radialBarChrtProps = {
    rc_width: "100%",
    rc_height: "100%",
    rc_aspect: 3,
    cx: "50%",
    cy: "50%",
    outer_Radius: "80%",
    inner_Radius: "10%",
    bar_size: 15,
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
    hexColors: ["#f5691d", "#7027cf", "#d11fd1", "#1fd13a"],
  };
  return <>{<RadialBarChrt details={radialBarChrtProps} />}</>;
}

export default RadialBarChart;
