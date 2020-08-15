import React, { useState, useEffect } from "react";
import axios from "../../api/axios";

import styles from "./styles.css";

const baseUrl = "https://image.tmdb.org/t/p/w500/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="rowPosters">
        {movies.map((movie) => (
          <img
            className="rowPoster"
            key={movie.id}
            src={baseUrl + movie.poster_path}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
