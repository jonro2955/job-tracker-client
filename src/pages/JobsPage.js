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
import BtnModalCreateJob from "../components/BtnModalCreateJob";

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

  function resetSearchParams() {
    setSearchString("");
    setDateRangeStart("");
    setDateRangeEnd("");
  }

  function toggleDateSort() {
    setNewestFirst(!newestFirst);
    setDisplayedAppsList(displayedAppsList.reverse());
  }

  function setDisplayedList(searchString) {
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

  /*  
  // server side search will be used if we decide to load only some records at page load and make server requests later for ones we don't have
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
  */

  useEffect(() => {
    console.log(searchString);
    setDisplayedList(searchString);
  }, [searchString, dateRangeStart, dateRangeEnd]);

  // load all records on mount or context change
  useEffect(() => {
    loadAllRecords();
  }, [context]);

  return (
    <div className="centeredPage">
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col text-center">
            <h1>My Jobs</h1>
          </div>
          <div className="col">
            <BtnModalCreateJob />
          </div>
        </div>
      </div>

      {/* ********** Search Form Start ********** */}
      <form
        className="form-inline d-flex my-2 my-lg-0"
        onSubmit={(e) => {
          e.preventDefault();
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
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={() => {
            loadAllRecords();
            resetSearchParams();
          }}
        >
          Reset
        </button>
      </form>
      <SearchRadio
        selectedSearchOption={selectedSearchOption}
        setSelectedSearchOption={setSelectedSearchOption}
      />
      <div className="d-flex mt-3">
        <FormGroup className="d-flex align-items-center">
          <Label>From:&nbsp;</Label>
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
        <FormGroup className="d-flex align-items-center">
          <Label>To:&nbsp;</Label>
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
      {/* *********** Search Form End ********* */}

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
          {displayedAppsList.length > 0 ? (
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
                    <Link to={`/app/${item.app_id}`}>View/Edit</Link>
                  </td>
                </tr>
              );
            })
          ) : (
            <h1>Click "+ Create" to add new job applications.</h1>
          )}
        </tbody>
      </table>
    </div>
  );
}
