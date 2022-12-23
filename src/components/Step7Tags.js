export default function Step6({ setTags }) {
  return (
    <div className="step">
      <h3>Comma-Separated Tags</h3>
      <input
        id="jobTags"
        name="jobTags"
        className="form-control"
        type="string"
        title="Job tags"
        placeholder="i.e. indeed, remote, react"
        onChange={(e) => {
          setTags(e.target.value);
        }}
      />
    </div>
  );
}
