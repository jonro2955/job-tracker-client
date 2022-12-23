import React from "react";

export default function Step1({ setPostingURL }) {
  return (
    <div className="step">
      <h3 id="step1Heading">Posting URL</h3>
      <input
        id="jobPostingURL"
        name="jobPostingURL"
        className="form-control"
        type="url"
        placeholder="URL"
        title="Job Posting URL"
        onChange={(e) => {
          setPostingURL(e.target.value);
        }}
      />
    </div>
  );
}
