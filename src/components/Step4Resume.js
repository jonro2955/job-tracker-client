import React from "react";
import Dropzone from "react-dropzone";
// https://react-dropzone.js.org/#section-examples

export default function Step4Resume({ setResumeFile, resumeDisplayFile, setResumeDisplayFile }) {
  return (
    <div className="step w-md-75">
      <h3>Resume</h3>
      <Dropzone multiple={false} onDrop={setResumeFile}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              {resumeDisplayFile.name ? (
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
              ) : (
                <strong>Drag & drop file, or click to select</strong>
              )}
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
}
