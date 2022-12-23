import React, { useState, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}

export default function Step4({ id, value, onChange }) {
  const quillRef = React.useRef();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewContent, setPreviewContent] = useState("");

  const CustomToolbar = () => (
    <div id={`toolbar-${id}`}>
      <span className="ql-formats">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        {/* <button className="ql-strike" /> */}
      </span>
      <span className="ql-formats">
        <select className="ql-align" />
        {/* <select className="ql-color" /> */}
        {/* <select className="ql-background" /> */}
      </span>
      <span className="ql-formats">
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <select className="ql-size" defaultValue={""} onChange={(e) => e.persist()}>
          {["false", "small", "large", "huge"].map((value, i) => (
            <option key={value} value={value} />
          ))}
        </select>

        {/* <button className="ql-indent" value="-1" /> */}
        {/* <button className="ql-indent" value="+1" /> */}
      </span>
      {/* <span className="ql-formats">
        <button className="ql-undo">
          <CustomUndoIcon />
        </button>
        <button className="ql-redo">
          <CustomRedoIcon />
        </button>
      </span> */}
      {/* <span className="ql-formats">
        <button className="ql-code-block" />
        <button className="ql-clean" />
      </span> */}
      <span className="ql-formats">
        {/* <select className="ql-header" defaultValue={""} onChange={(e) => e.persist()}>
          {["1", "2", "3", "4", "5", "6", "false"].map((value) => (
            <option key={value} value={value} />
          ))}
        </select> */}
        {/* <select className="ql-font" defaultValue="arial">
          <option value="arial">Arial</option>
          <option value="comic-sans">Comic Sans</option>
          <option value="courier-new">Courier New</option>
          <option value="georgia">Georgia</option>
          <option value="helvetica">Helvetica</option>
          <option value="lucida">Lucida</option>
        </select> */}
      </span>
      <span className="ql-formats">
        <button className="ql-link" />
        {/* <button className="ql-image" /> */}
        {/* <button className="ql-video" /> */}
      </span>
    </div>
  );

  const quillModules = useMemo(() => {
    return {
      toolbar: {
        container: `#toolbar-${id}`,
        handlers: {
          preview: function (value) {
            const html = this.quill.root.innerHTML;
            setPreviewContent(html);
            setPreviewOpen(!previewOpen);
          },
          undo: undoChange,
          redo: redoChange,
        },
      },
    };
  }, [id, previewOpen]);

  const quillFormats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "script",
    "size",
    "header",
    "list",
    "indent",
    "link",
    "color",
    "background",
    "align",
    "font",
    "blockquote",
    "bullet",
    "image",
    "code-block",
  ];

  return (
    <div className="step">
      <h3 id="step4Heading">Application Notes</h3>
      <div className="text-editor">
        {CustomToolbar(id)}
        <ReactQuill
          ref={quillRef}
          style={{
            backgroundColor: "white",
            minHeight: "150px",
            maxHeight: "770px",
            overflowY: "auto",
          }}
          theme="snow"
          // defaultValue={value}
          value={value}
          placeholder="Enter your notes in here"
          onChange={onChange}
          modules={quillModules}
          formats={quillFormats}
        />
        {previewOpen ? <div dangerouslySetInnerHTML={{ __html: previewContent }} /> : ""}
      </div>
    </div>
  );
}
