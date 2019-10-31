import React, { useContext } from "react";
import { MovieContext } from "./MovieProvider";

const Header = () => {
  
  const [movies] = useContext(MovieContext);

  return (
    <div className="movie-header">
      <h1>Number of movies: {movies.length}</h1>
    <style jsx>{`
        .movie-header {
            padding-left: 15px;
            background-color: #009874; 
            width: 100%;
            height: 50px;
        }

        h1 {
            color: #192231;
            font-style: light;
        }
    `}</style>
    </div>
  );
};

export default Header;
