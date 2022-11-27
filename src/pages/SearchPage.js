import React from "react";

const Search = () => {
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

      <p>
        If user is logged out, load a bunch of sample job applications here so that guests can use
        the search feature
      </p>
    </div>
  );
};
export default Search;
