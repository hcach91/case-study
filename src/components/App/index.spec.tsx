import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./";

describe("Integration test App", () => {
  async function testNavigateToTablePage() {
    render(<App />);
    userEvent.click(screen.getByText("Table"));
    expect(await screen.findByText("Employees")).toBeInTheDocument();
  }

  it("When navigate to Table page", async () => {
    await testNavigateToTablePage();
  });

  it("When navigate to Counter page", async () => {
    await testNavigateToTablePage();
    userEvent.click(screen.getByText("Counter"));
    expect(await screen.findByText("Counter: 0")).toBeInTheDocument();
  });
});
