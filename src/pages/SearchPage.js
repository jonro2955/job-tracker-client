import React from "react";
import Context from "../utils/context";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FormGroup, Label, FormText } from "reactstrap";
import { DatePicker } from "reactstrap-date-picker";

export default function SearchPage() {
  const context = useContext(Context);
  const [appsList, setAppsList] = useState([]);
  const [selectedSearchOption, setSelectedSearchOption] = useState("option1");

  const [dateRangeStart, setDateRangeStart] = useState(new Date().toISOString());
  const [fmtRangeStart, setFmtRangeStart] = useState(undefined);

  const [dateRangeEnd, setDateRangeEnd] = useState(new Date().toISOString());
  const [fmtRangeEnd, setFmtRangeEnd] = useState(undefined);

  function handleSetRangeStart(value, formattedValue) {
    setDateRangeStart(value);
    setFmtRangeStart(formattedValue);
  }

  function handleSetRangeEnd(value, formattedValue) {
    setDateRangeEnd(value);
    setFmtRangeEnd(formattedValue);
  }

  useEffect(() => {
    console.log(selectedSearchOption);
  }, [selectedSearchOption]);

  useEffect(() => {
    console.log(`Formatted start date is ${fmtRangeStart}. Formatted end date is ${fmtRangeEnd}`);
  }, [fmtRangeStart, fmtRangeEnd]);

  useEffect(() => {
    // when this component mounts, if user is logged in, retrieve user's applications list from db and store it inside appsList
    if (context.isAuthenticated && context.dbProfileState) {
      let username = context.dbProfileState.username;
      axios
        .get("/api/get/apps", { params: { email: username } })
        .then((res) => {
          // console.log(res.data);
          setAppsList(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [context]);

  return (
    <div className="centeredPage">
      <h1>Search</h1>
      <form className="form-inline d-flex my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>

      <strong>Criteria:</strong>

      <form>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option1"
              checked={selectedSearchOption === "option1"}
              onClick={() => {
                setSelectedSearchOption("option1");
              }}
              className="form-check-input"
              readOnly
            />
            Company
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option2"
              checked={selectedSearchOption === "option2"}
              onClick={() => {
                setSelectedSearchOption("option2");
              }}
              className="form-check-input"
              readOnly
            />
            Job Title
          </label>
        </div>
      </form>

      <strong>Select date range</strong>
      <FormGroup>
        <Label>Range Start</Label>
        <DatePicker
          id="example-datepicker"
          value={dateRangeStart}
          onChange={(v, f) => handleSetRangeStart(v, f)}
        />
        <FormText>Help</FormText>
      </FormGroup>

      <FormGroup>
        <Label>Range End</Label>
        <DatePicker
          id="example-datepicker"
          value={dateRangeEnd}
          onChange={(v, f) => handleSetRangeEnd(v, f)}
        />
        <FormText>Help</FormText>
      </FormGroup>

      <table className="table table-bordered text-center w-50">
        <thead>
          <tr>
            <th>Date</th>
            <th>Company</th>
            <th>Job Title</th>
            <th>Application</th>
          </tr>
        </thead>
        <tbody>
          {appsList.length > 0 &&
            appsList.map((item, i) => {
              let date = new Date(item.application_date);
              return (
                <tr key={i}>
                  <td>{`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}</td>
                  <td>{item.company_name}</td>
                  <td>{item.job_title}</td>
                  <td>
                    <Link to="/appviewer">View application</Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
