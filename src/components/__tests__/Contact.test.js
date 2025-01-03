import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Should test for contact page", () => {
  it("Should load heading us component ", () => {
    render(<Contact />);

    //Querying
    const heading = screen.getByRole("heading"); //Its return JSX while consoling this

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button in component ", () => {
    render(<Contact />);
    const button = screen.getByRole("button"); //we acn use also getByText("Subtim")
    expect(button).toBeInTheDocument();
  });

  it("Should load 2 input box in component ", () => {
    render(<Contact />);
    const input = screen.getAllByRole("textbox"); // getAllByRole use when there will be more than one item
    expect(input.length).toBe(2);
  });
});
