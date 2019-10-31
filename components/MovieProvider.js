import React, { useState, createContext } from "react";

export const MovieContext = createContext();

const MovieProvider =  (props) =>  {
  const [movies, setMovies] = useState([
    {
      name: "Dancer in the Dark",
      director: "Lars von Trier",
      id: 354
    },
    {
      name: "Seven Samurai",
      director: "Akira Kurosawa",
      id: 928
    },
    {
      name: "Pi",
      director: "Darren Aronofsky",
      id: 314
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;