import Filter from './Filter/Filter';
import Search from './Search/Search';
import classes from './Header.module.scss';
import { useDispatch } from 'react-redux';
import { movieActions } from '../../store';

const Header = () => {
  const dispatch = useDispatch();
  const popularHandler = () => {
    dispatch(movieActions.getInitMovies());
  };
  const randomizeHandler = () => {
    dispatch(movieActions.randomize());
  };

  return (
    <header className={classes.header}>
      <a href='/'>
        <button className={classes.filter}>Back to top</button>
      </a>
      <Filter />
      <Search />
      <button onClick={randomizeHandler} className={classes.filter}>
        Randomize
      </button>
    </header>
  );
};

export default Header;
