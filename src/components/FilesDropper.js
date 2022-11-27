// https://react-dropzone.js.org/#section-examples
import Dropzone from "react-dropzone";
import React from "react";

export default function FilesDropper({ handleFilesDrop, files, setFiles }) {
  function deleteFile(i) {
    let arr = [...files];
    arr.splice(i, 1);
    setFiles(arr);
  }

  return (
    <Dropzone multiple={true} onDrop={handleFilesDrop}>
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
  );
}
