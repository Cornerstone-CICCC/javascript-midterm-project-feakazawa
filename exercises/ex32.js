// Exercise 32: Active students by campus
//
// Count active students by campus.
// Each item should include: campus, studentCount.
// Sort by campus ascending.
//
// Requirement:
// Provide a Lodash solution.

const _ = require("lodash");
const students = require("../data/students.json");

const lodashSolution = _.chain(students)
  .filter((stud) => stud.status === "active")
  .groupBy("campus")
  .map((student, campusName) => ({
    campus: campusName,
    studentCount: _.size(student),
  }))
  .orderBy("campus", "asc")
  .value();

console.log(lodashSolution);

/*
Expected output:
[
  { campus: 'Montreal', studentCount: 9 },
  { campus: 'Toronto', studentCount: 10 },
  { campus: 'Vancouver', studentCount: 12 }
]
*/
