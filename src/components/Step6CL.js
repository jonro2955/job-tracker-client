import React from "react";
import Dropzone from "react-dropzone";

export default function Step6({ setCoverLetterFile, coverLetterDisplayFile, setCoverLetterDisplayFile }) {
  return (
    <div className="step w-md-75">
      <h3>Cover Letter</h3>
      <Dropzone multiple={false} onDrop={setCoverLetterFile}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <h5>Drag & drop files, or click to select</h5>
            </div>
            <div>
              {coverLetterDisplayFile.name && (
                <div>
                  <span className="text-primary">
                    <strong>{coverLetterDisplayFile.name}</strong> - {coverLetterDisplayFile.size} bytes
                    &nbsp;
                    <button
                      className="btn btn-outline-success"
                      onClick={() => {
                        setCoverLetterDisplayFile({});
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
