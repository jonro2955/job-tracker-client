import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// https://react-dropzone.js.org/#section-examples
// https://github.com/wojtekmaj/react-pdf
// https://github.com/wojtekmaj/react-pdf/wiki/Recipes
// https://github.com/wojtekmaj/react-pdf/wiki/Frequently-Asked-Questions#how-do-i-load-a-pdf-from-base64

export default function Step4Resume({
  setResumeFile,
  resumeDisplayFile,
  setResumeDisplayFile,
}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className="step w-md-75">
      <div className="d-flex align-items-center justify-content-center">
        <h3>Resume</h3>
        {resumeDisplayFile.name && (
          <button
            className="btn btn-outline-success"
            onClick={() => {
              setResumeDisplayFile({});
            }}
          >
            x
          </button>
        )}
      </div>
      <Dropzone multiple={false} onDrop={setResumeFile}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              {resumeDisplayFile.name ? (
                <div>
                  <span className="text-primary">
                    <strong>{resumeDisplayFile.name}</strong>{" "}
                    {resumeDisplayFile.size} bytes{" "}
                  </span>
                </div>
              ) : (
                <strong>Drag & drop or select a PDF</strong>
              )}
            </div>
            <Document
              file={resumeDisplayFile}
              onLoadSuccess={onDocumentLoadSuccess}
              loading=""
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              {numPages ? `Page ${numPages}` : ""}
            </p>
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </button>
          </section>
        )}
      </Dropzone>
    </div>
  );
}
