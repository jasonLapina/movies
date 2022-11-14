import classes from './Details.module.scss';
const Details = (props) => {
  return (
    <div className={classes.details}>
      <h1>{props.title}</h1>
      <p>{props.overview}</p>
      <p>
        Rating:{' '}
        <span className={`${classes.rating} ${props.ratingStyle}`}>
          {props.rating}
        </span>{' '}
        ({props.raters} <ion-icon name='people'></ion-icon>)
      </p>
      <a
        className={classes.play}
        href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        target='_blank'
        rel='noopener noreferrer'
      >
        <ion-icon name='play-sharp'></ion-icon>
      </a>
    </div>
  );
};

export default Details;
