import propTypes from "prop-types";
const Student = (props) => {
  return (
    <div className="student">
      <p>Name: {props.name} </p>
      <p>Age: {props.age}さい</p>
      <p>
        Student:
        {props.isStudent ? "Yes I am a student" : "No I am a Developer"}
      </p>
    </div>
  );
};

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isStudent: propTypes.bool,
};
Student.defaultProps = {
    name: 'あのYushing',
    age: 89,
    isStudent: true,
}

export default Student;
