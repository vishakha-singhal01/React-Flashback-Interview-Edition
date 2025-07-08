import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("shows message after button click", () => {
  render(<App />);
  const button = screen.getByText("Click Me");
  fireEvent.click(button);
  expect(screen.getByText("You clicked the button!")).toBeInTheDocument();
});

test("updates input value", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Enter text");
  fireEvent.change(input, { target: { value: "React" } });
  expect(screen.getByText("Input: React")).toBeInTheDocument();
});
