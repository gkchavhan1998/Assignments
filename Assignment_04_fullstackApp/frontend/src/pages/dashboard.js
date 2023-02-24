import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div>
        <Link className="btn btn-primary m-3" aria-current="page" to="lineC">
          Line Chart
        </Link>
        <Link className="btn btn-primary m-3" aria-current="page" to="areaC">
          Area Chart
        </Link>
        <Link className="btn btn-primary m-3" aria-current="page" to="barC">
          Bar Chart
        </Link>
        <Link className="btn btn-primary m-3" aria-current="page" to="pieC">
          Pie Chart
        </Link>
        <Link className="btn btn-primary m-3" aria-current="page" to="radarC">
          Radar Chart
        </Link>
        <Link
          className="btn btn-primary m-3"
          aria-current="page"
          to="composedC"
        >
          Composed Chart
        </Link>
        <Link
          className="btn btn-primary m-3"
          aria-current="page"
          to="radialBarC"
        >
          Radial Bar Chart
        </Link>
        <Outlet />
      </div>
    </>
  );
}

export default Dashboard;
