import { RadarChrt } from "re-charts-proj";

function RadarChart(props) {
  const radiaChrtProps = {
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
    hexColors: ["#f5691d", "#7027cf", "#d11fd1"],
  };

  return <>{<RadarChrt details={radiaChrtProps} />}</>;
}

export default RadarChart;
