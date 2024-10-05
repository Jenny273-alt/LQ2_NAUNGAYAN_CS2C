let name = prompt("Enter your name:"); //get user's name
let course = prompt("Enter your course (BSCS, BSM, BAEL):"); //get user's course
let classRole = prompt("Enter your class role (Officer, Student, Teacher):"); //get user's class role

if (course === "BSCS" || course === "BSM" || course === "BAEL") {
  if (classRole === "Officer" || classRole === "Student" || classRole === "Teacher") {
    alert(`Welcome, ${classRole} ${name} from ${course}!`); //display a welcome message
  } else {
    alert(`Welcome, ${name} from ${course}!`);
  }
} else {
  alert("Invalid Course"); //display if invalid course
}