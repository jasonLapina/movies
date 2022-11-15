import { useState } from 'react';
import classes from './Movie.module.scss';
import Modal from '../../UI/Modal';
import Details from './Details/Details';

const Movie = (props) => {
  const [maxChar, setMaxChar] = useState(150);
  const [showModal, setShowModal] = useState(false);
  // CUTTING OVERVIEW CHARACTER LENGTH BY maxChar//
  let overview = props.overview.slice(0, maxChar);
  if (overview[overview.length - 1] !== '.') {
    overview = `${props.overview.slice(0, maxChar)}...`;
  }
  ///////////////////////////////////////////////////////
  const rating = `${props.rating * 10}%`;
  // ROUNDING OFF RATERS //
  const multiplier = String(props.raters).length - 1;
  const raters =
    props.raters > 1000
      ? `${(props.raters / 1000).toFixed(0, 2)}k+`
      : props.raters;
  ///////////////////////////////////////
  let ratingStyle;
  if (props.rating >= 7.5) {
    ratingStyle = classes['high-rating'];
  }
  if (props.rating > 5.4 && props.rating < 7.5) {
    ratingStyle = classes['mid-rating'];
  }
  if (props.rating <= 5.4) {
    ratingStyle = classes['low-rating'];
  }

  return (
    <div className={classes.movie}>
      {showModal && (
        <Modal
          onHideModal={() => {
            setShowModal(false);
          }}
        >
          <Details
            title={props.title}
            overview={props.overview}
            rating={props.rating}
            ratingStyle={ratingStyle}
            raters={props.raters}
          />
        </Modal>
      )}
      <span className={`${classes.rating} ${ratingStyle}`}>
        {rating} <span className={classes.raters}>({raters})</span>
      </span>
      <a
        className={classes['btn--play']}
        href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        target='_blank'
        rel='noopener noreferrer'
      >
        <ion-icon name='play-sharp'></ion-icon>
      </a>
      <img
        src={`https://image.tmdb.org/t/p/w500${props.img}`}
        alt='movie thumbnail'
      />
      <p
        onClick={() => {
          setShowModal((prev) => !prev);
        }}
        className={classes.overview}
      >{`${overview}`}</p>
    </div>
  );
};
export default Movie;
