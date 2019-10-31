import React, { useContext } from "react";
import { MovieContext } from "./MovieProvider";

const Movies = () => {
  const [movies] = useContext(MovieContext);

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id} style={{ padding: "10px" }}>
          Movie Name:{" "}
          <span style={{ color: "#750099", fontStyle: "italic" }}>
            {movie.name}
          </span>{" "}
          | Director Name{" "}
          <span style={{ color: "#750099", fontStyle: "italic" }}>
            {movie.director}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Movies;
