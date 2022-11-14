import classes from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import { movieActions } from '../../../store';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const searchRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(movieActions.search(searchValue));
  };
  const changeHandler = () => {
    setSearchValue(searchRef.current.value);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form} id='form'>
      <input
        className={classes.search}
        placeholder='Search'
        type='text'
        id='search'
        ref={searchRef}
        value={searchValue}
        onChange={changeHandler}
      />
      <button>
        <ion-icon name='search-outline' />
      </button>
    </form>
  );
};

export default Search;
