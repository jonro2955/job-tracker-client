import React from "react";
import Context from "../utils/context";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SearchPage() {
  const context = useContext(Context);
  const [appsList, setAppsList] = useState([]);

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
                    <Link to="/appviewer">Go to application</Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
