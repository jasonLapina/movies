import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { movieActions } from '../../store';
import classes from './Pagination.module.scss';
const Pagination = ({ pages, curPage }) => {
  const [basePage, setBasePage] = useState(1);
  const fivePages = Array.from({ length: pages > 5 ? 5 : pages });
  const dispatch = useDispatch();

  const changePageHandler = (page) => {
    dispatch(movieActions.changePage(page));
  };

  const incrementHandler = () => {
    setBasePage((prev) => prev + 1);
  };
  const decrementHandler = () => {
    setBasePage((prev) => prev - 1);
  };
  return (
    <div className={classes.container}>
      {basePage !== 1 && (
        <button
          onClick={decrementHandler}
          className={`${classes.btn} ${classes['btn--arrow']} `}
        >
          <ion-icon name='chevron-back-outline'></ion-icon>
        </button>
      )}

      {fivePages.map((page, i) => {
        return (
          <button
            onClick={() => {
              changePageHandler(i + 1);
            }}
            className={classes.btn}
            key={i}
          >
            {i + basePage}
          </button>
        );
      })}
      {basePage !== pages && (
        <button
          onClick={incrementHandler}
          className={`${classes.btn} ${classes['btn--arrow']} `}
        >
          <ion-icon name='chevron-forward-outline'></ion-icon>
        </button>
      )}
    </div>
  );
};

export default Pagination;
