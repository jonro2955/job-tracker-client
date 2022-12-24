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

  // Whenever the context changes due to new user login, load the recent records onto the search page
  useEffect(() => {
    loadAllRecords();
  }, [context]);

  useEffect(() => {
    // when the date range changes, retrieve the corresponding records and load it into displayedAppsList using setDisplayedAppsList()
    if (fmtRangeStart || fmtRangeEnd) {
      console.log(`Range start: ${fmtRangeStart}. Range end: ${fmtRangeEnd}`);
    }
  }, [fmtRangeStart, fmtRangeEnd]);

  function loadAllRecords() {
    if (context.isAuthenticated && context.dbProfileState) {
      const username = context.dbProfileState.username;
      axios
        .get("/api/get/all-user-records", { params: { email: username } })
        .then((res) => {
          setDisplayedAppsList(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }

  function handleSetRangeStart(value, formattedValue) {
    setDateRangeStart(value);
    setFmtRangeStart(formattedValue);
  }

  function handleSetRangeEnd(value, formattedValue) {
    setDateRangeEnd(value);
    setFmtRangeEnd(formattedValue);
  }

  // This gets called when user clicks the search button. Retrieve applications that match the search query from db and store it inside displayedAppsList
  function search() {
    if (context.isAuthenticated && context.dbProfileState) {
      const username = context.dbProfileState.username;
      axios
        .get("/api/get/search-terms", {
          params: { email: username, searchStr: searchString, searchOption: selectedSearchOption },
        })
        .then((res) => {
          setDisplayedAppsList(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }

  function resetSearchParams() {
    setSelectedSearchOption("option1");
    setSearchString("");
  }

  return (
    <div className="centeredPage">
      <h1>Search</h1>
      <form
        className="form-inline d-flex my-2 my-lg-0"
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}
      >
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

      <div className="d-flex mt-3">
        <FormGroup className="text-center">
          <Label><u>From</u></Label>
          <DatePicker
            id="example-datepicker1"
            value={dateRangeStart}
            onChange={(v, f) => handleSetRangeStart(v, f)}
          />
        </FormGroup>
        &nbsp;
        <FormGroup className="text-center">
          <Label><u>To</u></Label>
          <DatePicker
            id="example-datepicker2"
            value={dateRangeEnd}
            onChange={(v, f) => handleSetRangeEnd(v, f)}
          />
        </FormGroup>
      </div>
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        onClick={() => {
          loadAllRecords();
          resetSearchParams();
        }}
      >
        Reset
      </button>

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
                  <td>
                    <Link to="/appviewer">{`${date.getFullYear()}-${
                      date.getMonth() + 1
                    }-${date.getDate()}`}</Link>
                  </td>
                  <td>
                    <Link to="/appviewer">{item.company_name}</Link>
                  </td>
                  <td>
                    <Link to="/appviewer">{item.job_title}</Link>
                  </td>
                  <td>
                    <Link to="/appviewer">View/Edit</Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
