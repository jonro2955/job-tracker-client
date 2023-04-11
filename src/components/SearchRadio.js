import React from "react";

export default function SearchRadio({ selectedSearchOption, setSelectedSearchOption }) {
  return (
    <form className="d-flex mt-2">
      <div className="form-check">
        <label>
          <input
            type="radio"
            name="react-tips"
            value="job_title"
            checked={selectedSearchOption === "job_title"}
            onClick={() => {
              setSelectedSearchOption("job_title");
            }}
            className="form-check-input"
            readOnly
          />
          Job Title
        </label>
      </div>
      &nbsp;
      <div className="form-check">
        <label>
          <input
            type="radio"
            name="react-tips"
            value="company_name"
            checked={selectedSearchOption === "company_name"}
            onClick={() => {
              setSelectedSearchOption("company_name");
            }}
            className="form-check-input"
            readOnly
          />
          Company
        </label>
      </div>
      &nbsp;
      <div className="form-check">
        <label>
          <input
            type="radio"
            name="react-tips"
            value="job_description"
            checked={selectedSearchOption === "job_description"}
            onClick={() => {
              setSelectedSearchOption("job_description");
            }}
            className="form-check-input"
            readOnly
          />
          Description
        </label>
      </div>
      &nbsp;
      <div className="form-check">
        <label>
          <input
            type="radio"
            name="react-tips"
            value="job_description"
            checked={selectedSearchOption === "career_name"}
            onClick={() => {
              setSelectedSearchOption("career_name");
            }}
            className="form-check-input"
            readOnly
          />
          Career
        </label>
      </div>
    </form>
  );
}
