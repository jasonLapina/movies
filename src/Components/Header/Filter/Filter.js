import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { movieActions } from '../../../store';
import classes from './Filter.module.scss';
const Filter = () => {
  const [genres, setGenres] = useState([]);
  const [showGenres, setShowGenres] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getGenres = async () => {
      const res = await fetch(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=b294078ac9e5deee42e81781ed53a00c&language=en-US'
      );
      const data = await res.json();
      const fetchedGenres = Object.values(data).flat();
      setGenres(fetchedGenres);
    };
    getGenres();
  }, []);

  const filterHandler = (genre) => {
    dispatch(movieActions.filter(genre));
  };

  return (
    <div className={classes.container}>
      <div className={classes['btn-grp']}>
        <button className={classes.popular}>Popular</button>
        <button
          onClick={() => {
            setShowGenres((prev) => !prev);
          }}
          className={classes.drop}
        >
          <ion-icon name='caret-down-sharp' />
        </button>
      </div>
      {showGenres && (
        <div className={classes.genres}>
          {genres.map((genre, i) => {
            return (
              <button
                onClick={() => {
                  filterHandler(genre.id);
                }}
                key={i}
              >
                {genre.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Filter;
