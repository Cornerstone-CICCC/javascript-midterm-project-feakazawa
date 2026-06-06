// Exercise 25: Best movie from each decade
//
// Group movies into decades using releaseYear.
// Examples: 2014 becomes "2010s", 2022 becomes "2020s".
// For each decade, return the highest-rated movie.
// Each item should include: decade, title, releaseYear, rating.
// Sort by decade alphabetically.
//
// Requirement:
// Provide a Lodash solution.

const _ = require("lodash");
const movies = require("../data/movies.json");

const lodashSolution = _.chain(movies)
  .map((movie) => ({
    ...movie,
    decade: movie.releaseYear >= 2020 ? "2020s" : "2010s",
  }))
  .groupBy("decade")
  .map((movie) => _.maxBy(movie, "rating"))
  .map((movie) => ({
    decade: movie.decade,
    title: movie.title,
    releaseYear: movie.releaseYear,
    rating: movie.rating,
  }))
  .orderBy("decade", "asc")
  .value();

console.log(lodashSolution);

/*
Expected output:
[
  { decade: '2010s', title: 'North Harbor', releaseYear: 2018, rating: 8.1 },
  { decade: '2020s', title: 'Solar Drift', releaseYear: 2022, rating: 8.4 }
]
*/
