import classes from './Search.module.scss';
const Search = () => {
  return (
    <form className={classes.form} id='form'>
      <input
        className={classes.search}
        placeholder='Search'
        type='text'
        id='search'
      />
      <button>
        <ion-icon name='search-outline' />
      </button>
    </form>
  );
};

export default Search;
