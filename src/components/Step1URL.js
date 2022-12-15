import React from "react";

export default function Step1({ setPostingURL }) {
  return (
    <div className="step w-50">
      <h3 id="step1Heading">Job posting URL</h3>
      <input
        id="jobPostingURL"
        name="jobPostingURL"
        className="form-control"
        type="url"
        title="Job Posting URL"
        onChange={(e) => {
          setPostingURL(e.target.value);
        }}
      />
    </div>
  );
}
