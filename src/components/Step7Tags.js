import React from "react";

export default function Step6({ setTags }) {
  return (
    <div className="step  w-md-75">
      <h3>Optional tags separated by commas</h3>
      <input
        id="jobTags"
        name="jobTags"
        className="form-control"
        type="string"
        title="Job tags"
        onChange={(e) => {
          setTags(e.target.value);
        }}
      />
    </div>
  );
}
