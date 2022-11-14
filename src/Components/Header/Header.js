import Filter from './Filter/Filter';
import Search from './Search/Search';
import classes from './Header.module.scss';
const Header = () => {
  return (
    <header className={classes.header}>
      <Search />
    </header>
  );
};

export default Header;
