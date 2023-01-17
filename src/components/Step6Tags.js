export default function Step6Tags({ setTags }) {
  return (
    <div className="step w-50">
      <strong>Tags Separated By Commas (Optional)</strong>
      <input
        id="jobTags"
        name="jobTags"
        className="form-control"
        type="string"
        title="Job tags"
        onChange={(e) => {
          setTags(e.target.value);
        }}
      />
    </div>
  );
}
