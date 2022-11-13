import classes from './Movie.module.scss';
const Movie = (props) => {
  const maxChar = 120;
  let overview = props.overview.slice(0, maxChar);
  if (overview[overview.length - 1] !== '.') {
    overview = `${props.overview.slice(0, maxChar)}...`;
  }

  return (
    <div className={classes.movie}>
      <div className={classes['btn--play']}>
        <ion-icon name='play-sharp'></ion-icon>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.img}`}
        alt='movie thumbnail'
      />
      <p className={classes.overview}>{`${overview}`}</p>
    </div>
  );
};
export default Movie;
