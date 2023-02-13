import DatePicker from "react-date-picker";

export default function Step7Date({ subDate, setSubDate }) {
  return (
    <div className="step w-md-75">
      <h3>Submit Date</h3>
      <DatePicker onChange={setSubDate} value={subDate} />
    </div>
  );
}
