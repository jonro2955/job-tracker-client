import React from "react";
import { Button } from "reactstrap";
import { FiExternalLink } from 'react-icons/fi';


export default function Step1UrlDesc({ postingURL, setPostingURL }) {
  return (
    <div className="step d-flex flex-column">
      <h3 id="step1Heading">Posting URL</h3>
      <input
        style={{ textAlign: "center" }}
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
      <Button
        color="primary"
        disabled={postingURL==""}
        onClick={() => {
          window.open(postingURL, '_blank');
        }}
      >
        Open {<FiExternalLink />}
      </Button>
    </div>
  );
}
