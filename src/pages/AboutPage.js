import React, { useState } from "react";
import { Tooltip } from "reactstrap";
import { BsInfoCircle } from "react-icons/bs";

const Search = () => {
  const [toolTipOn1, setToolTipOn1] = useState(false);

  return (
    <div className="centeredPage">
      <h1>About</h1>
      <p>About page</p>
      <h3>
        <span>
          <BsInfoCircle id="tipBtn" />
          <Tooltip
            placement="top"
            autohide={false}
            isOpen={toolTipOn1}
            target="tipBtn"
            toggle={() => {
              setToolTipOn1(!toolTipOn1);
            }}
          >
            This webpage is inteneded to be used while you are applying for a job on a site like
            Indeed or a company HR site. Fill out this form as you apply, then click the save button
            after you've submitted your application.
          </Tooltip>
        </span>
      </h3>
    </div>
  );
};
export default Search;
