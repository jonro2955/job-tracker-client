import React, { useState } from "react";
import { Tooltip } from "reactstrap";
import { BsInfoCircle } from "react-icons/bs";

export default function StepSave({ handleSaveApp }) {
  const [toolTipOn, setToolTipOn] = useState(false);

  return (
    <div className="step ">
      <h3>
        After submitting your application online, click Save.
        <span>
          <BsInfoCircle id="saveTipBtn" />
          <Tooltip
            placement="top"
            autohide={false}
            isOpen={toolTipOn}
            target="saveTipBtn"
            toggle={() => {
              setToolTipOn(!toolTipOn);
            }}
          >
            After saving this application, you can later access the saved application data to guide your
            interview preparation and make further edits like adding interview dates, pre-interview
            notes, interview Q&A prep, post-interview notes, negotiation details, ideas for
            improvement and more. You can keep all of your records into the future to help
            improve your job search skills.
          </Tooltip>
        </span>
      </h3>
      <button className="btn btn-success p-2" onClick={handleSaveApp}>
        Save
      </button>
    </div>
  );
}
