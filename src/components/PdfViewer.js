import React, { useState, useMemo } from "react";
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

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(pageNumber);
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

  const pdf = (pageNum) => (
    <div className="pdfViewer">
      <Document
        file={{ data: byteData }}
        onLoadSuccess={onDocumentLoadSuccess}
        loading=""
      >
        <Page pageNumber={pageNum} />
      </Document>
      {numPages > 1 && (
        <section>
          <p>
            Page {pageNum} of {numPages}
          </p>
          <button type="button" disabled={pageNum <= 1} onClick={previousPage}>
            Previous
          </button>
          <button
            type="button"
            disabled={pageNum >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </section>
      )}
    </div>
  );

  // Memoize the documents with useMemo
  const pdfDocument = useMemo(() => pdf(pageNumber), [numPages, pageNumber]);

  return (
    <>
      <h3 className="text-center">{type}</h3>
      {pdfDocument}
    </>
  );
}
