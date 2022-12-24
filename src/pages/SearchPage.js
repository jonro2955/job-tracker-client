import React from "react";
import Context from "../utils/context";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FormGroup, Label } from "reactstrap";
import { DatePicker } from "reactstrap-date-picker";
import SearchRadio from "../components/SearchRadio";

export default function SearchPage() {
  const context = useContext(Context);
  const [displayedAppsList, setDisplayedAppsList] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [selectedSearchOption, setSelectedSearchOption] = useState("option1");
  const [dateRangeStart, setDateRangeStart] = useState("");
  const [fmtRangeStart, setFmtRangeStart] = useState(undefined);
  const [dateRangeEnd, setDateRangeEnd] = useState("");
  const [fmtRangeEnd, setFmtRangeEnd] = useState(undefined);

  useEffect(() => {
    // when this component mounts, if user is logged in, retrieve user's applications list from db and store it inside displayedAppsList
    if (context.isAuthenticated && context.dbProfileState) {
      const username = context.dbProfileState.username;
      axios
        .get("/api/get/all-user-records", { params: { email: username } })
        .then((res) => {
          setDisplayedAppsList(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [context]);

  useEffect(() => {
    // when the date range changes, retrieve the corresponding records and load it into displayedAppsList using setDisplayedAppsList()
    if (fmtRangeStart || fmtRangeEnd) {
      console.log(`Range start: ${fmtRangeStart}. Range end: ${fmtRangeEnd}`);
    }
  }, [fmtRangeStart, fmtRangeEnd]);


  function handleSetRangeStart(value, formattedValue) {
    setDateRangeStart(value);
    setFmtRangeStart(formattedValue);
  }

  function handleSetRangeEnd(value, formattedValue) {
    setDateRangeEnd(value);
    setFmtRangeEnd(formattedValue);
  }

  // This gets called when user clicks the search button. Retrieve corresponding applications from db and store it inside displayedAppsList
  function search(event) {
    event.preventDefault();
    if (context.isAuthenticated && context.dbProfileState) {
      const username = context.dbProfileState.username;
      const inputStr = event.target.querySelector("#searchInput").value;
      axios
        .get("/api/get/search-terms", {
          params: { email: username, searchStr: inputStr, searchOption: selectedSearchOption },
        })
        .then((res) => {
          setDisplayedAppsList(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="centeredPage">
      <h1>Search</h1>
      <form className="form-inline d-flex my-2 my-lg-0" onSubmit={search}>
        <input
          className="form-control mr-sm-2"
          id="searchInput"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>

      <SearchRadio
        selectedSearchOption={selectedSearchOption}
        setSelectedSearchOption={setSelectedSearchOption}
      />

      <div className="d-flex mt-4">
        <FormGroup>
          <Label>Date Range Start</Label>
          <DatePicker
            id="example-datepicker1"
            value={dateRangeStart}
            onChange={(v, f) => handleSetRangeStart(v, f)}
          />
        </FormGroup>
        &nbsp;
        <FormGroup>
          <Label>Date Range End</Label>
          <DatePicker
            id="example-datepicker2"
            value={dateRangeEnd}
            onChange={(v, f) => handleSetRangeEnd(v, f)}
          />
        </FormGroup>
      </div>

      <table className="table table-bordered text-center w-50 mt-4">
        <thead>
          <tr>
            <th>Date</th>
            <th>Company</th>
            <th>Job Title</th>
            <th>Application</th>
          </tr>
        </thead>
        <tbody>
          {displayedAppsList.length > 0 &&
            displayedAppsList.map((item, i) => {
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
