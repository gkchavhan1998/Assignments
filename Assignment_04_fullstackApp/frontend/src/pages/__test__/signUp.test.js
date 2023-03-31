import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SignUp from "../signUp";
import { BrowserRouter } from "react-router-dom";
import * as router from "react-router";

const MockSignup = () => {
  return (
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  );
};

describe("Checking input value", () => {
  const navigate = jest.fn();
  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });
  test("Checking input value", () => {
    render(<MockSignup />);
    const firstNameElement = screen.getByPlaceholderText("Enter First Name");
    fireEvent.change(firstNameElement, { target: { value: "Gaurav" } });

    const lastNameElement = screen.getByPlaceholderText("Enter Last Name");
    fireEvent.change(lastNameElement, { target: { value: "Chavhan" } });

    const userTypeElement = screen.getByPlaceholderText("Enter User Type");
    fireEvent.change(userTypeElement, { target: { value: "Emp" } });

    const contactElement = screen.getByPlaceholderText("Enter Contact");
    fireEvent.change(contactElement, { target: { value: "9527980158" } });

    const emailElement = screen.getByPlaceholderText("Enter Email");
    fireEvent.change(emailElement, {
      target: { value: "gkchavhan98@gmail.com" },
    });

    expect(firstNameElement.value).toBe("Gaurav");
    expect(lastNameElement.value).toBe("Chavhan");
    expect(userTypeElement.value).toBe("Emp");
    expect(contactElement.value).toBe("9527980158");
    expect(emailElement.value).toBe("gkchavhan98@gmail.com");
  });

  test("should check successful signup and after signup proper navigation", async () => {
    render(<MockSignup />);
    //note: when working with fetch, note that it is asyn function and need time. So there should be some element which we can access as a result of fetch api.

    const signupBtn = screen.getByText("Sign Up");
    fireEvent.click(signupBtn);
    const statusText = await screen.findByText("user added successfully");
    expect(statusText).toBeInTheDocument();
    expect(navigate).toHaveBeenCalledWith("/login");
  });
});
