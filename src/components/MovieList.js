import React from "react";
import MovieCard from "./MovieCard";
import Styles from "./MovieList.module.css";

const MovieList = ({ moviesList }) => {
  return (
    <div>
      {moviesList?.length > 0 ? (
        <div className={Styles.container}>
          {moviesList.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className={Styles.empty}>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default MovieList;
