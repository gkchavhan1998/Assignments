import { BarChrt } from "re-charts-proj";

function BarChart(props) {
  const barChartProps = {
    title: "Bar Chart",
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
    chart_fill: "blue",
    bar_size: 40,
    hexColors: ["#f5691d", "#7027cf", "#d11fd1"],
  };
  return <> {<BarChrt details={barChartProps} />}</>;
}

export default BarChart;
