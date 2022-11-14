import Movie from './Movie';
import classes from './Movies.module.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const url = useSelector((state) => state.url);

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    };
    getMovies();
  }, [url]);

  return (
    <section>
      {movies.length === 0 && <h1 className={classes.none}>NO MOVIES FOUND</h1>}
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
    </section>
  );
};
export default Movies;
