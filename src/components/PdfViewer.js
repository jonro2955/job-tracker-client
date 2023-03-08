import React, { useEffect, useState } from "react";

export default function PdfViewer({ setCompanyName, setJobTitle, data }) {
  const [companyDisp, setCompanyDisp] = useState(data.company);
  const [titleDisp, setTitleDisp] = useState(data.title);

  useEffect(() => {
    setCompanyDisp(data.company);
    setTitleDisp(data.title);
  }, [data]);

  return (
    <div className="step w-md-75" style={{ backgroundColor: "white" }}>
      <div className="step2 d-flex justify-content-space-between justify-content-md-center gap-1 gap-md-5 required">
        <div className="d-flex flex-column">s</div>
      </div>
    </div>
  );
}
