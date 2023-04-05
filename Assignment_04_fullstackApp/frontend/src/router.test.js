import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./pages/signUp", () => () => {
  return <div data-testid="signup-component">Signup</div>;
});
jest.mock("./pages/logIn", () => () => {
  return <div data-testid="login-component">Login</div>;
});
// jest.mock("./pages/home", () => () => {
//   return <div data-testid="home-component">Home</div>;
// });
jest.mock("./pages/homehome", () => () => {
  return <div data-testid="homehome-component">HomeHome</div>;
});
jest.mock("./pages/rewards", () => () => {
  return <div data-testid="rewards-component">Rewards</div>;
});
jest.mock("./pages/settings", () => () => {
  return <div data-testid="settings-component">Settings</div>;
});
// jest.mock("./pages/pageNotFound", () => () => {
//   return <div data-testid="pageNotFound-component">Test</div>;
// });
// jest.mock("./pages/dashboard", () => () => {
//   return <div data-testid="dashboard-component">Dashboard</div>;
// });
jest.mock("./components/chartsComponent/LineChart", () => () => {
  return <div data-testid="linechart-component">Line Chart</div>;
});
jest.mock("./components/chartsComponent/areaChart", () => () => {
  return <div data-testid="areachart-component">Area Chart</div>;
});
jest.mock("./components/chartsComponent/barChart", () => () => {
  return <div data-testid="barchart-component">Bar Chart</div>;
});
jest.mock("./components/chartsComponent/pieChart", () => () => {
  return <div data-testid="piechart-component">Pie Chart</div>;
});
jest.mock("./components/chartsComponent/radarChart", () => () => {
  return <div data-testid="radarchart-component">Radar Chart</div>;
});
jest.mock("./components/chartsComponent/composedChart", () => () => {
  return <div data-testid="composedchart-component">Composed Chart</div>;
});
jest.mock("./components/chartsComponent/radialBarChart", () => () => {
  return <div data-testid="radialbarchart-component">Radial Bar Chart</div>;
});

describe("Testing Routing", () => {
  test("check signup routing", () => {
    window.history.pushState({}, "", "/");
    render(<App />);
    expect(screen.getByTestId("signup-component")).toBeInTheDocument();
  });
  test("check login routing", () => {
    window.history.pushState({}, "", "/login");
    render(<App />);
    expect(screen.getByTestId("login-component")).toBeInTheDocument();
  });
  test("check home routing", () => {
    window.history.pushState({}, "", "/home");
    render(<App />);
    // const btn = screen.getAllByRole("button");
    // console.log("BTN", btn.length);
  });
  test("check home > rewards routing", () => {
    window.history.pushState({}, "", "/home/reward");
    render(<App />);
    expect(screen.getByTestId("rewards-component")).toBeInTheDocument();
  });
  test("check dashboard routing", () => {
    window.history.pushState({}, "", "/dashboard");
    render(<App />);
    expect(screen.getAllByRole("link").length).toBe(7);
  });
  test("check line chart routing", () => {
    window.history.pushState({}, "", "/dashboard/lineC");
    render(<App />);
    expect(screen.getByTestId("linechart-component")).toBeInTheDocument();
  });
  test("check area chart routing", () => {
    window.history.pushState({}, "", "/dashboard/areaC");
    render(<App />);
    expect(screen.getByTestId("areachart-component")).toBeInTheDocument();
  });
  test("check bar chart routing", () => {
    window.history.pushState({}, "", "/dashboard/barC");
    render(<App />);
    expect(screen.getByTestId("barchart-component")).toBeInTheDocument();
  });
  test("check pie chart routing", () => {
    window.history.pushState({}, "", "/dashboard/pieC");
    render(<App />);
    expect(screen.getByTestId("piechart-component")).toBeInTheDocument();
  });
  test("check radar chart routing", () => {
    window.history.pushState({}, "", "/dashboard/radarC");
    render(<App />);
    expect(screen.getByTestId("radarchart-component")).toBeInTheDocument();
  });
  test("check composed chart routing", () => {
    window.history.pushState({}, "", "/dashboard/composedC");
    render(<App />);
    expect(screen.getByTestId("composedchart-component")).toBeInTheDocument();
  });
  test("check radial bar chart routing", () => {
    window.history.pushState({}, "", "/dashboard/radialBarC");
    render(<App />);
    expect(screen.getByTestId("radialbarchart-component")).toBeInTheDocument();
  });
  test("check page not found", () => {
    window.history.pushState({}, "", "/fsbjkc");
    render(<App />);
    const pageNotFoundText = screen.getByText("Page Not Found");
    expect(pageNotFoundText).toBeInTheDocument();
  });
});
