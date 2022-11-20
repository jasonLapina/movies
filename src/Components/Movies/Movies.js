import Movie from './Movie/Movie';
import classes from './Movies.module.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../Pagination/Pagination';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = useSelector((state) => state.url);
  const page = useSelector((state) => state.page);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3${url}&api_key=b294078ac9e5deee42e81781ed53a00c&page=${page}`
      );
      const data = await res.json();
      setMovies(data.results);
      setIsLoading(false);
    };
    getMovies();
  }, [url, page]);

  return (
    <section>
      {isLoading && <h1 className={classes.state}>LOADING</h1>}
      {!isLoading && movies.length === 0 && (
        <h1 className={classes.state}>NO MOVIES FOUND</h1>
      )}

      {!isLoading && movies.length !== 0 && (
        <div className={classes.movies}>
          {movies.map((movie, i) => {
            const { title, overview, poster_path, vote_average, vote_count } =
              movie;
            return (
              <Movie
                key={i}
                title={title}
                overview={overview}
                img={poster_path}
                rating={vote_average}
                raters={vote_count}
              />
            );
          })}
        </div>
      )}

      <Pagination pages={movies.length} curPage={page} />
    </section>
  );
};
export default Movies;
