import React from "react";
import Dropzone from "react-dropzone";

export default function Step5CoverLetter({
  setCoverLetterFile,
  coverLetterDisplayFile,
  setCoverLetterDisplayFile,
}) {
  return (
    <div className="step w-md-75">
      <h3>Cover Letter</h3>
      <Dropzone multiple={false} onDrop={setCoverLetterFile}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              {coverLetterDisplayFile.name ? (
                <div>
                  <span className="text-primary">
                    <strong>{coverLetterDisplayFile.name}</strong> - {coverLetterDisplayFile.size}{" "}
                    bytes &nbsp;
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
