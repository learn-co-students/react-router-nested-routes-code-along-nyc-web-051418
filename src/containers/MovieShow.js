import React from 'react';

const MoviesShow = ({match, movies}) => {

  return (
    <div>
      <h3>{ movies[match.params.whatever].title }</h3>
    </div>
  );
}

export default MoviesShow;
