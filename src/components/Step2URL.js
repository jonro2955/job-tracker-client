import React from "react";

export default function Step1UrlDesc({ postingURL, setPostingURL }) {
  return (
    <div className="step d-flex flex-column">
      <h3 id="step1Heading">Posting URL</h3>
      <input
        id="jobPostingURL"
        name="jobPostingURL"
        className="form-control"
        type="url"
        value={postingURL}
        title="Job Posting URL"
        onChange={(e) => {
          setPostingURL(e.target.value);
        }}
      />
    </div>
  );
}
