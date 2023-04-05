import { render, screen } from "@testing-library/react";
import HomeHome from "../homehome";

describe("Checking Chart", () => {
  test("to check area chart rendering", async () => {
    render(<HomeHome />);
    const homeButtons = screen.getByTestId("menu-buttons");
    expect(homeButtons).toBeInTheDocument();
  });
});
