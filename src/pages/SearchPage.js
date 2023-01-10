import React from "react";
import Context from "../utils/context";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FormGroup, Label } from "reactstrap";
import { DatePicker } from "reactstrap-date-picker";
import SearchRadio from "../components/SearchRadio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

export default function SearchPage() {
  const context = useContext(Context);
  const [allAppsList, setAllAppsList] = useState([]);
  const [displayedAppsList, setDisplayedAppsList] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [selectedSearchOption, setSelectedSearchOption] = useState("job_title");
  const [dateRangeStart, setDateRangeStart] = useState("");
  const [dateRangeEnd, setDateRangeEnd] = useState("");
  const [newestFirst, setNewestFirst] = useState(true);

  /* The allAppsList state will contain all of current user's records in this format: 
    [{app_id: 1, application_date: 'Sat Dec 24 2022 13:07:37 GMT-0800 (Pacific Standard Time)', company_name: 'xyz', job_title: 'abc', job_description: ''},
    {app_id: 2, application_date: 'Sat Dec 24 2022 13:07:37 GMT-0800 (Pacific Standard Time)', company_name: 'xyz', job_title: 'abc', job_description: ''},
    {app_id: 3, application_date: 'Sat Dec 24 2022 13:07:37 GMT-0800 (Pacific Standard Time)', company_name: 'xyz', job_title: 'abc', job_description: ''}] 
    Use the input values of searchString, selectedSearchOption, dateRangeStart, and dateRangeEnd to create a subset of these records that corresponds to 
    these input values. Set displayedAppsList equal to the resulting subset using setDisplayedAppsList. */

  //search allAppsList and setDisplayedAppsList
  function clientSideSearch(
    searchString,
    selectedSearchOption,
    dateRangeStart,
    dateRangeEnd,
    allAppsList,
    setDisplayedAppsList
  ) {
    if (searchString) {
      const startDate = dateRangeStart ? new Date(dateRangeStart) : new Date(0);
      const endDate = dateRangeEnd ? new Date(dateRangeEnd) : new Date();
      let results = [];
      allAppsList.forEach((app) => {
        const appDate = new Date(app.application_date);
        if (
          app[selectedSearchOption]
            .toLowerCase()
            .includes(searchString.toLowerCase()) &&
          appDate >= startDate &&
          appDate <= endDate
        ) {
          results.push(app);
        }
      });
      setDisplayedAppsList(results);
    }
  }

  // when date range changes, filter display list
  useEffect(() => {
    if (allAppsList.length) {
      let startDate = dateRangeStart ? new Date(dateRangeStart) : new Date(0);
      let endDate = dateRangeEnd ? new Date(dateRangeEnd) : new Date();
      let newArr = [];
      allAppsList.forEach((app) => {
        let appDate = new Date(app.application_date);
        if (startDate < appDate && appDate < endDate) {
          newArr.push(app);
        }
      });
      setDisplayedAppsList(newArr);
    }
  }, [dateRangeStart, dateRangeEnd]);

  // get all records from db
  function loadAllRecords() {
    if (context.isAuthenticated && context.dbProfileState) {
      const username = context.dbProfileState.username;
      axios
        .get("/api/get/all-user-apps", { params: { email: username } })
        .then((res) => {
          setAllAppsList(res.data);
          setDisplayedAppsList(res.data);
          // console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }

  // load all records on context change or remount
  useEffect(() => {
    loadAllRecords();
  }, [context]);

  // server side searching would be used if we decide to load only some records at page load and request ones we don't have later
  function serverSideSearch() {
    if (context.isAuthenticated && context.dbProfileState) {
      const username = context.dbProfileState.username;
      axios
        .get("/api/get/search-terms", {
          params: {
            email: username,
            searchStr: searchString,
            searchOption: selectedSearchOption,
          },
        })
        .then((res) => {
          setDisplayedAppsList(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }

  function resetSearchParams() {
    setSearchString("");
    setDateRangeStart("");
    setDateRangeEnd("");
  }

  function toggleDateSort() {
    //  const [newestFirst, setNewestFirst] = useState(true);
    setNewestFirst(!newestFirst);
    setDisplayedAppsList(displayedAppsList.reverse());
  }

  return (
    <div className="centeredPage">
      <h1>Search</h1>
      <form
        className="form-inline d-flex my-2 my-lg-0"
        onSubmit={(e) => {
          e.preventDefault();
          // serverSideSearch();
          clientSideSearch(
            searchString,
            selectedSearchOption,
            dateRangeStart,
            dateRangeEnd,
            allAppsList,
            setDisplayedAppsList
          );
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
          <Label>
            <u>From Date</u>
          </Label>
          <DatePicker
            id="example-datepicker1"
            value={dateRangeStart}
            onChange={(v, f) => {
              //v=value, f=formatted
              setDateRangeStart(v);
            }}
          />
        </FormGroup>
        &nbsp;
        <FormGroup className="text-center">
          <Label>
            <u>To Date</u>
          </Label>
          <DatePicker
            id="example-datepicker2"
            value={dateRangeEnd}
            onChange={(v, f) => {
              //v=value, f=formatted
              setDateRangeEnd(v);
            }}
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
        Reset All
      </button>

      <table className="table table-bordered text-center w-50 mt-4">
        <thead>
          <tr>
            <th>
              Date &nbsp;
              <button onClick={toggleDateSort}>
                <FontAwesomeIcon icon={faSort} />
              </button>
            </th>
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
                    <div>{`${date.getFullYear()}-${
                      date.getMonth() + 1
                    }-${date.getDate()}`}</div>
                  </td>
                  <td>
                    <div>{item.company_name}</div>
                  </td>
                  <td>
                    <div>{item.job_title}</div>
                  </td>
                  <td>
                    <Link to={`/appview/${item.app_id}`}>View/Edit</Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
