const getPopularMovies = () => {
  return fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=9c953f3573341a23695016165970ec50&language=en-US&page=1',
  ).then(res => res.json());
};

const getPopularMoviesWithPagination = pageNumber => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=9c953f3573341a23695016165970ec50&language=en-US&page=${pageNumber}`,
  ).then(res => res.json());
};

const getMoviesByQuery = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=9c953f3573341a23695016165970ec50&query=${query}&language=en-US&page=1&include_adult=false`,
  ).then(res => res.json());
};

const getMoviesByQueryWithPagination = (query, pageNumber) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=9c953f3573341a23695016165970ec50&query=${query}&language=en-US&page=1&include_adult=false&page=${pageNumber}`,
  ).then(res => res.json());
};

const getMovieById = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=9c953f3573341a23695016165970ec50&language=en-US`,
  ).then(res => res.json());
};

const getGenresMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=9c953f3573341a23695016165970ec50&language=en-US`,
  ).then(res => res.json());
};

const getRecomendationMoviesById = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=9c953f3573341a23695016165970ec50&language=en-US&page=1`,
  ).then(res => res.json());
};

export default {
  getPopularMovies,
  getPopularMoviesWithPagination,
  getMoviesByQuery,
  getMoviesByQueryWithPagination,
  getMovieById,
  getGenresMovies,
  getRecomendationMoviesById,
};
