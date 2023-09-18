/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/
const person = {
  name: "Ahmed",
  age: 31,
  city: "Kuwait",
};

/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
person["email"] = "ahmed201130030@gmail.com";

/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/
const hasKey = (argumentOne, argumentTwo) => {
  if (argumentOne[argumentTwo]) {
    return true;
  } else {
    return false;
  }
};
console.log(hasKey(person, ["city"]));

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
//console.log(movies[1].title);
/******************************
	Q5) Create a function that accepts an array of objects called 'movies' 
and iterates through it to log the titles of all the movies.
********************************/
const moviesTitle = movies.forEach((x) => {
  console.log(x.title);
});
moviesTitle;

/******************************
	Q6) Create a function that accepts an array of objects called 'movies' 
and iterates through it to count how many movies were released in the year 1994.
********************************/
const countMoviesIn1994 = (x) => x.year === 1994;
const countmo = (x) => movies.length;
const ddd = movies.filter(countMoviesIn1994).length;
console.log(ddd);

/******************************
	Q7) Write a function that updates the genre of the movie "The Dark Knight"
 to "Action/Drama" and returns the modified array of movies.
********************************/
const updateMovies = (x) => {
  if (x.title == "The Dark Knight") {
    x.genre = "Action/Drama";
  }
  return x;
};
const newList = movies.map(updateMovies);
console.log(newList);
