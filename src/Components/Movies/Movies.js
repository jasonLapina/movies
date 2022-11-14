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
      setMovies(data.results);
    };
    getMovies();
  }, []);

  return (
    <section>
      <div className={classes.movies}>
        {movies.map((movie, i) => {
          const { title, overview, poster_path } = movie;
          return (
            <Movie
              key={i}
              title={title}
              overview={overview}
              img={poster_path}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Movies;
