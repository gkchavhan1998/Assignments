import { render, screen } from "@testing-library/react";
import AreaChart from "../areaChart";
import BarChart from "../barChart";
import ComposedChart from "../composedChart";
import LineChart from "../LineChart";
import PieChart from "../pieChart";
import RadarChart from "../radarChart";
import RadialBarChart from "../radialBarChart";

describe("Checking Chart", () => {
  test("to check area chart rendering", async () => {
    render(<AreaChart />);
    //Note: in AreaChart component we are using external library for charts, in that areachart and other charts ae fetching data using fetch api, which is asynchronous.
    // while rendering it will render every part of the areachart component like any async code and then control is passed to next line of test file. Here rendering is done at line no 12, and when everyting is rendered controle is passed to line 13. So the text "Title : Area Chart" which is result of fetch api (async method) will be available to find with simple getBy* method
    const titleValue = screen.getByText("Title : Area Chart");
    expect(titleValue).toBeInTheDocument();
  });
  test("to check bar chart rendering", async () => {
    render(<BarChart />);
    const titleValue = screen.getByText("Title : Bar Chart");
    expect(titleValue).toBeInTheDocument();
  });
  test("to check Composed Chart rendering", async () => {
    render(<ComposedChart />);
    const titleValue = screen.getByText("Title : Composed Chart");
    expect(titleValue).toBeInTheDocument();
  });
  test("to check Line Chart rendering", async () => {
    render(<LineChart />);
    const titleValue = screen.getByText("Title : Line Chart");
    expect(titleValue).toBeInTheDocument();
  });
  test("to check Pie Chart rendering", async () => {
    render(<PieChart />);
    const titleValue = screen.getByText("Title : Pie Chart");
    expect(titleValue).toBeInTheDocument();
  });
  test("to check Radar Chart rendering", async () => {
    render(<RadarChart />);
    const titleValue = screen.getByText("Title : Radar Chart");
    expect(titleValue).toBeInTheDocument();
  });
  test("to check Radial Bar Chart rendering", async () => {
    render(<RadialBarChart />);
    const titleValue = screen.getByText("Title : Radial Bar Chart");
    expect(titleValue).toBeInTheDocument();
  });
});
