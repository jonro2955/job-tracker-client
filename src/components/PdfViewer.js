import React, { useContext, useEffect, useState, useMemo } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

/* https://stackoverflow.com/questions/74407162/memoize-api-response 

PdfViewer: if there is no pdf file stored, do not show the "Show/Hide" button.
Instead, indicate that there is no pdf and show a button that says "Add", which
when pressed, will show the adder. 
If there is a pdf file, when the "show" button is pressed, show the pdf adder
below the pdf.
*/

export default function PdfViewer({ byteData, type }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [show] = useState(true);

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

  // Memoize the documents with useMemo
  const pdfDocument = useMemo(
    () => (
      <div className="pdfViewer">
        <Document
          file={{ data: byteData }}
          onLoadSuccess={onDocumentLoadSuccess}
          loading=""
        >
          <Page pageNumber={pageNumber} />
        </Document>
        {numPages > 1 && (
          <>
            <p>
              Page {pageNumber} of {numPages}
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
          </>
        )}
      </div>
    ),
    [show]
  );

  return (
    <>
      <h3 className="text-center">{type}</h3>
      {pdfDocument}
    </>
  );
}
