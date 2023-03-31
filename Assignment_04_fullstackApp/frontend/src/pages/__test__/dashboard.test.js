import { render, screen, fireEvent } from "@testing-library/react";
import Dashboard from "../dashboard";
import { BrowserRouter } from "react-router-dom";

const MockDashboard = () => {
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
};

describe("Checking input value", () => {
  test("Checking input value", () => {
    render(<MockDashboard />);
    const lineChartElement = screen.getByText("Line Chart");
    const areaChartElement = screen.getByText("Area Chart");
    const barChartElement = screen.getByText("Bar Chart");
    const pieChartElement = screen.getByText("Pie Chart");
    const radarChartElement = screen.getByText("Radar Chart");
    const composedChartElement = screen.getByText("Composed Chart");
    const radialBarChartElement = screen.getByText("Radial Bar Chart");

    expect(lineChartElement).toBeInTheDocument();
    expect(areaChartElement).toBeInTheDocument();
    expect(barChartElement).toBeInTheDocument();
    expect(pieChartElement).toBeInTheDocument();
    expect(radarChartElement).toBeInTheDocument();
    expect(composedChartElement).toBeInTheDocument();
    expect(radialBarChartElement).toBeInTheDocument();
  });
});
