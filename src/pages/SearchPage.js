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
  const [allUserAppsList, setAllUserAppsList] = useState([]);
  const [displayedAppsList, setDisplayedAppsList] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [selectedSearchOption, setSelectedSearchOption] = useState("job_title");
  const [dateRangeStart, setDateRangeStart] = useState("");
  const [fmtRangeStart, setFmtRangeStart] = useState(undefined);
  const [dateRangeEnd, setDateRangeEnd] = useState("");
  const [fmtRangeEnd, setFmtRangeEnd] = useState(undefined);

  // Given an input string of n words, generate all possible consecutive-word substrings of the following word counts: n, n-1, n-2, ... 1.
  // For example, if given "front end web developer", return
  // ["front end web developer", "front end web", "front end", "front", "end Web Developer", "end web", "end", "web developer", "web", "developer"]
  // Each substring will be used to search for a record
  function getQuerySubSequences(string) {
    const words = string.split(" ");
    let subStrings = [];
    let rightSlice, leftSlice;
    for (let i = 0; i < words.length; i++) {
      rightSlice = words.slice(i);
      for (let j = rightSlice.length; j > 0; j--) {
        leftSlice = rightSlice.slice(0, j);
        subStrings.push(leftSlice);
      }
    }
    subStrings.sort((a, b) => {
      return b.length - a.length;
    });
    return subStrings.map((item) => {
      return item.join(" ");
    });
  }

  /* allUserAppsList will contain all of current user's records in this format: 
    [{app_id: 1, application_date: 'Sat Dec 24 2022 13:07:37 GMT-0800 (Pacific Standard Time)', company_name: 'xyz', job_title: 'abc', job_description: ''},
    {app_id: 2, application_date: 'Sat Dec 24 2022 13:07:37 GMT-0800 (Pacific Standard Time)', company_name: 'xyz', job_title: 'abc', job_description: ''},
    {app_id: 3, application_date: 'Sat Dec 24 2022 13:07:37 GMT-0800 (Pacific Standard Time)', company_name: 'xyz', job_title: 'abc', job_description: ''}] 
    Use the input values of searchString, selectedSearchOption, dateRangeStart, and dateRangeEnd to create a subset of these records that corresponds to 
    these input values. Set displayedAppsList equal to the resulting subset using setDisplayedAppsList. */
  function clientSideSearch(
    searchString,
    selectedSearchOption,
    dateRangeStart,
    dateRangeEnd,
    allUserAppsList,
    setDisplayedAppsList
  ) {
    if (searchString) {
      // const searchPhrases = getWordSubSequences(searchString);
      const startDate = dateRangeStart ? new Date(dateRangeStart) : new Date(0);
      const endDate = dateRangeEnd ? new Date(dateRangeEnd) : new Date();
      let results = [];
      // since we're looking for a 'contains' condition and not an equality, we need to examine each item rather than skipping like in binary search
      allUserAppsList.forEach((app) => {
        const appDate = new Date(app.application_date);
        if (
          app[selectedSearchOption].toLowerCase().includes(searchString.toLowerCase()) &&
          appDate >= startDate &&
          appDate <= endDate
        ) {
          results.push(app);
        }
      });
      setDisplayedAppsList(results);
    }
  }

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
          setAllUserAppsList(res.data);
          setDisplayedAppsList(res.data);
          // console.log(res.data);
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

  // Server side searching is needed should we not load all user application records into allUserAppsList when this component is mounted
  function serverSideSearch() {
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
    setSelectedSearchOption("job_title");
    setSearchString("");
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
            allUserAppsList,
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
            <u>From</u>
          </Label>
          <DatePicker
            id="example-datepicker1"
            value={dateRangeStart}
            onChange={(v, f) => handleSetRangeStart(v, f)}
          />
        </FormGroup>
        &nbsp;
        <FormGroup className="text-center">
          <Label>
            <u>To</u>
          </Label>
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
