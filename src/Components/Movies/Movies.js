import { useEffect, useState } from 'react';
import Movie from './Movie';
import classes from './Movies.module.scss';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b294078ac9e5deee42e81781ed53a00c&page=1'
      );
      const data = await res.json();
      const movies = data.results;
      setMovies(movies);
    };
    fetchMovies();
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
