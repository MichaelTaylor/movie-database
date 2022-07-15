import React, { useEffect, useState } from "react";
import Styles from "./App.module.css";
import Searchbar from "./components/Searchbar";
import MovieList from "./components/MovieList";

const NetlifyAPI = "/.netlify/functions/movie-key.js";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Spider Man");
  }, []);

  const searchMovies = async (title) => {
    const netlifyResponse = await fetch(`${NetlifyAPI}?searchTerm=${title}`);
    const netlifyData = await netlifyResponse.json();
    console.log(netlifyData);
    setMovies(netlifyData.Search);
  };

  const handleEnterPress = (event) => {
    if (searchTerm.length > 0) {
      if (event.key === "Enter") {
        searchMovies(searchTerm);
      }
    }
  };

  return (
    <div className={Styles.mainContainer}>
      <h1>Movie Database app</h1>
      <Searchbar
        onSearchChange={(value) => setSearchTerm(value)}
        onSearchMovies={(value) => searchMovies(value)}
        onHandleEnterPress={handleEnterPress}
      />

      <MovieList moviesList={movies} />
    </div>
  );
};

export default App;
