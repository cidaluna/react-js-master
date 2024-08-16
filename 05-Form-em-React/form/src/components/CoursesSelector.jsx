
const OPTIONS = ["Maths", "Literature", "History"];

export function CoursesSelector() {
  return (
    <select>
      {OPTIONS.map((opt) => (
        <option key={opt}>
            {opt}
        </option>
      ))}
    </select>
  )
}
