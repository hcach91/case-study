import fetchMock from "fetch-mock";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Table } from ".";
import { ENDPOINT } from "./constant";

const FAKE_EMPLOYEE = [
  {
    id: "1",
    name: "Mr. Earl Ullrich",
    email: "Gerson_Schamberger27@hotmail.com",
    position: "model",
  },
  {
    id: "2",
    name: "Olivia Moen",
    email: "Alicia_Lueilwitz24@hotmail.com",
    position: "concept",
  },
  {
    id: "3",
    name: "Kim Marks",
    email: "Alexys_Kutch57@hotmail.com",
    position: "paradigm",
  },
  {
    id: "4",
    name: "Troy Zieme IV",
    email: "Erin.Cartwright59@yahoo.com",
    position: "contingency",
  },
  {
    id: "5",
    name: "Theresa Breitenberg",
    email: "Jaquelin_Reinger37@yahoo.com",
    position: "initiative",
  },
  {
    id: "6",
    name: "Walter Schaden IV",
    email: "Brigitte_Kautzer18@yahoo.com",
    position: "software",
  },
  {
    id: "7",
    name: "Harvey Romaguera",
    email: "Mozell.Wuckert41@gmail.com",
    position: "extranet",
  },
  {
    id: "8",
    name: "Mable Mraz",
    email: "Reilly19@hotmail.com",
    position: "orchestration",
  },
  {
    id: "9",
    name: "Brandon Auer",
    email: "Miguel.Swift60@yahoo.com",
    position: "approach",
  },
  {
    id: "10",
    name: "Vanessa Lowe",
    email: "Lurline_Hartmann46@gmail.com",
    position: "hierarchy",
  },
  {
    id: "11",
    name: "Gabriel Maggio MD",
    email: "Beryl81@hotmail.com",
    position: "concept",
  },
];

beforeEach(() => {
  fetchMock
    .get(ENDPOINT, FAKE_EMPLOYEE, { overwriteRoutes: true })
    .post(ENDPOINT, {}, { overwriteRoutes: true });
});

afterEach(cleanup);

afterAll(() => {
  fetchMock.reset();
});

describe("Integration test Table", () => {
  async function testExistEmployee() {
    const renderValue = render(<Table />);
    expect(await screen.findByText(FAKE_EMPLOYEE[0].name)).toBeInTheDocument();
    return renderValue;
  }

  async function testClickNextBtn() {
    const renderValue = await testExistEmployee();
    userEvent.click(renderValue.container.getElementsByClassName("next")[0]);
    expect(await screen.findByText(FAKE_EMPLOYEE[5].name)).toBeInTheDocument();
    return renderValue;
  }

  async function testClickLastBtn() {
    const renderValue = await testExistEmployee();
    userEvent.click(renderValue.container.getElementsByClassName("last")[0]);
    expect(await screen.findByText(FAKE_EMPLOYEE[10].name)).toBeInTheDocument();
    return renderValue;
  }

  async function testClickNewBtn() {
    const renderValue = await testExistEmployee();
    userEvent.click(screen.getByText("+ New"));
    expect(
      await renderValue.container.querySelector("input#name")
    ).toBeInTheDocument();
    expect(
      await renderValue.container.querySelector("input#email")
    ).toBeInTheDocument();
    expect(
      await renderValue.container.querySelector("input#position")
    ).toBeInTheDocument();
    return renderValue;
  }

  async function testCreateEmployee() {
    const { container } = await testClickNewBtn();
    const nameInput = container.querySelector("input#name");
    const emailInput = container.querySelector("input#email");
    const positionInput = container.querySelector("input#position");
    if (nameInput && emailInput && positionInput) {
      userEvent.type(nameInput, "name");
      userEvent.type(emailInput, "email@gmail.com");
      userEvent.type(positionInput, "position");
      userEvent.click(screen.getByText("Create"));
    }
  }

  it("When exists employees", async () => {
    await testExistEmployee();
  });

  it("When not exists employees", async () => {
    fetchMock.get(ENDPOINT, 500, { overwriteRoutes: true });
    render(<Table />);
    expect(await screen.findByText("No data")).toBeInTheDocument();
  });

  it("When click First button", async () => {
    const { container } = await testClickNextBtn();
    userEvent.click(container.getElementsByClassName("first")[0]);
    expect(await screen.findByText(FAKE_EMPLOYEE[0].name)).toBeInTheDocument();
  });

  it("When click Previous button", async () => {
    const { container } = await testClickLastBtn();
    userEvent.click(container.getElementsByClassName("prev")[0]);
    expect(await screen.findByText(FAKE_EMPLOYEE[6].name)).toBeInTheDocument();
  });

  it("When click Next button", async () => {
    await testClickNextBtn();
  });

  it("When click Last button", async () => {
    await testClickLastBtn();
  });

  it("When click New button", async () => {
    await testClickNewBtn();
  });

  it("When add new employee successful", async () => {
    await testCreateEmployee();
    expect(await screen.findByText("Created sucessful!")).toBeInTheDocument();
  });

  it("When add new employee fail", async () => {
    await testCreateEmployee();
    fetchMock.post(ENDPOINT, 500, { overwriteRoutes: true });
    expect(await screen.findByText("Created fail!")).toBeInTheDocument();
  });
});
