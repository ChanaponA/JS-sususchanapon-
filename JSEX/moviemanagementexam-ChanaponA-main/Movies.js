class Movies {
  constructor() {
      this.movies = [];
  }

  getAllMovies() {
      return this.movies;
  }

  addMovie(title, director, year, genre) {
      // Check if any required details are missing
      if (!title || !director || !year || !genre) {
          return undefined;
      }

      // Check for duplicate movie
      const existingMovie = this.movies.find(
          movie => movie.title.toLowerCase() === title.toLowerCase() &&
                   movie.director.toLowerCase() === director.toLowerCase()
      );

      if (existingMovie) {
          return undefined;
      }

      // Add the new movie
      const newMovie = { title, director, year, genre };
      this.movies.push(newMovie);
      return newMovie;
  }

  updateMovie(title, updatedDetails) {
      const movieIndex = this.movies.findIndex(movie => movie.title.toLowerCase() === title.toLowerCase());

      if (movieIndex !== -1) {
          // Movie found, update details
          this.movies[movieIndex] = { ...this.movies[movieIndex], ...updatedDetails };
          return this.movies[movieIndex];
      } else {
          return undefined; // Movie not found
      }
  }

  deleteMovieByTitle(title) {
      const movieIndex = this.movies.findIndex(movie => movie.title.toLowerCase() === title.toLowerCase());

      if (movieIndex !== -1) {
          // Movie found, delete it
          const deletedMovie = this.movies.splice(movieIndex, 1)[0];
          return deletedMovie;
      } else {
          return undefined; // Movie not found
      }
  }
}

// Example usage:
const movieCollection = new Movies();

console.log(movieCollection.addMovie('Inception', 'Christopher Nolan', 2010, 'Science Fiction'));
console.log(movieCollection.addMovie('Pulp Fiction', 'Quentin Tarantino', 1994, 'Crime'));
console.log(movieCollection.addMovie('The Matrix', 'Lana Wachowski', 1999, 'Science Fiction'));
console.log(movieCollection.addMovie('Interstellar', 'Christopher Nolan', 2014)); // undefined, missing genre
console.log(movieCollection.addMovie('the matrix', 'lana wachowski', 1991, 'Science Fiction')); // undefined, duplicate

console.log(movieCollection.getAllMovies());

console.log(movieCollection.updateMovie('Inception', { director: 'James Cameron' }));
console.log(movieCollection.updateMovie('Inception', { year: 2011 }));
console.log(movieCollection.updateMovie('Inception', { genre: 'Action' }));
console.log(movieCollection.updateMovie('Inception', { year: 2011, genre: 'Action' }));
console.log(movieCollection.updateMovie('Inception', { director: 'James Cameron', year: 2011 }));
console.log(movieCollection.updateMovie('Inception', { director: 'James Cameron', year: 2011, genre: 'Action' }));
console.log(movieCollection.updateMovie('Avatar', { director: 'James Cameron', year: 2009, genre: 'Science Fiction' })); // undefined

console.log(movieCollection.deleteMovieByTitle('Pulp')); // undefined, not found
console.log(movieCollection.deleteMovieByTitle('pulp giction')); // deleted movie
console.log(movieCollection.getAllMovies());
