import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import WelcomePopup from "./WelcomePopup";

describe("WelcomePopup", () => {
  test("renders WelcomePopup component", () => {
    render(<WelcomePopup />);
    const welcomeElement = screen.getByText(/WELCOME/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  test("closes the modal when the 'Get Started' button is clicked", () => {
    render(<WelcomePopup />);
    const buttonElement = screen.getByText(/Get Started/i);
    fireEvent.click(buttonElement);
    expect(screen.queryByText(/WELCOME/i)).toBeNull();
  });
});