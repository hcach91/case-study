import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDoubleLeft,
  ChevronDoubleRight,
  TextLeft,
} from "react-bootstrap-icons";
import { useForm } from "react-hook-form";

import { PAGE_SIZE, ENDPOINT } from "./constant";
import classes from "./index.module.scss";
import { TableModal } from "./modal";

export function Table() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TableModal.Form>();

  const cl = useRef<AbortController>(new AbortController());
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [employees, setEmployees] = useState<TableModal.Employee[]>([]);

  const [allowCreate, showCreatedForm] = useState<boolean>(false);
  const [status, setStatusCreate] = useState<TableModal.Status>();

  const controller = cl.current;
  const signal = controller.signal;
  const notAborted = !signal.aborted;

  const activeFirst = currentPage !== 1;
  const activeLast = currentPage !== totalPage;

  const totalItem = employees.length;
  const rawMaxEachPage = currentPage * PAGE_SIZE;
  const maxEachPage = !activeLast ? totalItem : rawMaxEachPage;

  const fromIndex = (currentPage - 1) * PAGE_SIZE;
  const toIndex = fromIndex + PAGE_SIZE;

  useEffect(() => {
    fetch(ENDPOINT, { signal })
      .then((res) => (res.ok ? res.json() : []))
      .then((employees: TableModal.Employee[]) => {
        updateEmployee(employees);
      })
      .catch(() => console.log("Fetch employee fail"));
    return () => controller.abort();
  }, []);

  function setStatus(status: TableModal.Status) {
    setStatusCreate(status);
    setTimeout(() => notAborted && setStatusCreate(undefined), 5000);
  }

  function updateEmployee(employees: TableModal.Employee[]) {
    setEmployees(employees);
    setTotalPage(Math.ceil(employees.length / PAGE_SIZE));
  }

  function onSubmit(result: TableModal.Form) {
    setStatus("fetching");
    fetch(ENDPOINT, {
      signal,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((newEmployee: TableModal.Employee) => {
        if (notAborted) {
          showCreatedForm(false);
          updateEmployee([...employees, newEmployee]);
          reset();
          setStatus("success");
        }
      })
      .catch(() => notAborted && setStatus("fail"));
  }

  return (
    <div className="p-3">
      <h2>Employees</h2>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>@ Email</th>
            <th>
              <TextLeft /> Position
            </th>
          </tr>
        </thead>
        <tbody>
          {employees
            .slice(fromIndex, toIndex)
            .map(({ id, name, email, position }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{position}</td>
              </tr>
            ))}
          {!employees.length && (
            <tr>
              <td className="text-center" colSpan={3}>
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className={classes.new} onClick={() => showCreatedForm(true)}>
        + New
      </div>
      <div className={classes.pagination}>
        <p className="m-0">
          {currentPage * PAGE_SIZE - PAGE_SIZE + 1} - {maxEachPage} of{" "}
          {totalItem}
        </p>
        <button
          className="btn first"
          onClick={() => setCurrentPage(1)}
          disabled={!activeFirst}
        >
          <ChevronDoubleLeft />
        </button>
        <button
          className="btn prev"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={!activeFirst}
        >
          <ChevronLeft />
        </button>
        <button
          className="btn next"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={!activeLast}
        >
          <ChevronRight />
        </button>
        <button
          className="btn last"
          onClick={() => setCurrentPage(totalPage)}
          disabled={!activeLast}
        >
          <ChevronDoubleRight />
        </button>
      </div>
      {allowCreate && (
        <form className="form">
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input
              className="form-control"
              id="name"
              {...register("name", { required: "Please input name" })}
            />
            {errors.name && (
              <small className="form-text text-danger">
                {errors.name.message}
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register("email", {
                required: "Please input email",
                pattern: {
                  value: /^\w+@\w+\.\w{2,4}$/i,
                  message: "Email not valid",
                },
              })}
            />
            {errors.email && (
              <small className="form-text text-danger">
                {errors.email.message}
              </small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="position">Position*</label>
            <input
              className="form-control"
              id="position"
              {...register("position", { required: "Please input position" })}
            />
            {errors.position && (
              <small className="form-text text-danger">
                {errors.position.message}
              </small>
            )}
          </div>
          <div className="d-flex justify-content-center mb-3">
            <button
              className="btn btn-primary"
              onClick={handleSubmit(onSubmit)}
              disabled={status === "fetching"}
            >
              Create
            </button>
          </div>
        </form>
      )}
      {status === "success" && (
        <p className="alert alert-success text-center m-auto w-25 mb-3">
          Created sucessful!
        </p>
      )}
      {status === "fail" && (
        <p className="alert alert-danger text-center m-auto w-25">
          Created fail!
        </p>
      )}
    </div>
  );
}
