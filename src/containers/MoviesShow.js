import React from 'react';

const MoviesShow = ({ match, movies }) => {
  debugger;
  return (
    <div>
      <h3>{movies[match.params.movieId].title}</h3>
    </div>
  );
};

export default MoviesShow;
