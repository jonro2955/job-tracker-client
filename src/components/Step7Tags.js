export default function Step6Tags({ setTags, value }) {
  return (
    <div className="step">
      <strong>Tags Separated By Commas</strong>
      <input
        id="jobTags"
        name="jobTags"
        className="form-control"
        type="string"
        title="JobTags"
        value={value}
        onChange={(e) => {
          setTags(e.target.value);
        }}
      />
    </div>
  );
}
