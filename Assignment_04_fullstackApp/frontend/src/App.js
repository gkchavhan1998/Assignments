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
import RadarChart from "./components/chartsComponent/radarChart";
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
            <Route path="lineC" element={<LineChrt />} />
            <Route path="areaC" element={<AreaChrt />} />
            <Route path="barC" element={<BarChrt />} />
            <Route path="pieC" element={<PieChrt />} />
            <Route path="radarC" element={<RadarChart />} />
            <Route path="composedC" element={<ComposedChrt />} />
            <Route path="radialBarC" element={<RadialBarChrt />} />
          </Route>
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
