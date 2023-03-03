import { ComposedChrt } from "re-charts-proj";

function ComposedChart(props) {
  const composedChartProps = {
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
    chart_type: "monotone",
    chart_stroke: "blue",
    chart_fill: "blue",
    compChart_Scale: "auto",
    bar_size: 20,
  };
  return <>{<ComposedChrt details={composedChartProps} />}</>;
}

export default ComposedChart;
