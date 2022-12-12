import React from "react";
import Dropzone from "react-dropzone";
// https://react-dropzone.js.org/#section-examples

export default function Step5({ setResumeFile, resumeDisplayFile, setResumeDisplayFile }) {
  return (
    <div className="step w-md-75">
      <h3>Resume</h3>
      <Dropzone multiple={false} onDrop={setResumeFile}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <h5>Drag & drop files, or click to select</h5>
            </div>
            <div>
              {resumeDisplayFile.name && (
                <div>
                  <span className="text-primary">
                    <strong>{resumeDisplayFile.name}</strong> - {resumeDisplayFile.size} bytes
                    &nbsp;
                    <button
                      className="btn btn-outline-success"
                      onClick={() => {
                        setResumeDisplayFile({});
                      }}
                    >
                      x
                    </button>
                  </span>
                </div>
              )}
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
}
