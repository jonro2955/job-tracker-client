import React from "react";
import Dropzone from "react-dropzone";
// https://react-dropzone.js.org/#section-examples

export default function Step5({ handleSetFilesState, files, setFiles }) {
  function deleteFile(i) {
    let arr = [...files];
    arr.splice(i, 1);
    setFiles(arr);
  }

  return (
    <div className="step w-md-75">
      <h3>Documents used in this application, such as your resume and cover letter</h3>
      <Dropzone multiple={true} onDrop={handleSetFilesState}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <h5>Drag & drop files, or click to select</h5>
            </div>
            <div>
              {files.map((file, i) => (
                <div key={i}>
                  <span className="text-primary">
                    <strong>{file.name}</strong> - {file.size} bytes &nbsp;
                    <button
                      className="btn btn-outline-success"
                      onClick={() => {
                        deleteFile(i);
                      }}
                    >
                      x
                    </button>
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
}
