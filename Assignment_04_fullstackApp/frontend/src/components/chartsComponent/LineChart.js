import { LineChrt } from "re-charts-proj";

function LineChart(props) {
  const lineChartProps = {
    rc_width: "100%",
    rc_height: "100%",
    rc_aspect: 3,
    chart_width: 500,
    chart_height: 300,
    m_top: 5,
    m_bottom: 5,
    m_left: 20,
    m_right: 100,
    cg_sdash: "3 3",
    x_interval: "preserveStartEnd",
    chart_type: "monotone",
    chart_stroke: "blue",
    chart_fill: "blue",
    dot_rad: 5,
    compChart_Scale: "auto",
    bar_size: 20,
  };
  return <>{<LineChrt details={lineChartProps} />}</>;
}

export default LineChart;
