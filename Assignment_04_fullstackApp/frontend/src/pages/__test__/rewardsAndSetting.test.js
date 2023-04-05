import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../mocks/server";
import Rewards from "../rewards";
import Settings from "../settings";

describe("Checking input value", () => {
  test("to check rewards component", async () => {
    server.use(
      rest.get("http://localhost:4000/getrewardoption", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([{ name: "Your Rewards" }]));
      })
    );
    render(<Rewards />);
    // const textdata = await screen.findByText("Your Rewards");
  });
  test("setting test", async () => {
    render(<Settings />);
  });
});
