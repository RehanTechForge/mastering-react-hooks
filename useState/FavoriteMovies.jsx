import React, { useState } from "react";

const FavoriteMovies = () => {
  const [movies, setMovies] = useState([]);
  const [inpValue, setInpValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setMovies([...movies, inpValue]);
    setInpValue("");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="movie">Add Movies</label>
        <input
          type="text"
          name=""
          id="movie"
          placeholder="Enter Movie Name"
          value={inpValue}
          onChange={(event) => setInpValue(event.target.value)}
        />
        <button>Add</button>
      </form>
      {movies.length > 0 && (
        <div>
          <h1>Favorite Movies</h1>
          <ul>
            {movies.map((mov, i) => (
              <li key={Math.random()}>
                {i + 1}:{mov}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FavoriteMovies;
