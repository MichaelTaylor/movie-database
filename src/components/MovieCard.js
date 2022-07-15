import React from "react";
import Styles from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const GoToIMDB = () => {
    window.open(
      `https://www.imdb.com/title/${movie.imdbID}/?ref_=nv_sr_srsg_0`
    );
  };

  return (
    <div className={Styles.movie} onClick={GoToIMDB}>
      <div>
        <h2>{movie.Year}</h2>
      </div>

      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
