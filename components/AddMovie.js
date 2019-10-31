import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieProvider";

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);

  const [movieName, setMovieName] = useState("");
  const [directorName, setDirectorName] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    const rdm = Math.floor(Math.random() * 900);
    setMovies(movies => [
      ...movies,
      { name: movieName, director: directorName, id: rdm }
    ]);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "10px" }}>
      <input
        type="text"
        value={movieName}
        placeholder="Enter Name of Movie"
        onChange={e => setMovieName(e.target.value)}
      />
      <input
        type="text"
        value={directorName}
        placeholder="Enter Name of Director"
        onChange={e => setDirectorName(e.target.value)}
      />

      <input type="submit" value="Add Movie" />
    </form>
  );
};

export default AddMovie;
