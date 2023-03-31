import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

jest.mock("./pages/signUp", () => () => {
  return <div data-testid="signup-component">Signup</div>;
});
jest.mock("./pages/logIn", () => () => {
  return <div data-testid="login-component">Login</div>;
});
jest.mock("./pages/home", () => () => {
  return <div data-testid="home-component">Home</div>;
});
jest.mock("./pages/homehome", () => () => {
  return <div data-testid="homehome-component">HomeHome</div>;
});
jest.mock("./pages/rewards", () => () => {
  return <div data-testid="rewards-component">Rewards</div>;
});
jest.mock("./pages/settings", () => () => {
  return <div data-testid="settings-component">Settings</div>;
});
jest.mock("./pages/test", () => () => {
  return <div data-testid="test-component">Test</div>;
});
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
    // screen.debug();
    expect(screen.getByTestId("signup-component")).toBeInTheDocument();
  });
  test("check login routing", () => {
    window.history.pushState({}, "", "/login");
    render(<App />);
    // screen.debug();
    expect(screen.getByTestId("login-component")).toBeInTheDocument();
  });
  test("check home routing", () => {
    window.history.pushState({}, "", "/home/");
    render(<App />);
    // screen.debug();
    expect(screen.getByTestId("home-component")).toBeInTheDocument();
  });
  // test("check home > rewards routing", () => {
  //   window.history.pushState({}, "", "/home/");
  //   window.history.pushState({}, "", "reward");
  //   console.log("curr LOC", window.location.href);
  //   console.log("REWARD LOC", window.history.length);
  //   window.history.go(-5);
  //   console.log("prev LOC", window.location.href);

  //   render(<App />);
  //   screen.debug();
  //   // expect(screen.getByTestId("rewards-component")).toBeInTheDocument();
  // });
  // test("check dashboard routing", () => {
  //   window.history.pushState({}, "", "/dashboard");
  //   render(<App />);
  //   // screen.debug();
  //   expect(screen.getByTestId("dashboard-component")).toBeInTheDocument();
  // });
  test.only("check line chart routing", () => {
    // window.history.pushState({}, "", "/dashboard/area");
    const history = createMemoryHistory();
    history.push("/dashboard/area");
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    console.log("Dashboard");
    screen.debug();

    // const linkelement = screen.getByText("Area Chart");
    // console.log("LINK ELEMENT", linkelement);
    // fireEvent.click(linkelement);
    // console.log("Area Chart");
    // screen.debug();
  });
});
