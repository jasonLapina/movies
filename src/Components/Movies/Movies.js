import Movie from './Movie';
import classes from './Movies.module.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = useSelector((state) => state.url);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
      setIsLoading(false);
    };
    getMovies();
  }, [url]);

  return (
    <section>
      {isLoading && <h1 className={classes.state}>LOADING</h1>}
      {!isLoading && movies.length === 0 && (
        <h1 className={classes.state}>NO MOVIES FOUND</h1>
      )}

      {!isLoading && movies.length !== 0 && (
        <div className={classes.movies}>
          {movies.map((movie, i) => {
            const { title, overview, poster_path, vote_average } = movie;
            return (
              <Movie
                key={i}
                title={title}
                overview={overview}
                img={poster_path}
                rating={vote_average}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};
export default Movies;
