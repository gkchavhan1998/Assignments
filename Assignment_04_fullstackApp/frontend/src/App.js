import SignUp from "./pages/signUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/logIn";
import Home from "./pages/home";
import Homehome from "./pages/homehome";
import Rewards from "./pages/rewards";
import Settings from "./pages/settings";
import Test from "./pages/test";
import Dashboard from "./pages/dashboard";
import LineChrt from "./components/chartsComponent/LineChart";
import AreaChrt from "./components/chartsComponent/areaChart";
import BarChrt from "./components/chartsComponent/barChart";
import PieChrt from "./components/chartsComponent/pieChart";
import RadarChrt from "./components/chartsComponent/radarChart";
import ComposedChrt from "./components/chartsComponent/composedChart";
import RadialBarChrt from "./components/chartsComponent/radialBarChart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home/" element={<Home />}>
            <Route path="" element={<Homehome />} />
            <Route path="reward" element={<Rewards />} />
            <Route path="setting" element={<Settings />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="lineC" element={<LineChrt details={chartProps} />} />
            <Route path="areaC" element={<AreaChrt details={chartProps} />} />
            <Route path="barC" element={<BarChrt details={chartProps} />} />
            <Route path="pieC" element={<PieChrt />} />
            <Route path="radarC" element={<RadarChrt details={radarProps} />} />
            <Route
              path="composedC"
              element={<ComposedChrt details={chartProps} />}
            />
            <Route
              path="radialBarC"
              element={<RadialBarChrt details={rbchartProps} />}
            />
          </Route>
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const chartProps = {
  rc_width: "100%",
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

const radarProps = {
  cx: "50%",
  cy: "50%",
  outer_Radius: "80%",
  polr_r_axis_angle: 30,
  polr_r_axis_domain: [0, 100],
  stroke: "#82ca9d",
  fill: "#82ca9d",
  fillOpacity: 0.6,
};

const rbchartProps = {
  cx: "50%",
  cy: "50%",
  outer_Radius: "80%",
  inner_Radius: "10%",
  bar_size: 10,
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
};

export default App;
