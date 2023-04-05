import { render, screen, waitFor } from "@testing-library/react";

import Rewards from "../rewards";
import Settings from "../settings";

describe("Checking input value", () => {
  test("to check rewards component", async () => {
    render(<Rewards />);
    // const textdata = await screen.findByText("Your Rewards");
  });
  test("setting test", async () => {
    render(<Settings />);
  });
});
