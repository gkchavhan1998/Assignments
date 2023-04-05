import { render, screen, waitFor } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";
import { BrowserRouter } from "react-router-dom";
import Rewards from "../rewards";
import Settings from "../settings";

const MockReward = () => {
  return (
    <BrowserRouter>
      <Rewards />
    </BrowserRouter>
  );
};

describe("Checking input value", () => {
  test("to check rewards component", async () => {
    render(<Rewards />);
    // const textdata = await screen.findByText("Your Rewards");
  });
  test("setting test", async () => {
    render(<Settings />);
  });
});
