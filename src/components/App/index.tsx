import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { Counter, Table } from "..";

export function App() {
  return (
    <BrowserRouter basename="/case-study">
      <nav>
        <ul>
          <li>
            <Link to="counter">Counter</Link>
          </li>
          <li>
            <Link to="/table">Table</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Redirect to="/counter" />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/table">
          <Table />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
