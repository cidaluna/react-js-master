
const OPTIONS = ["Maths", "Literature", "History"];

const CoursesSelector = () => {
  return (
    <select>
      {OPTIONS.map((opt) => (
        <option key={opt}>
            {opt}
        </option>
      ))}
    </select>
  );
}

export default CoursesSelector