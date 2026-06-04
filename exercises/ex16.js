// Exercise 16: Vancouver web students
//
// Find active students from Vancouver in Web-0526.
// Return: id, name, attendance, skillCount.
// Sort by attendance descending.
//
// Requirement:
// Provide a Lodash solution.

const _ = require("lodash");
const students = require("../data/students.json");

const lodashSolution = _.chain(students)
  .filter(
    (student) =>
      student.status === "active" &&
      student.campus === "Vancouver" &&
      student.cohort === "Web-0526",
  )
  .map((student) => ({
    ...student,
    skillCount: _.size(student.skills),
  }))
  .map((student) => _.pick(student, ["id", "name", "attendance", "skillCount"]))
  .orderBy("attendance", "desc")
  .value();

console.log(lodashSolution);

/*
Expected output:
[
  { id: 'S034', name: 'Sebastian Campbell', attendance: 98, skillCount: 4 },
  { id: 'S001', name: 'Ava Chen', attendance: 96, skillCount: 3 },
  { id: 'S022', name: 'Daniel Wright', attendance: 94, skillCount: 3 },
  { id: 'S010', name: 'Mason Davis', attendance: 89, skillCount: 2 },
  { id: 'S002', name: 'Liam Park', attendance: 82, skillCount: 2 },
  { id: 'S007', name: 'Sophia Brown', attendance: 76, skillCount: 2 }
]
*/
