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
    if (searchValue.trim().length === 0) return;
    dispatch(movieActions.search(searchValue));
    document.getElementById('genre').innerHTML = 'Genre';
  };
  const changeHandler = () => {
    setSearchValue(searchRef.current.value);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form} id='form'>
      <input
        className={classes.search}
        placeholder='Title'
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
