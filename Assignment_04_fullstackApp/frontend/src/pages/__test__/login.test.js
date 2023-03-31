import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../logIn";
import { BrowserRouter } from "react-router-dom";
import * as router from "react-router";

const MockLogin = () => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};
describe("Checking input value", () => {
  const navigate = jest.fn();
  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });
  test("Checking input value", () => {
    render(<MockLogin />);
    const loginElement = screen.getByText("Email");
    const loginHeadingElement = screen.getByRole("heading");

    const emailInputElement = screen.getByPlaceholderText("Enter email id");
    fireEvent.change(emailInputElement, {
      target: { value: "gkchavhan98@gmail.com" },
    });

    expect(loginElement).toBeInTheDocument();
    expect(loginHeadingElement).toBeInTheDocument();
    expect(emailInputElement.value).toBe("gkchavhan98@gmail.com");
  });

  test("to check successful login and proper navigation", async () => {
    render(<MockLogin />);

    const loginBtn = screen.getByRole("button");
    fireEvent.click(loginBtn);

    const statusText = await screen.findByText("Login Successfully");
    expect(statusText).toBeInTheDocument();
    expect(navigate).toHaveBeenCalledWith("/home", {
      state: { userType: "Admin" },
    });
  });
});
