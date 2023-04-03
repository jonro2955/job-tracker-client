import React, { useEffect, useState } from "react";

export default function Step2({ setCompanyName, setJobTitle, data }) {
  const [companyDisp, setCompanyDisp] = useState(data.company);
  const [titleDisp, setTitleDisp] = useState(data.title);

  useEffect(() => {
    setCompanyDisp(data.company);
    setTitleDisp(data.title);
  }, [data]);

  return (
    <div
      className="step w-md-75"
      style={{ backgroundColor: "white", minHeight: "100px" }}
    >
      <div className="step2 d-flex justify-content-space-between justify-content-md-center gap-1 gap-md-5 required">
        <div className="d-flex flex-column">
          <label htmlFor="jobTitle">
            <h3>Company:</h3>
          </label>
          <input
            id="companyName"
            className="form-control w-100 text-success"
            name="companyName"
            type="text"
            title="Company Name"
            placeholder="Company"
            value={companyDisp}
            onChange={(e) => {
              setCompanyDisp(e.target.value);
              setCompanyName(e.target.value);
            }}
          />
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="jobTitle">
            <h3>Title:</h3>
          </label>
          <input
            id="jobTitle"
            className="form-control w-100 text-success"
            name="jobTitle"
            type="text"
            title="Job Title"
            placeholder="Job Title"
            value={titleDisp}
            onChange={(e) => {
              setTitleDisp(e.target.value);
              setJobTitle(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
