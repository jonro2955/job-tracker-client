import React, { useState, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// https://codesandbox.io/s/react-quill-multiple-editor-gttvm?file=/src/App.js:351-359

// Custom icon needed as the default icon doesn't always work
const CustomUndoIcon = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
    <path className="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9" />
  </svg>
);

// Custom icon needed as the default icon doesn't always work
const CustomRedoIcon = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
    <path className="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5" />
  </svg>
);

// Custom undo and redo functions for Custom Toolbar
function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}

export default function Step3({ id, name, value, onChange }) {
  const quillRef = React.useRef();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewContent, setPreviewContent] = useState("");

  const CustomToolbar = () => (
    <div id={`toolbar-${id}`}>
      <span className="ql-formats">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
      </span>
      <span className="ql-formats">
        <select className="ql-align" />
        <select className="ql-color" />
        <select className="ql-background" />
      </span>
      <span className="ql-formats">
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <button className="ql-indent" value="-1" />
        <button className="ql-indent" value="+1" />
      </span>
      <span className="ql-formats">
        <button className="ql-undo">
          <CustomUndoIcon />
        </button>
        <button className="ql-redo">
          <CustomRedoIcon />
        </button>
      </span>
      <span className="ql-formats">
        <select className="ql-font" defaultValue="arial">
          <option value="arial">Arial</option>
          <option value="comic-sans">Comic Sans</option>
          <option value="courier-new">Courier New</option>
          <option value="georgia">Georgia</option>
          <option value="helvetica">Helvetica</option>
          <option value="lucida">Lucida</option>
        </select>
        <select className="ql-size" defaultValue={""} onChange={(e) => e.persist()}>
          {["small", "false", "large", "huge"].map((value, i) => (
            <option key={value} value={value} />
          ))}
        </select>
        <select className="ql-header" defaultValue={""} onChange={(e) => e.persist()}>
          {["1", "2", "3", "4", "5", "6", "false"].map((value) => (
            <option key={value} value={value} />
          ))}
        </select>
      </span>
      <span className="ql-formats">
        <button className="ql-link" />
        <button className="ql-image" />
        <button className="ql-video" />
      </span>
      <span className="ql-formats">
        <button className="ql-code-block" />
        <button className="ql-clean" />
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
      <h3 id="step3Heading">Job posting description</h3>
      <div className="text-editor">
        {CustomToolbar(id)}
        <ReactQuill
          ref={quillRef}
          style={{ backgroundColor: "white" }}
          theme="snow"
          defaultValue={value}
          onChange={onChange}
          modules={quillModules}
          formats={quillFormats}
        />
        {previewOpen ? <div dangerouslySetInnerHTML={{ __html: previewContent }} /> : ""}
      </div>
    </div>
  );
}
