export default function Step6Tags({ tags, setTags }) {
  return (
    <div className="step w-50">
      <strong>Tags Separated By Commas (Optional)</strong>
      <input
        id="jobTags"
        name="jobTags"
        className="form-control"
        type="string"
        title="Job tags"
        // value={tags}
        onChange={(e) => {
          setTags(e.target.value);
          console.log(e.target.value.split(","));
        }}
      />
    </div>
  );
}
