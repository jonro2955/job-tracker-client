import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

export default function Step5CoverLetter({
  setCoverLetterFile,
  coverLetterDisplayFile,
  setCoverLetterDisplayFile,
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
        <h3>Cover Letter</h3>
        {coverLetterDisplayFile.name && (
          <button
            className="btn btn-outline-success"
            onClick={() => {
              setCoverLetterDisplayFile({});
            }}
          >
            x
          </button>
        )}
      </div>
      <Dropzone multiple={false} onDrop={setCoverLetterFile}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              {coverLetterDisplayFile.name ? (
                <div>
                  <span className="text-primary">
                    <strong>{coverLetterDisplayFile.name}</strong>{" "}
                    {coverLetterDisplayFile.size} bytes{" "}
                  </span>
                </div>
              ) : (
                <strong>Drag & drop or select a PDF</strong>
              )}
            </div>
            <Document
              file={coverLetterDisplayFile}
              onLoadSuccess={onDocumentLoadSuccess}
              loading=""
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>{numPages ? `Page ${numPages}` : ""}</p>
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
