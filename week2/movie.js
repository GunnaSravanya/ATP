/*ASSIGNMENT 4: 
------------
Movie Streaming Platform
You are working on a movie recommendation system.
Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return: "Inception (8.8)"
    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"*/
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 },
];
//filter
let sci_fi_movies = movies.filter((obj) => obj.genre === "Sci-Fi");
console.log("details of Science fictional movies:");
console.log(sci_fi_movies);
//map
let inception_movie = movies.map((obj) => {
  if (obj.title === "Inception") {
    return obj.title + " " + "(" + obj.rating + ")";
  }
});
console.log(inception_movie);
//reduce
let avg_rating = movies.reduce(
  (acc, obj) => (acc + obj.rating) / movies.length,
  0,
);
console.log("Average rating:");
console.log(avg_rating);
//find
let movie_joker = movies.find((obj) => obj.title === "Joker");
console.log("details of movie joker;");
console.log(movie_joker);
//find index
let avengers_index = movies.findIndex((obj) => obj.title === "Avengers");
console.log("index of movie Avengers");
console.log(avengers_index);
