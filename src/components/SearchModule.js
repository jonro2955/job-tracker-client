import React from "react";
import SearchRadio from "./SearchRadio";
import { FormGroup, Label } from "reactstrap";
import DatePicker from "react-date-picker";

export default function SearchModule({
  searchString,
  setSearchString,
  loadAllRecords,
  resetSearchParams,
  selectedSearchOption,
  setSelectedSearchOption,
  dateRangeStart,
  setDateRangeStart,
  dateRangeEnd,
  setDateRangeEnd,
}) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center pt-3 px-2">
      <form
        className="form-inline d-flex justify-content-center align-items-center my-2 my-lg-0"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="justify-content-center align-items-center">
          Search:&nbsp;
        </div>
        <input
          className="form-control mr-sm-2"
          id="searchInput"
          type="search"
          placeholder="keywords"
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
          <DatePicker onChange={setDateRangeStart} value={dateRangeStart} />
        </FormGroup>
        &nbsp;
        <FormGroup className="d-flex align-items-center">
          <Label>To:&nbsp;</Label>
          <DatePicker onChange={setDateRangeEnd} value={dateRangeEnd} />
        </FormGroup>
      </div>
    </div>
  );
}
