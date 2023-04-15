import React from "react";
import Context from "../utils/context";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import BtnModalAddJob from "../components/BtnModalAddJob";
import SearchModule from "../components/SearchModule";

export default function SearchPage() {
  const context = useContext(Context);
  const [allAppsList, setAllAppsList] = useState([]);
  const [displayedAppsList, setDisplayedAppsList] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [selectedSearchOption, setSelectedSearchOption] = useState("job_title");
  const [dateRangeStart, setDateRangeStart] = useState("");
  const [dateRangeEnd, setDateRangeEnd] = useState("");
  const [dateSortLatest, setDateSortLatest] = useState(true);
  const [companySortAscending, setCompanySortAscending] = useState(true);
  const [titleSortAscending, setTitleSortAscending] = useState(true);
  const [careerSortAscending, setCareerSortAscending] = useState(true);
  const [dbConnected, setDbConnected] = useState(false);

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
          console.log(res.data);
          setAllAppsList(res.data);
          setDisplayedAppsList(res.data);
          setDbConnected(true);
        })
        .catch((err) => console.log(err));
    }
  }

  function resetSearchParams() {
    setSearchString("");
    setDateRangeStart("");
    setDateRangeEnd("");
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
    setDisplayedList(searchString);
  }, [searchString, dateRangeStart, dateRangeEnd]);

  // load all records on mount or context change
  useEffect(() => {
    loadAllRecords();
  }, [context]);

  function toggleDateSort() {
    let temp = [...displayedAppsList];
    temp.sort(function (a, b) {
      let dateA = new Date(a.application_date);
      let dateB = new Date(b.application_date);
      if (dateSortLatest) {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
    setDisplayedAppsList(temp);
    setDateSortLatest(!dateSortLatest);
  }

  function toggleTitleSort() {
    let temp = [...displayedAppsList];
    temp.sort(function (a, b) {
      let stringA = a.job_title.toLowerCase();
      let stringB = b.job_title.toLowerCase();
      if (titleSortAscending) {
        if (stringA > stringB) {
          return 1;
        } else {
          return -1;
        }
      } else {
        if (stringA < stringB) {
          return 1;
        } else {
          return -1;
        }
      }
    });
    setDisplayedAppsList(temp);
    setTitleSortAscending(!titleSortAscending);
  }

  function toggleCompanySort() {
    let temp = [...displayedAppsList];
    temp.sort(function (a, b) {
      let stringA = a.company_name.toLowerCase();
      let stringB = b.company_name.toLowerCase();
      if (companySortAscending) {
        if (stringA > stringB) {
          return 1;
        } else {
          return -1;
        }
      } else {
        if (stringA < stringB) {
          return 1;
        } else {
          return -1;
        }
      }
    });
    setDisplayedAppsList(temp);
    setCompanySortAscending(!companySortAscending);
  }

  function toggleCareerSort() {
    let temp = [...displayedAppsList];
    temp.sort(function (a, b) {
      let stringA = a.career_name.toLowerCase();
      let stringB = b.career_name.toLowerCase();
      if (careerSortAscending) {
        if (stringA > stringB) {
          return 1;
        } else {
          return -1;
        }
      } else {
        if (stringA < stringB) {
          return 1;
        } else {
          return -1;
        }
      }
    });
    setDisplayedAppsList(temp);
    setCareerSortAscending(!careerSortAscending);
  }

  return (
    <div className="centeredPage">
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col text-center">
            <h1>My Jobs</h1>
          </div>
          <div className="col d-flex justify-content-start">
            <BtnModalAddJob allAppsList={allAppsList} />
          </div>
        </div>
      </div>
      <SearchModule
        searchString={searchString}
        setSearchString={setSearchString}
        loadAllRecords={loadAllRecords}
        resetSearchParams={resetSearchParams}
        selectedSearchOption={selectedSearchOption}
        setSelectedSearchOption={setSelectedSearchOption}
        dateRangeStart={dateRangeStart}
        setDateRangeStart={setDateRangeStart}
        dateRangeEnd={dateRangeEnd}
        setDateRangeEnd={setDateRangeEnd}
      />
      <table className="table table-bordered text-center w-50 mt-4">
        <thead>
          <tr>
            <th>
              Date &nbsp;
              <button onClick={toggleDateSort}>
                <FontAwesomeIcon icon={faSort} />
              </button>
            </th>
            <th>
              Job Title&nbsp;
              <button onClick={toggleTitleSort}>
                <FontAwesomeIcon icon={faSort} />
              </button>
            </th>
            <th>
              Company&nbsp;
              <button onClick={toggleCompanySort}>
                <FontAwesomeIcon icon={faSort} />
              </button>
            </th>
            <th>
              Career&nbsp;
              <button onClick={toggleCareerSort}>
                <FontAwesomeIcon icon={faSort} />
              </button>
            </th>
            <th>Application</th>
            <th>
              Elapsed&nbsp;
              <button onClick={toggleDateSort}>
                <FontAwesomeIcon icon={faSort} />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {displayedAppsList.length > 0 &&
            displayedAppsList.map((item, i) => {
              let appDate = new Date(item.application_date);
              let currDate = new Date();
              let elapsedDays =
                Math.ceil((currDate - appDate) / (1000 * 3600 * 24)) - 1;
              return (
                <tr key={i}>
                  <td>
                    <div>{`${appDate.getFullYear()}-${
                      appDate.getMonth() + 1
                    }-${appDate.getDate()}`}</div>
                  </td>
                  <td>
                    <div>{item.job_title}</div>
                  </td>
                  <td>
                    <div>{item.company_name}</div>
                  </td>
                  <td>
                    <div>{item.career_name}</div>
                  </td>
                  <td>
                    <Link to={`/app/${item.app_id}`}>View/Edit</Link>
                  </td>
                  <td>
                    <div>{`${elapsedDays} days`}</div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {allAppsList.length == 0 && (
        <h2>
          {dbConnected ? "There are no saved jobs" : "Database not connected"}
        </h2>
      )}
      <BtnModalAddJob allAppsList={allAppsList} />
    </div>
  );
}
