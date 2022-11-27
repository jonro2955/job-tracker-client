import React from "react";
import FilesDropper from "../components/FilesDropper";

export default function Step5({ handleFilesDrop, files, setFiles }) {
  return (
    <div className="step w-md-75">
      <h3>Documents used in this application, such as your resume and cover letter</h3>
      <FilesDropper handleFilesDrop={handleFilesDrop} files={files} setFiles={setFiles} />
    </div>
  );
}
