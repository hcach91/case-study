import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from ".";

describe("Integration test Counter", () => {
  async function testClickIncreaseBtn() {
    render(<Counter />);
    userEvent.click(screen.getByText("Increase (+1)"));
    expect(await screen.findByText("Counter: 1")).toBeInTheDocument();
  }

  it("When click Increase button", async () => {
    await testClickIncreaseBtn();
  });

  it("When click Reset button", async () => {
    await testClickIncreaseBtn();
    userEvent.click(screen.getByText("Reset"));
    expect(await screen.findByText("Counter: 0")).toBeInTheDocument();
  });
});
