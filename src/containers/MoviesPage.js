import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MoviesShow from './MoviesShow';

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a Movie from the list.</h3>}
    />
    <Route
      path={`${match.url}/:movieId`}
      render={routerProps => <MoviesShow movies={movies} match={match} />}
    />
  </div>
);

export default MoviesPage;
