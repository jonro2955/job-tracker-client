import React from "react";
import { DatePicker } from "reactstrap-date-picker";

export default function Step7Date({ subDate, setSubDate }) {
  return (
    <div className="step w-md-75">
      <h3>Submit Date</h3>
      <DatePicker
        id="subDate"
        value={subDate}
        onChange={(v, f) => {
          // v=value, f=formatted
          setSubDate(String(new Date(v)));
        }}
        showClearButton={false}
      />
    </div>
  );
}
