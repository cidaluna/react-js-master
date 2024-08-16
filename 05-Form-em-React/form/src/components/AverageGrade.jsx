
const AverageGrade = ({ grades }) => {
    console.log(grades);
    if (grades.length === 0) {
        return <>No grades available.</>;
      }

    const computeAverageGrade = () => {
        let gradeSum = 0;
        let gradeCount = 0;
        grades.forEach((grade) => {
          gradeCount++;
          gradeSum += grade;
        });
        return gradeSum / gradeCount;
    };
    return (
    <div>
        <p>Grades values: {grades.map((grad) => (grad +", "))}</p>
        <p>Average Grade: {computeAverageGrade()}</p>
    </div>
  )
}

export default AverageGrade
